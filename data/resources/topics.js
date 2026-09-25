import facts from '../applications/facts.json';
import { localeChrome } from '../locale-chrome';
import { APPLICATION_KEYS, APPLICATION_LOCALES, APPLICATION_ROOTS, RESOURCES_ROOTS, SECTION_ROOTS, TOPIC_SLUGS, applicationRoute, childRoute, topicRoute, COUNTRY_LOCALE } from '../applications/routes';
import { LOCALE_TAGS, APP_NAMES, UI, PACK_LABELS, ENQUIRY_FORM } from '../applications/ui';
import {
  DEFAULT_IMAGE, fmt, fmtValue, derived, findRoute, source, whereToBuy, guideTokens, fillStrict, faqItems, gramStyle, packItems, storageRows,
} from '../applications/index';
import { RES_UI } from './ui';
import { TOPIC_TEXTS } from './texts/topics.js';
import { STOCKISTS, stockistPages } from './stockists.js';

// Composes the set-2 section pages (professionals by audience, technical reference, egg
// substitutes, where to buy). A page exists only where its text exists in
// data/resources/texts/. Every figure comes from facts.json through the site tokens below;
// the copy never carries a number of its own.

const rec = facts.shared.powder_reconstitution;
const { ratio } = facts.shared;
const WATER_PER_G = rec.egg_white_water_ml / rec.egg_white_powder_g;

