import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { CONTACT } from '../data/siteData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const INITIAL_FORM = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [ref, isVisible] = useInView({ threshold: 0.05 });
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending (replace with real API call)
    setTimeout(() => {
      setStatus('sent');
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section className="contact-page-section" id="contact" ref={ref}>
      <div className="container">
        {/* Section header */}
        <motion.div
          className="section-heading contact-heading"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p className="section-tag" custom={0} variants={fadeUp}>
            Contact
          </motion.p>
          <motion.h1 custom={1} variants={fadeUp}>
            {CONTACT.heading}
          </motion.h1>
          <motion.p custom={2} variants={fadeUp}>
            {CONTACT.description}
          </motion.p>
        </motion.div>

        <div className="contact-grid">
          {/* ── Left: Info cards ──────────────────── */}
          <motion.div
            className="contact-info-col"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Email card */}
            <motion.a
              href={`mailto:${CONTACT.email}`}
              className="contact-info-card"
              custom={0}
              variants={fadeUp}
              id="contact-email-card"
            >
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="contact-info-body">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">{CONTACT.email}</span>
              </div>
              <span className="contact-info-arrow">→</span>
            </motion.a>

            {/* Phone card */}
            <motion.a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="contact-info-card"
              custom={1}
              variants={fadeUp}
              id="contact-phone-card"
            >
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-info-body">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">{CONTACT.phone}</span>
              </div>
              <span className="contact-info-arrow">→</span>
            </motion.a>

            {/* Location card */}
            <motion.div
              className="contact-info-card"
              custom={2}
              variants={fadeUp}
            >
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-info-body">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">{CONTACT.location}</span>
              </div>
            </motion.div>

            {/* Availability card */}
            <motion.div
              className="contact-info-card contact-info-card--highlight"
              custom={3}
              variants={fadeUp}
            >
              <div className="contact-info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-info-body">
                <span className="contact-info-label">Availability</span>
                <span className="contact-info-value">Mon – Fri, 9am – 5pm AEST</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Contact form ──────────────── */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, y: 36 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Send a message</h3>
            <p className="contact-form-subtitle">
              Fill in the form below and Shaun will get back to you within 24 hours.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email-input">Email address</label>
                  <input
                    type="email"
                    id="contact-email-input"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone-input">Phone (optional)</label>
                  <input
                    type="tel"
                    id="contact-phone-input"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="04xx xxx xxx"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="consulting">IR Consulting Inquiry</option>
                    <option value="training">Workplace Training</option>
                    <option value="negotiation">Negotiation Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell Shaun about your workplace needs, team size, and any specific challenges you'd like to address..."
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary contact-submit ${status === 'sending' ? 'contact-submit--loading' : ''}`}
                disabled={status === 'sending'}
                id="contact-submit-btn"
              >
                {status === 'idle' && 'Send message'}
                {status === 'sending' && (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                )}
                {status === 'sent' && '✓ Message sent!'}
                {status === 'error' && 'Try again'}
              </button>

              {status === 'sent' && (
                <p className="form-success">
                  Thank you! Your message has been sent successfully. Shaun will be in touch shortly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
