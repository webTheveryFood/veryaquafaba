'use client';

// The only interactive piece of the process sheet: print the page (the print stylesheet
// keeps the sheet and hides the chrome).
export default function PrintButton({ label }) {
  return (
    <p className="va-guide-form-actions va-guide-print">
      <button type="button" onClick={() => window.print()}>{label}</button>
    </p>
  );
}
