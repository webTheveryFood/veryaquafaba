import ElementorReveal from '../shared/ElementorReveal';
import RecipeGuideIcon from './RecipeGuideIcon';

const guideWidgets = [
  ['ecfefa4', true],
  ['d97ffc1', false],
  ['d3ccec6', true],
  ['9a09011', false],
  ['2fb63e2', true],
];

export default function RecipeGuides({ intro, guides }) {
  return (
    <section
      className="elementor-element elementor-element-e3f851f e-flex e-con-boxed e-con e-parent"
      data-id="e3f851f"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-cc42c61 e-flex e-con-boxed e-con e-child" data-id="cc42c61" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-022269e elementor-widget__width-inherit elementor-widget elementor-widget-text-editor" data-id="022269e" data-element_type="widget" data-widget_type="text-editor.default">
              <p dangerouslySetInnerHTML={{ __html: intro.leadHtml }} />
            </div>
            <div
              className="elementor-element elementor-element-dc5701f elementor-widget__width-inherit elementor-widget elementor-widget-text-editor"
              data-id="dc5701f"
              data-element_type="widget"
              data-widget_type="text-editor.default"
              dangerouslySetInnerHTML={{ __html: `<p>${intro.splitHtml}</p>` }}
            />
          </div>
        </div>

        <div className="elementor-element elementor-element-a9a3669 elementor-widget elementor-widget-heading" data-id="a9a3669" data-element_type="widget" data-widget_type="heading.default">
          <h2 className="elementor-heading-title elementor-size-default">{guides.title}</h2>
        </div>

        <div className="elementor-element elementor-element-d32c685 e-flex e-con-boxed e-con e-child" data-id="d32c685" data-element_type="container">
          <div className="e-con-inner">
            {guides.items.map((item, index) => {
              const [elementId, autoWidth] = guideWidgets[index];
              return (
                <ElementorReveal
                  key={item.label}
                  slow
                  animation="slideInUp"
                  className={`elementor-element elementor-element-${elementId}${autoWidth ? ' elementor-widget__width-auto' : ''} elementor-mobile-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list`}
                  data-id={elementId}
                  data-element_type="widget"
                  data-settings='{"_animation":"slideInUp"}'
                  data-widget_type="icon-list.default"
                >
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <a href={item.href}>
                        <span className="elementor-icon-list-icon"><RecipeGuideIcon /></span>
                        <span className="elementor-icon-list-text">{item.label}</span>
                      </a>
                    </li>
                  </ul>
                </ElementorReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
