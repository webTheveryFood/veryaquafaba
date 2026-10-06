import { APPLICATION_AUDIENCE, SECTION_ROOTS, COCKTAIL_SLUGS, COCKTAIL_TOPIC_SLUGS, FOAM_SLUGS, topicRoute, cocktailRoute, cocktailTopicRoute, foamRoute } from '../applications/routes';
import { TOPIC_TEXTS } from './texts/topics.js';
import facts from '../applications/facts.json';
import COCKTAILS_EN from './texts/cocktails.en.js';
import COCKTAILS_DE from './texts/cocktails.de.js';
import COCKTAILS_FR from './texts/cocktails.fr.js';
import COCKTAILS_NL from './texts/cocktails.nl.js';
import { COCKTAIL_PHOTOS } from './cocktail-photos.js';
import FOAM_EN from './texts/foam.en.js';

// The cocktail foamer hub of a language (foam pages, English only for now).
export function foamHubLink(locale) {
  const slug = FOAM_SLUGS['cocktail-foamer'][locale];
  return slug && locale === 'en' ? [{ href: foamRoute(locale, 'cocktail-foamer'), label: FOAM_EN.labels.hubLink }] : [];
}

const COCKTAIL_TEXTS = { en: COCKTAILS_EN, de: COCKTAILS_DE, fr: COCKTAILS_FR, nl: COCKTAILS_NL };

// The cocktail expansion pages (data/resources/cocktails.js) of a language, linked from the
// cocktails guide and its children. Built from the routes and the texts only, so this module
// never imports the page builders (they import data/applications/index.js, which imports this).
export function cocktailLinks(locale) {
  const T = COCKTAIL_TEXTS[locale];
  if (!T) return [];
  return [
    ...Object.keys(COCKTAIL_SLUGS).filter((k) => COCKTAIL_SLUGS[k][locale] && T.guides[k]).map((k) => ({ href: cocktailRoute(locale, k), label: T.guides[k].h1 })),
    ...Object.keys(COCKTAIL_TOPIC_SLUGS).filter((k) => COCKTAIL_TOPIC_SLUGS[k][locale] && T.topics[k]).map((k) => ({ href: cocktailTopicRoute(locale, k), label: T.topics[k].h1 })),
  ];
}

// The question pages of the cocktail expansion (where to buy, powder, how to make, pre-batching).
export function cocktailTopicLinks(locale) {
  const T = COCKTAIL_TEXTS[locale];
  if (!T) return [];
  return Object.keys(COCKTAIL_TOPIC_SLUGS).filter((k) => COCKTAIL_TOPIC_SLUGS[k][locale] && T.topics[k]).map((k) => ({ href: cocktailTopicRoute(locale, k), label: T.topics[k].h1 }));
}

// Photo cards of the cocktails of a language, except the one the page is about.
export function cocktailCards(locale, except) {
  const T = COCKTAIL_TEXTS[locale];
  if (!T) return null;
  const items = Object.keys(COCKTAIL_SLUGS)
    .filter((k) => k !== except && COCKTAIL_SLUGS[k][locale] && T.guides[k])
    .map((k) => {
      const name = facts.cocktail_recipes[k].name;
      return { href: cocktailRoute(locale, k), title: name, text: T.guides[k].card, image: COCKTAIL_PHOTOS[k], alt: T.labels.cardAlt.replace('{name}', name) };
    });
  return items.length ? { title: T.labels.moreCocktails, items } : null;
}

// Links from the application guides and their children to the set-2 sections: the
// application's professional audience and the powder reconstitution page, each only where
// its text exists in that language; the cocktails guide adds its cocktail pages.
export function sectionLinks(locale, key) {
  const pro = TOPIC_TEXTS.professional?.[locale] || {};
  const ref = TOPIC_TEXTS.reference?.[locale] || {};
  const aud = APPLICATION_AUDIENCE[key];
  return [
    ...(key === 'cocktails' ? [...foamHubLink(locale), ...cocktailTopicLinks(locale)] : []),
    aud && pro[aud] ? { href: topicRoute(locale, 'professional', aud), label: pro[aud].crumb } : null,
    ref.reconstitution ? { href: topicRoute(locale, 'reference', 'reconstitution'), label: ref.reconstitution.crumb } : null,
  ].filter(Boolean);
}
