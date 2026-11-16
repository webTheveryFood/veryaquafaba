'use client';

import { useState } from 'react';

// The calculators of the November expansion tool pages (English). One component, one `kind` per page; every figure
// (doses, ratios, what each pack replaces, the opened-pack window) comes in `facts` from the facts file through
// data/resources/novexp.js. Same markup as the pack finder and the quantity calculator: text inputs with a numeric
// keyboard, the site's pill buttons for a switch, a result table. Nothing is stored or sent.
const toNum = (raw) => { const v = parseFloat(String(raw).replace(',', '.')); return Number.isFinite(v) && v >= 0 ? v : 0; };
const fmt = (v, digits = 1) => Number(v).toLocaleString('en-GB', { maximumFractionDigits: digits });
const g = (v) => (v >= 1000 ? `${fmt(v / 1000, 2)}kg` : `${fmt(v)}g`);
const ml = (v) => (v >= 1000 ? `${fmt(v / 1000, 2)}L` : `${fmt(v)} ml`);
const DAY = 86400000;

function Field({ label, unit, value, onChange, decimals = false }) {
  return (
    <label className="va-guide-calc-qty">
      <span>{label}</span>
      <span className="va-guide-calc-qty-field">
        <input type="text" inputMode={decimals ? 'decimal' : 'numeric'} autoComplete="off" value={value}
          onChange={(e) => onChange(e.target.value.replace(decimals ? /[^0-9.,]/g : /[^0-9]/g, ''))} />
        {unit ? <span className="va-guide-calc-qty-unit">{unit}</span> : null}
      </span>
    </label>
  );
}

function Switch({ label, options, value, onChange }) {
  return (
    <div className="va-guide-calc-mode" role="group" aria-label={label}>
      <span className="va-guide-calc-mode-label">{label}</span>
      {options.map(([key, text]) => (
        <button key={key} type="button" className={value === key ? 'is-active' : ''} aria-pressed={value === key} onClick={() => onChange(key)}>{text}</button>
      ))}
    </div>
  );
}

