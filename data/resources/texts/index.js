// Hand-written copy of the guide children, one module per child type and language.
// A child page exists only where its text exists: adding an application to a module adds
// its four pages. Token parity between languages is checked by scripts/applications/check-guides.mjs.
import calculatorEn from './calculator.en.js';
import calculatorDe from './calculator.de.js';
import calculatorFr from './calculator.fr.js';
import calculatorNl from './calculator.nl.js';
import processEn from './process.en.js';
import processDe from './process.de.js';
import processFr from './process.fr.js';
import processNl from './process.nl.js';

export const CHILD_TEXTS = {
  calculator: { en: calculatorEn, de: calculatorDe, fr: calculatorFr, nl: calculatorNl },
  process: { en: processEn, de: processDe, fr: processFr, nl: processNl },
};

export const hasChild = (locale, key, child) => Boolean(CHILD_TEXTS[child]?.[locale]?.[key]);
