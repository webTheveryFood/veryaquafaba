// Single source of truth for the application decision pages' URLs.
// Imported by lib/page-registry.js (type + translation grouping) and by
// data/applications/index.js (page composition); keep it dependency-free.
// Resources hub per locale; the application pages live under it.
export const RESOURCES_ROOTS = {
  en: '/resources/',
  de: '/de/ressourcen/',
  fr: '/fr/ressources/',
  nl: '/nl/bronnen/',
};

const APPLICATION_SEGMENT = { en: 'applications', de: 'anwendungen', fr: 'applications', nl: 'toepassingen' };

export const APPLICATION_ROOTS = Object.fromEntries(
  Object.entries(RESOURCES_ROOTS).map(([locale, root]) => [locale, `${root}${APPLICATION_SEGMENT[locale]}/`])
);

// Pre-2026-09-16 URLs (/applications/... at the site root) -> permanent redirects.
export const LEGACY_APPLICATION_ROOTS = { en: '/applications/', de: '/de/anwendungen/', fr: '/fr/applications/', nl: '/nl/toepassingen/' };

export const APPLICATION_SLUGS = {
  meringue: { en: 'meringue', de: 'baiser', fr: 'meringue', nl: 'meringue' },
  'chocolate-mousse': { en: 'chocolate-mousse', de: 'schokoladenmousse', fr: 'mousse-au-chocolat', nl: 'chocolademousse' },
  mayonnaise: { en: 'mayonnaise', de: 'mayonnaise', fr: 'mayonnaise', nl: 'mayonaise' },
  baking: { en: 'baking', de: 'backen', fr: 'patisserie', nl: 'bakken' },
  cocktails: { en: 'cocktails', de: 'cocktails', fr: 'cocktails', nl: 'cocktails' },
  macarons: { en: 'macarons', de: 'macarons', fr: 'macarons', nl: 'macarons' },
};

export const APPLICATION_KEYS = Object.keys(APPLICATION_SLUGS);
export const APPLICATION_LOCALES = Object.keys(APPLICATION_ROOTS);

// Localized slug -> canonical key (baiser -> meringue), so hreflang and the
// language switcher group the four translations of one application.
export const APPLICATION_ALIASES = Object.fromEntries(
  Object.entries(APPLICATION_SLUGS).flatMap(([key, bySlug]) => Object.values(bySlug).map((slug) => [slug, key]))
);

export const applicationRoute = (locale, key) => `${APPLICATION_ROOTS[locale]}${APPLICATION_SLUGS[key][locale]}/`;

// Set-2 (2026-09-22). The applications index lives at APPLICATION_ROOTS[locale] itself
// (/resources/applications/). Each guide has two children nested under its own route,
// so a new application or a new child type only adds leaves; no published URL moves.
export const CHILD_SLUGS = {
  calculator: { en: 'quantity-calculator', de: 'mengenrechner', fr: 'calculateur-quantites', nl: 'hoeveelheden-berekenen' },
  process: { en: 'process-and-checks', de: 'prozess-und-kontrolle', fr: 'procede-et-controles', nl: 'proces-en-controles' },
};
export const CHILD_KEYS = Object.keys(CHILD_SLUGS);
export const CHILD_ALIASES = Object.fromEntries(
  Object.entries(CHILD_SLUGS).flatMap(([key, bySlug]) => Object.values(bySlug).map((slug) => [slug, key]))
);
export const childRoute = (locale, key, child) => `${applicationRoute(locale, key)}${CHILD_SLUGS[child][locale]}/`;

export const legacyApplicationRedirects = () =>
  APPLICATION_LOCALES.flatMap((locale) => APPLICATION_KEYS.map((key) => ({
    source: `${LEGACY_APPLICATION_ROOTS[locale]}${APPLICATION_SLUGS[key][locale]}/`,
    destination: applicationRoute(locale, key),
    permanent: true,
  })));
