import ActionButton from '../shared/ActionButton';
import { purchaseGoal, purchaseHref } from '../../data/applications/tracking';

// Where-to-buy page of one country (set-2): the listings the client confirmed for that
// country, each with its link and what it carries, then the technical sheet CTA and the
// professional enquiry links. A country without a confirmed listing shows no table at all:
// its route is the form, as the client set it. Amazon and InstantChef carry their click goal
// and tracking parameters; any other destination carries data-cta="distributor".
export default function StockistList({ content }) {
  return (
    <section className="va-recipe-section va-guide-buy va-guide-stockists">
      <h2>{content.title}</h2>
      {content.items.length ? (
        <table className="va-guide-grid va-guide-grid--pairs va-guide-stockists-table">
          <thead><tr><th scope="col">{content.labels.channel}</th><th scope="col">{content.labels.formats}</th></tr></thead>
          <tbody>
            {content.items.map((s) => {
              const goal = purchaseGoal(s.href);
              return (
                <tr key={s.href}>
                  <td data-label={content.labels.channel}>
                    <a
                      href={purchaseHref(s.href)}
                      target="_blank"
                      rel={goal ? 'sponsored nofollow noopener' : 'nofollow noopener'}
                      data-goal={goal || undefined}
                      data-cta={goal ? undefined : 'distributor'}
                    >
                      {s.label}
                    </a>
                  </td>
                  <td data-label={content.labels.formats}>{s.formats}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
      {content.note ? <p className="va-guide-source">{content.note}</p> : null}
      <div className="elementor elementor-87 va-guide-ctas">
        <ActionButton elementId="9ee9a76" href={content.contact}>{content.sheetCta}</ActionButton>
      </div>
    </section>
  );
}
