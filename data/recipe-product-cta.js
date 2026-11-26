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

export const homeRecipeProductCta = {
  ...recipesIndexEn.productCta,
  title: 'Your favourite recipes, without eggs',
  subtitle: 'Use VERY AQUAFABA at home for macarons, meringues and cocktails.',
  products: recipesIndexEn.productCta.products.map((product) => ({
    ...product,
    ...(product.key === 'powder'
      ? { alt: 'VERY AQUAFABA powder packs', text: 'Mix just what you need for each recipe.' }
      : { alt: 'VERY AQUAFABA liquid packs', text: 'Ready to pour, measure and whip.' }),
  })),
  action: { label: 'Where to buy', href: '/resources/where-to-buy/' },
};
