export default function RecipeIndexHero({ content }) {
  return (
    <section
      className="elementor-element elementor-element-f835883 e-flex e-con-boxed e-con e-parent"
      data-id="f835883"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-5529704 elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="5529704" data-element_type="widget" data-widget_type="image.default">
          <img decoding="async" width="800" height="800" src={content.desktopTitleImage} className="attachment-large size-large wp-image-924" alt="" />
        </div>
        <div className="elementor-element elementor-element-b391083 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-id="b391083" data-element_type="widget" data-widget_type="image.default">
          <img decoding="async" width="800" height="800" src={content.mobileTitleImage} className="attachment-large size-large wp-image-2204" alt="Resources and recipes" />
        </div>
        <div className="elementor-element elementor-element-3a85b90 elementor-widget elementor-widget-heading" data-id="3a85b90" data-element_type="widget" data-widget_type="heading.default">
          <h1 className="elementor-heading-title elementor-size-default">{content.title}</h1>
        </div>
      </div>
    </section>
  );
}
