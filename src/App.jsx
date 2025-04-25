import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
      backgroundColor: darkMode ? '#FBBF24' : '#D97706', // amber-400 in dark, amber-600 in light
    },
    hover: {
      x: mousePosition.x - 7.5,
      y: mousePosition.y - 7.5,
      height: 15,
      width: 15,
      backgroundColor: darkMode ? '#FCD34D' : '#F59E0B', // amber-300 in dark, amber-500 in light
    },
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleMouseEnter = () => setCursorVariant('hover');
  const handleMouseLeave = () => setCursorVariant('default');

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-yellow-100 dark:from-gray-800 dark:to-blue-900 transition-colors duration-300">
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <About onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <Projects onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <Skills onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <Contact onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      </main>
      <Footer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </div>
  );
}

export default App;