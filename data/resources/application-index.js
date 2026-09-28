import facts from '../applications/facts.json';
import { localeChrome } from '../locale-chrome';
import { APPLICATION_KEYS, APPLICATION_LOCALES, APPLICATION_ROOTS, RESOURCES_ROOTS, CHILD_KEYS, applicationRoute, childRoute } from '../applications/routes';
import { LOCALE_TAGS, APP_NAMES, UI } from '../applications/ui';
import { applicationPages, DEFAULT_IMAGE, fmt, fmtValue, findRoute, source, fillStrict, faqItems, gramStyle } from '../applications/index';
import { applicationJsonLd } from '../../lib/application-jsonld';
import { RES_UI } from './ui';
import { CHILD_TEXTS } from './texts/index.js';
import TEXTS from './texts/application-index.js';
import { resourceTabs } from './hub.js';

// The applications index (/resources/applications/ and its translations): pillar of the
// application cluster (set-2). Same hub design as /resources/ (cards), plus the copy,
// the tools of each application, the FAQ and the JSON-LD. Figures through tokens only.

function buildIndex(locale) {
  const text = TEXTS[locale];
  const ui = UI[locale];
  const R = RES_UI[locale];
  const route = APPLICATION_ROOTS[locale];
  const { ratio, powder_reconstitution: rec, shelf_life: shelf } = facts.shared;
  const vars = {
    white_liquid: fmt(locale, ratio.egg_white_liquid_g),
    white_powder: fmt(locale, ratio.egg_white_powder_g),
    white_water: fmt(locale, rec.egg_white_water_ml),
    white_total: fmt(locale, rec.egg_white_total_g),
    unopened_months: fmt(locale, shelf.unopened_months),
    opened_days: fmtValue(locale, shelf.liquid_opened_days),
  };
  const g = (tpl) => fillStrict(tpl, vars, `application-index.js ${locale}`);
  const home = localeChrome(locale).logoHref;
  const updated = facts._meta.generado;
  const updatedText = new Date(updated).toLocaleDateString(LOCALE_TAGS[locale], { year: 'numeric', month: 'long', day: 'numeric' });
  const src = source(locale, ratio._fuente);
  const sourceLine = `<p class="va-guide-source">${src.label}: ${src.href ? `<a href="${src.href}">${src.text}</a>` : src.text}${src.period ? ` (${src.period})` : ''}</p>
<p class="va-guide-updated">${ui.updatedLabel}: <time dateTime="${updated}">${updatedText}</time>.</p>`;

  // One line per application that already has children: its tools.
  const tools = APPLICATION_KEYS
    .filter((key) => CHILD_KEYS.some((c) => CHILD_TEXTS[c][locale]?.[key]))
    .map((key) => `<li><strong>${APP_NAMES[locale][key]}</strong>: ${CHILD_KEYS
      .filter((c) => CHILD_TEXTS[c][locale]?.[key])
      .map((c) => `<a href="${childRoute(locale, key, c)}">${c === 'calculator' ? R.calculatorLink : R.processLink}</a>`)
      .join(' · ')}</li>`);

  const faq = { title: ui.faqTitle, items: faqItems(g, text.faq) };
  const sections = [
    resourceTabs(locale, 'applications'),
    ...text.sections.map((s, i, all) => ({ type: 'rich-text', id: s.id, title: s.title, html: g(s.html) + (i === all.length - 1 ? sourceLine : '') })),
    tools.length ? { type: 'rich-text', id: 'tools', title: R.toolsTitle, html: `<ul>\n${tools.join('\n')}\n</ul>` } : null,
    { type: 'faq', id: 'faq', title: faq.title, items: faq.items },
  ].filter(Boolean);

  const content = {
    locale,
    route,
    type: 'application-index',
    template: 'resources', // same CSS as the resources hub
    updated,
    seo: { title: text.title, description: text.description, image: DEFAULT_IMAGE },
    hero: { eyebrow: ui.eyebrow, title: text.h1, text: g(text.lead) },
    sections,
    faq,
    breadcrumbs: [
      { name: ui.home, href: home },
      { name: ui.resourcesName, href: RESOURCES_ROOTS[locale] },
      { name: R.applicationsName, href: route },
    ],
    related: [
      { href: RESOURCES_ROOTS[locale], label: ui.resourcesLink },
      { href: findRoute(locale, 'recipe-index'), label: ui.hubLink },
      { href: findRoute(locale, 'buy'), label: ui.productsLink },
    ].filter((i) => i.href),
  };
  content.jsonLd = applicationJsonLd(content, { type: 'CollectionPage' });
  return content;
}

export const applicationIndexPages = Object.fromEntries(APPLICATION_LOCALES.map((locale) => {
  const page = buildIndex(locale);
  return [page.route, locale === 'en' ? gramStyle(page) : page];
}));
