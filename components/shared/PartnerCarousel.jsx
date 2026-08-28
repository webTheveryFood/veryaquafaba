'use client';

import Script from 'next/script';
import { useCallback, useEffect, useRef } from 'react';

export default function PartnerCarousel({ partners }) {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const resumeAutoplayRef = useRef(null);

  const initSlider = useCallback(() => {
    if (!carouselRef.current || sliderRef.current || typeof window.tns !== 'function') return;
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
        {partners.map((partner) => (
          <div className="item" key={partner.label}>
            <a href={partner.href} target="_blank" rel="noreferrer">
              <img decoding="async" src={partner.image} alt={`Logo ${partner.label}`} />
            </a>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button type="button" className="carousel-prev" aria-label="Previous" onClick={() => goTo('prev')}>❮</button>
        <button type="button" className="carousel-next" aria-label="Next" onClick={() => goTo('next')}>❯</button>
      </div>
      <Script id="very-aquafaba-tiny-slider" src="/vendor/tiny-slider/tiny-slider.js" strategy="afterInteractive" onReady={initSlider} />
    </div>
  );
}
