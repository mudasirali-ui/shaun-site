import FadeInSection from './FadeInSection';
import { SERVICES, PRICING } from '../data/siteData';

export default function Services() {
  return (
    <FadeInSection className="content-section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Training &amp; Consulting</p>
          <h2>Service Rates</h2>
        </div>

        <div className="card-grid two-up" style={{ marginBottom: '40px' }}>
          {SERVICES.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <div className="rates-wrap">
          <article className="rates-card featured">
            <h3>Indicative rates</h3>
            <div className="pricing-grid">
              {PRICING.map((p) => (
                <div className="price-tile" key={p.label}>
                  <span>{p.label}</span>
                  <strong>{p.price}</strong>
                </div>
              ))}
            </div>
            <p className="discount-pill">Multiple-day bookings available at a discounted rate.</p>
          </article>

          <article className="rates-card brochure-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3>Services Brochure</h3>
              <p style={{ marginTop: '12px', marginBottom: '24px' }}>
                Download our comprehensive training and consulting brochure to share with your team or keep for reference.
              </p>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <a
                href="/Shaun_Taliana_Brochure.pdf"
                download="Shaun_Taliana_Brochure.pdf"
                className="btn btn-primary"
                id="download-brochure-btn"
                style={{ width: '100%', display: 'inline-flex', justifyContent: 'center' }}
              >
                Training and Consulting Services Brochure
              </a>
            </div>
          </article>
        </div>
      </div>
    </FadeInSection>
  );
}
