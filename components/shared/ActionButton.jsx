export default function ActionButton({ href, children, align = 'center', elementId, tabletAlignCenter = false }) {
  const alignClass =
    align === 'right'
      ? 'elementor-align-right'
      : align === 'left'
        ? 'elementor-align-left'
        : 'elementor-align-center';
  const tabletClass = tabletAlignCenter ? ' elementor-tablet-align-center' : '';

  return (
    <div
      className={`elementor-element elementor-element-${elementId} ${alignClass} elementor-widget__width-initial elementor-mobile-align-center${tabletClass} elementor-widget elementor-widget-button`}
      data-id={elementId}
      data-element_type="widget"
      data-widget_type="button.default"
    >
      <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href={href}>
        <span className="elementor-button-content-wrapper">
          <span className="elementor-button-text">{children}</span>
        </span>
      </a>
    </div>
  );
}
