import ActionButton from '../shared/ActionButton';
import EnquiryLinks from './EnquiryLinks';
import { purchaseGoal, purchaseHref } from '../../data/applications/tracking';

// Where-to-buy page of one country (set-2): the country's real channels, each with its
// link, then the professional enquiry links. Amazon and InstantChef carry their click goal
// and tracking parameters; every other distributor carries data-cta="distributor" for the
// panel's rule goal. Links open in a new tab like the partner carousel.
export default function StockistList({ content }) {
  return (
    <section className="va-recipe-section va-guide-buy va-guide-stockists">
      <h2>{content.title}</h2>
      <table className="va-guide-grid va-guide-stockists-table">
        <thead><tr><th scope="col">{content.labels.channel}</th><th scope="col">{content.labels.formats}</th><th scope="col">{content.labels.customers}</th></tr></thead>
        <tbody>
          {content.items.map((s) => {
            const goal = purchaseGoal(s.href);
            return (
              <tr key={s.href}>
                <td data-label={content.labels.channel}>
                  <a href={purchaseHref(s.href, null)} target="_blank" rel={goal ? 'sponsored nofollow noopener' : 'noopener'} data-goal={goal || undefined} data-cta={goal ? undefined : 'distributor'}>{s.label}</a>
                </td>
                <td data-label={content.labels.formats}>{s.formats}</td>
                <td data-label={content.labels.customers}>{s.customers}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {content.note ? <p className="va-guide-source">{content.note}</p> : null}
      <div className="elementor elementor-87 va-guide-ctas">
        <ActionButton elementId="9ee9a76" href={content.contact}>{content.sheetCta}</ActionButton>
      </div>
      <EnquiryLinks enquiry={content.enquiry} contact={content.contact} />
    </section>
  );
}
