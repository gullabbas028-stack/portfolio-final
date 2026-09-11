import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <Link to="home" smooth duration={600} className="footer__logo">
        GA<span>.</span>
      </Link>
      <p className="footer__copy">
        © {new Date().getFullYear()} Gull Abbas. Built with React & ❤️
      </p>
      <nav className="footer__nav">
        {['Home','About','Skills','Projects','Contact'].map(link => (
          <Link key={link} to={link.toLowerCase()} smooth duration={600} offset={-70} className="footer__link">
            {link}
          </Link>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
