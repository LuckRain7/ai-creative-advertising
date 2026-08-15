// 登录助手：常驻窗口，等待用户登录 Gemini，检测到后保存会话并退出
const { chromium } = require('playwright');
const os = require('os');
const path = require('path');

const userDataDir = path.join(os.homedir(), 'gemini-automation', 'session');

(async () => {
  const ctx = await chromium.launchPersistentContext(userDataDir, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1440, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  });
  // 抹掉自动化探测标记，让 Google 登录不再报“浏览器不安全”
  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    if (!navigator.plugins.length) { /* 占位避免 plugins 长度为 0 的探测 */ }
  });
  const page = ctx.pages()[0] || await ctx.newPage();
  try {
    await page.goto('https://gemini.google.com/app', { waitUntil: 'commit', timeout: 30000 });
  } catch (e) {
    console.log('goto:', e.message.split('\n')[0]);
  }

  console.log('>>> 请在弹出的 Chrome 窗口中登录你的 Google 账号（Gemini）。<<<');
  console.log('>>> 检测到登录后我会自动关闭窗口并保存会话。<<<');

  const deadline = Date.now() + 5 * 60 * 1000;
  let done = false;
  while (Date.now() < deadline) {
    await page.waitForTimeout(3000);
    for (const p of ctx.pages()) {
      try {
        if (!p.url().startsWith('https://gemini.google.com')) continue;
        const r = await p.evaluate(() => {
          const t = document.body ? (document.body.innerText || '') : '';
          const avatar = !!document.querySelector('[aria-label*="Google 账号"],[aria-label*="Google Account"],button[aria-label*="账号"]');
          return { hasLogin: t.includes('登录'), avatar, snippet: t.slice(0, 160) };
        });
        if (!r.hasLogin || r.avatar) { done = true; break; }
      } catch (e) {}
    }
    if (done) { console.log('✅ 已检测到登录态'); break; }
    console.log('… 等待登录');
  }

  if (!done) console.log('⚠️ 5 分钟未检测到登录，窗口保留，请手动登录后告诉我。');
  await ctx.close().catch(() => {});
  console.log(done ? '会话已保存到 session 目录，可以开始批量问答。' : '已超时。');
})().catch(e => { console.error('ERR', e.message); process.exit(1); });