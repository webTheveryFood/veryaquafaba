import { notFound } from 'next/navigation';
import HomeTemplate from '../components/templates/HomeTemplate';
import AboutTemplate from '../components/templates/AboutTemplate';
import BuyTemplate from '../components/templates/BuyTemplate';
import RecipeIndexTemplate from '../components/templates/RecipeIndexTemplate';
import RecipeTemplate from '../components/templates/RecipeTemplate';
import StandardTemplate from '../components/templates/StandardTemplate';
import SnapshotPageTemplate from '../components/templates/SnapshotPageTemplate';
import ApplicationTemplate from '../components/templates/ApplicationTemplate';
import ApplicationChildTemplate from '../components/templates/ApplicationChildTemplate';
import TopicTemplate from '../components/templates/TopicTemplate';
import { getNativePage } from '../data/native-pages';
import { contentSeoTitles, contentSeoDescriptions, descriptionFromContent } from '../data/content-seo';
import { getPageModel, getStaticRouteParams, getTranslations, normalizeRoute } from './page-registry';
import { getSnapshot } from './snapshot';

// The catch-all page of every language. Each language has its own route under app/(<lang>),
// because the root layout that sets <html lang> can only differ per route group.

const templates = {
  home: HomeTemplate,
  about: AboutTemplate,
  buy: BuyTemplate,
  'recipe-index': RecipeIndexTemplate,
  recipe: RecipeTemplate,
  application: ApplicationTemplate,
  'application-index': StandardTemplate,
  'application-child': ApplicationChildTemplate,
  'topic-index': StandardTemplate, // sub-hubs of Resources: the applications index layout
  topic: TopicTemplate,
  editorial: TopicTemplate,
  'editorial-child': ApplicationChildTemplate,
  cocktail: TopicTemplate, // cocktail expansion: guides and question pages under the cocktails guide
  'cocktail-child': ApplicationChildTemplate,
  resources: StandardTemplate,
  legal: StandardTemplate,
  utility: StandardTemplate,
  generic: StandardTemplate,
};

const PREFIXED = ['de', 'fr', 'nl', 'es'];

function routeFromParams(prefix, path = []) {
  const parts = prefix ? [prefix, ...path] : path;
  if (!parts.length) return '/';
  return normalizeRoute(`/${parts.join('/')}`);
}

function staticParams(prefix) {
  const paths = getStaticRouteParams().map((p) => p.path);
  if (!prefix) return paths.filter((p) => !PREFIXED.includes(p[0])).map((path) => ({ path }));
  return paths.filter((p) => p[0] === prefix && p.length > 1).map((p) => ({ path: p.slice(1) }));
}

async function metadataFor(route) {
  const page = getPageModel(route);
  if (!page) return {};

  const translations = getTranslations(page);
  // hreflang alternates; x-default points to the EN version of the group.
  const languages = translations.en ? { ...translations, 'x-default': translations.en } : { ...translations };
  const nativeContent = getNativePage(route);

  if (nativeContent) {
    const seo = nativeContent.seo || {};
    return {
      title: seo.title || contentSeoTitles[route] || undefined,
      description: contentSeoDescriptions[route] || seo.description || descriptionFromContent(nativeContent),
      // 404 and under-construction pages: thin by nature, kept out of the index (and of the sitemap).
      robots: page.type === 'utility' ? { index: false, follow: true } : undefined,
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

export async function renderRoute(route) {
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

export function localePage(prefix) {
  return {
    generateStaticParams: () => staticParams(prefix),
    generateMetadata: async ({ params }) => metadataFor(routeFromParams(prefix, (await params).path)),
    Page: async ({ params }) => renderRoute(routeFromParams(prefix, (await params).path)),
  };
}
