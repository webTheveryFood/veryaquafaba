// Full-page screenshots (desktop 1280 / mobile 390) of application pages, one
// hub and one recipe, against a running build; reports horizontal overflow.
// Usage: node scripts/applications/screenshots.mjs <outDir> [http://localhost:3058] [--all]
import fs from 'node:fs';
import { chromium } from 'playwright';

const OUT = process.argv[2];
const BASE = process.argv.find((a) => a.startsWith('http')) || 'http://localhost:3058';
const all = process.argv.includes('--all');
if (!OUT) { console.error('usage: screenshots.mjs <outDir> [base] [--all]'); process.exit(2); }
fs.mkdirSync(OUT, { recursive: true });

const routes = JSON.parse(fs.readFileSync('data/routes.json', 'utf8'));
const APP_ROOTS = ['/applications/', '/fr/applications/', '/de/anwendungen/', '/nl/toepassingen/'];
const apps = routes.filter((r) => APP_ROOTS.some((p) => r.startsWith(p)));
const targets = all ? apps : ['/applications/meringue/', '/de/anwendungen/baiser/', '/applications/baking/', '/fr/applications/cocktails/'];
targets.push('/aquafaba-recipes/', '/aquafaba-recipes/meringues/');

const browser = await chromium.launch();
let overflow = 0;
for (const [w, name] of [[1280, 'desk'], [390, 'mob']]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  await ctx.route('**/an.js', (r) => r.abort());
  for (const path of targets) {
    const page = await ctx.newPage();
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    const id = path.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'home';
    await page.screenshot({ path: `${OUT}/${id}-${name}.png`, fullPage: true });
    const x = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (x > 0) { overflow++; console.log('OVERFLOW', path, name, x); }
    await page.close();
  }
  await ctx.close();
}
await browser.close();
console.log(`${targets.length * 2} screenshots in ${OUT}, pages with horizontal overflow: ${overflow}`);
process.exitCode = overflow ? 1 : 0;