// Tokens shared by every section page: the guide tokens of the ratio (no application),
// the pack yields, and per application its dose, powder dose, water, pack batches and
// yield (meringue_dose, meringue_batches_10l...), plus the internal hrefs.
export function siteTokens(locale, contact) {
  const t = { ...guideTokens(locale, { process: [] }, null, contact) };
  delete t.recipe_href;
  for (const p of facts.shared.packs) {
    t[`${p.id}_whites`] = fmt(locale, p.egg_whites, 0);
    // What a pouch makes (reconstitution page): water to add and aquafaba obtained, in litres and kg past 1000.
    if (p.format === 'powder') {
      const waterMl = p.egg_whites * rec.egg_white_water_ml;
      const totalG = p.egg_whites * rec.egg_white_total_g;
      t[`${p.id}_water`] = waterMl >= 1000 ? `${fmt(locale, waterMl / 1000, 1)} L` : `${fmt(locale, waterMl, 0)} ml`;
      t[`${p.id}_total`] = totalG >= 1000 ? `${fmt(locale, totalG / 1000, 1)} kg` : `${fmt(locale, totalG, 0)} g`;
    }
  }
  for (const key of APPLICATION_KEYS) {
    const f = facts.applications[key];
    const d = derived(f);
    const k = key.replace('-', '_');
    t[`${k}_href`] = applicationRoute(locale, key);
    t[`${k}_calc_href`] = childRoute(locale, key, 'calculator');
    t[`${k}_process_href`] = childRoute(locale, key, 'process');
    if (!d) continue;
    t[`${k}_dose`] = fmt(locale, f.dose_g);
    t[`${k}_powder`] = fmt(locale, d.powderG);
    t[`${k}_water`] = fmt(locale, d.powderG * WATER_PER_G, 0);
    t[`${k}_batches_1l`] = fmt(locale, d.batches1l, 0);
    t[`${k}_batches_10l`] = fmt(locale, Math.floor(10000 / f.dose_g), 0);
    t[`${k}_batches_200g`] = fmt(locale, d.batches200g, 0);
    t[`${k}_batches_3kg`] = fmt(locale, Math.floor(3000 / d.powderG), 0);
    if (d.eggWhites != null) t[`${k}_eggs`] = fmt(locale, d.eggWhites, 0);
    if (f.yield) t[`${k}_yield`] = fmt(locale, f.yield.count, 0);
    for (const p of [...(f.process || []), ...(f.ingredients || [])]) if (p.value != null) t[`${k}_${p.key}`] = fmtValue(locale, p.value);
  }
  // Egg ratio page figures (yolk, water content, viscosity) recorded in facts.shared.
  const fo = facts.shared.formulation;
  // Conversion at common egg white counts (egg white page): whites_4_liquid, whites_4_powder, whites_4_water.
  for (const n of [2, 4, 5, 10]) {
    t[`whites_${n}_liquid`] = fmt(locale, n * ratio.egg_white_liquid_g, 0);
    t[`whites_${n}_powder`] = fmt(locale, n * rec.egg_white_powder_g, 0);
    t[`whites_${n}_water`] = fmt(locale, n * rec.egg_white_water_ml, 0);
  }
  // Sizing example (where-to-buy): ten sours a night for a month, in litres of liquid, rounded.
  // Sizing examples (where-to-buy): thirty whole eggs a day for a month; sixty mousse portions a week.
  t.eggs_30_day_l = fmt(locale, Math.round((30 * 30 * ratio.egg_liquid_g) / 1000), 0);
  { const m = facts.applications['chocolate-mousse']; t.mousse_60_week_l = fmt(locale, Math.round(((60 / m.yield.count) * m.dose_g * 52 / 12) / 1000), 0); }
  t.sours_10_night_l = fmt(locale, Math.round((10 * 30 * facts.applications.cocktails.dose_g) / 1000), 0);
  t.yolk_liquid = fmt(locale, ratio.egg_yolk_liquid_g);
  t.yolk_oil = fmt(locale, ratio.egg_yolk_oil_g);
  t.eggs_10l = fmt(locale, Math.floor(10000 / ratio.egg_liquid_g), 0);
  t.water_egg_pct = fmt(locale, fo.water_egg_pct, 0);
  t.water_aquafaba_pct = fmtValue(locale, fo.water_aquafaba_pct);
  t.reduce_liquids = fmtValue(locale, fo.reduce_other_liquids_pct);
  t.viscosity = fmtValue(locale, fo.viscosity_g_ml);
  t.index_href = APPLICATION_ROOTS[locale];
  t.resources_href = RESOURCES_ROOTS[locale];
  t.products_href = findRoute(locale, 'buy');
  t.recipes_href = findRoute(locale, 'recipe-index');
  t.ratio_href = findRoute(locale, 'recipe', 'recipe:egg-ratio');
  t.storage_href = findRoute(locale, 'recipe', 'recipe:how-to-store-and-freeze-aquafaba');
  t.baking_recipe_href = findRoute(locale, 'recipe', 'recipe:how-to-use-aquafaba-in-baking');
  for (const section of Object.keys(SECTION_ROOTS)) {
    t[`${section.replace(/-/g, '_')}_href`] = SECTION_ROOTS[section][locale];
    // A where-to-buy leaf exists in the language of its country: the token points at the
    // reader's language when that page exists, otherwise at the language it was written in,
    // so every directory can link every country. <key>_<locale>_href reaches a named one.
    for (const [key, slugs] of Object.entries(TOPIC_SLUGS[section])) {
      const locales = Object.keys(slugs);
      if (!locales.length) continue;
      const name = key.replace(/-/g, '_');
      t[`${name}_href`] = topicRoute(section === 'where-to-buy' && COUNTRY_LOCALE[key] ? COUNTRY_LOCALE[key] : (slugs[locale] ? locale : locales[0]), section, key);
      for (const l of locales) t[`${name}_${l}_href`] = topicRoute(l, section, key);
    }
  }
  return t;
}

