import { APPLICATION_AUDIENCE, SECTION_ROOTS, COCKTAIL_SLUGS, COCKTAIL_TOPIC_SLUGS, topicRoute, cocktailRoute, cocktailTopicRoute } from '../applications/routes';
import { TOPIC_TEXTS } from './texts/topics.js';
import COCKTAILS_EN from './texts/cocktails.en.js';

const COCKTAIL_TEXTS = { en: COCKTAILS_EN };

// The cocktail expansion pages (data/resources/cocktails.js) of a language, linked from the
// cocktails guide and its children. Built from the routes and the texts only, so this module
// never imports the page builders (they import data/applications/index.js, which imports this).
function cocktailLinks(locale) {
  const T = COCKTAIL_TEXTS[locale];
  if (!T) return [];
  return [
    ...Object.keys(COCKTAIL_SLUGS).filter((k) => COCKTAIL_SLUGS[k][locale] && T.guides[k]).map((k) => ({ href: cocktailRoute(locale, k), label: T.guides[k].h1 })),
    ...Object.keys(COCKTAIL_TOPIC_SLUGS).filter((k) => COCKTAIL_TOPIC_SLUGS[k][locale] && T.topics[k]).map((k) => ({ href: cocktailTopicRoute(locale, k), label: T.topics[k].h1 })),
  ];
}

// Links from the application guides and their children to the set-2 sections: the
// application's professional audience and the powder reconstitution page, each only where
// its text exists in that language; the cocktails guide adds its cocktail pages.
export function sectionLinks(locale, key) {
  const pro = TOPIC_TEXTS.professional?.[locale] || {};
  const ref = TOPIC_TEXTS.reference?.[locale] || {};
  const aud = APPLICATION_AUDIENCE[key];
  return [
    ...(key === 'cocktails' ? cocktailLinks(locale) : []),
    aud && pro[aud] ? { href: topicRoute(locale, 'professional', aud), label: pro[aud].crumb } : null,
    ref.reconstitution ? { href: topicRoute(locale, 'reference', 'reconstitution'), label: ref.reconstitution.crumb } : null,
  ].filter(Boolean);
}
