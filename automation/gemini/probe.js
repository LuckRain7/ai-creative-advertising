// 探针 v2：分阶段截图 + 宽松等待，先摸清屏幕上到底到哪一步
const { chromium } = require('playwright');
const path = require('path');
const os = require('os');

const userDataDir = path.join(os.homedir(), 'gemini-automation', 'session');

(async () => {
  const ctx = await chromium.launchPersistentContext(userDataDir, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1440, height: 900 },
  });
  const page = ctx.pages()[0] || await ctx.newPage();

  console.log('navigating...');
  try {
    await page.goto('https://gemini.google.com/app', { waitUntil: 'commit', timeout: 30000 });
  } catch (e) {
    console.log('goto warn:', e.message.split('\n')[0]);
  }

  for (const [i, sec] of [[1, 3], [2, 8], [3, 16]]) {
    await page.waitForTimeout(sec * 1000);
    try {
      await page.screenshot({ path: path.join(os.homedir(), 'gemini-automation', `probe-${i}.png`) });
      console.log(`shot ${i} saved`);
    } catch (e) { console.log(`shot ${i} err:`, e.message); }
  }

  try {
    const info = await page.evaluate(() => {
      const b = document.body ? (document.body.innerText || '') : '';
      return {
        url: location.href,
        title: document.title,
        textLen: b.length,
        head: b.slice(0, 1600),
        hasEditable: !!document.querySelector('[contenteditable="true"],[contenteditable=""]'),
        hasTextarea: !!document.querySelector('textarea'),
      };
    });
    console.log('===== RESULT =====');
    console.log(JSON.stringify(info, null, 2));
  } catch (e) { console.log('evaluate err:', e.message); }

  await ctx.close().catch(() => {});
})().catch(e => { console.error('ERR', e.message); process.exit(1); });