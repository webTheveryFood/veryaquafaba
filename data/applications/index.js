import { pageRegistry, getTranslations } from '../../lib/page-registry';
import { contentPages } from '../pages/content-pages';
import { localeChrome } from '../locale-chrome';
import facts from './facts.json';
import copyEn from './copy.en.json';
import copyDe from './copy.de.json';
import copyFr from './copy.fr.json';
import copyNl from './copy.nl.json';
import { APPLICATION_KEYS, APPLICATION_LOCALES, applicationRoute } from './routes';
import {
  LOCALE_TAGS, TITLES, APP_PHRASE, APP_NAMES, ANSWER, YIELD_UNITS, UNIT_WORDS, ROW_LABELS,
  PACK_LABELS, STORAGE_LABELS, RECONSTITUTION_LABELS, FORMAT_LABELS, ENQUIRY_FORM, UI, WHERE_TO_BUY, RECIPE_TO_APPLICATION,
} from './ui';
import { purchaseHref, PURCHASE_REL } from './tracking';

// Composes the 24 application decision pages (6 applications x 4 locales).
// Figures come from facts.json only; prose from copy.<locale>.json (Tontin);
// derived figures (powder equivalent, batches per pack) are computed here from
// the Products-page ratio: 30 g liquid = 1 egg white = 2 g powder.

const SITE = 'https://veryaquafaba.com';
// Hero + og:image fallback for applications whose related page has no photo (baking
// guide): the recipes hub's pavlova photo (no text baked into the image).
const DEFAULT_IMAGE = '/wp-content/uploads/2025/09/RESOURCES_AND_RECIPES_HEROIMAGE_PAVLOVA.webp';
const COPY = { en: copyEn, de: copyDe, fr: copyFr, nl: copyNl };
const { ratio } = facts.shared;
const POWDER_PER_LIQUID_G = ratio.egg_white_powder_g / ratio.egg_white_liquid_g;
const APP_TO_RECIPE_KEY = Object.fromEntries(Object.entries(RECIPE_TO_APPLICATION).map(([k, v]) => [v, k]));

const fmt = (locale, n, digits = 1) => Number(n).toLocaleString(LOCALE_TAGS[locale], { maximumFractionDigits: digits });
const fmtValue = (locale, value) => {
  if (Array.isArray(value)) return value.map((v) => fmt(locale, v)).join('-');
  return typeof value === 'number' ? fmt(locale, value) : String(value);
};
const withUnit = (locale, value, unit) => (unit ? `${fmtValue(locale, value)} ${UNIT_WORDS[locale][unit] || unit}` : fmtValue(locale, value));
const fill = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (_, k) => String(vars[k]));

const findRoute = (locale, type, translationKey) =>
  pageRegistry.find((p) => p.locale === locale && p.type === type && (!translationKey || p.translationKey === translationKey))?.route || null;

function derived(f) {
  if (!f.dose_g) return null;
  // Egg-white equivalence only when it is a whole number (never a rounded figure).
  const exact = f.dose_g % ratio.egg_white_liquid_g === 0 ? f.dose_g / ratio.egg_white_liquid_g : null;
  const powderG = f.dose_g * POWDER_PER_LIQUID_G;
  return {
    eggWhites: f.egg_whites ?? exact,
    powderG,
    batches1l: Math.floor(1000 / f.dose_g),
    batches200g: Math.floor(200 / powderG),
  };
}

function yieldText(locale, y) {
  const u = YIELD_UNITS[locale];
  return `${y.approx ? `${u.approx} ` : ''}${fmt(locale, y.count, 0)} ${u[y.unit]}`;
}

export function answerSentence(locale, key, f = facts.applications[key]) {
  const t = ANSWER[locale];
  if (!f.dose_g) {
    return fill(t.equivalence, {
      egg: fmt(locale, ratio.egg_liquid_g),
      white: fmt(locale, ratio.egg_white_liquid_g),
      powderWhite: fmt(locale, ratio.egg_white_powder_g),
    });
  }
  const d = derived(f);
  return fill(d.eggWhites ? t.withDose : t.withDoseNoEggs, {
    phrase: APP_PHRASE[locale][key],
    dose: fmt(locale, f.dose_g),
    yield: yieldText(locale, f.yield),
    eggs: d.eggWhites == null ? '' : fmt(locale, d.eggWhites, 0),
    powder: fmt(locale, d.powderG),
  });
}

