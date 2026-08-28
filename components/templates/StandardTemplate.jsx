import ProgrammaticPageTemplate from './ProgrammaticPageTemplate';

export default function StandardTemplate(props) {
  return <ProgrammaticPageTemplate {...props} template={props.page.type || 'generic'} />;
}
