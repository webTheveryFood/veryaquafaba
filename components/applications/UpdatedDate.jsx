import { dated } from '../../data/updated';

// The one "Updated" line of the site. Every template prints it through this component and no page keeps a date of its
// own: the date is the day of the deploy (data/updated.js).
export default function UpdatedDate({ locale, as: Tag = 'em' }) {
  const d = dated(locale);
  return (
    <Tag className="va-guide-updated">
      {d.updatedLabel}: <time dateTime={d.updated}>{d.updatedText}</time>.
    </Tag>
  );
}