// Reconstitution table 1 to 20 egg whites (reference page): the owner's rule scaled.
export function reconstitutionTable(locale, upTo = 20) {
  const R = RES_UI[locale].recon;
  const heads = [R.whites, R.powder, R.water, R.total];
  const rows = Array.from({ length: upTo }, (_, i) => i + 1).map((n) => [
    fmt(locale, n, 0), `${fmt(locale, n * rec.egg_white_powder_g, 0)} g`, `${fmt(locale, n * rec.egg_white_water_ml, 0)} ml`, `${fmt(locale, n * rec.egg_white_total_g, 0)} g`,
  ]);
  return `<table class="va-guide-grid va-guide-grid--recon">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
}

// Key figures of a section page: the ratio block (liquid and powder), the packs and the storage.
function ratioFigures(locale) {
  const ui = UI[locale];
  const P = PACK_LABELS[locale];
  const g = guideTokens(locale, { process: [] }, null, null);
  const R = RES_UI[locale].recon;
  return {
    figures: {
      title: ui.figuresTitle,
      groups: [
        { key: 'liquid', title: RES_UI[locale].calc.liquid, rows: [{ label: R.whites, value: `${g.white_liquid} g` }, { label: P.liquid_1l, value: P.eggWhites.replace('{n}', g.whites_1l) }] },
        { key: 'powder', title: RES_UI[locale].calc.powder, rows: [{ label: R.whites, value: `${g.white_powder} g` }, { label: P.powder_200g, value: P.eggWhites.replace('{n}', g.whites_200g) }], note: rec.publicar ? fillStrict(`{white_powder} g + {white_water} ml = {white_total} g`, g, 'recon note') : null },
      ],
      source: source(locale, ratio._fuente),
    },
    packs: { title: ui.packsTitle, groups: packItems(locale), source: source(locale, facts.shared.packs_fuente) },
    storage: storageRows(locale),
  };
}

// Hero of each section page: the recipe photos of the site. The pack photos are not used
// here because they still show formats that are no longer in the lineup (5 L pouch, 500 g bag),
// and the Products and Resources covers carry text baked into the image.
const IMAGES = {
  'topic-index:professional': '/wp-content/uploads/2025/09/RESOURCES_AND_RECIPES_HEROIMAGE_PAVLOVA.webp',
  'professional:pastry': '/wp-content/uploads/2025/09/VERYAQUAFABA_MERINGUES_COVER.webp',
  'professional:bars': '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_HD_PISCOSOUr.webp',
  'professional:foodservice': '/wp-content/uploads/2025/09/VERYAQUAFABA_MAYONNAISE_COVER.webp',
  'professional:industry': '/wp-content/uploads/2025/09/VERYAQUAFABA_CHOCOLATE-MOUSSE_COVER.webp',
  'reference:reconstitution': '/wp-content/uploads/2025/09/VERYAQUAFABA_MACARONS_COVER.webp',
  'topic-index:egg-substitutes': '/wp-content/uploads/2025/09/RESOURCES_AND_RECIPES_HEROIMAGE_PAVLOVA.webp',
  'egg-substitutes:egg-white': '/wp-content/uploads/2025/09/VERYAQUAFABA_MERINGUES_COVER.webp',
  'egg-substitutes:liquid-egg-white': '/wp-content/uploads/2025/09/VERYAQUAFABA_MAYONNAISE_COVER.webp',
  'egg-substitutes:egg-white-powder': '/wp-content/uploads/2025/09/VERYAQUAFABA_MACARONS_COVER.webp',
  'topic-index:where-to-buy': '/wp-content/uploads/2025/09/ABOUT_HERO_IMAGE_MACARON.webp',
  'where-to-buy': '/wp-content/uploads/2025/09/ABOUT_HERO_IMAGE_MACARON.webp',
};

export function buildTopic(locale, section, key, text, extra = {}) {
  const ui = UI[locale];
  const R = RES_UI[locale];
  const route = key ? extra.route || topicRoute(locale, section, key) : SECTION_ROOTS[section][locale];
  const products = findRoute(locale, 'buy');
  const hub = findRoute(locale, 'recipe-index');
  const home = localeChrome(locale).logoHref;
  const contact = `${products}#contact`;
  const vars = { ...siteTokens(locale, contact), ...(extra.tokens || {}) };
  const where = `${section}/${key || 'index'} ${locale}`;
  const g = (tpl) => fillStrict(tpl, vars, where);
  const heroImage = IMAGES[key ? `${section}:${key}` : `topic-index:${section}`] || IMAGES[section] || null;
  // The commercial pages carry the landing's word art over the hero, like the home page.
  const heroLogo = section === 'where-to-buy' ? '/wp-content/uploads/2025/09/VERYAQUAFABA_LOGO-3.svg' : null;
  const updated = facts._meta.generado;
  const links = (text.links || []).map((l) => ({ href: g(l.href), label: g(l.label) }));
  const hasIndex = Boolean(TOPIC_TEXTS[section]?.[locale]?.index);
  return {
    locale,
    route,
    type: key ? 'topic' : 'topic-index',
    section,
    key,
    updated,
    updatedLabel: ui.updatedLabel,
    updatedText: new Date(updated).toLocaleDateString(LOCALE_TAGS[locale], { year: 'numeric', month: 'long', day: 'numeric' }),
    seo: { title: g(text.title), description: g(text.description), image: heroImage || DEFAULT_IMAGE },
    heroImage,
    heroLogo,
    hero: { eyebrow: text.eyebrow || R.sections[section], title: g(text.h1), text: g(text.lead) },
    // Visible B2B call under the lead: the production enquiry is the conversion of these pages.
    cta: { text: R.ctaLead, label: ENQUIRY_FORM[locale].title, href: '#enquiry-form' },
    sections: text.sections.map((s) => ({ type: 'rich-text', id: s.id, title: g(s.title), html: g(s.html) })),
    ...(text.figures ? ratioFigures(locale) : {}),
    faq: { title: ui.faqTitle, items: faqItems(g, text.faq) },
    // Where-to-buy pages carry their country's stockist list instead of the single purchase block.
    ...(extra.stockists ? { stockists: extra.stockists(contact, route) } : { whereToBuy: whereToBuy(locale, null, contact, route, text.enquiryLabel || text.h1) }),
    // The B2B enquiry is a card of its own at the foot of the page. Its application field
    // starts empty: the visitor names the application, and source_page already says which
    // page the lead came from.
    enquiryCard: { title: ENQUIRY_FORM[locale].title, text: R.ctaLead, contact, form: whereToBuy(locale, null, contact, route, '').enquiry },
    related: {
      title: ui.relatedTitle,
      items: [
        ...links,
        key && hasIndex ? { href: SECTION_ROOTS[section][locale], label: R.sectionLinks[section] } : null,
        { href: APPLICATION_ROOTS[locale], label: R.applicationsLink },
        { href: RESOURCES_ROOTS[locale], label: ui.resourcesLink },
        hub ? { href: hub, label: ui.hubLink } : null,
        products ? { href: products, label: ui.productsLink } : null,
      ].filter(Boolean),
    },
    breadcrumbs: [
      { name: ui.home, href: home },
      { name: ui.resourcesName, href: RESOURCES_ROOTS[locale] },
      hasIndex ? { name: R.sections[section], href: SECTION_ROOTS[section][locale] } : null,
      key ? { name: g(text.crumb || text.h1), href: route } : null,
    ].filter(Boolean),
  };
}

export const topicPages = Object.fromEntries([
  ...APPLICATION_LOCALES.flatMap((locale) => Object.keys(TOPIC_TEXTS).flatMap((section) => {
    const texts = TOPIC_TEXTS[section][locale] || {};
    return Object.keys(texts).map((k) => {
      const key = k === 'index' ? null : k;
      const page = buildTopic(locale, section, key, texts[k], key === 'reconstitution' ? { tokens: { reconstitution_table: reconstitutionTable(locale) } } : {});
      return [page.route, locale === 'en' ? gramStyle(page) : page];
    });
  })),
  ...stockistPages(buildTopic, gramStyle),
]);

export { STOCKISTS };