// Key figures, separated by format (client, 2026-09-16): a liquid block, a powder block
// with the reconstitution, and the shared process parameters of the recipe.
export function figureRows(locale, f, key) {
  const L = ROW_LABELS[locale];
  const F = FORMAT_LABELS[locale];
  const R = RECONSTITUTION_LABELS[locale];
  const rec = facts.shared.powder_reconstitution;
  const d = derived(f);
  const liquid = [];
  const powder = [];
  if (d) {
    liquid.push([L.liquid_dose, withUnit(locale, f.dose_g, 'g')]);
    if (d.eggWhites != null) liquid.push([L.egg_whites, fmt(locale, d.eggWhites, 0)]);
    liquid.push([L.batches_1l, fmt(locale, d.batches1l, 0)]);
    powder.push([L.powder_dose, withUnit(locale, d.powderG, 'g')]);
    powder.push([L.batches_200g, fmt(locale, d.batches200g, 0)]);
  } else {
    liquid.push([L.egg_liquid, withUnit(locale, ratio.egg_liquid_g, 'g')]);
    liquid.push([L.white_liquid, withUnit(locale, ratio.egg_white_liquid_g, 'g')]);
    liquid.push([L.eggs_1l, fmt(locale, Math.floor(1000 / ratio.egg_liquid_g), 0)]);
    powder.push([L.white_powder, withUnit(locale, ratio.egg_white_powder_g, 'g')]);
    powder.push([L.whites_200g, fmt(locale, Math.floor(200 / ratio.egg_white_powder_g), 0)]);
  }
  if (rec?.publicar) {
    powder.push([L.reconstitution, fill(R.ratio, { p: fmt(locale, rec.powder_parts), w: fmt(locale, rec.water_parts) })]);
    if (d) powder.push([L.water_batch, fill(R.water, { water: fmt(locale, d.powderG * (rec.water_parts / rec.powder_parts)) })]);
    powder.push([L.per_white, fill(R.perWhite, { powder: fmt(locale, rec.egg_white_powder_g), water: fmt(locale, rec.egg_white_water_ml) })]);
  }
  const process = (f.process || []).filter((p) => p.value != null).map((p) => [L[p.key] || p.key, withUnit(locale, p.value, p.unit)]);
  const rows = (list) => list.map(([label, value]) => ({ label, value }));
  return [
    { key: 'liquid', title: F.liquid, rows: rows(liquid) },
    { key: 'powder', title: F.powder, rows: rows(powder) },
    ...(process.length ? [{ key: 'process', title: F.process, rows: rows(process) }] : []),
  ];
}

// Source line under each table. The recorded source URL is the EN page; the link goes to
// the same page in the reader's language when a translation exists (same-locale interlink).
function localizedHref(locale, url) {
  if (!url) return null;
  const route = url.replace(SITE, '');
  const page = pageRegistry.find((p) => p.route === route);
  return (page && getTranslations(page)[locale]) || route;
}

function source(locale, s) {
  const href = localizedHref(locale, s.fuente_url);
  // The linked page's own title in the reader's language when it is a site page (recipe,
  // guide); otherwise the first sentence of the record (the rest is the data note).
  const title = href && contentPages[href]?.hero?.title;
  return {
    label: UI[locale].sourceLabel,
    text: s.fuente_text || (title ? `VERY AQUAFABA, ${title}` : s.fuente.split('. ')[0]),
    href,
    period: s.periodo,
  };
}

function packItems(locale) {
  const P = PACK_LABELS[locale];
  const F = FORMAT_LABELS[locale];
  const group = (format) => ({
    key: format,
    title: F[format],
    rows: facts.shared.packs.filter((p) => p.format === format).map((p) => ({
      label: P[p.id],
      value: p.egg_whites ? P.eggWhites.replace('{n}', fmt(locale, p.egg_whites, 0)) : P.onRequest,
    })),
  });
  return [group('liquid'), group('powder')];
}

// Storage and shelf life, separated by format: the liquid is chilled and dated once opened
// and may be frozen in portions; the opened powder does not spoil.
function storageRows(locale) {
  const s = facts.shared.shelf_life;
  const fr = facts.shared.freezing;
  const L = ROW_LABELS[locale];
  const S = STORAGE_LABELS[locale];
  const F = FORMAT_LABELS[locale];
  const liquid = [];
  const powder = [];
  if (s.unopened_months) {
    liquid.push({ label: L.unopened, value: withUnit(locale, s.unopened_months, 'months') });
    powder.push({ label: L.unopened, value: withUnit(locale, s.unopened_months, 'months') });
  }
  if (s.liquid_opened_days) liquid.push({ label: L.opened, value: S.liquidOpenedValue.replace('{days}', withUnit(locale, s.liquid_opened_days, 'days')).replace('{temp}', fmt(locale, s.liquid_opened_max_c)) });
  if (fr) liquid.push({ label: L.frozen, value: S.frozenValue.replace('{months}', fmt(locale, fr.months, 0)).replace('{temp}', fmt(locale, fr.temp_c, 0)).replace('{a}', fmt(locale, fr.portion_g[0], 0)).replace('{b}', fmt(locale, fr.portion_g[1], 0)), wrap: true });
  if (s.powder_opened === 'keeps') powder.push({ label: L.opened, value: S.powderKeeps, wrap: true });
  return {
    title: S.title,
    groups: [{ key: 'liquid', title: F.liquid, rows: liquid }, { key: 'powder', title: F.powder, rows: powder }],
    source: source(locale, s._fuente),
  };
}

