// Key figures of one application (rows already formatted per locale in
// data/applications/index.js) + the available packs, each with its source line.
function Source({ source }) {
  if (!source?.text) return null;
  return (
    <p className="va-source">
      {source.label}: {source.href ? <a href={source.href}>{source.text}</a> : source.text}
      {source.period ? ` (${source.period})` : ''}
    </p>
  );
}

function Rows({ title, rows }) {
  return (
    <table>
      <caption>{title}</caption>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th scope="row">{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function FiguresTable({ figures, packs }) {
  return (
    <section className="va-section va-figures">
      <div className="va-container">
        <h2>{figures.title}</h2>
        <Rows title={figures.title} rows={figures.rows} />
        <Source source={figures.source} />
        <h3>{packs.title}</h3>
        <Rows title={packs.title} rows={packs.items} />
        <Source source={packs.source} />
      </div>
    </section>
  );
}
