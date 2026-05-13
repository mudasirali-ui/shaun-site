import FadeInSection from './FadeInSection';
import { ABOUT } from '../data/siteData';

export default function About() {
  const { tag, heading, description, cards } = ABOUT;

  return (
    <FadeInSection className="content-section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">{tag}</p>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>

        <div className="about-grid">
          {cards.map((card) => (
            <article className="glass-card" key={card.title}>
              <h3>{card.title}</h3>
              {card.body && <p>{card.body}</p>}
              {card.listItems && (
                <ul className="insight-list">
                  {card.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
