import Header from '../layout/Header';
import LocalizedFooter from '../layout/LocalizedFooter';
import Hero from '../native/Hero';
import SectionRenderer from '../native/SectionRenderer';
import { localeChrome, switcherLanguages } from '../../data/locale-chrome';

export default function ProgrammaticPageTemplate({ page, nativeContent, template, translations }) {
  if (!nativeContent) {
    throw new Error(
      `Route ${page.route} reached the native renderer without structured content.`
    );
  }

  const locale = nativeContent.locale || nativeContent.page?.locale || page.locale || 'en';
  const chrome = localeChrome(locale);
  const current = nativeContent.currentLanguage || nativeContent.page?.currentLanguage || chrome.current;
  const languages = nativeContent.languages || switcherLanguages(locale, translations);
  const navigation = nativeContent.navigation || chrome.navigation;
  const footer = nativeContent.footer || chrome.footer;
  const logoHref = nativeContent.logoHref || nativeContent.page?.logoHref || chrome.logoHref;

  return (
    <>
      <div className="elementor elementor-76" data-native-shell="header">
        <Header
          languages={languages}
          current={current}
          navigation={navigation}
          logoHref={logoHref}
          elementIds={nativeContent.headerIds || nativeContent.page?.headerIds}
        />
      </div>

      <main className={`va-page va-page-${template}`} data-page-type={page.type} data-locale={page.locale}>
        {/* Legal pages mirror the original: title is an H2, no page H1. */}
        <Hero hero={nativeContent.hero} titleAs={page.type === 'legal' ? 'h2' : 'h1'} />
        <SectionRenderer sections={nativeContent.sections} />
        {nativeContent.cta ? <SectionRenderer sections={[{ type: 'cta', ...nativeContent.cta }]} /> : null}
      </main>

      <div className="elementor elementor-76" data-native-shell="footer">
        <LocalizedFooter content={footer} locale={locale} />
      </div>
    </>
  );
}
