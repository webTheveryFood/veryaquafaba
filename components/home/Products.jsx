import ActionButton from '../shared/ActionButton';

const ids = {
  powder: {
    wrapper: 'af3596f',
    card: 'e0b9f1b',
    titleWrap: 'a7a0d7d',
    title: '81dc738',
    packWrap: '571108e',
    pack: '27c27fe',
    text: '037988e',
  },
  liquid: {
    wrapper: '36ecaa2',
    card: '73b1e48',
    titleWrap: 'ad4345d',
    title: 'ed9dd06',
    packWrap: '3d2f40f',
    pack: '6315896',
    text: 'fd1b354',
  },
};

function ProductCard({ item }) {
  const elementIds = ids[item.key];
  return (
    <div className={`elementor-element elementor-element-${elementIds.wrapper} e-con-full e-flex e-con e-child`} data-id={elementIds.wrapper} data-element_type="container">
      <div className={`elementor-element elementor-element-${elementIds.card} e-con-full e-flex e-con e-child`} data-id={elementIds.card} data-element_type="container">
        <div className={`elementor-element elementor-element-${elementIds.titleWrap} e-con-full e-flex e-con e-child`} data-id={elementIds.titleWrap} data-element_type="container">
          <div className={`elementor-element elementor-element-${elementIds.title} elementor-widget elementor-widget-image`} data-id={elementIds.title} data-element_type="widget" data-widget_type="image.default">
            <img loading="lazy" decoding="async" width="800" height="800" src={item.titleImage} className="attachment-large size-large" alt={item.titleAlt ?? `Title Aquafaba ${item.key === 'powder' ? 'Powder' : 'Liquid'}`} />
          </div>
        </div>
        <div className={`elementor-element elementor-element-${elementIds.packWrap} e-con-full e-flex e-con e-child`} data-id={elementIds.packWrap} data-element_type="container">
          <div className={`elementor-element elementor-element-${elementIds.pack} elementor-widget elementor-widget-image`} data-id={elementIds.pack} data-element_type="widget" data-widget_type="image.default">
            <img loading="lazy" decoding="async" width="717" height={item.key === 'powder' ? '768' : '769'} src={item.packImage} className="attachment-medium_large size-medium_large" alt={item.packAlt || `Aquafaba ${item.key}`} srcSet={item.packSrcSet} sizes="(max-width: 717px) 100vw, 717px" />
          </div>
        </div>
      </div>
      <div className={`elementor-element elementor-element-${elementIds.text} elementor-widget elementor-widget-text-editor`} data-id={elementIds.text} data-element_type="widget" data-widget_type="text-editor.default">
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default function Products({ content }) {
  return (
    <section className="elementor-element elementor-element-b0ed6a6 e-flex e-con-boxed e-con e-parent" data-id="b0ed6a6" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-b27d87c e-con-full e-flex e-con e-child" data-id="b27d87c" data-element_type="container">
          <div className="elementor-element elementor-element-d66e1cc elementor-widget elementor-widget-heading" data-id="d66e1cc" data-element_type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
          </div>
          <div className="elementor-element elementor-element-d0786ad elementor-widget elementor-widget-heading" data-id="d0786ad" data-element_type="widget" data-widget_type="heading.default">
            <h3 className="elementor-heading-title elementor-size-default">{content.subtitle}</h3>
          </div>
        </div>
        <div className="elementor-element elementor-element-91d531a e-con-full e-flex e-con e-child" data-id="91d531a" data-element_type="container">
          {content.items.map((item) => <ProductCard key={item.key} item={item} />)}
        </div>
        <ActionButton href={content.action.href} elementId="6a89726">{content.action.label}</ActionButton>
      </div>
    </section>
  );
}
