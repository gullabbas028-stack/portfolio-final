import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../../data.js';
import './Hero.css';

// Typing animation hook
const useTypingEffect = (words, speed = 100, pause = 2000) => {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex(i => (i + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
};

const Hero = () => {
  const typedText = useTypingEffect([
    'MERN Developer',
    'Full Stack Developer',
    'React js Developer',
    'UI/UX of websites',
    'Problem Solver',
  ]);

  return (
    <section id="home" className="hero">
      {/* Animated grid background */}
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__container">
        {/* Left: Text */}
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.span
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hello, I'm
          </motion.span>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {personalInfo.name}
          </motion.h1>

          <div className="hero__typed">
            <span className="hero__typed-label">I'm a </span>
            <span className="hero__typed-text">{typedText}</span>
            <span className="hero__cursor">|</span>
          </div>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.tagline}. Turning ideas into responsive, pixel-perfect web experiences.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="contact" smooth duration={600} offset={-70}>
              <button className="btn btn-primary">
                <FiMail size={16} /> Hire Me
              </button>
            </Link>
            <a href="CV.png" download className="btn btn-outline">
              <FiDownload size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="hero__image-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        >
          <div className="hero__image-ring">
            <div className="hero__image-placeholder">
             
              <img className='arbaziimg' src="/Arbazpic.jpeg" alt="Gull Abbas" />



            </div>
          </div>
          <div className="hero__badge hero__badge--exp">
            <span className="badge-num">1+</span>
            <span className="badge-label">Year Experience</span>
          </div>
          <div className="hero__badge hero__badge--proj">
            <span className="badge-num">10+</span>
            <span className="badge-label">Projects Done</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
