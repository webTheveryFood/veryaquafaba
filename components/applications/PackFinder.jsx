'use client';

import { useState } from 'react';

// Pack finder (October 2026 plan, F17): the pack is chosen by how fast it is used once open,
// not by batch size (owner's rule). The visitor types the egg whites replaced in 3 to 4 days
// and in a week; every threshold comes from the page data (facts.json through bakeries.js).
// Text inputs with a numeric keyboard, as in the quantity calculator; nothing is stored or sent.
const toNum = (raw) => { const v = parseFloat(String(raw).replace(',', '.')); return Number.isFinite(v) && v >= 0 ? v : 0; };

export default function PackFinder({ data }) {
  const { labels, packs, ratio, hrefs, localeTag } = data;
  const gramSpace = localeTag.startsWith('en') ? '' : ' ';
  const [daysRaw, setDays] = useState('');
  const [weekRaw, setWeek] = useState('');
  const days = toNum(daysRaw);
  const week = toNum(weekRaw);
  const n = (v, digits = 0) => Number(v).toLocaleString(localeTag, { maximumFractionDigits: digits });

  let pick = null;
  if (days > 0 || week > 0) {
    if (days >= packs.ibc) pick = { key: 'ibc', why: labels.whyIbc };
    else if (days >= packs.bib) pick = { key: 'bib', why: labels.whyBib };
    else if (days >= packs.liquid) pick = { key: 'liquid', why: labels.whyLiquid };
    else if (week > packs.p200) pick = { key: 'p3kg', why: labels.whyP3kg };
    else if (week > packs.p30) pick = { key: 'p200', why: labels.whyP200 };
    else pick = { key: 'p30', why: labels.whyP30 };
  }
  const powderWeek = week * ratio.powder;
  const waterWeek = week * ratio.water;
  const liquidWeek = week * ratio.liquid;

  const field = (label, value, setter) => (
    <label className="va-guide-calc-qty">
      <span>{label}</span>
      <span className="va-guide-calc-qty-field">
        <input type="text" inputMode="numeric" autoComplete="off" value={value} onChange={(e) => setter(e.target.value.replace(/[^0-9]/g, ''))} />
        <span className="va-guide-calc-qty-unit">{labels.unit}</span>
      </span>
    </label>
  );

  return (
    <div className="va-guide-calc va-pack-finder">
      <div className="va-guide-form va-guide-calc-form va-guide-calc-form--sub">
        {field(labels.days, daysRaw, setDays)}
        {field(labels.week, weekRaw, setWeek)}
      </div>
      <h3>{labels.result}</h3>
      {pick ? (
        <table className="va-guide-table">
          <caption>{labels.result}</caption>
          <tbody>
            <tr><th scope="row">{labels.pick}</th><td><a href={hrefs[pick.key]}>{labels.packs[pick.key]}</a></td></tr>
            <tr><th scope="row">{labels.why}</th><td>{pick.why}</td></tr>
            {week > 0 ? <tr><th scope="row">{labels.liquidWeek}</th><td>{n(liquidWeek)}{gramSpace}g</td></tr> : null}
            {week > 0 ? <tr><th scope="row">{labels.powderWeek}</th><td>{n(powderWeek)}{gramSpace}g + {n(waterWeek)} ml</td></tr> : null}
          </tbody>
        </table>
      ) : (
        <p className="va-guide-calc-note">{labels.empty}</p>
      )}
    </div>
  );
}
