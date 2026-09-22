// Hand-written copy of the set-2 section pages, one module per section and language.
// A page exists only where its text exists: 'index' is the section's pillar page, every
// other key a topic page (data/applications/routes.js TOPIC_SLUGS). Token parity between
// languages is checked by scripts/applications/check-guides.mjs.
import professionalEn from './professional.en.js';
import professionalDe from './professional.de.js';
import professionalFr from './professional.fr.js';
import professionalNl from './professional.nl.js';
import eggSubstitutesEn from './egg-substitutes.en.js';
import eggSubstitutesDe from './egg-substitutes.de.js';
import eggSubstitutesFr from './egg-substitutes.fr.js';
import eggSubstitutesNl from './egg-substitutes.nl.js';
import referenceEn from './reference.en.js';
import referenceDe from './reference.de.js';
import referenceFr from './reference.fr.js';
import referenceNl from './reference.nl.js';

export const TOPIC_TEXTS = {
  professional: { en: professionalEn, de: professionalDe, fr: professionalFr, nl: professionalNl },
  reference: { en: referenceEn, de: referenceDe, fr: referenceFr, nl: referenceNl },
  'egg-substitutes': { en: eggSubstitutesEn, de: eggSubstitutesDe, fr: eggSubstitutesFr, nl: eggSubstitutesNl },
};
