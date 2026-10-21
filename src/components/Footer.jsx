import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative border-t py-12 transition-colors duration-300 ${
      darkMode 
        ? 'bg-[#0b0418] border-purple-500/20 text-slate-400' 
        : 'bg-white border-purple-200 text-slate-600'
    }`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <a 
              href="#home" 
              className="flex items-center gap-1 font-extrabold text-xl tracking-tight"
            >
              <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>Portfolio</span>
              <span className="text-purple-500">.</span>
            </a>
            <p className="text-xs">
              <span className="font-semibold text-purple-400">{personalInfo.name}</span> — {personalInfo.title}
            </p>
            <p className="text-[11px] text-slate-500">
              {personalInfo.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`p-2 rounded-full border transition-all ${
                darkMode
                  ? 'border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/40'
                  : 'border-purple-200 text-purple-700 hover:bg-purple-50'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-full border transition-all ${
                darkMode
                  ? 'border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/40'
                  : 'border-purple-200 text-purple-700 hover:bg-purple-50'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.email}
              aria-label="Email"
              className={`p-2 rounded-full border transition-all ${
                darkMode
                  ? 'border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/40'
                  : 'border-purple-200 text-purple-700 hover:bg-purple-50'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.phone}
              aria-label="Phone"
              className={`p-2 rounded-full border transition-all ${
                darkMode
                  ? 'border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/40'
                  : 'border-purple-200 text-purple-700 hover:bg-purple-50'
              }`}
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                darkMode
                  ? 'border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/30 hover:border-purple-400 shadow-glow-sm'
                  : 'border-purple-300 text-purple-700 hover:bg-purple-50'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-purple-500/10 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} Rajkishore Pradhan. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Built with 3D Pixar Aesthetics, React & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
