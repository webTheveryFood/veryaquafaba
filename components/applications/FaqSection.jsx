// FAQ block: the same question/answer strings feed the FAQPage JSON-LD.
export default function FaqSection({ faq }) {
  if (!faq?.items?.length) return null;
  return (
    <section className="va-recipe-section va-guide-faq">
      <h2>{faq.title}</h2>
      {faq.items.map((item) => (
        <div className="va-guide-faq-item" key={item.q}>
          <h3>{item.q}</h3>
          {item.aHtml ? <p dangerouslySetInnerHTML={{ __html: item.aHtml }} /> : <p>{item.a}</p>}
        </div>
      ))}
    </section>
  );
}
