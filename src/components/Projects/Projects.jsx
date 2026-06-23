import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data.js';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="project-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      {/* Image placeholder */}
      <div className="project-card__image" style={{ '--accent': project.color }}>
        <div className="project-card__image-inner">
          <span>{project.title[0]}</span>
        </div>
        {/* Replace with: <img src={project.image} alt={project.title} /> */}
        <div className="project-card__overlay">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="overlay-btn">
            <FiExternalLink size={18} /> Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn overlay-btn--ghost">
            <FiGithub size={18} /> GitHub
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-eyebrow">What I've Built</span>
          <h2 className="section-title">My <span>Projects</span></h2>
          <div className="section-line" />
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
