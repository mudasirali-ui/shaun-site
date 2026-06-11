import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" className="brand" aria-label="Shaun Taliana home">
            <span className="brand__first">Shaun</span>
            <span className="brand__last">Taliana</span>
          </Link>
          <p className="footer__tagline">Industrial Relations Advisor · Melbourne</p>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__linkedin"
            aria-label="LinkedIn profile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <p className="footer__copy">&copy; {year} Shaun Taliana. All rights reserved.</p>
      </div>
    </footer>
  );
}
