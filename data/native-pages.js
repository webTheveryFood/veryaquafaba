import { homeEn } from './pages/home.en';
import { homeEs } from './pages/home.es';
import { homeDe } from './pages/home.de';
import { homeFr } from './pages/home.fr';
import { homeNl } from './pages/home.nl';
import { buyEn } from './pages/buy.en';
import { buyDe } from './pages/buy.de';
import { buyFr } from './pages/buy.fr';
import { buyNl } from './pages/buy.nl';
import { buyEs } from './pages/buy.es';
import { recipesIndexEn } from './pages/recipes-index.en';
import { recipesIndexDe } from './pages/recipes-index.de';
import { recipesIndexFr } from './pages/recipes-index.fr';
import { recipesIndexNl } from './pages/recipes-index.nl';
import { spanishNativePages } from './pages/es.site';
import { contentPages } from './pages/content-pages';
import { applicationPages } from './applications';
import { resourcesPages, toolsPages } from './resources/hub.js';
import { applicationIndexPages } from './resources/application-index';
import { applicationChildPages } from './resources/children';
import { topicPages } from './resources/topics';
import { cocktailPages } from './resources/cocktails';
import { bakeryPages } from './resources/bakeries';
import { novexpPages, addWordLinks } from './resources/novexp';
import { addNovexpLinks } from './resources/novexp-links.js';

// Structured native/programmatic pages live here. Existing frozen WordPress
// routes that do not need bespoke data are still rendered by React through
// SnapshotPageTemplate; data/legacy-routes.json is intentionally empty.

export const nativePages = {
  '/': homeEn,
  '/buy-aquafaba/': buyEn,
  '/de/aquafaba-kaufen/': buyDe,
  '/fr/acheter-aquafaba/': buyFr,
  '/nl/aquafaba-kopen/': buyNl,
  '/es/': homeEs,
  '/es/comprar-aquafaba/': buyEs,
  '/de/was-ist-aquafaba/': homeDe,
  '/fr/qu-est-ce-que-laquafaba/': homeFr,
  '/nl/wat-is-aquafaba/': homeNl,
  '/aquafaba-recipes/': recipesIndexEn,
  '/de/rezepte/': recipesIndexDe,
  '/fr/aquafaba-recettes/': recipesIndexFr,
  '/nl/aquafaba-recepten/': recipesIndexNl,
  ...spanishNativePages,
  ...contentPages,
  ...applicationPages,
  ...resourcesPages,
  ...toolsPages,
  ...applicationIndexPages,
  ...applicationChildPages,
  ...topicPages,
  ...cocktailPages,
  ...bakeryPages,
  ...novexpPages,
};

// The English pages closest to each November expansion page link it in their Go further list.
addNovexpLinks(nativePages);

// The words that name one of our pages or our network link to it on every page under Resources.
addWordLinks(nativePages);

export function getNativePage(route) {
  return nativePages[route] || null;
}

export function getNativeStaticParams() {
  return Object.keys(nativePages).map((route) => ({
    path: route === '/' ? [] : route.split('/').filter(Boolean),
  }));
}
