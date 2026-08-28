import PartnerCarousel from '../shared/PartnerCarousel';

export default function IndustryTrust({ content }) {
  return (
    <section className="elementor-element elementor-element-49c5902 e-flex e-con-boxed e-con e-parent" data-id="49c5902" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-5e3a7af e-con-full e-flex e-con e-child" data-id="5e3a7af" data-element_type="container">
          <div className="elementor-element elementor-element-0876d2a elementor-widget elementor-widget-heading" data-id="0876d2a" data-element_type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
          </div>
          <div className="elementor-element elementor-element-3663d0c elementor-widget elementor-widget-heading" data-id="3663d0c" data-element_type="widget" data-widget_type="heading.default">
            <h3 className="elementor-heading-title elementor-size-default">{content.subtitle}</h3>
          </div>
        </div>
        <div className="elementor-element elementor-element-7f5d40b e-con-full e-flex e-con e-child" data-id="7f5d40b" data-element_type="container">
          <div className="elementor-element elementor-element-5eef553 elementor-widget__width-inherit elementor-widget elementor-widget-html" data-id="5eef553" data-element_type="widget" data-widget_type="html.default">
            <PartnerCarousel partners={content.partners} />
          </div>
        </div>
      </div>
    </section>
  );
}
