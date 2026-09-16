// The site's Elementor button (look and hover/grow effects come from the page's
// post-<id>.css via elementId). Extra anchor attributes (rel, target, data-goal)
// pass through; wrapperClassName lets a page add a variant class (outlined CTA).
export default function ActionButton({ href, children, align = 'center', elementId, tabletAlignCenter = false, wrapperClassName = '', ...anchorProps }) {
  const alignClass =
    align === 'right'
      ? 'elementor-align-right'
      : align === 'left'
        ? 'elementor-align-left'
        : 'elementor-align-center';
  const tabletClass = tabletAlignCenter ? ' elementor-tablet-align-center' : '';
  const extraClass = wrapperClassName ? ` ${wrapperClassName}` : '';

  return (
    <div
      className={`elementor-element elementor-element-${elementId} ${alignClass} elementor-widget__width-initial elementor-mobile-align-center${tabletClass} elementor-widget elementor-widget-button${extraClass}`}
      data-id={elementId}
      data-element_type="widget"
      data-widget_type="button.default"
    >
      <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href={href} {...anchorProps}>
        <span className="elementor-button-content-wrapper">
          <span className="elementor-button-text">{children}</span>
        </span>
      </a>
    </div>
  );
}
