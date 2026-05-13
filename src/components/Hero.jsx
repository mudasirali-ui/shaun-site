import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HERO } from '../data/siteData';
import AnimatedCounter from './AnimatedCounter';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { eyebrow, headline, headlineAccent, description, pills, card } = HERO;

  return (
    <section className="hero-section" id="home">
      {/* Background graphic */}
      <div className="hero-bg-wrap" aria-hidden="true">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="hero-bg-image"
          loading="eager"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-grid">
        {/* Left copy */}
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div className="eyebrow" custom={0} variants={fadeUp}>
            {eyebrow}
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp}>
            {headline} <span>{headlineAccent}</span>
          </motion.h1>

          <motion.p className="hero-text" custom={2} variants={fadeUp}>
            {description}
          </motion.p>

          <motion.div className="hero-pills" custom={3} variants={fadeUp}>
            {pills.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </motion.div>

          <motion.div className="hero-actions" custom={4} variants={fadeUp}>
            <Link className="btn btn-primary" to="/services" id="cta-view-rates">
              View rates
            </Link>
            <Link className="btn btn-secondary" to="/contact" id="cta-book-conversation">
              Book a conversation
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div className="trust-badges" custom={5} variants={fadeUp}>
            <div className="trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Fair Work certified</span>
            </div>
            <div className="trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Melbourne-based</span>
            </div>
            <div className="trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Hybrid / Remote available</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Portrait + Stats card */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Portrait */}
          <div className="hero-portrait-wrap">
            <img
              src="/images/portrait.png"
              alt="Shaun Taliana, Industrial Relations Advisor"
              className="hero-portrait"
            />
            <div className="hero-portrait-glow" aria-hidden="true" />
          </div>

          {/* Stats card below portrait */}
          <aside className="hero-card" aria-label="Professional summary">
            <div className="hero-card-header">
              <div className="initials">{card.initials}</div>
              <div className="hero-card-header-text">
                <p className="mini-label">{card.miniLabel}</p>
                <h2>{card.title}</h2>
              </div>
            </div>
            <p className="hero-card-text">{card.text}</p>

            <div className="stats-grid">
              {card.stats.map(({ value, label }) => (
                <div className="stat-box" key={label}>
                  <AnimatedCounter value={value} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
