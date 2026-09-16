// Key figures of one application (rows already formatted per locale in
// data/applications/index.js), the available packs, the powder reconstitution
// (published at the client's request, 2026-09-16) and the storage facts, each
// with its source line. Recipe-page typography (va-recipe-section).
function Source({ source }) {
  if (!source?.text) return null;
  return (
    <p className="va-guide-source">
      {source.label}: {source.href ? <a href={source.href}>{source.text}</a> : source.text}
      {source.period ? ` (${source.period})` : ''}
    </p>
  );
}

function Rows({ title, rows }) {
  return (
    <table className="va-guide-table">
      <caption>{title}</caption>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th scope="row">{row.label}</th>
            <td className={row.wrap ? 'va-guide-wrap' : undefined}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function FiguresTable({ figures, packs, reconstitution, storage }) {
  return (
    <section className="va-recipe-section va-guide-figures">
      <h2>{figures.title}</h2>
      <Rows title={figures.title} rows={figures.rows} />
      <Source source={figures.source} />
      <h3>{packs.title}</h3>
      <Rows title={packs.title} rows={packs.items} />
      <Source source={packs.source} />
      {reconstitution ? (
        <>
          <h3>{reconstitution.title}</h3>
          <p className="va-guide-reconstitution"><strong>{reconstitution.text}</strong>{reconstitution.ratioText ? ` ${reconstitution.ratioText}` : ''}</p>
          <Source source={reconstitution.source} />
        </>
      ) : null}
      {storage?.items?.length ? (
        <>
          <h3>{storage.title}</h3>
          <Rows title={storage.title} rows={storage.items} />
          <Source source={storage.source} />
        </>
      ) : null}
    </section>
  );
}
