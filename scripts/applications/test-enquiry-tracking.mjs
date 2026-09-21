// Playwright check of the application guides' purchase block and B2B enquiry form
// against a running build: one primary purchase button with rel/tracking (none on NL),
// the technical sheet CTA, the enquiry link, and exactly ONE CONVERSION
// (goal_key production-enquiry-success, with the source page) per confirmed submit;
// none on any failure. Usage: node scripts/applications/test-enquiry-tracking.mjs [http://localhost:3058]
import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://localhost:3058';
// Current routes (the guides moved under the resources hub); the lead must carry this path.
import { applicationRoute } from '../../data/applications/routes.js';
const PAGES = { en: applicationRoute('en', 'meringue'), de: applicationRoute('de', 'cocktails'), fr: applicationRoute('fr', 'mayonnaise'), nl: applicationRoute('nl', 'macarons') };
const TAG = { en: 'en-GB', de: 'de-DE', fr: 'fr-FR', nl: 'nl-NL' };
let failures = 0;
const assert = (cond, msg) => { if (!cond) { failures++; console.log('FAIL', msg); } };

const browser = await chromium.launch();
const ctx = await browser.newContext();
await ctx.route('**/an.js', (route) => route.abort());
await ctx.route('**/challenges.cloudflare.com/**', (route) => route.abort());
await ctx.addInitScript(() => {
  window.__an = [];
  window.an = { track: (t, p) => window.__an.push({ t, p }) };
  window.turnstile = { render: (el, opts) => { setTimeout(() => opts.callback('test-token'), 0); return 1; }, reset() {}, remove() {} };
});

async function open(locale) {
  const page = await ctx.newPage();
  await page.goto(BASE + PAGES[locale], { waitUntil: 'domcontentloaded' });
  return page;
}

// Purchase block shape per locale.
for (const locale of Object.keys(PAGES)) {
  const page = await open(locale);
  const buy = page.locator('.va-guide-ctas a[data-goal]');
  const buttons = page.locator('.va-guide-ctas .elementor-button-text');
  if (locale === 'nl') {
    assert(await buy.count() === 0, 'nl: no purchase button');
    assert(await buttons.count() === 1, 'nl: technical sheet is the only CTA');
    assert(await page.locator('.va-guide-ctas .va-guide-cta-outline').count() === 0, 'nl: technical sheet CTA is solid (primary)');
  } else {
    assert(await buy.count() === 1, `${locale}: one purchase button`);
    const rel = await buy.getAttribute('rel');
    assert(/sponsored/.test(rel) && /nofollow/.test(rel), `${locale}: rel sponsored nofollow (${rel})`);
    const href = await buy.getAttribute('href');
    if (/amazon\./.test(href)) assert(/[?&](tag|utm_source|maas)=/.test(href), `${locale}: amazon tracking params (${href})`);
    assert(await page.locator('.va-guide-ctas .va-guide-cta-outline').count() === 1, `${locale}: technical sheet CTA outlined`);
  }
  const texts = (await buttons.allTextContents()).join(' | ');
  assert(!/sample|muster|échantillon|staal|monster/i.test(texts), `${locale}: no sample CTA (${texts})`);
  assert(await page.locator('[data-enquiry-toggle]').count() === 1, `${locale}: enquiry link present`);
  await page.close();
}

async function submitEnquiry(locale, response) {
  const page = await open(locale);
  await page.route('**/api/enquiry/', (route) => (response === 'network' ? route.abort() : route.fulfill({ status: response.status, contentType: 'application/json', body: JSON.stringify(response.body) })));
  await page.click('[data-enquiry-toggle]');
  const form = page.locator('form#enquiry-form');
  assert(await form.count() === 1, `${locale}: enquiry form opens`);
  await form.locator('input[name=company]').fill('Test Bakery');
  await form.locator('input[name=country]').fill('Testland');
  await form.locator('input[name=email]').fill('lead@example.com');
  await form.locator('input[name=volume]').fill('about ten kilos a month');
  await form.locator('textarea[name=project]').fill('Replacing egg whites in our meringue line.');
  const application = await form.locator('input[name=application]').inputValue();
  assert(application.length > 0, `${locale}: application prefilled (${application})`);
  await form.locator('button[type=submit]').click();
  await page.waitForFunction(() => window.__an.some((e) => e.t === 'CONVERSION' || e.t === 'FORM_ERROR'), null, { timeout: 5000 }).catch(() => {});
  const ev = await page.evaluate(() => window.__an);
  await page.close();
  return ev;
}

// Success: 1 FORM_START, 1 FORM_SUCCESS, 1 CONVERSION with goal_key and source page.
for (const locale of ['en', 'nl']) {
  const ev = await submitEnquiry(locale, { status: 200, body: { ok: true, id: 'x' } });
  const conv = ev.filter((e) => e.t === 'CONVERSION');
  assert(ev.filter((e) => e.t === 'FORM_START').length === 1, `${locale}: 1 FORM_START`);
  assert(conv.length === 1, `${locale}: exactly 1 CONVERSION (got ${conv.length})`);
  assert(ev.filter((e) => e.t === 'FORM_SUCCESS').length === 1, `${locale}: 1 FORM_SUCCESS`);
  const p = conv[0]?.p || {};
  assert(p.goal_key === 'production-enquiry-success' && p.form_id === 'enquiry-form', `${locale}: goal_key/form_id ${JSON.stringify(p)}`);
  assert(p.source_page === PAGES[locale] && p.locale === TAG[locale], `${locale}: source_page/locale ${p.source_page} ${p.locale}`);
}
// Failures: no CONVERSION, one FORM_ERROR.
for (const [name, response] of [['server 500', { status: 500, body: { ok: false, error: 'send_failed' } }], ['ok:false', { status: 200, body: { ok: false } }], ['network', 'network']]) {
  const ev = await submitEnquiry('de', response);
  assert(ev.filter((e) => e.t === 'CONVERSION').length === 0, `${name}: 0 CONVERSION`);
  assert(ev.filter((e) => e.t === 'FORM_ERROR').length === 1, `${name}: 1 FORM_ERROR`);
}

await browser.close();
console.log(failures ? `\n${failures} failures` : '\nenquiry tracking OK: purchase block per locale, 1 CONVERSION per success, 0 on failure');
process.exitCode = failures ? 1 : 0;
