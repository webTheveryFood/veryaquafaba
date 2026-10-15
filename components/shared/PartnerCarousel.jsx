'use client';

import Script from 'next/script';
import { useCallback, useEffect, useRef, useState } from 'react';
import { purchaseGoal, purchaseHref } from '../../data/applications/tracking';
import { COUNTRY_SHOPS } from '../../data/applications/country-shops';

const CONTACT = { en: '/buy-aquafaba/#contact', de: '/de/aquafaba-kaufen/#contact', fr: '/fr/acheter-aquafaba/#contact', nl: '/nl/aquafaba-kopen/#contact' };

// The Amazon logo routes by country like the CTA dialog (Arnaud, 15 October 2026): the shop of the
// visitor's country, or the contact form of the Products page where there is none. Until the
// country is known (and off Vercel, where there is none) it keeps the original store link.
function amazonLink(partner, country) {
  if (!country) return { href: partner.href, external: true };
  const shop = COUNTRY_SHOPS[country];
  if (shop) return { href: shop.href, external: true };
  return { href: CONTACT[document.documentElement.lang.slice(0, 2)] || CONTACT.en, external: false };
}

export default function PartnerCarousel({ partners }) {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const resumeAutoplayRef = useRef(null);
  // undefined until /api/geo answers, then a country code or null. The slider starts after that:
  // it clones the logos once, so the Amazon link must already be the visitor's.
  const [country, setCountry] = useState(undefined);
  const geoReady = useRef(false);

  useEffect(() => {
    fetch('/api/geo/').then((res) => res.json()).then((data) => setCountry(data.country || null)).catch(() => setCountry(null));
  }, []);

  const initSlider = useCallback(() => {
    if (!geoReady.current || !carouselRef.current || sliderRef.current || typeof window.tns !== 'function') return;
    sliderRef.current = window.tns({
      container: carouselRef.current,
      items: 5,
      slideBy: 1,
      autoplay: window.innerWidth >= 768,
      autoplayTimeout: 3000,
      autoplayButtonOutput: false,
      loop: true,
      gutter: 30,
      mouseDrag: true,
      nav: false,
      controls: false,
      center: true,
      speed: 300,
      preventActionWhenRunning: true,
      responsive: {
        1024: { items: 5, slideBy: 5, center: false },
        768: { items: 3, slideBy: 3, center: false },
        480: { items: 3, slideBy: 3, center: true },
        0: { items: 3, slideBy: 3, center: true },
      },
    });
  }, []);

  const goTo = useCallback((direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (resumeAutoplayRef.current) {
      window.clearTimeout(resumeAutoplayRef.current);
      resumeAutoplayRef.current = null;
    }

    const autoplayEnabled = window.innerWidth >= 768;
    if (autoplayEnabled) slider.pause?.();

    slider.goTo(direction);

    // Tiny Slider's internal autoplay timer is independent from our external
    // controls. Restart it after a full timeout so a manual batch change can
    // never be followed by an immediate second jump at the loop boundary.
    if (autoplayEnabled) {
      resumeAutoplayRef.current = window.setTimeout(() => {
        sliderRef.current?.play?.();
        resumeAutoplayRef.current = null;
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (country === undefined) return;
    geoReady.current = true;
    initSlider();
  }, [country, initSlider]);

  useEffect(() => {
    initSlider();
    return () => {
      if (resumeAutoplayRef.current) window.clearTimeout(resumeAutoplayRef.current);
      sliderRef.current?.destroy?.();
      sliderRef.current = null;
    };
  }, [initSlider]);

  return (
    <div className="carousel-wrapper">
      <div className="my-carousel" ref={carouselRef}>
        {partners.map((partner) => {
          const { href, external } = partner.label === 'Amazon' ? amazonLink(partner, country) : { href: partner.href, external: true };
          return (
            <div className="item" key={partner.label}>
              <a href={purchaseHref(href, null)} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} data-goal={purchaseGoal(href) || undefined}>
                <img loading="lazy" decoding="async" src={partner.image} alt={`Logo ${partner.label}`} />
              </a>
            </div>
          );
        })}
      </div>
      <div className="carousel-controls">
        <button type="button" className="carousel-prev" aria-label="Previous" onClick={() => goTo('prev')}>❮</button>
        <button type="button" className="carousel-next" aria-label="Next" onClick={() => goTo('next')}>❯</button>
      </div>
      <Script id="very-aquafaba-tiny-slider" src="/vendor/tiny-slider/tiny-slider.js" strategy="afterInteractive" onReady={initSlider} />
    </div>
  );
}
