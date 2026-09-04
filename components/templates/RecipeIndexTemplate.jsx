import Header from '../layout/Header';
import Footer from '../layout/Footer';
import RecipeIndexHero from '../recipes/RecipeIndexHero';
import RecipeGuides from '../recipes/RecipeGuides';
import RecipeCards from '../recipes/RecipeCards';
import RecipeProductCTA from '../recipes/RecipeProductCTA';
import ProgrammaticPageTemplate from './ProgrammaticPageTemplate';

export default function RecipeIndexTemplate(props) {
  const { nativeContent } = props;

  // Two recipe-index shapes share this type: the pixel-faithful Elementor index
  // (guides/recipes/productCta) and the clean native cluster (hero/sections/cta,
  // e.g. Spanish). Only the former drives the bespoke layout.
  if (!nativeContent?.guides) {
    return <ProgrammaticPageTemplate {...props} template="recipe-index" />;
  }

  const page = nativeContent.page || {};
  const pageId = page.elementorPageId || '87';

  return (
    <>
      {/* This page's own Elementor CSS (not loaded globally) + preload of the hero (LCP). */}
      <link rel="stylesheet" href={`/wp-content/uploads/elementor/css/post-${pageId}.css`} precedence="page" />
      <link rel="preload" as="image" href="/wp-content/uploads/2025/09/RESOURCES_AND_RECIPES_HEROIMAGE_PAVLOVA.webp" fetchPriority="high" />
      <div className={`elementor elementor-${pageId}`} data-native-shell="header">
        <Header
          languages={nativeContent.languages}
          current={page.currentLanguage || 'EN'}
          elementIds={page.headerIds}
          navigation={nativeContent.navigation}
          logoHref={page.logoHref}
        />
      </div>

      <main data-elementor-type="wp-page" data-elementor-id={pageId} className={`elementor elementor-${pageId}`}>
        <RecipeIndexHero content={nativeContent.hero} />
        <RecipeGuides intro={nativeContent.intro} guides={nativeContent.guides} />
        <RecipeCards content={nativeContent.recipes} />
        <RecipeProductCTA content={nativeContent.productCta} />
      </main>

      <div className="elementor elementor-76" data-native-shell="footer">
        <Footer content={nativeContent.footer} />
      </div>
    </>
  );
}
