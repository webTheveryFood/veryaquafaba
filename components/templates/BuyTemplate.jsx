import Header from '../layout/Header';
import LocalizedFooter from '../layout/LocalizedFooter';
import BuyHero from '../buy/BuyHero';
import ProductIntro from '../buy/ProductIntro';
import TechnicalSpecs from '../buy/TechnicalSpecs';
import EggComparison from '../buy/EggComparison';
import ProductFormats from '../buy/ProductFormats';
import IndustrialManufacturers from '../buy/IndustrialManufacturers';
import HowToBuy from '../buy/HowToBuy';
import ProductFaq from '../buy/ProductFaq';
import ContactSection from '../buy/ContactSection';

export default function BuyTemplate({ nativeContent }) {
  const page = nativeContent.page || {};
  const pageId = page.elementorPageId || '85';
  const currentLanguage = page.currentLanguage || 'EN';
  const locale = page.locale || 'en-GB';

  return (
    <>
      <div className={`elementor elementor-${pageId}`} data-native-shell="header">
        <Header
          languages={nativeContent.languages}
          current={currentLanguage}
          elementIds={page.headerIds}
          navigation={nativeContent.navigation}
          logoHref={page.logoHref}
        />
      </div>

      <main data-elementor-type="wp-page" data-elementor-id={pageId} className={`elementor elementor-${pageId}`}>
        <BuyHero content={nativeContent.hero} />
        <ProductIntro content={nativeContent.intro} />
        <TechnicalSpecs content={nativeContent.technical} />
        <EggComparison content={nativeContent.comparison} />
        <ProductFormats content={nativeContent.formats} />
        <IndustrialManufacturers content={nativeContent.industrial} />
        <HowToBuy content={nativeContent.howToBuy} />
        <ProductFaq content={nativeContent.faq} />
        <ContactSection content={nativeContent.contact} />
      </main>

      <div className="elementor elementor-76" data-native-shell="footer">
        <LocalizedFooter content={nativeContent.footer} locale={locale} />
      </div>
    </>
  );
}
