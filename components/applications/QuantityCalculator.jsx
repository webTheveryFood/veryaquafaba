'use client';

import { useState } from 'react';

// Quantity calculator of an application guide (set-2): scales the recipe's reference batch
// to the number of batches or pieces the visitor types. All figures come from the page
// data (facts.json through data/resources/children.js); nothing is stored or sent. The
// first render is the reference batch, so the numbers exist in the static HTML.
export default function QuantityCalculator({ data }) {
  const { labels, localeTag, noSpace, reference: r, fixed } = data;
  const [mode, setMode] = useState(r.yield ? 'pieces' : 'batches');
  const [qty, setQty] = useState(r.yield ? r.yield.count : 1);
  const batches = Number.isFinite(qty) && qty > 0 ? (mode === 'pieces' && r.yield ? qty / r.yield.count : qty) : 0;

  const n = (v, digits) => Number(v).toLocaleString(localeTag, { maximumFractionDigits: digits });
  const unit = (v, u, digits = 0) => `${n(v, digits)}${noSpace && (u === 'g' || u === 'ml') ? '' : ' '}${u}`;

  const rows = [
    [labels.liquid, unit(r.dose * batches, 'g')],
    [labels.powder, unit(r.powder * batches, 'g', 1)],
    [labels.water, unit(r.water * batches, 'ml')],
    ...r.ingredients.map((i) => [i.label, unit(i.value * batches, i.unit)]),
    r.eggWhites != null ? [labels.eggWhites, n(r.eggWhites * batches, 1)] : null,
    r.yield ? [labels.makes, `${r.yield.approx ? `${r.yield.approx} ` : ''}${n(r.yield.count * batches, 0)} ${r.yield.unit}`] : null,
    [labels.batchesOut, n(batches, 2)],
  ].filter(Boolean);

  const onQty = (e) => { const v = parseFloat(e.target.value); setQty(Number.isFinite(v) ? v : 0); };

  return (
    <div className="va-guide-calc">
      {/* Not a <form>: the analytics snippet counts a focus inside a form as FORM_START,
          and the calculator is not a lead form. */}
      <div className="va-guide-form va-guide-calc-form">
        <div className="va-guide-form-grid">
          {r.yield ? (
            <label>{labels.mode}
              <select value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value="pieces">{labels.pieces}</option>
                <option value="batches">{labels.batches}</option>
              </select>
            </label>
          ) : null}
          <label>{labels.quantity}<input type="number" inputMode="decimal" min="0" step={mode === 'pieces' ? 1 : 0.5} value={qty} onChange={onQty} /></label>
        </div>
      </div>
      <table className="va-guide-table">
        <caption>{labels.result}</caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>
          ))}
        </tbody>
      </table>
      {fixed.length ? (
        <>
          <p className="va-guide-calc-note">{labels.note}</p>
          <table className="va-guide-table">
            <caption>{labels.fixed}</caption>
            <tbody>
              {fixed.map((f) => (
                <tr key={f.label}><th scope="row">{f.label}</th><td>{f.value}</td></tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
}
