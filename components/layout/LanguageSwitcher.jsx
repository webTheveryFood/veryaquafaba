'use client';

import { useState } from 'react';

// Exact SVG artwork emitted by Connect Polylang Elementor for the WordPress locales.
// ES is a project-native addition and uses the same 21x15 geometry.
const FLAG_SVGS = {
  EN: '<svg width="21" height="15" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#0A17A7" offset="0%"/><stop stop-color="#030E88" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E6273E" offset="0%"/><stop stop-color="#CF152B" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M-.002 0h21v15h-21z"/><path d="M5.003 10H-.002V5h5.005L-2.082.22l1.118-1.657 8.962 6.045V-1h5v5.608l8.962-6.045L23.078.22 15.993 5h5.005v5h-5.005l7.085 4.78-1.118 1.657-8.962-6.045V16h-5v-5.608l-8.962 6.045-1.118-1.658L5.003 10z" fill="url(#a)"/><path d="M14.136 4.958l9.5-6.25a.25.25 0 00-.275-.417l-9.5 6.25a.25.25 0 10.275.417zm.732 5.522l8.515 5.74a.25.25 0 10.28-.415l-8.516-5.74a.25.25 0 00-.279.415zM6.142 4.526L-2.74-1.461a.25.25 0 00-.28.415L5.863 4.94a.25.25 0 00.279-.414zm.685 5.469l-9.845 6.53a.25.25 0 10.276.416l9.846-6.529a.25.25 0 00-.277-.417z" fill="#DB1F35" fill-rule="nonzero"/><path fill="url(#c)" d="M-.002 9h9v6h3V9h9V6h-9V0h-3v6h-9z"/></g></svg>',
  DE: '<svg width="21" height="15" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#F01515" offset="0%"/><stop stop-color="#DE0000" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FFD521" offset="0%"/><stop stop-color="#FFCF00" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0z"/><path fill="url(#c)" d="M0 5h21v5H0z"/><path fill="url(#d)" d="M0 10h21v5H0z"/></g></svg>',
  FR: '<svg width="21" height="15" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F44653" offset="0%"/><stop stop-color="#EE2A39" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#1035BB" offset="0%"/><stop stop-color="#042396" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M10 0h11v15H10z"/><path fill="url(#c)" d="M0 0h7v15H0z"/><path fill="url(#a)" d="M7 0h7v15H7z"/></g></svg>',
  NL: '<svg width="21" height="15" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#CA2B39" offset="0%"/><stop stop-color="#AC1F2C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#2C56A2" offset="0%"/><stop stop-color="#244889" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0z"/><path fill="url(#c)" d="M0 10h21v5H0z"/><path fill="url(#a)" d="M0 5h21v5H0z"/></g></svg>',
  ES: '<svg width="21" height="15" viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg"><path fill="#AA151B" d="M0 0h21v15H0z"/><path fill="#F1BF00" d="M0 3.75h21v7.5H0z"/></svg>',
};

function Flag({ language }) {
  const svg = FLAG_SVGS[language.code] || FLAG_SVGS.EN;
  return <img decoding="async" src={`data:image/svg+xml,${encodeURIComponent(svg)}`} alt={language.label} />;
}

export default function LanguageSwitcher({ languages, current = 'EN', elementId = '5be13f5' }) {
  const [open, setOpen] = useState(false);
  const active = languages.find((language) => language.code === current) || languages[0];
  const others = languages.filter((language) => language.code !== active.code);

  return (
    <div
      style={{ '--langs': others.length }}
      className={`elementor-element elementor-element-${elementId} cpel-switcher--layout-dropdown cpel-switcher--align-justify elementor-widget__width-inherit cpel-switcher--drop-on-click cpel-switcher--drop-to-down cpel-switcher--aspect-ratio-43 elementor-widget elementor-widget-polylang-language-switcher`}
      data-id={elementId}
      data-element_type="widget"
      data-widget_type="polylang-language-switcher.default"
    >
      <div className="elementor-widget-container">
        <nav className="cpel-switcher__nav">
          <div
            className={`cpel-switcher__toggle cpel-switcher__lang${open ? ' cpel-switcher__toggle--on' : ''}`}
            onClick={() => setOpen((value) => !value)}
          >
            <a
              lang={active.locale}
              hrefLang={active.locale}
              href={active.href}
              onClick={(event) => event.preventDefault()}
            >
              <span className={`cpel-switcher__flag cpel-switcher__flag--${active.flagClass}`}>
                <Flag language={active} />
              </span>
              <span className="cpel-switcher__code">{active.code}</span>
            </a>
          </div>
          <ul className="cpel-switcher__list">
            {others.map((language) => (
              <li className="cpel-switcher__lang" key={language.code}>
                <a lang={language.locale} hrefLang={language.locale} href={language.href}>
                  <span className={`cpel-switcher__flag cpel-switcher__flag--${language.flagClass}`}>
                    <Flag language={language} />
                  </span>
                  <span className="cpel-switcher__code">{language.code}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
