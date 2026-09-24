// Breadcrumbs of every page family at several viewport widths, with the legacy sticky
// header hidden, plus the computed layout of the list (so a wrap or a stacked list shows
// up as numbers, not only as pictures).
// Usage: node scripts/applications/screenshot-breadcrumbs.mjs <out-dir> [base]
import { chromium } from 'playwright';

const [out, base = 'http://localhost:3058'] = process.argv.slice(2);
const PAGES = {
  index: '/resources/applications/',
  guide: '/fr/ressources/applications/mousse-au-chocolat/',
  child: '/de/ressourcen/anwendungen/schokoladenmousse/prozess-und-kontrolle/',
  topic: '/fr/ressources/professionnels/restauration-collective/',
  country: '/resources/where-to-buy/united-kingdom/',
};
const WIDTHS = [320, 360, 390, 768, 1024, 1280];

const browser = await chromium.launch();
for (const [name, path] of Object.entries(PAGES)) {
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(base + path, { waitUntil: 'load' });
    await page.addStyleTag({ content: '[data-native-shell="header"]{display:none!important}' });
    const nav = page.locator('nav[aria-label="Breadcrumb"]').first();
    const info = await nav.evaluate((el) => {
      const ol = el.querySelector('ol');
      const lis = [...ol.querySelectorAll('li')];
      const tops = [...new Set(lis.map((li) => Math.round(li.getBoundingClientRect().top)))];
      const cs = getComputedStyle(ol);
      const li0 = getComputedStyle(lis[0]);
      return { rows: tops.length, items: lis.length, display: cs.display, liDisplay: li0.display, listStyle: li0.listStyleType, fontSize: getComputedStyle(el).fontSize, navWidth: Math.round(el.getBoundingClientRect().width) };
    });
    await nav.screenshot({ path: `${out}/crumb-${name}-${width}.png` });
    console.log(`${name.padEnd(8)} ${String(width).padStart(4)}px  rows=${info.rows}/${info.items}  ol=${info.display}  li=${info.liDisplay}/${info.listStyle}  font=${info.fontSize}  nav=${info.navWidth}px`);
    await page.close();
  }
}
await browser.close();
