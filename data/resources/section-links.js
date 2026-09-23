import { APPLICATION_AUDIENCE, SECTION_ROOTS, topicRoute } from '../applications/routes';
import { TOPIC_TEXTS } from './texts/topics.js';

// Links from the application guides and their children to the set-2 sections: the
// application's professional audience and the powder reconstitution page, each only where
// its text exists in that language.
export function sectionLinks(locale, key) {
  const pro = TOPIC_TEXTS.professional?.[locale] || {};
  const ref = TOPIC_TEXTS.reference?.[locale] || {};
  const aud = APPLICATION_AUDIENCE[key];
  return [
    aud && pro[aud] ? { href: topicRoute(locale, 'professional', aud), label: pro[aud].crumb } : null,
    ref.reconstitution ? { href: topicRoute(locale, 'reference', 'reconstitution'), label: ref.reconstitution.crumb } : null,
  ].filter(Boolean);
}

// Pillar pages of the set-2 sections, for the Resources hub.
export function sectionPillars(locale, labels) {
  return Object.keys(SECTION_ROOTS).filter((s) => TOPIC_TEXTS[s]?.[locale]?.index).map((s) => ({ section: s, href: SECTION_ROOTS[s][locale], label: labels[s] }));
}
