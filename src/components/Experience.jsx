import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { EXPERIENCE } from '../data/siteData';

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  const [ref, isVisible] = useInView({ threshold: 0.05 });

  return (
    <section className="content-section" id="experience" ref={ref}>
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Experience</p>
          <h2>Selected experience</h2>
          <p>A concise portfolio version of the most relevant roles from the CV.</p>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <motion.article
              className="timeline-item"
              key={job.period}
              custom={i}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={itemVariants}
            >
              <div className="timeline-meta">{job.period}</div>
              <h3>
                {job.role}
                {job.company && ` · ${job.company}`}
              </h3>
              <p className="timeline-location">{job.location}</p>
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
