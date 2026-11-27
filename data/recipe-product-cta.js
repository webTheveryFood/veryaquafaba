import { recipesIndexEn } from './pages/recipes-index.en';
import { recipesIndexDe } from './pages/recipes-index.de';
import { recipesIndexFr } from './pages/recipes-index.fr';
import { recipesIndexNl } from './pages/recipes-index.nl';
import { SECTION_ROOTS } from './applications/routes';

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

const HOME_COPY = {
  en: {
    title: 'Your favourite recipes, without eggs',
    subtitle: 'Use VERY AQUAFABA at home for macarons, meringues and cocktails.',
    powder: { alt: 'VERY AQUAFABA powder packs', text: 'Mix just what you need for each recipe.' },
    liquid: { alt: 'VERY AQUAFABA liquid packs', text: 'Ready to pour, measure and whip.' },
    label: 'Where to buy',
  },
  fr: {
    title: 'Vos recettes préférées, sans œufs',
    subtitle: 'Préparez vos macarons, meringues et cocktails à la maison avec VERY AQUAFABA.',
    powder: { alt: 'Sachets de VERY AQUAFABA en poudre', text: 'Reconstituez la quantité nécessaire à votre recette.' },
    liquid: { alt: 'Briques de VERY AQUAFABA liquide', text: 'Versez, dosez et fouettez selon votre recette.' },
    label: 'Où acheter',
  },
  de: {
    title: 'Ihre Lieblingsrezepte, ohne Eier',
    subtitle: 'Bereiten Sie Macarons, Baiser und Cocktails zu Hause mit VERY AQUAFABA zu.',
    powder: { alt: 'Beutel mit VERY AQUAFABA-Pulver', text: 'Rühren Sie nur so viel an, wie Sie für Ihr Rezept brauchen.' },
    liquid: { alt: 'Packungen mit flüssigem VERY AQUAFABA', text: 'Direkt aus der Packung abmessen und aufschlagen.' },
    label: 'Wo kaufen?',
  },
  nl: {
    title: 'Uw favoriete recepten, zonder ei',
    subtitle: 'Maak thuis macarons, meringues en cocktails met VERY AQUAFABA.',
    powder: { alt: 'Zakjes VERY AQUAFABA-poeder', text: 'Maak precies zoveel aan als u voor uw recept nodig hebt.' },
    liquid: { alt: 'Pakken vloeibare VERY AQUAFABA', text: 'Direct klaar om af te meten en op te kloppen.' },
    label: 'Waar te koop',
  },
};

export function homeRecipeProductCta(locale = 'en') {
  const base = recipeProductCta(locale);
  const { title, subtitle, powder, liquid, label } = HOME_COPY[locale] || HOME_COPY.en;
  return {
    ...base,
    title,
    subtitle,
    products: base.products.map((product) => ({ ...product, ...(product.key === 'powder' ? powder : liquid) })),
    action: { label, href: SECTION_ROOTS['where-to-buy'][locale] || SECTION_ROOTS['where-to-buy'].en },
  };
}
