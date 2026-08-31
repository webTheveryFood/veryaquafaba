import './native.css';
import './programmatic.css';
import SwitcherToggle from '../components/native/SwitcherToggle';

export const metadata = {
  metadataBase: new URL('https://veryaquafaba.com'),
  applicationName: 'VERY AQUAFABA',
};

const frozenStyles = [
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
  '/wp-content/uploads/elementor/css/post-85.css',
  '/wp-content/uploads/elementor/css/post-87.css',
  '/wp-content/uploads/elementor/css/post-2883.css',
  '/wp-content/uploads/elementor/css/post-2974.css',
  '/wp-content/uploads/elementor/css/post-3023.css',
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
        <link rel="stylesheet" href="https://use.typekit.net/erx6ovq.css" />
        {frozenStyles.map((href) => <link key={href} rel="stylesheet" href={href} />)}
        <link rel="stylesheet" href="/wp-custom.css" />
      </head>
      <body data-rsssl="1" className={bodyClass} suppressHydrationWarning>
        {children}
        <SwitcherToggle />
      </body>
    </html>
  );
}
