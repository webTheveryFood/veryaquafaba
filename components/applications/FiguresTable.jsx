// Key figures of one application, separated by format at the client's request
// (2026-09-16): a liquid block, a powder block that carries the reconstitution, and the
// shared process parameters. Packs and storage are split the same way. Every figure comes
// from data/applications/facts.json and each block carries its source line.
// Recipe-page typography (va-recipe-section).
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
  if (!rows?.length) return null;
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

// One format block: its heading and its table. `level` keeps the heading order right
// (h3 under the key figures, h4 under packs and storage, which are themselves h3).
function Group({ group, level, blockTitle }) {
  if (!group.rows?.length) return null;
  const Heading = level === 3 ? 'h3' : 'h4';
  return (
    <>
      <Heading>{group.title}</Heading>
      <Rows title={`${blockTitle}: ${group.title}`} rows={group.rows} />
      {group.note ? <p className="va-guide-reconstitution">{group.note}</p> : null}
    </>
  );
}

export default function FiguresTable({ figures, packs, storage }) {
  return (
    <section className="va-recipe-section va-guide-figures">
      <h2>{figures.title}</h2>
      {figures.groups.map((group) => (
        <Group key={group.key} group={group} level={3} blockTitle={figures.title} />
      ))}
      <Source source={figures.source} />

      <h3>{packs.title}</h3>
      {packs.groups.map((group) => (
        <Group key={group.key} group={group} level={4} blockTitle={packs.title} />
      ))}
      <Source source={packs.source} />

      {storage?.groups?.some((g) => g.rows.length) ? (
        <>
          <h3>{storage.title}</h3>
          {storage.groups.map((group) => (
            <Group key={group.key} group={group} level={4} blockTitle={storage.title} />
          ))}
          <Source source={storage.source} />
        </>
      ) : null}
    </section>
  );
}
