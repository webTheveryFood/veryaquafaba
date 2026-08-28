const leftIds = [
  ['1c7f62d','b976e4c','23db114'],
  ['e1b56c0','e7c22b1','eb70e5d'],
  ['af7ca22','7f05910','46f8fd2'],
  ['e076bcc','5553c6e','d85258d'],
];
const rightIds = [
  ['096f530','cbd023c','9385fca'],
  ['26da5af','0adecd7','6fa9e08'],
  ['877ae5c','992b34e','d765cd9'],
  ['eada694','3bf15c0','ae0a90f'],
  ['0a6ab2c','4a23751','2af186d'],
];

function Lines({ text }) {
  const parts = text.split('\n');
  return <>{parts.map((part, index) => <span key={`${part}-${index}`}>{index ? <br /> : null}{part}</span>)}</>;
}

function FaqItem({ item, ids }) {
  return (
    <div className={`elementor-element elementor-element-${ids[0]} e-con-full e-flex e-con e-child`} data-id={ids[0]} data-element_type="container">
      <div className={`elementor-element elementor-element-${ids[1]} elementor-widget elementor-widget-text-editor`} data-id={ids[1]} data-element_type="widget" data-widget_type="text-editor.default"><p>{item.question}</p></div>
      <div className={`elementor-element elementor-element-${ids[2]} elementor-widget elementor-widget-text-editor`} data-id={ids[2]} data-element_type="widget" data-widget_type="text-editor.default"><p><Lines text={item.answer} /></p></div>
    </div>
  );
}

export default function ProductFaq({ content }) {
  return (
    <section className="elementor-element elementor-element-751845f e-flex e-con-boxed e-con e-parent" data-id="751845f" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-d6165ed e-flex e-con-boxed e-con e-child" data-id="d6165ed" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-076e65d elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="076e65d" data-element_type="widget" data-widget_type="heading.default"><h2 className="elementor-heading-title elementor-size-default">{content.title}</h2></div>
            <div className="elementor-element elementor-element-30335b9 e-flex e-con-boxed e-con e-child" data-id="30335b9" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-544453f e-con-full e-flex e-con e-child" data-id="544453f" data-element_type="container" data-settings='{"background_background":"classic"}'>
                  {content.items.slice(0, 4).map((item, index) => <FaqItem key={item.question} item={item} ids={leftIds[index]} />)}
                </div>
                <div className="elementor-element elementor-element-2176453 e-con-full e-flex e-con e-child" data-id="2176453" data-element_type="container" data-settings='{"background_background":"classic"}'>
                  {content.items.slice(4).map((item, index) => <FaqItem key={item.question} item={item} ids={rightIds[index]} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
