import { notFound } from 'next/navigation';
import HomeTemplate from '../../components/templates/HomeTemplate';
import AboutTemplate from '../../components/templates/AboutTemplate';
import BuyTemplate from '../../components/templates/BuyTemplate';
import RecipeIndexTemplate from '../../components/templates/RecipeIndexTemplate';
import RecipeTemplate from '../../components/templates/RecipeTemplate';
import StandardTemplate from '../../components/templates/StandardTemplate';
import SnapshotPageTemplate from '../../components/templates/SnapshotPageTemplate';
import { getNativePage } from '../../data/native-pages';
import { getPageModel, getStaticRouteParams, getTranslations, normalizeRoute } from '../../lib/page-registry';
import { getSnapshot } from '../../lib/snapshot';

export const dynamicParams = true;
export const revalidate = false;

const templates = {
  home: HomeTemplate,
  about: AboutTemplate,
  buy: BuyTemplate,
  'recipe-index': RecipeIndexTemplate,
  recipe: RecipeTemplate,
  legal: StandardTemplate,
  utility: StandardTemplate,
  generic: StandardTemplate,
};

function routeFromParams(path) {
  if (!path?.length) return '/';
  return normalizeRoute(`/${path.join('/')}`);
}

export function generateStaticParams() {
  return getStaticRouteParams();
}

export async function generateMetadata({ params }) {
  const { path } = await params;
  const route = routeFromParams(path);
  const page = getPageModel(route);
  if (!page) return {};

  const translations = getTranslations(page);
  const languages = Object.fromEntries(
    Object.entries(translations).map(([locale, href]) => [locale, href])
  );
  const nativeContent = getNativePage(route);

  if (nativeContent) {
    const seo = nativeContent.seo || {};
    return {
      title: seo.title || undefined,
      description: seo.description || undefined,
      alternates: {
        canonical: route,
        languages,
      },
      openGraph: seo.image ? { images: [seo.image] } : undefined,
    };
  }

  const snapshot = await getSnapshot(page.sourceRoute || route);
  if (!snapshot) return {};

  return {
    title: snapshot.metadata.title || undefined,
    description: snapshot.metadata.description || undefined,
    alternates: {
      canonical: route,
      languages,
    },
    openGraph: snapshot.metadata.ogImage ? { images: [snapshot.metadata.ogImage] } : undefined,
  };
}

export default async function VeryAquafabaPage({ params }) {
  const { path } = await params;
  const route = routeFromParams(path);
  const page = getPageModel(route);
  if (!page) notFound();

  const nativeContent = getNativePage(route);
  const translations = getTranslations(page);

  if (nativeContent) {
    const Template = templates[page.type] || StandardTemplate;
    return (
      <Template
        page={page}
        nativeContent={nativeContent}
        translations={translations}
      />
    );
  }

  const snapshot = await getSnapshot(page.sourceRoute || route);
  if (!snapshot) notFound();

  return <SnapshotPageTemplate page={page} snapshot={snapshot} translations={translations} />;
}
