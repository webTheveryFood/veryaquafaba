'use client';

import { useState } from 'react';
import CalcField from './CalcField';

// The calculators of the November expansion tool pages. One component, one `kind` per page; every figure (doses,
// ratios, what each pack replaces, the opened-pack window) comes in `facts` from the facts file through
// data/resources/novexp.js, and every word in `t`, the texts of the page's language (data/resources/texts/novcalc.*.json).
// Same markup as the pack finder and the quantity calculator: text inputs with a numeric keyboard, the site's pill
// buttons for a switch, a result table. Nothing is stored or sent.
const toNum = (raw) => { const v = parseFloat(String(raw).replace(',', '.')); return Number.isFinite(v) && v >= 0 ? v : 0; };
const fill = (text, vars) => String(text).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
const DAY = 86400000;

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

export default function NovCalculator({ kind, facts: f, t, localeTag = 'en-GB' }) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [e, setE] = useState('');
  const [mode, setMode] = useState('count');
  const switchMode = (m) => { setMode(m); setA(''); };
  const [A, B, C, D, E] = [a, b, c, d, e].map(toNum);
  // English writes the unit against the number (150g, 1L); the other languages keep the space.
  const sp = localeTag === 'en-GB' ? '' : ' ';
  const fmt = (v, digits = 1) => Number(v).toLocaleString(localeTag, { maximumFractionDigits: digits });
  const g = (v) => (v >= 1000 ? `${fmt(v / 1000, 2)}${sp}kg` : `${fmt(v)}${sp}g`);
  const ml = (v) => (v >= 1000 ? `${fmt(v / 1000, 2)}${sp}L` : `${fmt(v)} ml`);
  const days = { d1: f.openedDays[0], d2: f.openedDays[1], t1: f.openedTemp[0], t2: f.openedTemp[1], months: f.unopenedMonths };
  let form = null;
  let result = null;

  if (kind === 'egg-white') {
    const whites = mode === 'count' ? A : A / f.white;
    form = <>
      <Switch label={t.switch.recipeGives} value={mode} onChange={switchMode} options={[['count', t.option.eggWhites], ['grams', t.option.gramsOfEggWhite]]} />
      <CalcField label={mode === 'count' ? t.field.eggWhites : t.field.eggWhite} unit={mode === 'count' ? t.unit.eggWhites : 'g'} value={a} onChange={setA} />
    </>;
    result = <Result title={t.title.yourAquafaba} empty={t.empty.eggWhite} rows={A > 0 ? [
      [t.row.liquid, g(whites * f.white)],
      [t.row.orPowder, g(whites * f.wPowder)],
      [t.row.withWater, ml(whites * f.wWater)],
      [t.row.madeUpWeight, g(whites * f.wTotal)],
    ] : null} />;
  }

  if (kind === 'whole-egg') {
    form = <CalcField label={t.field.wholeEggs} unit={t.unit.eggs} value={a} onChange={setA} />;
    result = <Result title={t.title.yourAquafaba} empty={t.empty.wholeEgg} note={fill(t.note.wholeEgg, { a: f.liquidCut[0], b: f.liquidCut[1] })} rows={A > 0 ? [
      [t.row.liquid, g(A * f.egg)],
      [t.row.orPowder, g(A * f.egPowder)],
      [t.row.withWater, ml(A * f.egWater)],
    ] : null} />;
  }

  if (kind === 'powder') {
    const whites = mode === 'count' ? A : A / f.wTotal;
    const powder = whites * f.wPowder;
    form = <>
      <Switch label={t.switch.startFrom} value={mode} onChange={switchMode} options={[['count', t.option.eggWhites], ['grams', t.option.madeUp]]} />
      <CalcField label={mode === 'count' ? t.field.eggWhites : t.field.madeUp} unit={mode === 'count' ? t.unit.eggWhites : 'g'} value={a} onChange={setA} />
    </>;
    result = <Result title={t.title.powderAndWater} empty={t.empty.powder} note={fill(t.note.powder, { temp: f.meringueChill })} rows={A > 0 ? [
      [t.row.powder, g(powder)],
      [t.row.water, ml(whites * f.wWater)],
      [t.row.madeUp, g(whites * f.wTotal)],
      [t.row.pouch, pouchFor(powder, f.pouches)],
    ] : null} />;
  }

  if (kind === 'recipe') {
    const liquid = A * f.egg + B * f.white + C * f.yolk;
    const powder = A * f.egPowder + B * f.wPowder + C * f.ykPowder;
    form = <>
      <CalcField label={t.field.wholeEggs} unit={t.unit.eggs} value={a} onChange={setA} />
      <CalcField label={t.field.extraWhites} unit={t.unit.whites} value={b} onChange={setB} />
      <CalcField label={t.field.extraYolks} unit={t.unit.yolks} value={c} onChange={setC} />
    </>;
    result = <Result title={t.title.yourAquafaba} empty={t.empty.recipe} note={A > 0 ? fill(t.note.recipe, { a: f.liquidCut[0], b: f.liquidCut[1] }) : null} rows={liquid > 0 ? [
      [t.row.liquid, g(liquid)],
      [t.row.orPowder, g(powder)],
      [t.row.withWater, ml(A * f.egWater + B * f.wWater + C * f.ykWater)],
      [t.row.oil, g(C * f.yolkOil)],
      [t.row.pouchPowder, pouchFor(powder, f.pouches)],
    ] : null} />;
  }

  if (kind === 'opened-date') {
    const opened = a ? new Date(`${a}T12:00:00`) : null;
    const day = (n) => new Date(opened.getTime() + n * DAY).toLocaleDateString(localeTag, { weekday: 'long', day: 'numeric', month: 'long' });
    form = <CalcField label={t.field.openedOn} type="date" value={a} onChange={setA} />;
    result = <Result title={t.title.lastDay} empty={t.empty.opened} note={fill(t.note.opened, days)} rows={opened && !Number.isNaN(opened.getTime()) ? [
      [t.row.finishBy, day(f.openedDays[0])],
      [t.row.latest, day(f.openedDays[1])],
    ] : null} />;
  }

  if (kind === 'event') {
    const bars = Math.max(1, B || 1);
    const perBar = Math.ceil(A / bars);
    const cartons = Math.ceil((perBar * f.dose) / 1000);
    form = <>
      <CalcField label={t.field.foamedExpected} unit={t.unit.drinks} value={a} onChange={setA} />
      <CalcField label={t.field.bars} unit={t.unit.bars} value={b} onChange={setB} />
    </>;
    result = <Result title={t.title.event} empty={t.empty.event} note={fill(t.note.event, days)} rows={A > 0 ? [
      [t.row.inAll, ml(A * f.dose)],
      [t.row.perBar, ml(perBar * f.dose)],
      [fill(t.row.tetrapaksPerBar, { pack: t.pack.tetrapaks }), fmt(cartons, 0)],
      [fill(t.row.tetrapaksToBring, { pack: t.pack.tetrapaks }), fmt(cartons * bars, 0)],
    ] : null} />;
  }

  if (kind === 'reorder') {
    const litres = (A * f.dose) / 1000;
    const toOrder = Math.max(0, Math.ceil(litres) - B);
    const daysPerCarton = A > 0 ? f.drinksPerLitre / (A / 7) : 0;
    form = <>
      <CalcField label={t.field.foamedLastWeek} unit={t.unit.drinks} value={a} onChange={setA} />
      <CalcField label={t.field.cartonsInStock} unit={t.unit.cartons} value={b} onChange={setB} />
    </>;
    result = <Result title={t.title.weekOrder} empty={t.empty.reorder} rows={A > 0 ? [
      [t.row.forWeek, ml(A * f.dose)],
      [fill(t.row.tetrapaksToOrder, { pack: t.pack.tetrapaks }), fmt(toOrder, 0)],
      [t.row.cartonLasts, fill(daysPerCarton <= f.openedDays[1] ? t.note.cartonWithin : t.note.cartonLonger, { n: fmt(daysPerCarton, 1), ...days })],
    ] : null} />;
  }

  if (kind === 'transport') {
    form = <CalcField label={t.field.whitesPerMonth} unit={t.unit.eggWhites} value={a} onChange={setA} />;
    result = <Result title={t.title.move} empty={t.empty.transport} note={t.note.transport} rows={A > 0 ? [
      [t.row.asLiquid, g(A * f.white)],
      [t.row.asPowder, g(A * f.wPowder)],
    ] : null} />;
  }

  if (kind === 'pastry-month') {
    const weeks = D || 4;
    const week = A * f.recipes.meringue + B * f.recipes.mousse + C * f.recipes.macarons + E * f.recipes.pavlova;
    const month = week * weeks;
    const whites = month / f.white;
    form = <>
      <CalcField label={t.field.meringueWeek} unit={t.unit.batches} value={a} onChange={setA} />
      <CalcField label={t.field.mousseWeek} unit={t.unit.batches} value={b} onChange={setB} />
      <CalcField label={t.field.macaronWeek} unit={t.unit.batches} value={c} onChange={setC} />
      <CalcField label={t.field.pavlovaWeek} unit={t.unit.shells} value={e} onChange={setE} />
      <CalcField label={t.field.weeks} unit={t.unit.weeks} value={d} onChange={setD} />
    </>;
    result = <Result title={t.title.month} empty={t.empty.pastry} note={fill(t.note.pastry, { meringue: `${f.recipes.meringue}${sp}g`, mousse: `${f.recipes.mousse}${sp}g`, macarons: `${f.recipes.macarons}${sp}g`, pavlova: `${f.recipes.pavlova}${sp}g`, ...days })} rows={week > 0 ? [
      [t.row.perWeek, g(week)],
      [t.row.inMonth, g(month)],
      [t.row.whitesReplaced, fmt(whites, 0)],
      [fill(t.row.asTetrapaks, { pack: t.pack.tetrapaks }), fmt(Math.ceil(whites / f.tetrapakWhites), 0)],
      [fill(t.row.asPouches, { pouch: t.pack.pouches200 }), fmt(Math.ceil(whites / f.pouch200Whites), 0)],
    ] : null} />;
  }

  return (
    <div className="va-guide-calc">
      <div className="va-guide-form va-guide-calc-form">{form}</div>
      {result}
    </div>
  );
}
