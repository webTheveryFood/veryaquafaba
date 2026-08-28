import Header from '../layout/Header';
import LocalizedFooter from '../layout/LocalizedFooter';
import HomeHero from '../home/HomeHero';
import WhatIsAquafaba from '../home/WhatIsAquafaba';
import Products from '../home/Products';
import Benefits from '../home/Benefits';
import RecipesPreview from '../home/RecipesPreview';
import IndustryTrust from '../home/IndustryTrust';
import FinalCTA from '../home/FinalCTA';

export default function HomeTemplate({ nativeContent }) {
  const currentLanguage = nativeContent.currentLanguage || 'EN';
  const locale = currentLanguage === 'ES' ? 'es-ES' : 'en-GB';

  return (
    <div data-elementor-type="wp-post" data-elementor-id="76" className="elementor elementor-76">
      <Header
        languages={nativeContent.languages}
        current={currentLanguage}
        navigation={nativeContent.navigation}
        logoHref={nativeContent.logoHref}
      />
      <HomeHero hero={nativeContent.hero} />
      <WhatIsAquafaba content={nativeContent.about} />
      <Products content={nativeContent.products} />
      <Benefits content={nativeContent.benefits} />
      <RecipesPreview content={nativeContent.recipes} />
      <IndustryTrust content={nativeContent.industry} />
      <FinalCTA content={nativeContent.cta} />
      <LocalizedFooter content={nativeContent.footer} locale={locale} />
    </div>
  );
}
