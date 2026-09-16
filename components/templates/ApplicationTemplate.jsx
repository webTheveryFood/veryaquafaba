import Header from '../layout/Header';
import LocalizedFooter from '../layout/LocalizedFooter';
import RecipeProductCTA from '../recipes/RecipeProductCTA';
import FiguresTable from '../applications/FiguresTable';
import FaqSection from '../applications/FaqSection';
import WhereToBuy from '../applications/WhereToBuy';
import { localeChrome, switcherLanguages } from '../../data/locale-chrome';
import { recipeProductCta } from '../../data/recipe-product-cta';
import { applicationJsonLd, jsonLdHtml } from '../../lib/application-jsonld';

// Professional "liquid or powder?" decision page for one application. Same
// design language as the recipe pages (RecipeDetailTemplate): pink page,
// full-bleed hero photo, cream card overlapping it, condensed centred headings,
// light justified body, salmon links, the "go pro" product block and the footer.
export default function ApplicationTemplate({ page, nativeContent: content, translations }) {
  const locale = content.locale || page.locale || 'en';
  const chrome = localeChrome(locale);
  const cta = recipeProductCta(locale);
  const heroImage = content.heroImage || content.seo.image;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(applicationJsonLd(content)) }} />
      {/* Recipe pages' Elementor CSS (post-87, not loaded globally) for the closing product block + hero preload (LCP). */}
      <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-87.css" precedence="page" />
      {heroImage ? <link rel="preload" as="image" href={heroImage} fetchPriority="high" /> : null}
      <div className="elementor elementor-76" data-native-shell="header">
        <Header
          languages={switcherLanguages(locale, translations)}
          current={chrome.current}
          navigation={chrome.navigation}
          logoHref={chrome.logoHref}
        />
      </div>

      <main className={`va-recipe va-guide${heroImage ? '' : ' va-recipe--no-photo'}`} data-page-type="application" data-locale={locale} data-application={content.appKey}>
        {heroImage ? (
          <div className="va-recipe-hero" style={{ backgroundImage: `url("${heroImage}")` }} role="img" aria-label={content.hero.title} />
        ) : null}

        <article className="va-recipe-body">
          <nav className="va-guide-breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {content.breadcrumbs.map((b, i) => (
                <li key={b.href}>
                  {i < content.breadcrumbs.length - 1 ? <a href={b.href}>{b.name}</a> : <span aria-current="page">{b.name}</span>}
                </li>
              ))}
            </ol>
          </nav>

          <p className="va-guide-eyebrow">{content.hero.eyebrow}</p>
          <h1 className="va-recipe-title">{content.hero.title}</h1>
          <p className="va-recipe-lead">{content.hero.text}</p>
          <p className="va-guide-updated">
            {content.updatedLabel}: <time dateTime={content.updated}>{content.updatedText}</time>
          </p>

          <FiguresTable figures={content.figures} packs={content.packs} reconstitution={content.reconstitution} storage={content.storage} />

          {content.sections.map((section, index) => (
            <section className="va-recipe-section" key={section.id || index}>
              {section.title ? <h2>{section.title}</h2> : null}
              {section.html ? <div dangerouslySetInnerHTML={{ __html: section.html }} /> : null}
            </section>
          ))}

          <FaqSection faq={content.faq} />

          <WhereToBuy content={content.whereToBuy} />

          <section className="va-recipe-section va-guide-related">
            <h2>{content.related.title}</h2>
            <ul>
              {content.related.items.map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </section>
        </article>
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
