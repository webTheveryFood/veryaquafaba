// Playwright check of the one primary CTA of the new pages (13 October 2026) against a running
// build: the button opens the dialog; the consumer path shows the country's shop with rel and
// tracking (the contact form where there is no shop); the professional path shows the B2B form in
// the dialog, or scrolls to the page's own form card; the paths carry data-cta for the snippet;
// and exactly ONE CONVERSION (goal_key production-enquiry-success, with the source page) per
// confirmed submit, none on any failure.
// Usage: node scripts/applications/test-enquiry-tracking.mjs [http://localhost:3058]
import { chromium } from 'playwright';
import { applicationRoute } from '../../data/applications/routes.js';

const BASE = process.argv[2] || 'http://localhost:3058';
const PAGES = { en: applicationRoute('en', 'meringue'), de: applicationRoute('de', 'cocktails'), fr: applicationRoute('fr', 'cocktails'), nl: applicationRoute('nl', 'macarons') };
const TAG = { en: 'en-GB', de: 'de-DE', fr: 'fr-FR', nl: 'nl-NL' };
const TOPIC = '/resources/professional/bars-cocktails/';
const COUNTRY = { shop: '/resources/where-to-buy/united-states/', form: '/resources/where-to-buy/united-kingdom/' };
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

async function openDialog(route) {
  const page = await ctx.newPage();
  await page.goto(BASE + route, { waitUntil: 'networkidle' });
  const opener = page.locator('.va-guide-buy [data-cta-open][data-cta="cta-open"]');
  assert(await opener.count() === 1, `${route}: one primary CTA in the purchase block`);
  await opener.click();
  assert(await page.locator('dialog#cta-dialog[open]').count() === 1, `${route}: the CTA opens the dialog`);
  return page;
}

async function consumer(route) {
  const page = await openDialog(route);
  await page.click('dialog#cta-dialog [data-cta="cta-consumer"]');
  return page;
}

// Consumer path per locale: the shop with rel and tracking, or the contact form (NL).
for (const locale of Object.keys(PAGES)) {
  const page = await consumer(PAGES[locale]);
  const buy = page.locator('dialog#cta-dialog .va-guide-ctas a[data-goal]');
  if (locale === 'nl') {
    assert(await buy.count() === 0, 'nl: no shop in the consumer path');
    const contact = await page.locator('dialog#cta-dialog .va-guide-ctas a').getAttribute('href');
    assert(/#contact$/.test(contact || ''), `nl: the consumer path leads to the contact form (${contact})`);
  } else {
    assert(await buy.count() === 1, `${locale}: one shop button`);
    const rel = await buy.getAttribute('rel');
    assert(/sponsored/.test(rel) && /nofollow/.test(rel), `${locale}: rel sponsored nofollow (${rel})`);
    const href = await buy.getAttribute('href');
    if (/amazon\./.test(href)) assert(/[?&](tag|utm_source|maas)=/.test(href), `${locale}: amazon tracking params (${href})`);
  }
  if (locale === 'fr') assert(await page.locator('dialog#cta-dialog a[href*="whisky.fr"][data-goal]').count() === 2, 'fr cocktails: the two whisky.fr links');
  await page.keyboard.press('Escape');
  assert(await page.locator('dialog#cta-dialog[open]').count() === 0, `${locale}: Escape closes the dialog`);
  await page.close();
}

// Country pages: the country's own listings, or the contact form.
{
  const page = await consumer(COUNTRY.shop);
  assert(await page.locator('dialog#cta-dialog a[href*="amazon.com"][data-goal="amazon-click-us"]').count() === 3, 'united states: the three Amazon listings');
  await page.close();
  const form = await consumer(COUNTRY.form);
  assert(await form.locator('dialog#cta-dialog a[data-goal]').count() === 0, 'united kingdom: no shop');
  await form.close();
}

// The product banner at the foot of the page opens the same dialog.
{
  const page = await ctx.newPage();
  await page.goto(BASE + PAGES.en, { waitUntil: 'networkidle' });
  await page.click('.elementor-element-d84029e [data-cta-open]');
  assert(await page.locator('dialog#cta-dialog[open]').count() === 1, 'the product banner opens the dialog');
  await page.close();
}

// A page with its own form card: the professional path closes the dialog and goes to the card.
{
  const page = await openDialog(TOPIC);
  await page.click('dialog#cta-dialog [data-cta="cta-pro"]');
  assert(await page.locator('dialog#cta-dialog[open]').count() === 0, 'topic: the professional path closes the dialog');
  assert(await page.evaluate(() => document.activeElement?.closest('form')?.id) === 'enquiry-form', 'topic: focus in the page\'s form card');
  assert(await page.locator('#enquiry-form-modal').count() === 0, 'topic: the form is not duplicated in the dialog');
  await page.close();
}

async function submitEnquiry(locale, response) {
  const page = await openDialog(PAGES[locale]);
  await page.route('**/api/enquiry/', (route) => (response === 'network' ? route.abort() : route.fulfill({ status: response.status, contentType: 'application/json', body: JSON.stringify(response.body) })));
  await page.click('dialog#cta-dialog [data-cta="cta-pro"]');
  const form = page.locator('dialog#cta-dialog form#enquiry-form-modal');
  assert(await form.count() === 1, `${locale}: the professional path shows the form in the dialog`);
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
  assert(p.goal_key === 'production-enquiry-success' && p.form_id === 'enquiry-form-modal', `${locale}: goal_key/form_id ${JSON.stringify(p)}`);
  assert(p.source_page === PAGES[locale] && p.locale === TAG[locale], `${locale}: source_page/locale ${p.source_page} ${p.locale}`);
}
// Failures: no CONVERSION, one FORM_ERROR.
for (const [name, response] of [['server 500', { status: 500, body: { ok: false, error: 'send_failed' } }], ['ok:false', { status: 200, body: { ok: false } }], ['network', 'network']]) {
  const ev = await submitEnquiry('de', response);
  assert(ev.filter((e) => e.t === 'CONVERSION').length === 0, `${name}: 0 CONVERSION`);
  assert(ev.filter((e) => e.t === 'FORM_ERROR').length === 1, `${name}: 1 FORM_ERROR`);
}

await browser.close();
console.log(failures ? `\n${failures} failures` : '\nCTA dialog OK: one primary CTA, consumer path per country, professional path, 1 CONVERSION per success, 0 on failure');
process.exitCode = failures ? 1 : 0;
