// 批量问答：每条问题开新会话 → 提问 → 等待生成完成 → 抓取答案 → 落盘（可断点续跑）
// 防护：Escape 关浮层 / focus 规避遮挡 / 空答案自动重试 / 问题间隔冷却
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = __dirname;
const SESSION = path.join(BASE, 'session');
const RESULTS = path.join(BASE, 'results.jsonl');
const RESULTS_MD = path.join(BASE, 'results.md');

const MAX = parseInt(process.env.MAX || '0', 10); // 0 = 全部
const MIN_LEN = 80; // 答案少于这个长度视为失败，重试
const RETRIES = 2; // 每条最多尝试 2 次

const GEMINI = 'https://gemini.google.com/app';
const PREAMBLE = '【背景】我在用 Google Veo / Gemini 做 AI 食品广告短片（中式食品：薯条 / 蜂蜜黄油味、番茄味零食等）。请用中文回答，尽量具体、可执行、有例子。\n\n';

const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);

function loadQuestions() {
  const raw = JSON.parse(fs.readFileSync(path.join(BASE, 'questions.json'), 'utf8'));
  return raw.questions || raw;
}
function loadDone() {
  if (!fs.existsSync(RESULTS)) return new Set();
  const s = new Set();
  for (const line of fs.readFileSync(RESULTS, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    try { s.add(JSON.parse(line).id); } catch {}
  }
  return s;
}
function appendResult(rec) {
  fs.appendFileSync(RESULTS, JSON.stringify(rec) + '\n');
}
function writeMarkdown() {
  if (!fs.existsSync(RESULTS)) return;
  const rows = fs.readFileSync(RESULTS, 'utf8').trim().split('\n').filter(Boolean)
    .map(l => JSON.parse(l)).sort((a, b) => a.id - b.id);
  let md = '# Gemini 批量问答结果\n';
  for (const r of rows) {
    md += `\n---\n\n## Q${r.id} · ${r.group}\n\n**问：** ${r.question}\n\n**答：**\n\n${r.answer || '(空)'}\n`;
  }
  fs.writeFileSync(RESULTS_MD, md);
}

async function waitComposer(page, timeout = 25000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    const loc = page.locator('[contenteditable="true"], [contenteditable=""]').first();
    if (await loc.count() && await loc.isVisible().catch(() => false)) return loc;
    await page.waitForTimeout(1000);
  }
  return null;
}

async function sendPrompt(page, prompt) {
  // 关掉可能挡路的浮层/弹窗
  await page.keyboard.press('Escape').catch(() => {});
  await page.waitForTimeout(600);
  const composer = await waitComposer(page);
  if (!composer) return false;
  // 优先 focus（不受浮层指针遮挡影响），失败再 click
  try { await composer.focus(); }
  catch { try { await composer.click({ timeout: 8000 }); } catch { return false; } }
  await page.waitForTimeout(500);
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText(prompt);
  await page.waitForTimeout(1000);

  const sendBtn = page.locator('button[aria-label*="发送"], button[aria-label*="Send"], button[aria-label*="提交"], button[aria-label*="전송"], button[aria-label*="보내기"]').first();
  if (await sendBtn.count() && await sendBtn.isVisible().catch(() => false)) {
    await sendBtn.click();
    return true;
  }
  try { await page.keyboard.press('Enter'); return true; } catch {}
  return false;
}

async function waitDone(page, timeout = 240000) {
  const start = Date.now();
  let stable = 0;
  while (Date.now() - start < timeout) {
    await page.waitForTimeout(2500);
    const st = await page.evaluate(() => {
      const stopBtn = [...document.querySelectorAll('button')].find(b => {
        const a = b.getAttribute('aria-label') || '';
        if (!/생성 중지|停止|Stop/.test(a)) return false;
        const r = b.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      });
      const resp = document.querySelector('message-content') || document.querySelector('[class*="model-response-text"]');
      const len = resp ? (resp.innerText || '').length : 0;
      return { hasStop: !!stopBtn, len };
    }).catch(() => ({ hasStop: true, len: 0 }));
    if (!st.hasStop && st.len > 20) {
      stable += 2500;
      if (stable >= 4000) return true;
    } else stable = 0;
  }
  return false;
}

async function extractAnswer(page) {
  const sels = [
    'message-content',
    '[class*="model-response-text"]',
    '.model-response-text',
    '[data-message-author-role="model"]',
  ];
  for (const s of sels) {
    const n = page.locator(s).last();
    if (await n.count()) {
      const t = (await n.innerText().catch(() => '')) || '';
      if (t.trim().length > 5) return t.trim();
    }
  }
  return '';
}

async function newChat(page) {
  await page.goto(GEMINI, { waitUntil: 'commit', timeout: 30000 }).catch(e => log('goto:', e.message.split('\n')[0]));
  await page.waitForTimeout(5000);
  await page.waitForLoadState('domcontentloaded').catch(() => {});
}

(async () => {
  const questions = loadQuestions();
  const done = loadDone();
  const todo = questions.filter(q => !done.has(q.id));
  if (MAX > 0) todo.splice(MAX);
  log(`待处理 ${todo.length} / ${questions.length} 条`);

  const ctx = await chromium.launchPersistentContext(SESSION, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1440, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  });
  await ctx.addInitScript(() => { Object.defineProperty(navigator, 'webdriver', { get: () => undefined }); });
  const page = ctx.pages()[0] || await ctx.newPage();

  for (const q of todo) {
    let saved = false;
    for (let attempt = 1; attempt <= RETRIES; attempt++) {
      log(`=== Q${q.id} [${q.group}] 尝试 ${attempt}/${RETRIES} ===`);
      await newChat(page);
      const sent = await sendPrompt(page, PREAMBLE + q.text);
      if (!sent) {
        log('发送失败（可能被浮层挡），冷却 10s 重试…');
        await page.waitForTimeout(10000);
        continue;
      }
      log('已发送，等待生成…');
      const ok = await waitDone(page);
      await page.waitForTimeout(1500);
      let answer = await extractAnswer(page);
      if (answer.length >= MIN_LEN) {
        log(`完成${ok ? '' : '（超时但已取到内容）'}，答案 ${answer.length} 字`);
        appendResult({ id: q.id, group: q.group, question: q.text, answer, ts: new Date().toISOString() });
        saved = true;
        break;
      } else {
        log(`答案过短（${answer.length} 字），视为失败，冷却 15s 重试…`);
        await page.waitForTimeout(15000);
      }
    }
    if (!saved) {
      log(`⚠️ Q${q.id} 多次尝试仍失败，写入占位。`);
      appendResult({ id: q.id, group: q.group, question: q.text, answer: '(多次尝试失败，见最终说明)', ts: new Date().toISOString() });
    }
    // 问题间隔冷却，降低限流概率
    await page.waitForTimeout(4000);
  }
  writeMarkdown();
  await ctx.close().catch(() => {});
  log('全部完成。');
})().catch(e => { console.error('FATAL', e); process.exit(1); });