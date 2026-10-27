import React, { useState, useEffect } from 'react';
import { Sun, Moon, Phone, Menu, X, Sparkles } from 'lucide-react';
import { personalInfo as fallbackPersonalInfo } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar({ darkMode, setDarkMode }) {
  const { data } = usePortfolio();
  const info = data?.personalInfo || fallbackPersonalInfo;

  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-300 w-full max-w-6xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          darkMode 
            ? 'glass-pill-dark bg-[#130924]/80 border-purple-500/25 shadow-glow-sm' 
            : 'glass-pill-light bg-white/85 border-purple-300/40 shadow-md'
        }`}
      >
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-1.5 font-extrabold text-lg sm:text-xl tracking-tight group focus:outline-none"
        >
          <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>Portfolio</span>
          <span className="text-purple-500 group-hover:scale-125 transition-transform duration-300">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? darkMode
                      ? 'text-white bg-purple-600/30 border border-purple-400/40 shadow-glow-sm'
                      : 'text-purple-900 bg-purple-100 border border-purple-300'
                    : darkMode
                      ? 'text-purple-200/80 hover:text-white hover:bg-purple-900/30'
                      : 'text-slate-600 hover:text-purple-700 hover:bg-purple-50'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-glow-sm" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side Actions: Phone Call + Dark/Light Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone Link */}
          <a
            href={info.socials?.phone || `tel:${info.phone}`}
            title={info.phoneFormatted || info.phone}
            className={`p-2 sm:p-2.5 rounded-full transition-all duration-200 ${
              darkMode
                ? 'text-purple-300 hover:text-white bg-purple-900/30 hover:bg-purple-800/50 border border-purple-500/20'
                : 'text-purple-700 hover:text-purple-900 bg-purple-100/70 hover:bg-purple-200/80 border border-purple-200'
            }`}
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Theme Switcher Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`relative p-2 sm:p-2.5 rounded-full transition-all duration-300 group ${
              darkMode
                ? 'bg-purple-950/70 border border-purple-500/40 text-yellow-300 hover:shadow-glow-sm'
                : 'bg-purple-100 border border-purple-300 text-purple-700 hover:bg-purple-200'
            }`}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 transition-transform group-hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform group-hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className={`lg:hidden p-2 rounded-full transition-colors ${
              darkMode 
                ? 'text-purple-200 hover:bg-purple-900/40' 
                : 'text-slate-700 hover:bg-purple-100'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden fixed inset-x-4 top-20 rounded-2xl p-6 transition-all duration-300 shadow-2xl pointer-events-auto ${
            darkMode 
              ? 'bg-[#130924]/95 border border-purple-500/30 backdrop-blur-xl' 
              : 'bg-white/95 border border-purple-200 backdrop-blur-xl'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? darkMode
                        ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40'
                        : 'bg-purple-100 text-purple-900 border border-purple-300'
                      : darkMode
                        ? 'text-slate-300 hover:bg-purple-900/20 hover:text-white'
                        : 'text-slate-700 hover:bg-purple-50 hover:text-purple-700'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
              <span className={`text-xs ${darkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                {info.phoneFormatted || info.phone}
              </span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glow-btn"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
