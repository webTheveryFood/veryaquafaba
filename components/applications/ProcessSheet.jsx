import PrintButton from './PrintButton';
import { Source } from './FiguresTable';

// Process sheet of an application guide (set-2): every step of the recipe with its
// reference value and a blank column for the visitor's own batch, then the checks
// table (the guide's troubleshooting rows). Same tables as the guides (va-guide-grid).
export default function ProcessSheet({ sheet }) {
  const L = sheet.labels;
  return (
    <section className="va-recipe-section va-guide-sheet">
      <h2>{L.title}</h2>
      <table className="va-guide-grid va-guide-sheet-table">
        <thead><tr><th scope="col">#</th><th scope="col">{L.step}</th><th scope="col">{L.reference}</th><th scope="col">{L.yours}</th></tr></thead>
        <tbody>
          {sheet.steps.map((s, i) => (
            <tr key={s.step}>
              <td data-label="#">{i + 1}</td>
              <td data-label={L.step}>{s.step}</td>
              <td data-label={L.reference}>{s.reference}</td>
              <td data-label={L.yours} className="va-guide-sheet-blank" />
            </tr>
          ))}
        </tbody>
      </table>
      {sheet.powderNote ? <p className="va-guide-sheet-note">{sheet.powderNote}</p> : null}
      <PrintButton label={L.print} />

      <h3>{L.checks}</h3>
      <table className="va-guide-grid va-guide-grid--fix">
        <thead><tr><th scope="col">{L.see}</th><th scope="col">{L.check}</th><th scope="col">{L.fix}</th></tr></thead>
        <tbody>
          {sheet.checks.map((c) => (
            <tr key={c.see}>
              <td data-label={L.see}>{c.see}</td>
              <td data-label={L.check}>{c.check}</td>
              <td data-label={L.fix}>{c.fix}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Source source={sheet.source} />
    </section>
  );
}
