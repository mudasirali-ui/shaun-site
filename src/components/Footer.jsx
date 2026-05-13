import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand-col">
          <Link className="brand" to="/" aria-label="Shaun Taliana home">
            <span className="brand-shaun">Shaun</span>
            <span className="brand-taliana">Taliana</span>
          </Link>
          <p className="footer-tagline">
            Industrial Relations Advisor | Melbourne
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>

        <p className="footer-copy">
          &copy; {year} Shaun Taliana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
