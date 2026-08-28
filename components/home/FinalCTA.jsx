import ActionButton from '../shared/ActionButton';

export default function FinalCTA({ content }) {
  return (
    <section className="elementor-element elementor-element-dafde31 e-flex e-con-boxed e-con e-parent" data-id="dafde31" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-deb605e elementor-widget elementor-widget-heading" data-id="deb605e" data-element_type="widget" data-widget_type="heading.default">
          <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
        </div>
        <div className="elementor-element elementor-element-e3b408d elementor-widget elementor-widget-heading" data-id="e3b408d" data-element_type="widget" data-widget_type="heading.default">
          <h3 className="elementor-heading-title elementor-size-default">{content.subtitle}</h3>
        </div>
        <div className="elementor-element elementor-element-c084ea1 e-flex e-con-boxed e-con e-child" data-id="c084ea1" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-9651259 e-con-full e-flex e-con e-child" data-id="9651259" data-element_type="container">
              <ActionButton href={content.primaryAction.href} align="right" elementId="72ebda4">{content.primaryAction.label}</ActionButton>
            </div>
            <div className="elementor-element elementor-element-4ae1195 e-con-full e-flex e-con e-child" data-id="4ae1195" data-element_type="container">
              <ActionButton href={content.secondaryAction.href} align="left" elementId="6dba96a">{content.secondaryAction.label}</ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
