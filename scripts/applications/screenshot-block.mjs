// Screenshot of one block of a page (a table, a panel), at the given viewport width.
// Usage: node scripts/applications/screenshot-block.mjs <out-dir> <url> <selector> <name> <width>
import { chromium } from 'playwright';
const [out, url, selector, name, width] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: Number(width), height: 1200 } });
await page.goto(url, { waitUntil: 'networkidle' });
const block = page.locator(selector).first();
await block.scrollIntoViewIfNeeded();
await block.screenshot({ path: `${out}/${name}.png` });
await browser.close();
console.log('ok', name);
