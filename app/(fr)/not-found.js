import { renderRoute } from '../../lib/site-page';

// Without a not-found of its own, a route group's 404 falls back to a bare document with no lang.
export default function NotFound() {
  return renderRoute('/fr/404-erreur/');
}
