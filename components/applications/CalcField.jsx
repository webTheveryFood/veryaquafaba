// The number field of every calculator: label in small caps above, the number in a cream box with its unit as a
// suffix inside it, so label and unit never read as one line. A text input with a numeric keyboard, not
// type="number" (no spin arrows, no wheel changes, the field can be emptied); commas count as decimal points.
// calculator-use: the first time a visitor types into any calculator field of a page, one CONVERSION for that page
// (every calculator is built on this field); the figures a page opens with send nothing.
import { track } from '../buy/contact-tracking';

const used = new Set();
function markUse() {
  if (used.has(location.pathname)) return;
  used.add(location.pathname);
  track('CONVERSION', { goal_key: 'calculator-use' });
}

export default function CalcField({ label, unit, value, onChange, decimals = false, type = 'text' }) {
  return (
    <label className="va-calc-field">
      <span className="va-calc-field-label">{label}</span>
      <span className="va-calc-field-box">
        {type === 'date' ? <input type="date" value={value} onChange={(e) => { markUse(); onChange(e.target.value); }} /> : (
          <input type="text" inputMode={decimals ? 'decimal' : 'numeric'} autoComplete="off" placeholder="0" value={value}
            onChange={(e) => { markUse(); onChange(e.target.value.replace(decimals ? /[^0-9.,]/g : /[^0-9]/g, '')); }} />
        )}
        {unit ? <span className="va-calc-field-unit" aria-hidden="true">{unit}</span> : null}
      </span>
    </label>
  );
}
