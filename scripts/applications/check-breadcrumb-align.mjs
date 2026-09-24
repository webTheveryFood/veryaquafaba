// Left edge of the breadcrumb against the left edge of the page's content, per page
// family and viewport width. A difference over 2px is a misalignment.
// Usage: node scripts/applications/check-breadcrumb-align.mjs [base]
import { chromium } from 'playwright';

const base = process.argv[2] || 'http://localhost:3058';
const PAGES = {
  resources: '/resources/',
  index: '/resources/applications/',
  guide: '/resources/applications/meringue/',
  child: '/resources/applications/meringue/process-and-checks/',
  topic: '/resources/professional/pastry-bakery/',
  country: '/resources/where-to-buy/united-kingdom/',
};
const WIDTHS = [360, 390, 768, 1024, 1280, 1440];

const browser = await chromium.launch();
let bad = 0;
for (const [name, path] of Object.entries(PAGES)) {
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(base + path, { waitUntil: 'load' });
    const r = await page.evaluate(() => {
      const nav = document.querySelector('nav[aria-label="Breadcrumb"] ol');
      if (!nav) return null;
      // Content: the first text block after the breadcrumb (lead, heading or paragraph).
      const content = document.querySelector('.va-recipe-lead, .va-hero-copy h1, .va-rich-text p, main h1');
      const left = (el) => Math.round(el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).paddingLeft));
      return { crumb: left(nav), content: content ? left(content) : null, contentTag: content ? content.className || content.tagName : '' };
    });
    if (!r) { console.log(`${name.padEnd(9)} ${width}px  no breadcrumb`); await page.close(); continue; }
    const diff = r.content == null ? null : r.crumb - r.content;
    const flag = diff != null && Math.abs(diff) > 2 ? 'MISALIGNED' : 'ok';
    if (flag !== 'ok') bad++;
    console.log(`${name.padEnd(9)} ${String(width).padStart(4)}px  crumb=${r.crumb}  content=${r.content} (${r.contentTag})  diff=${diff}  ${flag}`);
    await page.close();
  }
}
await browser.close();
console.log(`\nmisaligned: ${bad}`);
process.exitCode = bad ? 1 : 0;
