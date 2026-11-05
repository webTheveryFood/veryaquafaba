import Header from '../layout/Header';
import LocalizedFooter from '../layout/LocalizedFooter';
import HomeHero from '../home/HomeHero';
import WhatIsAquafaba from '../home/WhatIsAquafaba';
import Products from '../home/Products';
import Benefits from '../home/Benefits';
import RecipesPreview from '../home/RecipesPreview';
import IndustryTrust from '../home/IndustryTrust';
import FinalCTA from '../home/FinalCTA';
import { homeGuides } from '../../data/resources/home-guides';

export default function HomeTemplate({ nativeContent }) {
  const currentLanguage = nativeContent.currentLanguage || 'EN';
  const locale = currentLanguage === 'ES' ? 'es-ES' : 'en-GB';
  // Links toward the guides Google had not crawled yet (November 2026); none on the Spanish home.
  const guides = homeGuides(currentLanguage.toLowerCase());

  return (
    <div data-elementor-type="wp-post" data-elementor-id="76" className="elementor elementor-76">
      {/* Preload the hero background (LCP): it lives in frozen CSS, so the browser finds it late otherwise. Phones show
          a smaller file (public/wp-custom.css), so each width preloads only the file it draws. */}
      <link rel="preload" as="image" href="/wp-content/uploads/2025/09/ABOUT_HERO_IMAGE_MACARON-1200x560.webp" media="(max-width: 767px)" fetchPriority="high" />
      <link rel="preload" as="image" href="/wp-content/uploads/2025/09/ABOUT_HERO_IMAGE_MACARON.webp" media="(min-width: 768px)" fetchPriority="high" />
      <Header
        languages={nativeContent.languages}
        current={currentLanguage}
        navigation={nativeContent.navigation}
        logoHref={nativeContent.logoHref}
      />
      <HomeHero hero={nativeContent.hero} />
      <WhatIsAquafaba content={nativeContent.about} />
      <Products content={nativeContent.products} guides={guides?.products} />
      <Benefits content={nativeContent.benefits} />
      <RecipesPreview content={nativeContent.recipes} guides={guides?.recipes} />
      <IndustryTrust content={nativeContent.industry} />
      <FinalCTA content={nativeContent.cta} />
      <LocalizedFooter content={nativeContent.footer} locale={locale} />
    </div>
  );
}
