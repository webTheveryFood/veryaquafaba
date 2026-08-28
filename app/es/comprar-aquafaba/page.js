import BuyTemplate from '../../../components/templates/BuyTemplate';
import { buyEs } from '../../../data/pages/buy.es';

export const revalidate = false;

export const metadata = {
  title: buyEs.seo.title,
  description: buyEs.seo.description,
  alternates: {
    canonical: '/es/comprar-aquafaba/',
    languages: {
      en: '/buy-aquafaba/',
      de: '/de/aquafaba-kaufen/',
      fr: '/fr/acheter-aquafaba/',
      nl: '/nl/aquafaba-kopen/',
      es: '/es/comprar-aquafaba/',
    },
  },
};

export default function SpanishAquafabaProductsPage() {
  return <BuyTemplate nativeContent={buyEs} />;
}
