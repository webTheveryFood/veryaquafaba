import { frozenResourceResponse } from '../../lib/frozen-resource';

export async function GET() {
  return frozenResourceResponse('/page-sitemap.xml');
}
