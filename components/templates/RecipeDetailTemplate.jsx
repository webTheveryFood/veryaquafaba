import Header from '../layout/Header';
import LocalizedFooter from '../layout/LocalizedFooter';
import RecipeProductCTA from '../recipes/RecipeProductCTA';
import { localeChrome, switcherLanguages } from '../../data/locale-chrome';
import { recipeProductCta } from '../../data/recipe-product-cta';

// Native, self-styled recipe page: full-bleed hero photo, title, the recipe
// content (ingredients / method / tips), and the localized "go pro" product
// block — mirroring the frozen Elementor design without any snapshot.
export default function RecipeDetailTemplate({ page, nativeContent, translations }) {
  const locale = nativeContent.locale || page.locale || 'en';
  const chrome = localeChrome(locale);
  const { hero, sections = [], heroImage } = nativeContent;
  const cta = recipeProductCta(locale);

  return (
    <>
      <div className="elementor elementor-76" data-native-shell="header">
        <Header
          languages={switcherLanguages(locale, translations)}
          current={chrome.current}
          navigation={chrome.navigation}
          logoHref={chrome.logoHref}
        />
      </div>

      <main className={`va-recipe${heroImage ? '' : ' va-recipe--no-photo'}`}>
        {heroImage ? (
          <div
            className="va-recipe-hero"
            style={{ backgroundImage: `url("${heroImage}")` }}
            role="img"
            aria-label={hero.title}
          />
        ) : null}

        <article className="va-recipe-body">
          <h1 className="va-recipe-title">{hero.title}</h1>
          {hero.text ? <p className="va-recipe-lead">{hero.text}</p> : null}

          {sections.map((section, index) => (
            <section className="va-recipe-section" key={section.title || index}>
              {section.title ? <h2>{section.title}</h2> : null}
              {section.html ? <div dangerouslySetInnerHTML={{ __html: section.html }} /> : null}
            </section>
          ))}
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
