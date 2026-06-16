'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT, SITE } from '@/lib/siteData';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { submitContact } from '@/lib/api';

const INITIAL_FORM = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await submitContact(form);
      if (res.success) {
        setStatus('sent');
        setForm(INITIAL_FORM);
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <SectionHeading
          tag={CONTACT.tag}
          heading={CONTACT.heading}
          subheading={CONTACT.description}
        />

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.a href={`mailto:${SITE.email}`} className="info-card" variants={fadeUp} custom={0}>
              <span className="info-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div>
                <span className="info-card__label">Email</span>
                <span className="info-card__value">{SITE.email}</span>
              </div>
            </motion.a>

            <motion.div className="info-card" variants={fadeUp} custom={1}>
              <span className="info-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <span className="info-card__label">Location</span>
                <span className="info-card__value">{CONTACT.location}</span>
              </div>
            </motion.div>

            <motion.div className="info-card info-card--highlight" variants={fadeUp} custom={2}>
              <span className="info-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <div>
                <span className="info-card__label">Availability</span>
                <span className="info-card__value">{CONTACT.availability}</span>
              </div>
            </motion.div>

            <motion.a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="info-card"
              variants={fadeUp}
              custom={3}
            >
              <span className="info-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </span>
              <div>
                <span className="info-card__label">LinkedIn</span>
                <span className="info-card__value">Connect on LinkedIn</span>
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            className="contact__form-wrap card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{CONTACT.form.title}</h3>
            <p className="contact__form-subtitle">{CONTACT.form.subtitle}</p>

            <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
              <div className="form-field">
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

              <div className="form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-phone">Phone (optional)</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+61 ..."
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {CONTACT.form.subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your workplace needs..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="contact__submit"
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
                {status === 'sent' && 'Message sent'}
                {status === 'error' && 'Try again'}
              </Button>

              {status === 'sent' && (
                <p className="form-success" role="status">
                  Thank you — your message has been sent. Shaun will respond within 24 hours.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
