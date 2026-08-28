import ActionButton from '../shared/ActionButton';

export default function HomeHero({ hero }) {
  return (
    <section className="elementor-element elementor-element-eb1393b e-flex e-con-boxed e-con e-parent" data-id="eb1393b" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-4b73fcc e-con-full e-flex e-con e-child" data-id="4b73fcc" data-element_type="container">
          <div className="elementor-element elementor-element-559440a elementor-widget elementor-widget-image" data-id="559440a" data-element_type="widget" data-widget_type="image.default">
            <img decoding="async" width="800" height="114" src={hero.logo} className="attachment-large size-large wp-image-1924" alt="Logo Very Aquafaba, Aquafaba for individual use and bulk professional kitchens" />
          </div>
          <div className="elementor-element elementor-element-98c4be0 elementor-widget elementor-widget-heading" data-id="98c4be0" data-element_type="widget" data-widget_type="heading.default">
            <h1 className="elementor-heading-title elementor-size-default">{hero.title}</h1>
          </div>
        </div>

        <div className="elementor-element elementor-element-2f059c4 e-flex e-con-boxed e-con e-child" data-id="2f059c4" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-9026eb9 e-con-full e-flex e-con e-child" data-id="9026eb9" data-element_type="container">
              <ActionButton href={hero.primaryAction.href} align="right" elementId="2947286">{hero.primaryAction.label}</ActionButton>
            </div>
            <div className="elementor-element elementor-element-84878b1 e-con-full e-flex e-con e-child" data-id="84878b1" data-element_type="container">
              <ActionButton href={hero.secondaryAction.href} align="left" elementId="ec451f3">{hero.secondaryAction.label}</ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
