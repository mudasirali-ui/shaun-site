'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CTA } from '@/lib/siteData';
import Button from '@/components/ui/Button';

function scrollToSection(hash) {
  const id = hash.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const ids = ['about', 'expertise', 'services', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (e, href) => {
    if (!href.includes('#')) return;
    const hash = href.split('#')[1];
    if (pathname === '/') {
      e.preventDefault();
      scrollToSection(`#${hash}`);
      setActiveSection(hash);
      window.history.pushState(null, '', href);
      setMobileOpen(false);
    }
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link href="/" className="brand" aria-label="Shaun Taliana home">
          <span className="brand__first">Shaun</span>
          <span className="brand__last">Taliana</span>
        </Link>

        <nav className="header__nav" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const hash = href.split('#')[1] || '';
            const isActive = pathname === '/' && activeSection === hash;
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? 'nav-link nav-link--active' : 'nav-link'}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="header__actions">
          <Button href={CTA.primary.href} variant="primary" className="header__cta">
            {CTA.primary.label}
          </Button>
          <button
            type="button"
            className="btn-calendly--nav"
            onClick={() => {
              if (typeof window !== 'undefined' && window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
                window.Calendly.initPopupWidget({ url: 'https://calendly.com/cognaratraining' });
              } else if (typeof window !== 'undefined') {
                window.open('https://calendly.com/cognaratraining', '_blank');
              }
            }}
          >
            📅 Book a Discovery Call
          </button>
          <button
            type="button"
            className={`menu-toggle${mobileOpen ? ' menu-toggle--open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={href}
                    className={
                      pathname === '/' && activeSection === href.split('#')[1]
                        ? 'mobile-link mobile-link--active'
                        : 'mobile-link'
                    }
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
