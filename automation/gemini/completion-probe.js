// 完成信号探针：用一个超短问题，每 2 秒采样关键 DOM 状态，看清「生成结束」的真正信号
const { chromium } = require('playwright');
const os = require('os');
const path = require('path');

const SESSION = path.join(os.homedir(), 'gemini-automation', 'session');

(async () => {
  const ctx = await chromium.launchPersistentContext(SESSION, {
    channel: 'chrome', headless: false, viewport: { width: 1440, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  });
  await ctx.addInitScript(() => { Object.defineProperty(navigator, 'webdriver', { get: () => undefined }); });
  const page = ctx.pages()[0] || await ctx.newPage();
  await page.goto('https://gemini.google.com/app', { waitUntil: 'commit', timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(5000);

  const composer = page.locator('[contenteditable="true"], [contenteditable=""]').first();
  await composer.click();
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText('用三句话介绍薯条这种食品。');
  await page.waitForTimeout(800);
  await page.keyboard.press('Enter');

  console.log('t(s)\tlen\tstopLabel\tprocVisible\tprocClass');
  const start = Date.now();
  for (let i = 0; i < 60; i++) {
    await page.waitForTimeout(2000);
    const s = await page.evaluate(() => {
      const resp = document.querySelector('message-content');
      const container = document.querySelector('structured-content-container[class*="model-response-text"]');
      const stopLabels = [...document.querySelectorAll('button')].filter(b => {
        const a = b.getAttribute('aria-label') || '';
        if (!/생성 중지|停止|Stop/.test(a)) return false;
        const r = b.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      }).map(b => b.getAttribute('aria-label'));
      const cls = container ? container.className.split(' ').filter(c => c.includes('processing')) : [];
      return {
        len: resp ? resp.innerText.length : 0,
        stop: stopLabels.join('|'),
        procVis: cls.includes('processing-state-visible'),
        cls: cls.join(','),
      };
    }).catch(e => ({ len: -1, stop: 'ERR', procVis: false, cls: '' }));
    const t = Math.round((Date.now() - start) / 1000);
    console.log(`${t}\t${s.len}\t${s.stop || '-'}\t${s.procVis}\t${s.cls || '-'}`);
  }
  await ctx.close().catch(() => {});
})().catch(e => { console.error('FATAL', e); process.exit(1); });