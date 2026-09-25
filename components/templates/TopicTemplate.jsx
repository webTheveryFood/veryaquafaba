import Header from '../layout/Header';
import LocalizedFooter from '../layout/LocalizedFooter';
import RecipeProductCTA from '../recipes/RecipeProductCTA';
import FiguresTable from '../applications/FiguresTable';
import FaqSection from '../applications/FaqSection';
import WhereToBuy from '../applications/WhereToBuy';
import StockistList from '../applications/StockistList';
import EnquiryLinks from '../applications/EnquiryLinks';
import ActionButton from '../shared/ActionButton';
import { localeChrome, switcherLanguages } from '../../data/locale-chrome';
import { recipeProductCta } from '../../data/recipe-product-cta';
import { applicationJsonLd, jsonLdHtml } from '../../lib/application-jsonld';

// Topic page of a set-2 section (professionals, reference, egg substitutes, where to buy):
// the guides' recipe design and card order (copy + purchase block, key figures, FAQ + links).
// Where-to-buy pages carry the stockist list of their country instead of the purchase block.
export default function TopicTemplate({ page, nativeContent: content, translations }) {
  const locale = content.locale || page.locale || 'en';
  const chrome = localeChrome(locale);
  const cta = recipeProductCta(locale);
  const heroImage = content.heroImage || content.seo.image;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(applicationJsonLd(content, { type: content.type === 'topic-index' ? 'CollectionPage' : 'WebPage' })) }} />
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

      <main className={`va-recipe va-guide va-guide-topic${heroImage ? '' : ' va-recipe--no-photo'}`} data-page-type={content.type} data-locale={locale} data-section={content.section} data-topic={content.key || undefined}>
        {heroImage ? (
          <div className="va-recipe-hero" style={{ backgroundImage: `url("${heroImage}")` }} role="img" aria-label={content.hero.title}>
            {content.heroLogo ? <img className="va-guide-hero-logo" src={content.heroLogo} alt="VERY AQUAFABA" width="800" height="114" /> : null}
          </div>
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

          {content.cta ? (
            <div className="elementor elementor-87 va-guide-cta-strip">
              <p>{content.cta.text}</p>
              <ActionButton elementId="9ee9a76" href={content.cta.href} data-enquiry-open>{content.cta.label}</ActionButton>
            </div>
          ) : null}

          {/* A country with confirmed listings shows them first: they are the answer. */}
          {content.stockists?.items?.length ? <StockistList content={content.stockists} /> : null}

          {content.sections.map((section) => (
            <section className="va-recipe-section" key={section.id}>
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.html }} />
            </section>
          ))}

          {content.stockists && !content.stockists.items?.length ? <StockistList content={content.stockists} /> : null}
          {content.whereToBuy ? <WhereToBuy content={content.whereToBuy} enquiry={false} /> : null}
        </article>

        {content.figures ? (
          <div className="va-recipe-body va-guide-card">
            <FiguresTable figures={content.figures} packs={content.packs} storage={content.storage} />
          </div>
        ) : null}

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

        {/* The B2B enquiry closes the page: its own card at the foot, form always open; the CTA
            under the lead scrolls to it. */}
        {content.enquiryCard ? (
          <div className="va-recipe-body va-guide-card va-guide-enquiry-card">
            <section className="va-recipe-section">
              <h2>{content.enquiryCard.title}</h2>
              <p>{content.enquiryCard.text}</p>
              <EnquiryLinks enquiry={content.enquiryCard.form} contact={content.enquiryCard.contact} alwaysOpen />
            </section>
          </div>
        ) : null}
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
