'use client';

import { useState } from 'react';

// Quantity calculator of an application guide (set-2): scales the recipe's reference batch
// to the number of pieces or batches the visitor types. All figures come from the page
// data (facts.json through data/resources/children.js); nothing is stored or sent. The
// first render is the reference batch, so the numbers exist in the static HTML.
// The mode switch is two pill buttons, not a native select: a select inside the salmon
// panel renders its option list unreadably in several browsers.
export default function QuantityCalculator({ data }) {
  if (data.kind === 'substitution') return <SubstitutionCalculator data={data} />;
  return <BatchCalculator data={data} />;
}

// Baking: the recipe has no fixed dose, so the visitor types the eggs of their own
// formula and gets the aquafaba that replaces them (Products page ratio: 45 g per whole
// egg, 30 g per egg white, 15 g plus 10 g of oil per yolk; 2 g of powder per 30 g).
function SubstitutionCalculator({ data }) {
  const { labels, localeTag, noSpace, per } = data;
  const [eggs, setEggs] = useState(2);
  const [whites, setWhites] = useState(0);
  const [yolks, setYolks] = useState(0);
  const n = (v, digits) => Number(v).toLocaleString(localeTag, { maximumFractionDigits: digits });
  const unit = (v, u, digits = 0) => `${n(v, digits)}${noSpace && (u === 'g' || u === 'ml') ? '' : ' '}${u}`;
  const num = (setter) => (e) => { const v = parseInt(e.target.value, 10); setter(Number.isFinite(v) && v >= 0 ? v : 0); };
  const liquid = eggs * per.egg + whites * per.white + yolks * per.yolk;
  const powder = liquid * per.powderPerG;
  const rows = [
    [labels.liquidTotal, unit(liquid, 'g')],
    [labels.powder, unit(powder, 'g', 1)],
    [labels.water, unit(powder * per.waterPerPowderG, 'ml')],
    yolks ? [labels.oilYolks, unit(yolks * per.yolkOil, 'g')] : null,
  ].filter(Boolean);
  const field = (label, value, setter) => (
    <label className="va-guide-calc-qty">
      <span>{label}</span>
      <span className="va-guide-calc-qty-field"><input type="number" inputMode="numeric" min="0" step="1" value={value} onChange={num(setter)} /></span>
    </label>
  );
  return (
    <div className="va-guide-calc">
      <div className="va-guide-form va-guide-calc-form va-guide-calc-form--sub">
        {field(labels.eggs, eggs, setEggs)}
        {field(labels.whites, whites, setWhites)}
        {field(labels.yolks, yolks, setYolks)}
      </div>
      <h3>{labels.result}</h3>
      <table className="va-guide-table">
        <caption>{labels.result}</caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BatchCalculator({ data }) {
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
  // Switching pieces <-> batches keeps the same amount of meringue: 60 pieces becomes 2 batches, not 60.
  const switchTo = (next) => {
    if (next === mode) return;
    if (r.yield) setQty(next === 'batches' ? Math.round((qty / r.yield.count) * 100) / 100 : Math.round(qty * r.yield.count));
    setMode(next);
  };
  const unitWord = mode === 'pieces' && r.yield ? r.yield.unit : labels.batches;

  return (
    <div className="va-guide-calc">
      {/* Not a <form>: the analytics snippet counts a focus inside a form as FORM_START,
          and the calculator is not a lead form. */}
      <div className="va-guide-form va-guide-calc-form">
        {r.yield ? (
          <div className="va-guide-calc-mode" role="group" aria-label={labels.mode}>
            <span className="va-guide-calc-mode-label">{labels.mode}</span>
            <button type="button" className={mode === 'pieces' ? 'is-active' : ''} aria-pressed={mode === 'pieces'} onClick={() => switchTo('pieces')}>{r.yield.unit === 'g' ? labels.grams : labels.pieces}</button>
            <button type="button" className={mode === 'batches' ? 'is-active' : ''} aria-pressed={mode === 'batches'} onClick={() => switchTo('batches')}>{labels.batches}</button>
          </div>
        ) : null}
        <label className="va-guide-calc-qty">
          <span>{labels.quantity}</span>
          <span className="va-guide-calc-qty-field">
            <input type="number" inputMode="decimal" min="0" step={mode === 'pieces' ? 1 : 0.5} value={qty} onChange={onQty} aria-label={`${labels.quantity} ${unitWord}`} />
            <span className="va-guide-calc-qty-unit">{unitWord}</span>
          </span>
        </label>
      </div>
      <h3>{labels.result}</h3>
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
          <h3>{labels.fixed}</h3>
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
