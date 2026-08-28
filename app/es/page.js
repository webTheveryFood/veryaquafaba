import HomeTemplate from '../../components/templates/HomeTemplate';
import { homeEs } from '../../data/pages/home.es';

export const revalidate = false;

export const metadata = {
  title: homeEs.seo.title,
  description: homeEs.seo.description,
  alternates: {
    canonical: '/es/',
    languages: {
      en: '/',
      de: '/de/was-ist-aquafaba/',
      fr: '/fr/qu-est-ce-que-laquafaba/',
      nl: '/nl/wat-is-aquafaba/',
      es: '/es/',
    },
  },
};

export default function SpanishHomePage() {
  return <HomeTemplate nativeContent={homeEs} />;
}
