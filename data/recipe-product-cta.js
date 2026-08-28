import { recipesIndexEn } from './pages/recipes-index.en';
import { recipesIndexDe } from './pages/recipes-index.de';
import { recipesIndexFr } from './pages/recipes-index.fr';
import { recipesIndexNl } from './pages/recipes-index.nl';

const MAP = {
  en: recipesIndexEn,
  de: recipesIndexDe,
  fr: recipesIndexFr,
  nl: recipesIndexNl,
};

// The "skip the cans, go pro" product block that closes every recipe page,
// localized to the page's language.
export function recipeProductCta(locale = 'en') {
  return (MAP[(locale || 'en').slice(0, 2)] || recipesIndexEn).productCta;
}
