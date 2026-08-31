import ActionButton from '../shared/ActionButton';

function ProductColumn({ product, ids }) {
  return (
    <div className={`elementor-element elementor-element-${ids.column} e-con-full e-flex e-con e-child`} data-id={ids.column} data-element_type="container">
      <div className={`elementor-element elementor-element-${ids.row} e-con-full e-flex e-con e-child`} data-id={ids.row} data-element_type="container">
        <div className={`elementor-element elementor-element-${ids.titleWrap} e-con-full e-flex e-con e-child`} data-id={ids.titleWrap} data-element_type="container">
          <div className={`elementor-element elementor-element-${ids.title} elementor-widget elementor-widget-image`} data-id={ids.title} data-element_type="widget" data-widget_type="image.default">
            <img loading="lazy" decoding="async" width="800" height="800" src={product.titleImage} className="attachment-large size-large" alt={product.titleAlt ?? (product.key === 'powder' ? 'Title Aquafaba Powder' : 'Title Aquafaba Liquid')} />
          </div>
        </div>
        <div className={`elementor-element elementor-element-${ids.packWrap} e-con-full e-flex e-con e-child`} data-id={ids.packWrap} data-element_type="container">
          <div className={`elementor-element elementor-element-${ids.pack} elementor-widget elementor-widget-image`} data-id={ids.pack} data-element_type="widget" data-widget_type="image.default">
            <img loading="lazy" decoding="async" width="717" height="768" src={product.packImage} srcSet={product.packSrcSet} sizes="(max-width: 717px) 100vw, 717px" className="attachment-medium_large size-medium_large" alt={product.alt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuyHero({ content }) {
  const [powder, liquid] = content.products;
  const isGerman = content.title === 'Unendliche Kreationen';
  return (
    <section className="elementor-element elementor-element-e5bb889 e-flex e-con-boxed e-con e-parent" data-id="e5bb889" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-e69fb68 e-con-full e-flex e-con e-child" data-id="e69fb68" data-element_type="container">
          <div className="elementor-element elementor-element-af6d50f elementor-widget elementor-widget-image" data-id="af6d50f" data-element_type="widget" data-widget_type="image.default">
            <img decoding="async" width="800" height="84" src={content.titleImage} className="attachment-large size-large wp-image-48" alt={content.titleAlt || 'Two versions of aquafaba : Powder or Liquid'} />
          </div>
          <div className="elementor-element elementor-element-be01658 elementor-widget elementor-widget-heading" data-id="be01658" data-element_type="widget" data-widget_type="heading.default">
            <h1 className="elementor-heading-title elementor-size-default">{content.title}</h1>
          </div>
        </div>

        <div className="elementor-element elementor-element-e5aeafb e-flex e-con-boxed e-con e-child" data-id="e5aeafb" data-element_type="container">
          <div className="e-con-inner">
            <ProductColumn product={powder} ids={{ column: '3798db6', row: '1c43979', titleWrap: '7b51e6a', title: 'ee13211', packWrap: '2dabff7', pack: '8270bc8' }} />
            <ProductColumn product={liquid} ids={{ column: '39be9b3', row: '19ff480', titleWrap: 'ace3c71', title: 'f0d5e48', packWrap: 'e84ea96', pack: '2e17a46' }} />
          </div>
        </div>

        <div className="elementor-element elementor-element-bdd8b75 e-flex e-con-boxed e-con e-child" data-id="bdd8b75" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-b4776f6 e-con-full e-flex e-con e-child" data-id="b4776f6" data-element_type="container">
              <ActionButton elementId="67a3b4d" href={content.actions[0].href} align="right" tabletAlignCenter={isGerman}>{content.actions[0].label}</ActionButton>
            </div>
            <div className="elementor-element elementor-element-908b808 e-con-full e-flex e-con e-child" data-id="908b808" data-element_type="container">
              <ActionButton elementId="352cdf8" href={content.actions[1].href} align="left" tabletAlignCenter={isGerman}>{content.actions[1].label}</ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
