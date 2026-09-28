import { APPLICATION_KEYS, APPLICATION_LOCALES, APPLICATION_ROOTS, CHILD_KEYS, RESOURCES_ROOTS, SECTION_ROOTS, TOOLS_ROOTS, applicationRoute, childRoute } from '../applications/routes';
import { APP_NAMES, UI } from '../applications/ui';
import { localeChrome } from '../locale-chrome';
import { DEFAULT_IMAGE, applicationPages } from '../applications/index';
import { applicationChildPages } from './children.js';
import { topicPages } from './topics.js';
import { RES_UI } from './ui';
import { applicationJsonLd } from '../../lib/application-jsonld';

const card = (page, title, label) => ({ href: page.route, title, image: page.seo.image, label });

// The tab strip of the Resources section: one tab per section, each a page of its own.
// The active tab lists its pages as cards; the other tabs link to their page.
export function resourceTabs(locale, active) {
  const ui = UI[locale];
  const R = RES_UI[locale];
  const topics = Object.values(topicPages).filter((p) => p.locale === locale && p.key);
  const ofSection = (...sections) => topics.filter((p) => sections.includes(p.section)).map((p) => card(p, p.breadcrumbs.at(-1).name, ui.cardCta));
  const tools = APPLICATION_KEYS.flatMap((key) => CHILD_KEYS.map((child) => {
    const page = applicationChildPages[childRoute(locale, key, child)];
    return page ? card(page, R.toolsPage[child].replace('{app}', APP_NAMES[locale][key]), R.toolsPage.cta) : null;
  })).filter(Boolean);
  const tabs = [
    { id: 'applications', href: APPLICATION_ROOTS[locale], items: APPLICATION_KEYS.map((key) => card(applicationPages[applicationRoute(locale, key)], APP_NAMES[locale][key], ui.cardCta)) },
    { id: 'tools', href: TOOLS_ROOTS[locale], items: tools },
    { id: 'professional', href: SECTION_ROOTS.professional[locale], items: ofSection('professional') },
    // The powder reconstitution reference sits with the egg substitutes: same question, the dose.
    { id: 'egg-substitutes', href: SECTION_ROOTS['egg-substitutes'][locale], items: ofSection('egg-substitutes', 'reference') },
    { id: 'where-to-buy', href: SECTION_ROOTS['where-to-buy'][locale], items: ofSection('where-to-buy') },
  ].filter((t) => t.items.length).map((t) => ({ ...t, label: R.tabs[t.id], active: t.id === active }));
  // No active tab on the hub itself: it shows the guides but is none of the tabs.
  return { type: 'tabs', id: 'sections', tabs: tabs.map(({ items, ...t }) => t), items: (tabs.find((t) => t.active) || tabs[0]).items };
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

// The Resources hub (/resources/): the guides under the tab strip, as before the tabs. It
// stays a page of its own (sitemap); the applications tab is the applications index.
function buildResourcesPage(locale) {
  const ui = UI[locale];
  return {
    locale,
    route: RESOURCES_ROOTS[locale],
    type: 'resources',
    seo: { title: `${ui.resourcesTitle} - VERY AQUAFABA`, description: ui.resourcesText, image: DEFAULT_IMAGE },
    hero: { eyebrow: ui.eyebrow, title: ui.resourcesTitle, text: ui.resourcesText },
    sections: [resourceTabs(locale, null)],
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
