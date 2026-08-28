import parse from 'html-react-parser';
import SnapshotRuntime from '../native/SnapshotRuntime';

function bodyClassBootstrap(bodyClass) {
  if (!bodyClass) return '';
  return `document.body.className=${JSON.stringify(bodyClass)};`;
}

export default function SnapshotPageTemplate({ snapshot, translations = {}, page }) {
  if (!snapshot) return null;
  const route = page?.route || snapshot.route;
  const reactBody = parse(snapshot.bodyMarkup);

  return (
    <>
      {snapshot.bodyClass ? (
        <script dangerouslySetInnerHTML={{ __html: bodyClassBootstrap(snapshot.bodyClass) }} />
      ) : null}

      {snapshot.jsonLd.map((json, index) => (
        <script
          key={`${route}-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
      ))}

      {/* Per-page frozen stylesheets (post-<id>.css etc.). React 19 hoists
          these <link> tags into <head>, so the page gets its own complete CSS
          — hero background size/position, page-specific layout — instead of
          only the globally loaded set. */}
      {(snapshot.styleHrefs || []).map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="snapshot" />
      ))}

      {snapshot.styleMarkup ? (
        <div
          data-native-snapshot-styles={route}
          style={{ display: 'contents' }}
          dangerouslySetInnerHTML={{ __html: snapshot.styleMarkup }}
        />
      ) : null}

      <div data-native-snapshot-page={route} style={{ display: 'contents' }}>
        {reactBody}
      </div>

      <SnapshotRuntime
        route={route}
        bodyClass={snapshot.bodyClass}
        headScripts={snapshot.headScripts}
        bodyScripts={snapshot.bodyScripts}
        translations={translations}
      />
    </>
  );
}
