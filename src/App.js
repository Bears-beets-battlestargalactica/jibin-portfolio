// src/App.js
import { useEffect, useState } from 'react';
import AOS from 'aos';

// Component imports
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget'; // ✅ Add this

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={darkMode ? 'dark bg-zinc-900 text-white' : 'bg-white text-black'}>
      <Hero toggleTheme={() => setDarkMode(!darkMode)} isDark={darkMode} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact isDark={darkMode} />
      <Footer />
      <ChatWidget /> {/* ✅ Injected at the end so it overlays on all views */}
    </div>
  );
}
