import { frozenResourceResponse } from '../../lib/frozen-resource';

export async function GET() {
  return frozenResourceResponse('/robots.txt');
}
