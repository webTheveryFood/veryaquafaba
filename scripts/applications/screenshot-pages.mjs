// Desktop (1280) and mobile (390) screenshots of any page, with the legacy sticky header
// hidden so the shot shows the page's own design.
// Usage: node scripts/applications/screenshot-pages.mjs <out-dir> <name=url> [<name=url> ...]
import { chromium } from 'playwright';
const [out, ...pairs] = process.argv.slice(2);
const browser = await chromium.launch();
for (const pair of pairs) {
  const [name, ...rest] = pair.split('=');
  const url = rest.join('=');
  for (const [label, width] of [['desktop', 1280], ['mobile', 390]]) {
    const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 1400 } });
    await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(1200);
    await page.addStyleTag({ content: '[data-native-shell="header"]{display:none!important}' });
    await page.screenshot({ path: `${out}/${name}-${label}.png` });
    await page.close();
  }
}
await browser.close();
console.log('shots in', out);
