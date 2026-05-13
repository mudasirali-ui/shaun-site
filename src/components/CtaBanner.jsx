import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function CtaBanner() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <motion.section
      className="cta-banner-section"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner-glow" aria-hidden="true" />
          <div className="cta-banner-content">
            <h2>Ready to strengthen your workplace strategy?</h2>
            <p>
              Whether you need compliance advice, workplace training or negotiation support,
              I'm here to help your organisation thrive.
            </p>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn btn-primary" id="cta-banner-contact">
                Get in touch
              </Link>
              <Link to="/services" className="btn btn-secondary" id="cta-banner-services">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
