const cardIds = [
  { wrap: '0b8409e', title: '6bef4aa', image: 'f59c732', tag: 'h5', width: '208' },
  { wrap: '01377bb', title: 'eb3fcd8', image: '497ac7f', tag: 'h4', width: '209' },
  { wrap: '897a49e', title: '3b70cb0', image: '6e2115b', tag: 'h4', width: '208' },
  { wrap: '4cd2d15', title: 'ed44fa5', image: '7f0167b', tag: 'h4', width: '209' },
  { wrap: '8a0634a', title: '2f629a0', image: 'b9e3ae3', tag: 'h4', width: '208' },
  { wrap: '39df803', title: '3802993', image: '95b6852', tag: 'h4', width: '209' },
];

function MultilineTitle({ text }) {
  const [first, second] = text.split('\n');
  return <>{first}{second ? <><br />{second}</> : null}</>;
}

export default function RecipeCards({ content }) {
  return (
    <section
      className="elementor-element elementor-element-bb446f0 e-flex e-con-boxed e-con e-parent"
      data-id="bb446f0"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-8aaf12d elementor-widget elementor-widget-heading" data-id="8aaf12d" data-element_type="widget" data-widget_type="heading.default">
          <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
        </div>
        <div className="elementor-element elementor-element-fee2514 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="fee2514" data-element_type="widget" data-widget_type="heading.default">
          <h3 className="elementor-heading-title elementor-size-default">{content.subtitle}</h3>
        </div>

        <div className="elementor-element elementor-element-338a4ab e-con-full e-flex e-con e-child" data-id="338a4ab" data-element_type="container">
          {content.items.map((item, index) => {
            const ids = cardIds[index];
            const Heading = ids.tag;
            return (
              <div className={`elementor-element elementor-element-${ids.wrap} e-con-full e-flex e-con e-child`} data-id={ids.wrap} data-element_type="container" key={item.title}>
                <div className={`elementor-element elementor-element-${ids.title} elementor-widget elementor-widget-heading`} data-id={ids.title} data-element_type="widget" data-widget_type="heading.default">
                  <Heading className="elementor-heading-title elementor-size-default"><MultilineTitle text={item.title} /></Heading>
                </div>
                <div className={`elementor-element elementor-element-${ids.image} elementor-widget elementor-widget-image`} data-id={ids.image} data-element_type="widget" data-widget_type="image.default">
                  <a href={item.href}>
                    <img loading="lazy" decoding="async" width={ids.width} height="256" src={item.image} className="attachment-medium_large size-medium_large" alt={item.alt} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="elementor-element elementor-element-d41f9c2 elementor-widget elementor-widget-image" data-id="d41f9c2" data-element_type="widget" data-widget_type="image.default">
          <img loading="lazy" decoding="async" width="800" height="800" src={content.banner} className="attachment-large size-large wp-image-461" alt="" />
        </div>
      </div>
    </section>
  );
}
