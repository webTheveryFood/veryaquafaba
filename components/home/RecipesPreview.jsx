const ids = [
  ['2197d69', '990c122', 'db3cdb8', '1bfbcfc', 'h5'],
  ['cd573fa', '041436f', 'f6052a7', '9d31bed', 'h4'],
  ['b58fa08', 'cd84efc', 'ea5b3f2', '9f8e7f7', 'h4'],
  ['7e0de66', '62f6cea', 'e1438df', '6ff7cfd', 'h4'],
  ['6a62915', 'e179814', '6e4e17c', '04d0eb1', 'h4'],
  ['b07885d', '98da7dd', '80a9695', 'ef24dbe', 'h4'],
];

export default function RecipesPreview({ content }) {
  return (
    <section className="elementor-element elementor-element-6298ae0 e-flex e-con-boxed e-con e-parent" data-id="6298ae0" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-ffc3e99 elementor-widget elementor-widget-heading" data-id="ffc3e99" data-element_type="widget" data-widget_type="heading.default">
          <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
        </div>
        <div className="elementor-element elementor-element-63029b3 elementor-widget elementor-widget-heading" data-id="63029b3" data-element_type="widget" data-widget_type="heading.default">
          <h3 className="elementor-heading-title elementor-size-default">{content.subtitle}</h3>
        </div>
        <div className="elementor-element elementor-element-1da4afa e-con-full e-flex e-con e-child" data-id="1da4afa" data-element_type="container">
          {content.items.map((item, index) => {
            const [wrap, titleId, imageId, textId, headingTag] = ids[index];
            const Heading = headingTag;
            return (
              <div className={`elementor-element elementor-element-${wrap} e-con-full e-flex e-con e-child`} data-id={wrap} data-element_type="container" key={item.title}>
                <div className={`elementor-element elementor-element-${titleId} elementor-widget elementor-widget-heading`} data-id={titleId} data-element_type="widget" data-widget_type="heading.default">
                  <Heading className="elementor-heading-title elementor-size-default">{item.title}</Heading>
                </div>
                <div className={`elementor-element elementor-element-${imageId} elementor-widget elementor-widget-image`} data-id={imageId} data-element_type="widget" data-widget_type="image.default">
                  <img loading="lazy" decoding="async" width={index === 1 || index === 3 || index === 5 ? '209' : '208'} height="256" src={item.image} className="attachment-medium_large size-medium_large" alt={item.alt} />
                </div>
                <div className={`elementor-element elementor-element-${textId} elementor-widget elementor-widget-text-editor`} data-id={textId} data-element_type="widget" data-widget_type="text-editor.default">
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
