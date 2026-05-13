import FadeInSection from './FadeInSection';
import { SERVICES, PRICING } from '../data/siteData';

export default function Services() {
  return (
    <FadeInSection className="content-section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Training &amp; Consulting</p>
          <h2>Services and indicative rates</h2>
          <p>
            A simple services section that feels approachable, professional and easy to understand
            for recruiters, employers and organisations.
          </p>
        </div>

        <div className="card-grid three-up">
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

          <article className="rates-card">
            <h3>Suggested positioning copy</h3>
            <p>
              Available for tailored industrial relations consulting, workplace training, stakeholder
              support and capability-building sessions. Half-day and full-day options are available,
              with discounted pricing for multi-day engagements.
            </p>
          </article>
        </div>
      </div>
    </FadeInSection>
  );
}
