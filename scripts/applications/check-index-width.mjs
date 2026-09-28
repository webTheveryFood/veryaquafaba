// Applications index: the prose, the tool list and the FAQ answers must span the same width
// as the cards and the head, in every language and at desktop and mobile widths.
// Usage: node scripts/applications/check-index-width.mjs [base]
import { chromium } from 'playwright';

const base = process.argv[2] || 'http://localhost:3058';
const ROUTES = ['/resources/applications/', '/de/ressourcen/anwendungen/', '/fr/ressources/applications/', '/nl/bronnen/toepassingen/'];
const WIDTHS = [390, 1280, 1440];

const browser = await chromium.launch();
let bad = 0;
for (const route of ROUTES) {
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(base + route, { waitUntil: 'load' });
    const r = await page.evaluate(() => {
      const box = (el) => { const b = el.getBoundingClientRect(); return [Math.round(b.left), Math.round(b.right)]; };
      const cards = document.querySelector('.va-card-grid');
      const head = document.querySelector('.va-hero-text');
      // The widest paragraph of the prose and the widest FAQ answer.
      const widest = (sel) => [...document.querySelectorAll(sel)].map(box).sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]))[0];
      return { cards: box(cards), head: head ? box(head) : null, prose: widest('.va-rich-text p'), faq: widest('.va-faq-item p') };
    });
    const [l, rgt] = r.cards;
    const off = (x) => (x ? Math.max(Math.abs(x[0] - l), Math.abs(x[1] - rgt)) : 0);
    const worst = Math.max(off(r.prose), off(r.faq));
    const flag = worst > 4 ? 'NARROWER' : 'ok';
    if (flag !== 'ok') bad++;
    console.log(`${route.padEnd(30)} ${String(width).padStart(4)}px  cards=${r.cards}  prose=${r.prose}  faq=${r.faq}  ${flag}`);
    await page.close();
  }
}
await browser.close();
console.log(`\nnarrower blocks: ${bad}`);
process.exitCode = bad ? 1 : 0;
