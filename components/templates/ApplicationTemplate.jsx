import Header from '../layout/Header';
import LocalizedFooter from '../layout/LocalizedFooter';
import Hero from '../native/Hero';
import SectionRenderer from '../native/SectionRenderer';
import RecipeProductCTA from '../recipes/RecipeProductCTA';
import FiguresTable from '../applications/FiguresTable';
import FaqSection from '../applications/FaqSection';
import WhereToBuy from '../applications/WhereToBuy';
import { localeChrome, switcherLanguages } from '../../data/locale-chrome';
import { recipeProductCta } from '../../data/recipe-product-cta';
import { applicationJsonLd, jsonLdHtml } from '../../lib/application-jsonld';

// Professional "liquid or powder?" decision page for one application.
// Fixed block order (see plan): JSON-LD, breadcrumbs, hero with the sourced
// answer sentence + visible updated date, key figures + packs, the four
// Tontin sections, FAQ, where to buy (data-goal), related links, product CTA.
export default function ApplicationTemplate({ page, nativeContent: content, translations }) {
  const locale = content.locale || page.locale || 'en';
  const chrome = localeChrome(locale);
  const cta = recipeProductCta(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(applicationJsonLd(content)) }} />
      {/* The closing product block reuses the recipe pages' Elementor CSS (post-87, not loaded globally). */}
      <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-87.css" precedence="page" />
      {content.heroImage ? <link rel="preload" as="image" href={content.heroImage} fetchPriority="high" /> : null}
      <div className="elementor elementor-76" data-native-shell="header">
        <Header
          languages={switcherLanguages(locale, translations)}
          current={chrome.current}
          navigation={chrome.navigation}
          logoHref={chrome.logoHref}
        />
      </div>

      <main className="va-page va-page-application" data-page-type="application" data-locale={locale} data-application={content.appKey}>
        <nav className="va-breadcrumbs va-container" aria-label="Breadcrumb">
          <ol>
            {content.breadcrumbs.map((b, i) => (
              <li key={b.href}>
                {i < content.breadcrumbs.length - 1 ? <a href={b.href}>{b.name}</a> : <span aria-current="page">{b.name}</span>}
              </li>
            ))}
          </ol>
        </nav>

        <Hero hero={content.hero} />
        <p className="va-updated va-container">
          {content.updatedLabel}: <time dateTime={content.updated}>{content.updatedText}</time>
        </p>

        <FiguresTable figures={content.figures} packs={content.packs} />

        <SectionRenderer sections={content.sections} />

        <FaqSection faq={content.faq} />

        <WhereToBuy content={content.whereToBuy} />

        <section className="va-section va-related">
          <div className="va-container">
            <h2>{content.related.title}</h2>
            <ul>
              {content.related.items.map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {cta ? (
        <div className="elementor elementor-87" data-elementor-type="wp-page" data-elementor-id="87">
          <RecipeProductCTA content={cta} />
        </div>
      ) : null}

      <div className="elementor elementor-76" data-native-shell="footer">
        <LocalizedFooter content={chrome.footer} locale={locale} />
      </div>
    </>
  );
}
