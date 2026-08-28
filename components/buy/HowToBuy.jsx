import PartnerCarousel from '../shared/PartnerCarousel';

export default function HowToBuy({ content }) {
  return (
    <section className="elementor-element elementor-element-1b2fc65 e-flex e-con-boxed e-con e-parent" data-id="1b2fc65" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-9336e16 e-flex e-con-boxed e-con e-child" data-id="9336e16" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-92223fb elementor-widget elementor-widget-heading" data-id="92223fb" data-element_type="widget" data-widget_type="heading.default"><h2 className="elementor-heading-title elementor-size-default">{content.title}</h2></div>
            <div className="elementor-element elementor-element-cc5db37 elementor-widget elementor-widget-heading" data-id="cc5db37" data-element_type="widget" data-widget_type="heading.default"><h3 className="elementor-heading-title elementor-size-default">{content.subtitle}</h3></div>
          </div>
        </div>
        <div className="elementor-element elementor-element-b7d1108 e-con-full e-flex e-con e-child" data-id="b7d1108" data-element_type="container">
          <div className="elementor-element elementor-element-b32f129 elementor-widget__width-inherit elementor-widget elementor-widget-html" data-id="b32f129" data-element_type="widget" data-widget_type="html.default">
            <PartnerCarousel partners={content.partners} />
          </div>
        </div>
      </div>
    </section>
  );
}
