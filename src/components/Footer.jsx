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
          <div className="footer-socials" style={{ marginTop: '16px' }}>
            <a href="https://www.linkedin.com/in/shaun-taliana-a75642328/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="social-icon" style={{ display: 'inline-block', color: 'var(--primary)', transition: 'transform 0.2s, opacity 0.2s' }} onMouseOver={(e) => {e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.opacity='0.85'}} onMouseOut={(e) => {e.currentTarget.style.transform='none'; e.currentTarget.style.opacity='1'}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
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
