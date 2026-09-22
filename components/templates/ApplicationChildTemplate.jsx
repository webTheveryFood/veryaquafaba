import Header from '../layout/Header';
import LocalizedFooter from '../layout/LocalizedFooter';
import RecipeProductCTA from '../recipes/RecipeProductCTA';
import FaqSection from '../applications/FaqSection';
import WhereToBuy from '../applications/WhereToBuy';
import QuantityCalculator from '../applications/QuantityCalculator';
import ProcessSheet from '../applications/ProcessSheet';
import { Source } from '../applications/FiguresTable';
import { localeChrome, switcherLanguages } from '../../data/locale-chrome';
import { recipeProductCta } from '../../data/recipe-product-cta';
import { applicationJsonLd, jsonLdHtml } from '../../lib/application-jsonld';

// Child of an application guide (set-2): the same recipe design as the guide (photo,
// cream cards, purchase block), with the tool (quantity calculator or process sheet)
// between the intro and the copy. Two cards: guide + tool + purchase, then FAQ + links.
export default function ApplicationChildTemplate({ page, nativeContent: content, translations }) {
  const locale = content.locale || page.locale || 'en';
  const chrome = localeChrome(locale);
  const cta = recipeProductCta(locale);
  const heroImage = content.heroImage || content.seo.image;
  const { tool } = content;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(applicationJsonLd(content)) }} />
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

      <main className={`va-recipe va-guide va-guide-child${heroImage ? '' : ' va-recipe--no-photo'}`} data-page-type="application-child" data-locale={locale} data-application={content.appKey} data-child={content.child}>
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
          <p className="va-recipe-lead">
            {content.hero.text}{' '}
            <em className="va-guide-updated">
              {content.updatedLabel}: <time dateTime={content.updated}>{content.updatedText}</time>.
            </em>
          </p>

          {tool.kind === 'calculator' ? (
            <section className="va-recipe-section va-guide-calc-block">
              <h2>{tool.labels.title}</h2>
              <QuantityCalculator data={tool} />
              <Source source={tool.source} />
            </section>
          ) : (
            <ProcessSheet sheet={tool} />
          )}

          {content.sections.map((section) => (
            <section className="va-recipe-section" key={section.id}>
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.html }} />
            </section>
          ))}

          <WhereToBuy content={content.whereToBuy} />
        </article>

        <div className="va-recipe-body va-guide-card">
          <FaqSection faq={content.faq} />
          <section className="va-recipe-section va-guide-related">
            <h2>{content.related.title}</h2>
            <ul>
              {content.related.items.map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </section>
        </div>
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
