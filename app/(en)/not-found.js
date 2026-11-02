import StandardTemplate from '../../components/templates/StandardTemplate';

// English has no 404 page in the registry (/404-error/ redirects home), so it is written here, like the other languages'.
const content = {
  locale: 'en',
  kind: 'utility',
  hero: { title: "Oops, this page doesn't exist" },
  sections: [],
  cta: { title: "Oops, this page doesn't exist", href: '/', label: 'Back to home' },
};

export default function NotFound() {
  return <StandardTemplate page={{ route: '/404-error/', type: 'utility', locale: 'en-GB' }} nativeContent={content} translations={{}} />;
}
