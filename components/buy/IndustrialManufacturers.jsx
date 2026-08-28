import ActionButton from '../shared/ActionButton';

export default function IndustrialManufacturers({ content }) {
  return (
    <section className="elementor-element elementor-element-d812e20 e-flex e-con-boxed e-con e-parent" data-id="d812e20" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-d09494b e-con-full e-flex e-con e-child" data-id="d09494b" data-element_type="container" data-settings='{"background_background":"classic"}'>
          <div className="elementor-element elementor-element-eadc66c e-flex e-con-boxed e-con e-child" data-id="eadc66c" data-element_type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-bd31047 e-flex e-con-boxed e-con e-child" data-id="bd31047" data-element_type="container">
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-c7b70ff elementor-widget elementor-widget-heading" data-id="c7b70ff" data-element_type="widget" data-widget_type="heading.default"><h2 className="elementor-heading-title elementor-size-default">{content.title}</h2></div>
                  <div className="elementor-element elementor-element-d255e5d elementor-widget elementor-widget-heading" data-id="d255e5d" data-element_type="widget" data-widget_type="heading.default"><h4 className="elementor-heading-title elementor-size-default">{content.subtitle}</h4></div>
                  <div className="elementor-element elementor-element-1fde146 elementor-widget elementor-widget-text-editor" data-id="1fde146" data-element_type="widget" data-widget_type="text-editor.default"><p>{content.text}</p></div>
                </div>
              </div>
              <ActionButton elementId="f665b29" href={content.action.href}>{content.action.label}</ActionButton>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-a9e7ec4 e-flex e-con-boxed e-con e-child" data-id="a9e7ec4" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-5b31d8d elementor-widget__width-inherit elementor-widget elementor-widget-image" data-id="5b31d8d" data-element_type="widget" data-widget_type="image.default">
              <img loading="lazy" decoding="async" width="800" height="674" src={content.image} srcSet={content.imageSrcSet} sizes="(max-width: 800px) 100vw, 800px" className="attachment-large size-large wp-image-58" alt="Portrait of an industrial pastry chef using plant-based solutions in large-scale production" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
