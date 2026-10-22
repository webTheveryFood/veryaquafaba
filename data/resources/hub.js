import { APPLICATION_KEYS, APPLICATION_LOCALES, APPLICATION_ROOTS, CHILD_KEYS, RESOURCES_ROOTS, SECTION_ROOTS, TOOLS_ROOTS, applicationRoute, childRoute } from '../applications/routes';
import { APP_NAMES, UI } from '../applications/ui';
import { localeChrome } from '../locale-chrome';
import { DEFAULT_IMAGE, applicationPages } from '../applications/index';
import { applicationChildPages } from './children.js';
import { topicPages } from './topics.js';
import { RES_UI } from './ui';
import { bakeryCards } from './bakeries';
import { BAKERY_ROUTES } from './bakeries-routes.js';
import { applicationJsonLd } from '../../lib/application-jsonld';

const card = (page, title, label) => ({ href: page.route, title, image: page.seo.image, label });

// The sections of Resources: one per URL branch, each a page of its own, with its pages as cards.
function sectionTabs(locale) {
  const ui = UI[locale];
  const R = RES_UI[locale];
  const topics = Object.values(topicPages).filter((p) => p.locale === locale && p.key);
  const ofSection = (...sections) => topics.filter((p) => sections.includes(p.section)).map((p) => card(p, p.breadcrumbs.at(-1).name, ui.cardCta));
  const tools = APPLICATION_KEYS.flatMap((key) => CHILD_KEYS.map((child) => {
    const page = applicationChildPages[childRoute(locale, key, child)];
    return page ? card(page, R.toolsPage[child].replace('{app}', APP_NAMES[locale][key]), R.toolsPage.cta) : null;
  })).filter(Boolean);
  // Bakery expansion (October 2026): English only so far. Each page joins the tab of its URL
  // branch; the powder branch is new and its hub page is the tab's own link.
  const bakery = (...keys) => (locale === 'en' ? bakeryCards(keys) : []);
  const tabs = [
    { id: 'applications', href: APPLICATION_ROOTS[locale], items: [...APPLICATION_KEYS.map((key) => card(applicationPages[applicationRoute(locale, key)], APP_NAMES[locale][key], ui.cardCta)), ...bakery('dacquoise')] },
    { id: 'tools', href: TOOLS_ROOTS[locale], items: tools },
    { id: 'aquafaba-powder', href: BAKERY_ROUTES.powder, items: bakery('powder', 'pouch') },
    { id: 'professional', href: SECTION_ROOTS.professional[locale], items: [...ofSection('professional'), ...bakery('supply')] },
    // The reference pages sit with the egg substitutes: same question, the dose.
    { id: 'egg-substitutes', href: SECTION_ROOTS['egg-substitutes'][locale], items: [...ofSection('egg-substitutes', 'reference'), ...bakery('vegan')] },
    { id: 'where-to-buy', href: SECTION_ROOTS['where-to-buy'][locale], items: ofSection('where-to-buy') },
  ].filter((t) => t.items.length).map((t) => ({ ...t, label: R.tabs[t.id] }));
  return tabs;
}

// The tab strip of the section pages: the active tab lists its pages as cards, the other
// tabs link to their page.
export function resourceTabs(locale, active) {
  const tabs = sectionTabs(locale).map((t) => ({ ...t, active: t.id === active }));
  return { type: 'tabs', id: 'sections', tabs: tabs.map(({ items, ...t }) => t), items: tabs.find((t) => t.active).items };
}

// The hub itself has no strip: one card per section, with the image of its first page.
function sectionCards(locale) {
  const R = RES_UI[locale];
  return sectionTabs(locale).map((t) => ({ href: t.href, title: t.label, text: R.hubCards[t.id], image: t.items[0].image, label: R.hubCards.cta }));
}

// The tools page: the calculators and process sheets of every application, as cards.
function buildToolsPage(locale) {
  const ui = UI[locale];
  const T = RES_UI[locale].toolsPage;
  const route = TOOLS_ROOTS[locale];
  const content = {
    locale,
    route,
    type: 'resources',
    template: 'resources',
    seo: { title: T.title, description: T.description, image: DEFAULT_IMAGE },
    hero: { eyebrow: ui.eyebrow, title: T.h1, text: T.lead },
    breadcrumbs: [
      { name: ui.home, href: localeChrome(locale).logoHref },
      { name: ui.resourcesName, href: RESOURCES_ROOTS[locale] },
      { name: T.crumb, href: route },
    ],
    sections: [resourceTabs(locale, 'tools')],
  };
  content.jsonLd = applicationJsonLd(content, { type: 'CollectionPage' });
  return content;
}

export const toolsPages = Object.fromEntries(APPLICATION_LOCALES.map((locale) => [TOOLS_ROOTS[locale], buildToolsPage(locale)]));

// The Resources hub (/resources/): one card per section. It stays a page of its own
// (sitemap); the applications section is the applications index.
function buildResourcesPage(locale) {
  const ui = UI[locale];
  return {
    locale,
    route: RESOURCES_ROOTS[locale],
    type: 'resources',
    seo: { title: `${ui.resourcesSeoTitle} | VERY AQUAFABA`, description: ui.resourcesText, image: DEFAULT_IMAGE },
    hero: { eyebrow: ui.resourcesName, title: ui.resourcesTitle, text: ui.resourcesText },
    sections: [{ type: 'cards', id: 'sections', items: sectionCards(locale) }],
  };
}
export const resourcesPages = Object.fromEntries(APPLICATION_LOCALES.map((locale) => [RESOURCES_ROOTS[locale], buildResourcesPage(locale)]));

// The section pillars are sub-hubs of Resources and take the applications index layout:
// head, tab strip and cards, the text sections, the links, the FAQ and the enquiry form.
// ponytail: done here, after every page exists, because topics.js cannot import this module.
for (const page of Object.values(topicPages)) {
  if (page.type !== 'topic-index') continue;
  const updated = `<p class="va-guide-updated">${page.updatedLabel}: <time dateTime="${page.updated}">${page.updatedText}</time>.</p>`;
  const sections = page.sections.map((s, i, all) => (i === all.length - 1 ? { ...s, html: s.html + updated } : s));
  Object.assign(page, {
    template: 'resources',
    cta: null,
    sections: [
      resourceTabs(page.locale, page.section),
      ...sections,
      { type: 'rich-text', id: 'related', title: page.related.title, html: `<ul>\n${page.related.items.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('\n')}\n</ul>` },
      { type: 'faq', id: 'faq', title: page.faq.title, items: page.faq.items },
      { type: 'enquiry-form', id: 'enquiry', ...page.enquiryCard },
    ],
  });
  page.jsonLd = applicationJsonLd(page, { type: 'CollectionPage' });
}
