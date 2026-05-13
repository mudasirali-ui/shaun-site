import FadeInSection from './FadeInSection';
import { HIGHLIGHTS } from '../data/siteData';

export default function Highlights() {
  return (
    <FadeInSection className="content-section soft-panel">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Highlights</p>
          <h2>Career highlights</h2>
          <p>Useful callouts for a recruiter or prospective client scanning quickly.</p>
        </div>

        <div className="card-grid three-up compact-grid">
          {HIGHLIGHTS.map((h) => (
            <article className="highlight-card" key={h.title}>
              <strong>{h.title}</strong>
              <p>{h.body}</p>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
