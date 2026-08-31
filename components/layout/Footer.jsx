import { Fragment } from 'react';
import { footerContent } from '../../data/site';

function SocialIcon({ label }) {
  if (label === 'Instagram') {
    return (
      <svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37.2 2.1 148.1 2.1 185.1 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32.3-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}

function CarbonBadge() {
  // Match the live site: an empty container the website-carbon JS would populate.
  // That script isn't loaded here, so the original renders it empty — no badge.
  // Rendering our own hardcoded footprint/rating diverged from production.
  return <div id="wcb" className="carbonbadge wcb-d" />;
}

export default function Footer({ content = footerContent }) {
  return (
    <footer className="elementor-element elementor-element-3bdb720 e-flex e-con-boxed e-con e-parent" data-id="3bdb720" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-05cb18c e-flex e-con-boxed e-con e-child" data-id="05cb18c" data-element_type="container" data-settings='{"background_background":"classic"}'>
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-5b0e32c e-con-full e-flex e-con e-child" data-id="5b0e32c" data-element_type="container">
              <div className="elementor-element elementor-element-8199efb e-con-full e-flex e-con e-child" data-id="8199efb" data-element_type="container">
                <div className="elementor-element elementor-element-2c16e7e elementor-widget elementor-widget-image" data-id="2c16e7e" data-element_type="widget" data-widget_type="image.default">
                  <a href={content.homeHref || '/what-is-aquafaba'}>
                    <img loading="lazy" decoding="async" width="731" height="1024" src="/wp-content/uploads/2025/09/THEVERYFOOD_ICON.svg" className="attachment-large size-large wp-image-35" alt="Icon the Very Food" />
                  </a>
                </div>
              </div>

              <div className="elementor-element elementor-element-e7a3989 e-con-full e-flex e-con e-child" data-id="e7a3989" data-element_type="container">
                <div className="elementor-element elementor-element-3b8f6bc elementor-shape-square e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="3b8f6bc" data-element_type="widget" data-widget_type="social-icons.default">
                  <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                    {content.socials.map((social, index) => (
                      <Fragment key={social.href}>
                        {index > 0 ? ' ' : null}
                        <span className="elementor-grid-item" role="listitem">
                          <a className={`elementor-icon elementor-social-icon elementor-social-icon-${social.label.toLowerCase()} elementor-animation-grow elementor-repeater-item-${index === 0 ? '91df5d8' : 'a151857'}`} href={social.href} target="_blank">
                            <span className="elementor-screen-only">{social.label}</span>
                            <SocialIcon label={social.label} />
                          </a>
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div className="elementor-element elementor-element-239781e elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="239781e" data-element_type="widget" data-widget_type="text-editor.default">
                  <p>{content.company}<br />{content.registration}<br /><a href={`mailto:${content.email}`}>{content.email}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-6c1620e e-con-full e-flex e-con e-child" data-id="6c1620e" data-element_type="container" data-settings='{"background_background":"classic"}'>
          <div className="elementor-element elementor-element-d8c67f2 e-con-full e-flex e-con e-child" data-id="d8c67f2" data-element_type="container">
            <div className="elementor-element elementor-element-04a7936 elementor-widget elementor-widget-text-editor" data-id="04a7936" data-element_type="widget" data-widget_type="text-editor.default"><p>{content.copyright}</p></div>
          </div>

          <div className="elementor-element elementor-element-a5ba80f e-con-full e-flex e-con e-child" data-id="a5ba80f" data-element_type="container">
            <div className="elementor-element elementor-element-9c974a7 elementor-widget elementor-widget-html" data-id="9c974a7" data-element_type="widget" data-widget_type="html.default"><CarbonBadge /></div>
            <div className="elementor-element elementor-element-4e6ffae elementor-widget elementor-widget-text-editor" data-id="4e6ffae" data-element_type="widget" data-widget_type="text-editor.default"><p><a href={content.terms}>{content.termsLabel || 'Terms of Use'}</a> | <a href={content.privacy}>{content.privacyLabel || 'Privacy Policy'}</a></p></div>
          </div>

          <div className="elementor-element elementor-element-01ff7da e-con-full e-flex e-con e-child" data-id="01ff7da" data-element_type="container">
            <div className="elementor-element elementor-element-b01b862 elementor-widget elementor-widget-text-editor" data-id="b01b862" data-element_type="widget" data-widget_type="text-editor.default"><p>{content.madeWithLabel || 'Made with'} 🤍{content.creditVerb ? ` ${content.creditVerb}` : ''} {content.creditConnector || 'by'} <a href={content.credits[0].href} target="_blank" rel="noopener">{content.credits[0].label}</a> &amp; <a href={content.credits[1].href} target="_blank" rel="noopener">{content.credits[1].label}</a></p></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
