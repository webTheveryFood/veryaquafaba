import './native.css';
import './programmatic.css';
import SwitcherToggle from '../components/native/SwitcherToggle';

export const metadata = {
  metadataBase: new URL('https://veryaquafaba.com'),
  applicationName: 'VERY AQUAFABA',
  // Safety net: pages that don't set their own <title> fall back to this
  // instead of the host name. `template: '%s'` leaves per-page titles verbatim.
  title: {
    default: 'VERY AQUAFABA',
    template: '%s',
  },
};

const frozenStyles = [
  // Per-page Elementor CSS (post-85/87/2883/2974/3023) is loaded by its template, not globally.
  '/wp-content/cache/wpfc-minified/fi6rn9vm/4beu2.css',
  '/wp-content/cache/wpfc-minified/l9tlun38/4beu2.css',
  '/wp-content/plugins/elementor/assets/css/frontend.min.css',
  '/wp-content/uploads/elementor/css/post-11.css',
  '/wp-content/plugins/elementor/assets/css/widget-image.min.css',
  '/wp-content/plugins/connect-polylang-elementor/assets/css/language-switcher.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-heading.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-divider.min.css',
  '/wp-content/plugins/elementor/assets/lib/animations/styles/e-animation-grow.min.css',
  '/wp-content/plugins/elementor/assets/lib/animations/styles/zoomIn.min.css',
  '/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css',
  '/wp-content/plugins/elementor/assets/lib/animations/styles/slideInUp.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css',
  '/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css',
  '/wp-content/plugins/contact-form-7/includes/css/styles.css',
  '/wp-content/uploads/elementor/css/post-76.css',
  '/vendor/tiny-slider/tiny-slider.css',
];

const bodyClass = [
  'home',
  'wp-singular',
  'page-template',
  'page-template-elementor_canvas',
  'page',
  'page-id-76',
  'wp-theme-hello-biz',
  'wp-child-theme-hello-biz-child',
  'eio-default',
  'ehbiz-default',
  'elementor-default',
  'elementor-template-canvas',
  'elementor-kit-11',
  'elementor-page',
  'elementor-page-76',
].join(' ');

// Analytics (measurement brief, 13 October 2026): the production snippet, GTM and GA4 load only on
// veryaquafaba.com and www.veryaquafaba.com; develop and localhost load no snippet at all, so tests
// never reach the live data. The same script records which samples or
// technical sheets button led to a form (props.intent) and sends ai-assistant-visit once per session.
const AI_SOURCES = ['chatgpt.com', 'chat.openai.com', 'perplexity.ai', 'gemini.google.com', 'copilot.microsoft.com', 'copilot.com', 'claude.ai'];
const TRACKING_LOADER = `(function(){
var h=location.hostname,prod=h==='veryaquafaba.com'||h==='www.veryaquafaba.com';
document.addEventListener('click',function(e){var el=e.target.closest&&e.target.closest('[data-cta="samples"],[data-cta="technical-sheets"]');if(el&&!el.closest('dialog')){try{sessionStorage.setItem('cta-intent',el.getAttribute('data-cta'))}catch(x){}}},true);
if(prod){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MT3HRS99');
var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=G-ND2TPEYLRH';document.head.appendChild(g);
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config','G-ND2TPEYLRH');}
if(!prod)return;
var s=document.createElement('script');s.src='https://app.seo-programatico.com/an.js';s.setAttribute('data-site','veryaquafaba-c-fygkmw');
s.onload=function(){try{var AI=${JSON.stringify(AI_SOURCES)};var ref=document.referrer?new URL(document.referrer).hostname.replace(/^www\\./,''):'';var utm=(new URLSearchParams(location.search).get('utm_source')||'').toLowerCase();var source=AI.find(function(d){return ref===d||ref.endsWith('.'+d)||utm.indexOf(d)>-1;});if(source&&window.an&&!sessionStorage.getItem('ai-visit-sent')){window.an.track('CONVERSION',{goal_key:'ai-assistant-visit',props:{source:source}});sessionStorage.setItem('ai-visit-sent','1');}}catch(e){}};
document.head.appendChild(s);})();`;

// GTM noscript fallback: production builds only (no script means no hostname check).
const TRACKING = process.env.VERCEL_ENV === 'production';

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* ponytail: one root layout serves every locale, so the page language is set from the URL
            before first paint (Google and screen readers read the rendered DOM). Ceiling: the raw
            HTML still says en-GB; upgrade path is one root layout per locale (route groups). */}
        <script dangerouslySetInnerHTML={{ __html: "(function(){var m=location.pathname.match(/^\\/(de|fr|nl|es)(\\/|$)/);if(m)document.documentElement.lang=m[1];})();" }} />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script dangerouslySetInnerHTML={{ __html: TRACKING_LOADER }} />
        <link rel="stylesheet" href="https://use.typekit.net/erx6ovq.css" precedence="frozen" />
        {frozenStyles.map((href) => <link key={href} rel="stylesheet" href={href} precedence="frozen" />)}
        <link rel="stylesheet" href="/wp-custom.css" precedence="frozen" />
      </head>
      <body data-rsssl="1" className={bodyClass} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        {TRACKING ? <noscript dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MT3HRS99" height="0" width="0" style="display:none;visibility:hidden"></iframe>' }} /> : null}
        {children}
        <SwitcherToggle />
      </body>
    </html>
  );
}
