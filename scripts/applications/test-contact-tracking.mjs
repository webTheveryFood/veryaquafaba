// Playwright check of the contact-form tracking against a running build
// (no Turnstile key in the build's env). Exactly ONE CONVERSION per confirmed
// submit, with the interests as sub_goals + flags; none on any failure.
// Usage: node scripts/applications/test-contact-tracking.mjs [http://localhost:3058]
import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://localhost:3058';
const PAGES = { en: '/buy-aquafaba/', de: '/de/aquafaba-kaufen/', fr: '/fr/acheter-aquafaba/', nl: '/nl/aquafaba-kopen/' };
const SUB = ['samples', 'technical-sheets', 'other'];
let failures = 0;
const assert = (cond, msg) => { if (!cond) { failures++; console.log('FAIL', msg); } };

const browser = await chromium.launch();
const ctx = await browser.newContext();
await ctx.route('**/an.js', (route) => route.abort());
await ctx.route('**/challenges.cloudflare.com/**', (route) => route.abort());
// Tracker stub + Turnstile stub (the build may carry a site key): the widget
// resolves a dummy token immediately so the submit path is exercised.
await ctx.addInitScript(() => {
  window.__an = [];
  window.an = { track: (t, p) => window.__an.push({ t, p }) };
  window.turnstile = { render: (el, opts) => { setTimeout(() => opts.callback('test-token'), 0); return 1; }, reset() {}, remove() {} };
});

async function submit(locale, picks, response) {
  const page = await ctx.newPage();
  await page.route('**/api/contact/', (route) => (response === 'network' ? route.abort() : route.fulfill({ status: response.status, contentType: 'application/json', body: JSON.stringify(response.body) })));
  await page.goto(BASE + PAGES[locale], { waitUntil: 'domcontentloaded' });
  const form = page.locator('form#contact-form');
  assert(await form.count() === 1, `${locale}: form#contact-form present`);
  await form.locator('input[name="your-name"]').fill('Test');
  await form.locator('input[name="your-email"]').fill('test@example.com');
  const boxes = form.locator('input[name="Interest[]"]');
  for (const i of picks) await boxes.nth(i).check();
  await form.locator('textarea[name="your-message"]').fill('hello');
  await form.locator('input[type="submit"]').click();
  await page.waitForFunction(() => document.querySelector('form#contact-form')?.dataset.status === 'ok' || document.querySelector('form#contact-form')?.dataset.status === 'error');
  const events = await page.evaluate(() => window.__an);
  await page.close();
  return events;
}

// 8 interest combinations on the EN page, all successful.
for (let mask = 0; mask < 8; mask++) {
  const picks = [0, 1, 2].filter((i) => mask & (1 << i));
  const ev = await submit('en', picks, { status: 200, body: { ok: true, id: 'x' } });
  const conv = ev.filter((e) => e.t === 'CONVERSION');
  assert(conv.length === 1, `mask ${mask}: exactly 1 CONVERSION (got ${conv.length})`);
  assert(ev.filter((e) => e.t === 'FORM_SUCCESS').length === 1, `mask ${mask}: 1 FORM_SUCCESS`);
  const p = conv[0]?.p || {};
  assert(p.goal_key === 'contact-form-success', `mask ${mask}: goal_key`);
  assert(JSON.stringify(p.sub_goals) === JSON.stringify(picks.map((i) => SUB[i])), `mask ${mask}: sub_goals ${JSON.stringify(p.sub_goals)}`);
  assert(p.samples === picks.includes(0) && p.technical_sheets === picks.includes(1) && p.other === picks.includes(2), `mask ${mask}: flags`);
  assert(p.locale === 'en-GB' && p.form_id === 'contact-form', `mask ${mask}: locale/form_id`);
}
// Other locales: one success each, locale propagated.
for (const [locale, tag] of [['de', 'de-DE'], ['fr', 'fr-FR'], ['nl', 'nl-NL']]) {
  const ev = await submit(locale, [1], { status: 200, body: { ok: true } });
  const conv = ev.filter((e) => e.t === 'CONVERSION');
  assert(conv.length === 1 && conv[0].p.locale === tag && conv[0].p.technical_sheets === true, `${locale}: 1 CONVERSION with locale ${tag}`);
}
// Failures: no CONVERSION, one FORM_ERROR.
for (const [name, response] of [['500', { status: 500, body: { ok: false, error: 'boom' } }], ['200 ok:false', { status: 200, body: { ok: false } }], ['network', 'network']]) {
  const ev = await submit('en', [0], response);
  assert(ev.filter((e) => e.t === 'CONVERSION').length === 0, `${name}: 0 CONVERSION`);
  assert(ev.filter((e) => e.t === 'FORM_ERROR').length === 1, `${name}: 1 FORM_ERROR`);
}
await browser.close();
console.log(failures ? `\n${failures} failures` : '\ncontact tracking OK: 1 CONVERSION per success, 0 on failure');
process.exitCode = failures ? 1 : 0;
