// Browser coverage for translated bakery pages and their interactive tools.
// Usage: node scripts/applications/test-bakery-locales.mjs http://localhost:3058 [output-dir]
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { BAKERY_LOCALE_ROUTES } from '../../data/resources/bakeries-routes.js';
const base = process.argv[2] || 'http://localhost:3058';
const out = process.argv[3] || '/private/tmp/aquafaba-locale-screenshots';
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const errors = [];
const screenshots = new Set(['liquid', 'pouch', 'yumgo', 'pavlova_calc', 'dacquoise_process', 'pack_finder']);
let checked = 0;
try {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  await context.route('**/*', (route) => {
    const url = new URL(route.request().url());
    return url.origin === new URL(base).origin || url.protocol === 'data:' ? route.continue() : route.abort();
  });
  const page = await context.newPage();
  page.on('pageerror', (error) => errors.push(`${page.url()}: ${error.message}`));
  for (const locale of ['fr', 'de', 'nl']) {
    for (const [key, route] of Object.entries(BAKERY_LOCALE_ROUTES[locale])) {
      const response = await page.goto(base + route, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, route);
      assert.equal(await page.locator('main').getAttribute('data-locale'), locale, route);
      assert.equal(await page.locator('main h1').count(), 1, route);
      const visibleText = await page.locator('main').innerText();
      assert.ok(!/\{\w+\}|NaN|undefined/.test(visibleText), `${route}: unresolved content`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      assert.ok(overflow <= 1, `${route}: ${overflow}px horizontal overflow`);
      const langs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((els) => els.map((el) => el.getAttribute('hreflang')));
      for (const lang of ['en', 'fr', 'de', 'nl', 'x-default']) assert.ok(langs.includes(lang), `${route}: missing ${lang}`);
      if (screenshots.has(key)) await page.screenshot({ path: `${out}/${locale}-${key}-mobile.png`, fullPage: true });
      checked++;
    }
    for (const [key, expected] of [['pavlova_calc', '300 g'], ['dacquoise_calc', '500 g'], ['marshmallows_calc', '200 g']]) {
      await page.goto(base + BAKERY_LOCALE_ROUTES[locale][key], { waitUntil: 'networkidle' });
      await page.locator('.va-guide-calc input').first().fill('2');
      assert.ok((await page.locator('.va-guide-calc').innerText()).includes(expected), `${locale}/${key}: quantities did not double`);
      await page.locator('.va-guide-calc input').first().fill('');
      assert.ok(!(await page.locator('.va-guide-calc').innerText()).includes('NaN'), `${locale}/${key}: empty input`);
      if (key === 'marshmallows_calc') {
        await page.locator('.va-guide-calc input').first().fill('1');
        const text = await page.locator('.va-guide-calc').innerText();
        assert.ok(text.includes('7,5 g'), `${locale}: decimal comma missing`);
      }
    }
    await page.goto(base + BAKERY_LOCALE_ROUTES[locale].pack_finder, { waitUntil: 'networkidle' });
    const inputs = page.locator('.va-pack-finder input');
    for (const [days, week, expectedKey] of [['1', '10', 'small_pouch'], ['1', '50', 'pouch'], ['1', '101', 'large_pouch'], ['33', '50', 'tetrapak'], ['330', '500', 'bib'], ['33000', '40000', 'ibc']]) {
      await inputs.nth(0).fill(days); await inputs.nth(1).fill(week);
      assert.equal(await page.locator('.va-pack-finder table a').getAttribute('href'), BAKERY_LOCALE_ROUTES[locale][expectedKey], `${locale}: pack finder branch ${expectedKey}`);
    }
    for (const key of ['pavlova_process', 'dacquoise_process', 'marshmallows_process']) {
      await page.goto(base + BAKERY_LOCALE_ROUTES[locale][key], { waitUntil: 'networkidle' });
      assert.ok(await page.locator('.va-guide-sheet-table tbody tr').count() >= 5, `${locale}/${key}: process steps missing`);
      await page.emulateMedia({ media: 'print' });
      assert.ok(await page.locator('.va-guide-sheet-table').isVisible(), `${locale}/${key}: print sheet hidden`);
      await page.emulateMedia({ media: 'screen' });
    }
    await page.setViewportSize({ width: 1280, height: 900 });
    for (const key of ['pavlova_calc', 'pouch', 'yumgo']) {
      await page.goto(base + BAKERY_LOCALE_ROUTES[locale][key], { waitUntil: 'networkidle' });
      await page.screenshot({ path: `${out}/${locale}-${key}-desktop.png`, fullPage: true });
    }
    await page.setViewportSize({ width: 390, height: 844 });
    console.log(`${locale}: 41 mobile pages, three calculators, six pack recommendations and three print sheets passed`);
  }
  assert.deepEqual(errors, [], 'browser errors');
  console.log(`${checked} translated pages checked; screenshots: ${out}`);
} finally { await browser.close(); }
