import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCalendar, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo, education, experience } from '../../data';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="section-eyebrow">Who I Am</span>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="about__grid">
          {/* Personal Info Card */}
          <motion.div
            className="glass-card about__info"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
          >
            <p className="about__bio">{personalInfo.bio}</p>

            <ul className="about__details">
              {[
                { icon: <FiMail />, label: personalInfo.email },
                { icon: <FiPhone />, label: personalInfo.phone },
                { icon: <FiMapPin />, label: 'Lahore, Pakistan' },
              ].map((item, i) => (
                <li key={i} className="about__detail-item">
                  <span className="about__detail-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education & Experience */}
          <div className="about__timeline">
            {/* Education */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
            >
              <h3 className="about__timeline-title">
                <span className="about__timeline-icon">🎓</span> Education
              </h3>
              {education.map((edu, i) => (
                <div key={i} className="timeline-card glass-card">
                  <div className="timeline-card__header">
                    <h4>{edu.degree}</h4>
                    <span className="timeline-badge">
                      <FiCalendar size={12} /> {edu.period}
                    </span>
                  </div>
                  <p className="timeline-card__sub">{edu.institution}</p>
                  <p className="timeline-card__desc">{edu.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 }}
            >
              <h3 className="about__timeline-title">
                <span className="about__timeline-icon">💼</span> Experience
              </h3>
              {experience.map((exp, i) => (
                <div key={i} className="timeline-card glass-card">
                  <div className="timeline-card__header">
                    <h4>{exp.role}</h4>
                    <span className="timeline-badge">
                      <FiCalendar size={12} /> {exp.period}
                    </span>
                  </div>
                  <p className="timeline-card__sub">{exp.company}</p>
                  <p className="timeline-card__desc">{exp.description}</p>
                  <ul className="timeline-card__list">
                    {exp.highlights.map((h, j) => (
                      <li key={j}><span className="dot" />  {h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
