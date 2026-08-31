import ActionButton from '../shared/ActionButton';

const productIds = {
  powder: {
    root: '0bdf6d0',
    body: '05bb912',
    titleWrap: '8145b11',
    title: '1ba9a53',
    packWrap: 'c82cb4a',
    pack: '897a5eb',
    text: '5bc42c3',
  },
  liquid: {
    root: 'e8916c7',
    body: '2e07113',
    titleWrap: 'b786c0e',
    title: 'bbb71e4',
    packWrap: '673e02d',
    pack: 'ed2a986',
    text: '34b61d7',
  },
};

function ProductColumn({ product }) {
  const ids = productIds[product.key];
  return (
    <div className={`elementor-element elementor-element-${ids.root} e-con-full e-flex e-con e-child`} data-id={ids.root} data-element_type="container">
      <div className={`elementor-element elementor-element-${ids.body} e-con-full e-flex e-con e-child`} data-id={ids.body} data-element_type="container">
        <div className={`elementor-element elementor-element-${ids.titleWrap} e-con-full e-flex e-con e-child`} data-id={ids.titleWrap} data-element_type="container">
          <div className={`elementor-element elementor-element-${ids.title} elementor-widget elementor-widget-image`} data-id={ids.title} data-element_type="widget" data-widget_type="image.default">
            <img loading="lazy" decoding="async" width="800" height="800" src={product.titleImage} className="attachment-large size-large" alt={product.titleAlt ?? (product.key === 'powder' ? 'Title Aquafaba Powder' : 'Title Aquafaba Liquid')} />
          </div>
        </div>
        <div className={`elementor-element elementor-element-${ids.packWrap} e-con-full e-flex e-con e-child`} data-id={ids.packWrap} data-element_type="container">
          <div className={`elementor-element elementor-element-${ids.pack} elementor-widget elementor-widget-image`} data-id={ids.pack} data-element_type="widget" data-widget_type="image.default">
            <img loading="lazy" decoding="async" width="717" height={product.key === 'powder' ? '768' : '769'} src={product.packImage} srcSet={product.packSrcSet} sizes="(max-width: 717px) 100vw, 717px" className="attachment-large size-large" alt={product.alt} />
          </div>
        </div>
      </div>
      <div className={`elementor-element elementor-element-${ids.text} elementor-widget elementor-widget-text-editor`} data-id={ids.text} data-element_type="widget" data-widget_type="text-editor.default">
        <p>{product.text}</p>
      </div>
    </div>
  );
}

export default function RecipeProductCTA({ content }) {
  return (
    <section
      className="elementor-element elementor-element-d84029e e-flex e-con-boxed e-con e-parent"
      data-id="d84029e"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-421dcab e-con-full e-flex e-con e-child" data-id="421dcab" data-element_type="container">
          <div className="elementor-element elementor-element-ae6ce6a elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="ae6ce6a" data-element_type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
          </div>
          <div className="elementor-element elementor-element-0adf74f elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="0adf74f" data-element_type="widget" data-widget_type="heading.default">
            <h3 className="elementor-heading-title elementor-size-default">{content.subtitle}</h3>
          </div>
        </div>

        <div className="elementor-element elementor-element-9d3515c e-flex e-con-boxed e-con e-child" data-id="9d3515c" data-element_type="container">
          <div className="e-con-inner">
            {content.products.map((product) => <ProductColumn key={product.key} product={product} />)}
          </div>
        </div>

        <ActionButton elementId="9ee9a76" href={content.action.href}>{content.action.label}</ActionButton>
      </div>
    </section>
  );
}
