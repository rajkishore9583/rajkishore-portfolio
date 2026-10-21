import React, { useState, useEffect } from 'react';
import GlowBackground from './components/GlowBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CertificationsEducation from './components/CertificationsEducation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('rajkishore_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default to Dark Mode as per reference purple neon design
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('rajkishore_theme', 'dark');
      document.body.style.backgroundColor = '#0b0418';
      document.body.style.color = '#f1f5f9';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('rajkishore_theme', 'light');
      document.body.style.backgroundColor = '#f8f6ff';
      document.body.style.color = '#1e1b4b';
    }
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen transition-colors duration-300 selection:bg-purple-600/30 selection:text-purple-300 ${
      darkMode ? 'bg-[#0b0418] text-slate-100' : 'bg-[#f8f6ff] text-[#1e1b4b]'
    }`}>
      {/* Background ambient glowing orbs & cyber grid */}
      <GlowBackground />

      {/* Floating Pill Navbar with Theme Switcher */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <CertificationsEducation darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
