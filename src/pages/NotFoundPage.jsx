import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';

/**
 * 404 — shown when no route matches.
 */
export default function NotFoundPage() {
  return (
    <PageTransition>
      <section className="content-section not-found-section">
        <div className="container not-found-container">
          <span className="not-found-code">404</span>
          <h1>Page not found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary" id="not-found-home">
            Back to home
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
