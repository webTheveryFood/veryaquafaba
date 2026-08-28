import ActionButton from '../shared/ActionButton';
import ElementorReveal from '../shared/ElementorReveal';
import { ChickpeaIcon } from './Icons';

export default function TechnicalSpecs({ content }) {
  return (
    <section className="elementor-element elementor-element-8b48e9f e-flex e-con-boxed e-con e-parent" data-id="8b48e9f" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-0647ff1 elementor-widget elementor-widget-heading" data-id="0647ff1" data-element_type="widget" data-widget_type="heading.default">
          <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
        </div>
        <ElementorReveal
          slow
          animation="slideInUp"
          className="elementor-element elementor-element-3e61e4f elementor-widget-mobile__width-inherit elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
          data-id="3e61e4f"
          data-element_type="widget"
          data-settings='{"_animation":"slideInUp"}'
          data-widget_type="icon-list.default"
        >
          <ul className="elementor-icon-list-items">
            {content.items.map((item) => (
              <li className="elementor-icon-list-item" key={item}>
                <span className="elementor-icon-list-icon"><ChickpeaIcon /></span>
                <span className="elementor-icon-list-text">{item}</span>
              </li>
            ))}
          </ul>
        </ElementorReveal>
        <div className="elementor-element elementor-element-2838bf5 e-con-full e-flex e-con e-child" data-id="2838bf5" data-element_type="container">
          <div className="elementor-element elementor-element-aa598cf e-con-full e-flex e-con e-child" data-id="aa598cf" data-element_type="container">
            <ActionButton elementId="b0f9346" href={content.action.href}>{content.action.label}</ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
