import { CheckIcon, EggIcon, TimesIcon } from './Icons';

const rowIds = [
  ['b6cb614','6842ec4','8e8db4a','4ce51f5','3dc3fff','9a6aabd','d8d0f80','bafb2da','b0c71ba','a62c3d5','8585332'],
  ['4aa78ab','d2736e7','9a09720','f342437','3c4bd6a','50efb53','b95443a','9ffcc2e','f099d1a','504bae7','e3a0f88'],
  ['ae46e18','46c9025','b2120cb','ea17dc3','0fa998a','c9d31a5','8bd4b49','16f5d8a','a2b4327','e26406a','408b520'],
  ['9e28d43','57f6f62','eab19c4','3111fb1','cd20c02','196a1fc','61b3976','e70acb3','2c75575','4dd9d30','fb128b3'],
  ['f31c596','9812d63','fe1b2b2','685d6e1','767911c','f8e4d9c','6477fdd','a10f9c7','87faba8','3122042','59ea5fd'],
  ['b226624','7d72ab9','6481b15','2186f27','97ddefa','abfee63','4ba64ce','d508526','56beb19','748511e','82951f4'],
  ['d076aea','d961b75','6c8adcc','486159f','6fd3809','26c3ae0','b100c9f','51ef5d8','e2e03a0','30a6db0','65f7e36'],
];

function IconWidget({ elementId, children }) {
  return (
    <div className={`elementor-element elementor-element-${elementId} elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon`} data-id={elementId} data-element_type="widget" data-widget_type="icon.default">
      <div className="elementor-icon-wrapper"><div className="elementor-icon">{children}</div></div>
    </div>
  );
}

function ComparisonRow({ row, ids }) {
  const [root, featureWrap, featureId, eggWrap, eggIconWrap, eggIconId, eggTextWrap, eggTextId, aquaWrap, aquaIconWrap, aquaIconId] = ids;
  return (
    <div className={`elementor-element elementor-element-${root} e-con-full e-flex e-con e-child`} data-id={root} data-element_type="container">
      <div className={`elementor-element elementor-element-${featureWrap} e-con-full e-flex e-con e-child`} data-id={featureWrap} data-element_type="container">
        <div className={`elementor-element elementor-element-${featureId} elementor-widget elementor-widget-text-editor`} data-id={featureId} data-element_type="widget" data-widget_type="text-editor.default"><p>{row.feature}</p></div>
      </div>
      <div className={`elementor-element elementor-element-${eggWrap} e-con-full e-flex e-con e-child`} data-id={eggWrap} data-element_type="container">
        <div className={`elementor-element elementor-element-${eggIconWrap} e-con-full e-flex e-con e-child`} data-id={eggIconWrap} data-element_type="container">
          <IconWidget elementId={eggIconId}><TimesIcon /></IconWidget>
        </div>
        <div className={`elementor-element elementor-element-${eggTextWrap} e-con-full e-flex e-con e-child`} data-id={eggTextWrap} data-element_type="container">
          <div className={`elementor-element elementor-element-${eggTextId} elementor-widget elementor-widget-text-editor`} data-id={eggTextId} data-element_type="widget" data-widget_type="text-editor.default"><p>{row.egg}</p></div>
        </div>
      </div>
      <div className={`elementor-element elementor-element-${aquaWrap} e-con-full e-flex e-con e-child`} data-id={aquaWrap} data-element_type="container">
        <div className={`elementor-element elementor-element-${aquaIconWrap} e-con-full e-flex e-con e-child`} data-id={aquaIconWrap} data-element_type="container">
          <IconWidget elementId={aquaIconId}><CheckIcon /></IconWidget>
        </div>
      </div>
    </div>
  );
}

export default function EggComparison({ content }) {
  return (
    <section className="elementor-element elementor-element-c3616d8 e-flex e-con-boxed e-con e-parent" data-id="c3616d8" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-dd26110 e-flex e-con-boxed e-con e-child" data-id="dd26110" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-b5c7384 elementor-widget elementor-widget-heading" data-id="b5c7384" data-element_type="widget" data-widget_type="heading.default"><h2 className="elementor-heading-title elementor-size-default">{content.title}</h2></div>
            <div className="elementor-element elementor-element-bd0c389 elementor-widget elementor-widget-heading" data-id="bd0c389" data-element_type="widget" data-widget_type="heading.default"><h3 className="elementor-heading-title elementor-size-default">{content.subtitle}</h3></div>
          </div>
        </div>
        <div className="elementor-element elementor-element-9cd0334 e-flex e-con-boxed e-con e-child" data-id="9cd0334" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-de4a441 e-con-full e-flex e-con e-child" data-id="de4a441" data-element_type="container">
              <div className="elementor-element elementor-element-d1c9fa7 e-con-full e-flex e-con e-child" data-id="d1c9fa7" data-element_type="container">
                <div className="elementor-element elementor-element-edd7774 elementor-widget elementor-widget-text-editor" data-id="edd7774" data-element_type="widget" data-widget_type="text-editor.default"><p>{content.featureLabel || 'FEATURE'}</p></div>
              </div>
              <div className="elementor-element elementor-element-9882928 e-con-full e-flex e-con e-child" data-id="9882928" data-element_type="container">
                <div className="elementor-element elementor-element-8bc2931 e-con-full e-flex e-con e-child" data-id="8bc2931" data-element_type="container"><IconWidget elementId="6a063f3"><EggIcon /></IconWidget></div>
                <div className="elementor-element elementor-element-2463a41 elementor-hidden-mobile elementor-widget elementor-widget-text-editor" data-id="2463a41" data-element_type="widget" data-widget_type="text-editor.default"><p>{content.eggsLabel || 'EGGS'}</p></div>
              </div>
              <div className="elementor-element elementor-element-6248872 e-con-full e-flex e-con e-child" data-id="6248872" data-element_type="container">
                <div className="elementor-element elementor-element-4d1161c elementor-widget elementor-widget-image" data-id="4d1161c" data-element_type="widget" data-widget_type="image.default"><img loading="lazy" decoding="async" width="800" height="500" src="/wp-content/uploads/2025/09/VERYAQUAFABA_LOGO_TWOLINES.svg" className="attachment-large size-large wp-image-34" alt="" /></div>
              </div>
            </div>
            <div className="elementor-element elementor-element-77cd2f6 e-con-full e-flex e-con e-child" data-id="77cd2f6" data-element_type="container"><div className="elementor-element elementor-element-1d4131a elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="1d4131a" data-element_type="widget" data-widget_type="divider.default"><div className="elementor-divider"><span className="elementor-divider-separator" /></div></div></div>
            {content.rows.map((row, index) => <ComparisonRow key={row.feature} row={row} ids={rowIds[index]} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