function Result({ title, rows, note, empty }) {
  return (
    <>
      <h3>{title}</h3>
      {rows ? (
        <table className="va-guide-table">
          <caption>{title}</caption>
          <tbody>{rows.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody>
        </table>
      ) : <p className="va-guide-calc-note">{empty}</p>}
      {rows && note ? <p className="va-guide-calc-note">{note}</p> : null}
    </>
  );
}

// The smallest single pouch that covers a weight of powder, or how many of the largest.
function pouchFor(powder, pouches) {
  const one = pouches.find((p) => p.g >= powder);
  if (one) return <a href={one.href}>{one.label}</a>;
  const big = pouches.at(-1);
  return <>{Math.ceil(powder / big.g)} × <a href={big.href}>{big.label}</a></>;
}

export default function NovCalculator({ kind, facts: f }) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [e, setE] = useState('');
  const [mode, setMode] = useState(kind === 'batch-cost' ? 'liquid_1l' : 'count');
  const switchMode = (m) => { setMode(m); if (kind !== 'batch-cost') setA(''); };
  const [A, B, C, D, E] = [a, b, c, d, e].map(toNum);
  let form = null;
  let result = null;

  if (kind === 'egg-white') {
    const whites = mode === 'count' ? A : A / f.white;
    form = <>
      <Switch label="Your recipe gives" value={mode} onChange={switchMode} options={[['count', 'Egg whites'], ['grams', 'Grams of egg white']]} />
      <Field label={mode === 'count' ? 'Egg whites' : 'Egg white'} unit={mode === 'count' ? 'egg whites' : 'g'} value={a} onChange={setA} />
    </>;
    result = <Result title="Your aquafaba" empty="Enter the egg whites in your recipe, as a number or in grams." rows={A > 0 ? [
      ['Liquid VERY AQUAFABA', g(whites * f.white)],
      ['Or powder', g(whites * f.wPowder)],
      ['With water', ml(whites * f.wWater)],
      ['Made-up weight', g(whites * f.wTotal)],
    ] : null} />;
  }

  if (kind === 'whole-egg') {
    form = <Field label="Whole eggs" unit="eggs" value={a} onChange={setA} />;
    result = <Result title="Your aquafaba" empty="Enter the whole eggs in your recipe." note={`Start by reducing the recipe's other liquids by ${f.liquidCut[0]} to ${f.liquidCut[1]}%.`} rows={A > 0 ? [
      ['Liquid VERY AQUAFABA', g(A * f.egg)],
      ['Or powder', g(A * f.egPowder)],
      ['With water', ml(A * f.egWater)],
    ] : null} />;
  }

  if (kind === 'powder') {
    const whites = mode === 'count' ? A : A / f.wTotal;
    const powder = whites * f.wPowder;
    form = <>
      <Switch label="Start from" value={mode} onChange={switchMode} options={[['count', 'Egg whites'], ['grams', 'Made-up aquafaba']]} />
      <Field label={mode === 'count' ? 'Egg whites' : 'Made-up aquafaba'} unit={mode === 'count' ? 'egg whites' : 'g'} value={a} onChange={setA} />
    </>;
    result = <Result title="Powder and water" empty="Enter the egg whites you replace, or the made-up aquafaba you need in grams." note={`Chill it like the liquid before whipping; for meringue, ${f.meringueChill} °C.`} rows={A > 0 ? [
      ['Powder', g(powder)],
      ['Water', ml(whites * f.wWater)],
      ['Made-up aquafaba', g(whites * f.wTotal)],
      ['Pouch that covers it', pouchFor(powder, f.pouches)],
    ] : null} />;
  }

  if (kind === 'recipe') {
    const liquid = A * f.egg + B * f.white + C * f.yolk;
    const powder = A * f.egPowder + B * f.wPowder + C * f.ykPowder;
    form = <>
      <Field label="Whole eggs" unit="eggs" value={a} onChange={setA} />
      <Field label="Extra egg whites" unit="whites" value={b} onChange={setB} />
      <Field label="Extra egg yolks" unit="yolks" value={c} onChange={setC} />
    </>;
    result = <Result title="Your aquafaba" empty="Enter the whole eggs, extra whites and extra yolks from your ingredient list." note={A > 0 ? `You replace whole eggs: start by reducing the recipe's other liquids by ${f.liquidCut[0]} to ${f.liquidCut[1]}%.` : null} rows={liquid > 0 ? [
      ['Liquid VERY AQUAFABA', g(liquid)],
      ['Or powder', g(powder)],
      ['With water', ml(A * f.egWater + B * f.wWater + C * f.ykWater)],
      ['Oil for the extra yolks', g(C * f.yolkOil)],
      ['Pouch that covers the powder', pouchFor(powder, f.pouches)],
    ] : null} />;
  }

  if (kind === 'opened-date') {
    const opened = a ? new Date(`${a}T12:00:00`) : null;
    const day = (n) => new Date(opened.getTime() + n * DAY).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
    form = (
      <label className="va-guide-calc-qty">
        <span>Opened on</span>
        <span className="va-guide-calc-qty-field"><input type="date" value={a} onChange={(e) => setA(e.target.value)} /></span>
      </label>
    );
    result = <Result title="Your last day" empty="Enter the date you opened the carton." note={`Opened liquid keeps ${f.openedDays[0]} to ${f.openedDays[1]} days at ${f.openedTemp[0]} to ${f.openedTemp[1]} °C. Unopened, it keeps at least ${f.unopenedMonths} months at room temperature.`} rows={opened && !Number.isNaN(opened.getTime()) ? [
      ['Plan to finish it by', day(f.openedDays[0])],
      ['At the latest', day(f.openedDays[1])],
    ] : null} />;
  }

  if (kind === 'cost-per-drink') {
    const perDrink = A / f.drinksPerLitre;
    form = <>
      <Field label="What you paid for a 1L Tetrapak" unit="your currency" value={a} onChange={setA} decimals />
      <Field label="Foamed drinks a week" unit="drinks" value={b} onChange={setB} />
    </>;
    result = <Result title="Aquafaba cost" empty="Enter what you paid for a 1L Tetrapak, in your currency." note={`At ${f.dose} ml per drink, a 1L Tetrapak makes ${f.drinksPerLitre} drinks. A carton opened and not finished within ${f.openedDays[0]} to ${f.openedDays[1]} days pours fewer drinks: divide the price by the drinks you actually pour from it.`} rows={A > 0 ? [
      ['Per drink', fmt(perDrink, 3)],
      ...(B > 0 ? [['Per week', fmt(perDrink * B, 2)]] : []),
    ] : null} />;
  }

  if (kind === 'event') {
    const bars = Math.max(1, B || 1);
    const perBar = Math.ceil(A / bars);
    const cartons = Math.ceil((perBar * f.dose) / 1000);
    form = <>
      <Field label="Foamed cocktails you expect" unit="drinks" value={a} onChange={setA} />
      <Field label="Bars or venues" unit="bars" value={b} onChange={setB} />
    </>;
    result = <Result title="Aquafaba for the event" empty="Enter the foamed cocktails you expect and the number of bars." note={`Each bar opens its own cartons; an opened carton keeps ${f.openedDays[0]} to ${f.openedDays[1]} days at ${f.openedTemp[0]} to ${f.openedTemp[1]} °C.`} rows={A > 0 ? [
      ['Aquafaba in all', ml(A * f.dose)],
      ['Per bar', ml(perBar * f.dose)],
      ['1L Tetrapaks per bar', fmt(cartons, 0)],
      ['1L Tetrapaks to bring', fmt(cartons * bars, 0)],
    ] : null} />;
  }

  if (kind === 'reorder') {
    const litres = (A * f.dose) / 1000;
    const toOrder = Math.max(0, Math.ceil(litres) - B);
    const daysPerCarton = A > 0 ? f.drinksPerLitre / (A / 7) : 0;
    form = <>
      <Field label="Foamed drinks last week" unit="drinks" value={a} onChange={setA} />
      <Field label="Unopened cartons in stock" unit="cartons" value={b} onChange={setB} />
    </>;
    result = <Result title="This week's order" empty="Enter the foamed drinks you sold last week." rows={A > 0 ? [
      ['Aquafaba for the week', ml(A * f.dose)],
      ['1L Tetrapaks to order', fmt(toOrder, 0)],
      ['An opened carton lasts', daysPerCarton <= f.openedDays[1]
        ? `about ${fmt(daysPerCarton, 1)} days: used within its ${f.openedDays[0]} to ${f.openedDays[1]} days`
        : `about ${fmt(daysPerCarton, 1)} days: longer than its ${f.openedDays[0]} to ${f.openedDays[1]} days, so powder suits the quiet days`],
    ] : null} />;
  }

  if (kind === 'batch-cost') {
    const pack = f.packs.find((p) => p.id === mode) || f.packs[0];
    const perWhite = A / pack.whites;
    form = <>
      <Switch label="Pack you buy" value={mode} onChange={switchMode} options={f.packs.map((p) => [p.id, p.label])} />
      <Field label="What you paid for it" unit="your currency" value={a} onChange={setA} decimals />
      <Field label="Egg whites in your batch" unit="egg whites" value={b} onChange={setB} />
    </>;
    result = <Result title="Your cost" empty="Choose the pack and enter what you paid for it, in your currency." note={`The ${pack.label} replaces ${fmt(pack.whites, 0)} egg whites.`} rows={A > 0 ? [
      ['Per egg white', fmt(perWhite, 3)],
      ...(B > 0 ? [['Per batch', fmt(perWhite * B, 2)]] : []),
    ] : null} />;
  }

  if (kind === 'transport') {
    form = <Field label="Egg whites you replace in a month" unit="egg whites" value={a} onChange={setA} />;
    result = <Result title="What you move" empty="Enter the egg whites you replace in a month." note="Product weight only: packaging is not included. Powder is cheaper to transport than liquid." rows={A > 0 ? [
      ['As liquid', g(A * f.white)],
      ['As powder', g(A * f.wPowder)],
    ] : null} />;
  }

  if (kind === 'pastry-month') {
    const weeks = D || 4;
    const week = A * f.recipes.meringue + B * f.recipes.mousse + C * f.recipes.macarons + E * f.recipes.pavlova;
    const month = week * weeks;
    const whites = month / f.white;
    form = <>
      <Field label="Meringue batches a week" unit="batches" value={a} onChange={setA} />
      <Field label="Chocolate mousse batches a week" unit="batches" value={b} onChange={setB} />
      <Field label="Macaron batches a week" unit="batches" value={c} onChange={setC} />
      <Field label="Pavlova shells a week" unit="shells" value={e} onChange={setE} />
      <Field label="Weeks in the month" unit="weeks" value={d} onChange={setD} />
    </>;
    result = <Result title="Your month of aquafaba" empty="Enter the batches you make each week." note={`One batch: meringue ${f.recipes.meringue}g, mousse ${f.recipes.mousse}g, macarons ${f.recipes.macarons}g, pavlova ${f.recipes.pavlova}g of aquafaba. An opened carton keeps ${f.openedDays[0]} to ${f.openedDays[1]} days: check what you use between two opening days.`} rows={week > 0 ? [
      ['Aquafaba a week', g(week)],
      ['Aquafaba in the month', g(month)],
      ['Egg whites it replaces', fmt(whites, 0)],
      ['As 1L Tetrapaks', fmt(Math.ceil(whites / f.tetrapakWhites), 0)],
      ['Or as 200g pouches', fmt(Math.ceil(whites / f.pouch200Whites), 0)],
    ] : null} />;
  }

  return (
    <div className="va-guide-calc va-nov-calc">
      <div className="va-guide-form va-guide-calc-form va-guide-calc-form--sub">{form}</div>
      {result}
    </div>
  );
}
