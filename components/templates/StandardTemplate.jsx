import ProgrammaticPageTemplate from './ProgrammaticPageTemplate';

export default function StandardTemplate(props) {
  // A page may name the design it shares (set-2 applications index uses the resources hub's).
  return <ProgrammaticPageTemplate {...props} template={props.nativeContent?.template || props.page.type || 'generic'} />;
}
