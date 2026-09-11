import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '../../data.js';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-eyebrow">What I Offer</span>
          <h2 className="section-title">My <span>Services</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="service-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <div className="service-card__arrow">→</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
