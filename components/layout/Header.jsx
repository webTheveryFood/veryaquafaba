'use client';

import { useEffect, useState } from 'react';
import MainNav from './MainNav';
import LanguageSwitcher from './LanguageSwitcher';
import { siteLanguages, siteNavigation } from '../../data/site';

const HOME_HEADER_IDS = {
  root: '6b35621',
  logoContainer: 'e6ac0d5',
  logoWidget: 'e11d30d',
  rightContainer: '71b662e',
  navContainer: 'efac0cf',
  navWidget: '5b83638',
  languageContainer: 'a8f6d03',
  languageWidget: '5be13f5',
};

export default function Header({
  languages = siteLanguages,
  current = 'EN',
  elementIds = HOME_HEADER_IDS,
  navigation = siteNavigation,
  logoHref = '/what-is-aquafaba',
}) {
  const [open, setOpen] = useState(false);
  const ids = { ...HOME_HEADER_IDS, ...elementIds };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 1024) setOpen(false);
    };
    window.addEventListener('resize', closeOnDesktop);
    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);

  const toggleMenu = () => setOpen((value) => !value);

  return (
    <div
      className={`elementor-element elementor-element-${ids.root} e-flex e-con-boxed e-con e-parent`}
      data-id={ids.root}
      data-element_type="container"
      data-settings='{"background_background":"classic","position":"fixed"}'
    >
      <div className="e-con-inner">
        <div className={`elementor-element elementor-element-${ids.logoContainer} e-con-full e-flex e-con e-child`} data-id={ids.logoContainer} data-element_type="container">
          <div className={`elementor-element elementor-element-${ids.logoWidget} elementor-widget elementor-widget-image`} data-id={ids.logoWidget} data-element_type="widget" data-widget_type="image.default">
            <a href={logoHref}>
              <img fetchPriority="high" decoding="async" width="300" height="196" src="/wp-content/uploads/2025/09/THEVERYFOOD_LOGO.svg" className="attachment-medium size-medium wp-image-38" alt="" />
            </a>
          </div>
        </div>

        <div className={`elementor-element elementor-element-${ids.rightContainer} e-con-full e-flex e-con e-child`} data-id={ids.rightContainer} data-element_type="container">
          <div className={`elementor-element elementor-element-${ids.navContainer} e-con-full e-flex e-con e-child`} data-id={ids.navContainer} data-element_type="container">
            <div className={`elementor-element elementor-element-${ids.navWidget} elementor-widget-mobile__width-inherit elementor-widget elementor-widget-html`} data-id={ids.navWidget} data-element_type="widget" data-widget_type="html.default">
              <div className="vf-header-container">
                <MainNav items={navigation} active={open} onNavigate={() => setOpen(false)} />
                <div
                  className={`vf-burger${open ? ' open' : ''}`}
                  role="button"
                  tabIndex={0}
                  aria-label="Menu"
                  aria-expanded={open}
                  onClick={toggleMenu}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      toggleMenu();
                    }
                  }}
                >
                  <svg className="vf-icon vf-burger-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className="vf-icon vf-cross-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className={`elementor-element elementor-element-${ids.languageContainer} e-con-full e-flex e-con e-child`} data-id={ids.languageContainer} data-element_type="container">
            <LanguageSwitcher languages={languages} current={current} elementId={ids.languageWidget} />
          </div>
        </div>
      </div>
    </div>
  );
}
