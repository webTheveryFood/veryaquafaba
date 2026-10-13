// The visitor's country for the CTA dialog (Vercel sets x-vercel-ip-country on every request).
// Null off Vercel (local); the dialog then falls back to the page's language.
export const dynamic = 'force-dynamic';

export function GET(request) {
  const country = request.headers.get('x-vercel-ip-country');
  return Response.json({ country: /^[A-Z]{2}$/.test(country || '') ? country : null }, { headers: { 'Cache-Control': 'private, no-store' } });
}
