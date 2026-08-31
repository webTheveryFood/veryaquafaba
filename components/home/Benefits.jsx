import ElementorReveal from '../shared/ElementorReveal';

const ids = [
  ['1b0240f', '1f52628', '2af3b84'],
  ['83f299b', 'c2d7734', '1ee4ea0'],
  ['db51068', 'ad34745', 'bcd68de'],
  ['8a367b3', 'e2c39c3', '0700632'],
  ['f75f393', '8212592', 'c295428'],
];

// The icons enter with a fadeIn as they scroll into view — matches the original
// Elementor `_animation: fadeIn` on each image widget. ElementorReveal keeps them
// rendered visible and adds the animation only as a scroll-triggered enhancement.
function BenefitItem({ item, index }) {
  const [wrap, imageId, textId] = ids[index];
  return (
    <div className={`elementor-element elementor-element-${wrap} e-con-full e-flex e-con e-child`} data-id={wrap} data-element_type="container">
      <ElementorReveal
        slow
        animation="fadeIn"
        className={`elementor-element elementor-element-${imageId} elementor-widget elementor-widget-image`}
        data-id={imageId}
        data-element_type="widget"
        data-settings='{"_animation":"fadeIn"}'
        data-widget_type="image.default"
      >
        <img loading="lazy" decoding="async" width="800" height="800" src={item.image} className="attachment-large size-large" alt={item.alt} />
      </ElementorReveal>
      <div className={`elementor-element elementor-element-${textId} elementor-widget elementor-widget-text-editor`} data-id={textId} data-element_type="widget" data-widget_type="text-editor.default">
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default function Benefits({ content }) {
  return (
    <section className="elementor-element elementor-element-7a22127 e-flex e-con-boxed e-con e-parent" data-id="7a22127" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-b1c7aca elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="b1c7aca" data-element_type="widget" data-widget_type="heading.default">
          <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
        </div>
        <div className="elementor-element elementor-element-c7729e9 e-con-full e-flex e-con e-child" data-id="c7729e9" data-element_type="container">
          <div className="elementor-element elementor-element-4300423 e-con-full e-flex e-con e-child" data-id="4300423" data-element_type="container">
            {content.items.slice(0, 3).map((item, index) => (
              <BenefitItem item={item} index={index} key={item.image} />
            ))}
          </div>
          <div className="elementor-element elementor-element-6e2b5ca e-con-full e-flex e-con e-child" data-id="6e2b5ca" data-element_type="container">
            {content.items.slice(3).map((item, offset) => (
              <BenefitItem item={item} index={offset + 3} key={item.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
