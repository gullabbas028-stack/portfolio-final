import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data.js';
import './Skills.css';

const categoryColors = {
  Frontend: { color: '#00D4FF', bg: 'rgba(0,212,255,0.08)', icon: '🖥️' },
  Backend: { color: '#7C3AED', bg: 'rgba(124,58,237,0.08)', icon: '⚙️' },
  Tools: { color: '#FF6B6B', bg: 'rgba(255,107,107,0.08)', icon: '🛠️' },
};

const SkillBar = ({ name, level, color, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">What I Know</span>
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="skills__grid">
          {Object.entries(skills).map(([category, items], catIndex) => {
            const meta = categoryColors[category];
            return (
              <motion.div
                key={category}
                className="glass-card skills__card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              >
                <div className="skills__card-header">
                  <span
                    className="skills__category-icon"
                    style={{ background: meta.bg, color: meta.color }}
                  >
                    {meta.icon}
                  </span>
                  <h3 className="skills__category-name" style={{ color: meta.color }}>
                    {category}
                  </h3>
                </div>

                <div className="skills__bars">
                  {items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={meta.color}
                      delay={catIndex * 0.1 + i * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
