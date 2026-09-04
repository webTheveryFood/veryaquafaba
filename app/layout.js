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

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MT3HRS99');" }} />
        {/* Google tag (gtag.js) — GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ND2TPEYLRH" />
        <script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-ND2TPEYLRH');" }} />
        <link rel="stylesheet" href="https://use.typekit.net/erx6ovq.css" precedence="frozen" />
        {frozenStyles.map((href) => <link key={href} rel="stylesheet" href={href} precedence="frozen" />)}
        <link rel="stylesheet" href="/wp-custom.css" precedence="frozen" />
        <script src="https://app.seo-programatico.com/an.js" data-site="veryaquafaba-c-fygkmw" defer></script>
      </head>
      <body data-rsssl="1" className={bodyClass} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MT3HRS99" height="0" width="0" style="display:none;visibility:hidden"></iframe>' }} />
        {children}
        <SwitcherToggle />
      </body>
    </html>
  );
}