// Purchase block (client 2026-09-16): one primary destination per country with the
// click goal and the central tracking parameters; the technical sheet CTA (contact
// form); the B2B enquiry form data (source page = this route) and the general contact.
function whereToBuy(locale, key, contact, route) {
  const w = WHERE_TO_BUY[locale];
  const ui = UI[locale];
  const href = w.overrides?.[key] || w.buy;
  return {
    title: ui.buyTitle,
    buy: href && ui.buyCta ? { href: purchaseHref(href), label: ui.buyCta, goal: w.goal, rel: PURCHASE_REL } : null,
    sheetCta: ui.sheetCta,
    contact,
    enquiry: {
      proLabel: ui.enquiryProLabel, proLink: ui.enquiryProLink, genLabel: ui.enquiryGenLabel, genLink: ui.enquiryGenLink,
      form: ENQUIRY_FORM[locale], locale: LOCALE_TAGS[locale], application: APP_NAMES[locale][key], sourcePath: route,
    },
  };
}

function buildPage(locale, key) {
  const route = applicationRoute(locale, key);
  const f = facts.applications[key];
  const copy = COPY[locale][key] || {};
  const ui = UI[locale];
  const t = TITLES[locale][key];
  const recipeRoute = findRoute(locale, 'recipe', APP_TO_RECIPE_KEY[key]);
  const recipe = (recipeRoute && contentPages[recipeRoute]) || {};
  const hub = findRoute(locale, 'recipe-index');
  const products = findRoute(locale, 'buy');
  const home = localeChrome(locale).logoHref;
  const contact = `${products}#contact`;
  const answer = answerSentence(locale, key, f);
  const heroImage = recipe.heroImage || null;

  return {
    locale,
    route,
    type: 'application',
    appKey: key,
    keyword: t.keyword,
    updated: facts._meta.generado,
    updatedLabel: ui.updatedLabel,
    updatedText: new Date(facts._meta.generado).toLocaleDateString(LOCALE_TAGS[locale], { year: 'numeric', month: 'long', day: 'numeric' }),
    seo: { title: t.title, description: copy.seo?.description || answer, image: heroImage || DEFAULT_IMAGE },
    heroImage,
    hero: {
      eyebrow: ui.eyebrow,
      title: t.h1,
      text: [answer, copy.answer].filter(Boolean).join(' '),
      image: heroImage ? { src: heroImage, alt: t.h1 } : undefined,
    },
    figures: { title: ui.figuresTitle, groups: figureRows(locale, f, key), source: source(locale, f._fuente), reconstitutionSource: source(locale, facts.shared.powder_reconstitution._fuente) },
    packs: { title: ui.packsTitle, groups: packItems(locale), source: source(locale, facts.shared.packs_fuente) },
    storage: storageRows(locale),
    sections: (copy.sections || []).map((s) => ({ type: 'rich-text', id: s.key, title: s.title, html: s.html })),
    faq: { title: ui.faqTitle, items: copy.faq || [] },
    whereToBuy: whereToBuy(locale, key, contact, route),
    related: {
      title: ui.relatedTitle,
      items: [
        recipeRoute ? { href: recipeRoute, label: copy.relatedLabel || ui.recipeLink } : null,
        hub ? { href: hub, label: ui.hubLink } : null,
        products ? { href: products, label: ui.productsLink } : null,
      ].filter(Boolean),
    },
    breadcrumbs: [
      { name: ui.home, href: home },
      hub ? { name: ui.hubName, href: hub } : null,
      { name: APP_NAMES[locale][key], href: route },
    ].filter(Boolean),
  };
}

export const applicationPages = Object.fromEntries(
  APPLICATION_LOCALES.flatMap((locale) => APPLICATION_KEYS.map((key) => {
    const page = buildPage(locale, key);
    return [page.route, page];
  }))
);

// Recipe page -> its application guide (rendered at the end of the recipe).
export function applicationForRecipe(translationKey, locale) {
  const key = RECIPE_TO_APPLICATION[translationKey];
  if (!key || !APPLICATION_LOCALES.includes(locale)) return null;
  return { href: applicationRoute(locale, key), label: UI[locale].recipeToApp };
}

// Recipe hub -> the six application guides of the same locale.
export function applicationHubLinks(locale) {
  if (!APPLICATION_LOCALES.includes(locale)) return null;
  return {
    title: UI[locale].hubBlockTitle,
    items: APPLICATION_KEYS.map((key) => ({ href: applicationRoute(locale, key), label: `${APP_NAMES[locale][key]}: ${TITLES[locale][key].h1.split(':').slice(1).join(':').trim()}` })),
  };
}
