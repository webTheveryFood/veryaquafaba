import HomeTemplate from './HomeTemplate';

// The localized "what is aquafaba" pages (DE/FR/NL) are the same page as the
// English home, just translated, so they render through the native HomeTemplate.
export default function AboutTemplate(props) {
  return <HomeTemplate {...props} />;
}
