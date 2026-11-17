// The number field of every calculator: label in small caps above, the number in a cream box with its unit as a
// suffix inside it, so label and unit never read as one line. A text input with a numeric keyboard, not
// type="number" (no spin arrows, no wheel changes, the field can be emptied); commas count as decimal points.
export default function CalcField({ label, unit, value, onChange, decimals = false, type = 'text' }) {
  return (
    <label className="va-calc-field">
      <span className="va-calc-field-label">{label}</span>
      <span className="va-calc-field-box">
        {type === 'date' ? <input type="date" value={value} onChange={(e) => onChange(e.target.value)} /> : (
          <input type="text" inputMode={decimals ? 'decimal' : 'numeric'} autoComplete="off" placeholder="0" value={value}
            onChange={(e) => onChange(e.target.value.replace(decimals ? /[^0-9.,]/g : /[^0-9]/g, ''))} />
        )}
        {unit ? <span className="va-calc-field-unit" aria-hidden="true">{unit}</span> : null}
      </span>
    </label>
  );
}
