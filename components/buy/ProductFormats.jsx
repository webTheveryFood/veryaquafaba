import ActionButton from '../shared/ActionButton';
import { CircleIcon } from './Icons';

function FormatColumn({ item, ids, action }) {
  return (
    <div className={`elementor-element elementor-element-${ids.column} e-con-full e-flex e-con e-child`} data-id={ids.column} data-element_type="container">
      <div className={`elementor-element elementor-element-${ids.body} e-con-full e-flex e-con e-child`} data-id={ids.body} data-element_type="container">
        <div className={`elementor-element elementor-element-${ids.titleWrap} e-con-full e-flex e-con e-child`} data-id={ids.titleWrap} data-element_type="container">
          <div className={`elementor-element elementor-element-${ids.title} elementor-widget elementor-widget-image`} data-id={ids.title} data-element_type="widget" data-widget_type="image.default">
            <img loading="lazy" decoding="async" width="800" height="800" src={item.titleImage} className="attachment-large size-large" alt={`Titre Aquafaba ${item.altWord || item.key.toUpperCase()}`} />
          </div>
        </div>
        <div className={`elementor-element elementor-element-${ids.listWrap} e-con-full e-flex e-con e-child`} data-id={ids.listWrap} data-element_type="container">
          <div className={`elementor-element elementor-element-${ids.list} elementor-align-left elementor-widget__width-initial elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list`} data-id={ids.list} data-element_type="widget" data-widget_type="icon-list.default">
            <ul className="elementor-icon-list-items">
              {item.lines.map(([line1, line2]) => (
                <li className="elementor-icon-list-item" key={line1}>
                  <span className="elementor-icon-list-icon"><CircleIcon /></span>
                  <span className="elementor-icon-list-text">{line1}<br /> {line2}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ActionButton elementId={ids.button} href={action.href}>{action.label}</ActionButton>
    </div>
  );
}

export default function ProductFormats({ content }) {
  return (
    <section className="elementor-element elementor-element-4a0f318 e-flex e-con-boxed e-con e-parent" data-id="4a0f318" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-2855ed4 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="2855ed4" data-element_type="widget" data-widget_type="heading.default"><h2 className="elementor-heading-title elementor-size-default">{content.title}</h2></div>
        <div className="elementor-element elementor-element-4173bb8 e-flex e-con-boxed e-con e-child" data-id="4173bb8" data-element_type="container">
          <div className="e-con-inner">
            <FormatColumn item={content.items[0]} action={content.action} ids={{ column:'ea7a1db', body:'b0b7143', titleWrap:'8cb6cfa', title:'7eafbe8', listWrap:'7ffea11', list:'65ee9a2', button:'c9d0b87' }} />
            <FormatColumn item={content.items[1]} action={content.action} ids={{ column:'9052ab5', body:'89cd0b2', titleWrap:'115b221', title:'842c6c3', listWrap:'a7f8a26', list:'709703c', button:'4e34fc9' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
