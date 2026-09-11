import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext.jsx';

// Components
import Loader from './components/ui/Loader.jsx';
import ScrollToTop from './components/ui/ScrollToTop.jsx';
import  Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Navbar/>
             <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
