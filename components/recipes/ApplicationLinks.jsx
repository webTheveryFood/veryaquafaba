import RecipeGuideIcon from './RecipeGuideIcon';

// "Professional applications" block on the four recipe hubs, linking to the six
// application decision pages of the same locale. Reuses the guides' Elementor
// element ids so the frozen post-87 CSS styles it like the guides block
// (data-id is a CSS hook only; no Elementor JS runs on these pages).
const ITEM_IDS = ['ecfefa4', 'd97ffc1', 'd3ccec6', '9a09011', '2fb63e2', 'ecfefa4'];

export default function ApplicationLinks({ content }) {
  if (!content?.items?.length) return null;
  return (
    <section
      className="elementor-element elementor-element-e3f851f e-flex e-con-boxed e-con e-parent va-app-links"
      data-id="e3f851f"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-a9a3669 elementor-widget elementor-widget-heading" data-id="a9a3669" data-element_type="widget" data-widget_type="heading.default">
          <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
        </div>
        <div className="elementor-element elementor-element-d32c685 e-flex e-con-boxed e-con e-child" data-id="d32c685" data-element_type="container">
          <div className="e-con-inner">
            {content.items.map((item, index) => (
              <div
                key={item.href}
                className={`elementor-element elementor-element-${ITEM_IDS[index]} elementor-widget__width-auto elementor-mobile-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list`}
                data-id={ITEM_IDS[index]}
                data-element_type="widget"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
