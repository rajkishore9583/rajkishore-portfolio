import React, { useState, useEffect } from 'react';
import GlowBackground from './components/GlowBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CertificationsEducation from './components/CertificationsEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SapO2CDashboard from './pages/SapO2CDashboard';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path.includes('/projects/sap-o2c-dashboard') || hash.includes('/projects/sap-o2c-dashboard')) {
      return '/projects/sap-o2c-dashboard';
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.includes('/projects/sap-o2c-dashboard') || hash.includes('/projects/sap-o2c-dashboard')) {
        setCurrentRoute('/projects/sap-o2c-dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  if (currentRoute === '/projects/sap-o2c-dashboard') {
    return <SapO2CDashboard />;
  }

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background ambient glowing orbs & grid */}
      <GlowBackground />

      {/* Sticky Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CertificationsEducation />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
