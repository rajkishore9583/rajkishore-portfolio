import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone, Download, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ darkMode }) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content with Smooth Staggered Entrance */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            
            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`p-2.5 rounded-full border transition-all duration-300 ${
                  darkMode
                    ? 'border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'border-purple-300 text-purple-700 hover:text-purple-900 hover:bg-purple-100 hover:shadow-md'
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`p-2.5 rounded-full border transition-all duration-300 ${
                  darkMode
                    ? 'border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'border-purple-300 text-purple-700 hover:text-purple-900 hover:bg-purple-100 hover:shadow-md'
                }`}
              >
                <Github className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socials.email}
                aria-label="Email"
                className={`p-2.5 rounded-full border transition-all duration-300 ${
                  darkMode
                    ? 'border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'border-purple-300 text-purple-700 hover:text-purple-900 hover:bg-purple-100 hover:shadow-md'
                }`}
              >
                <Mail className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socials.phone}
                aria-label="Phone"
                className={`p-2.5 rounded-full border transition-all duration-300 ${
                  darkMode
                    ? 'border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'border-purple-300 text-purple-700 hover:text-purple-900 hover:bg-purple-100 hover:shadow-md'
                }`}
              >
                <Phone className="w-4 h-4" />
              </motion.a>

              {/* Status pill badge */}
              <div 
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ml-2 ${
                  darkMode 
                    ? 'bg-purple-950/60 text-purple-300 border border-purple-500/30' 
                    : 'bg-purple-100/80 text-purple-800 border border-purple-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles
              </div>
            </div>

            {/* Main Title Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>Hi, I'm </span>
                <span className="text-neon-purple drop-shadow-sm">
                  {personalInfo.firstName}
                </span>
              </h1>

              {/* Subtitle in Monospace */}
              <p className={`font-mono text-base sm:text-lg font-semibold tracking-wide ${
                darkMode ? 'text-purple-300/90' : 'text-purple-700'
              }`}>
                {personalInfo.title}
              </p>
            </div>

            {/* Exact Bio */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-xl ${
              darkMode ? 'text-slate-300/90' : 'text-slate-600'
            }`}>
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons: Solid Purple Pill + Outlined Pill */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Solid Download CV Pill */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.resumeUrl}
                download="Rajkishore_Pradhan_SAP_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-glow-btn hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </motion.a>

              {/* Outlined Hire Me Pill */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                  darkMode
                    ? 'border-purple-500/50 text-purple-200 hover:text-white hover:bg-purple-600/20 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                    : 'border-purple-600 text-purple-700 hover:bg-purple-50 hover:shadow-md'
                }`}
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Quick enterprise competence markers */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium">
              <span className={`flex items-center gap-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> SAP S/4HANA & O2C
              </span>
              <span className={`flex items-center gap-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> SAP Activate Methodology
              </span>
              <span className={`flex items-center gap-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Python & SQL Analytics
              </span>
            </div>

          </motion.div>

          {/* Right Column: 3D Mascot Character with Seamless Floating Animation & Tech Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Soft Ambient Purple Radial Glow behind character */}
            <div className="absolute w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] bg-purple-600/25 blur-3xl rounded-full -z-10 pointer-events-none animate-pulse" />

            {/* Central Mascot Container (Zero border, Zero card frame, pure transparent cutout) */}
            <motion.div 
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center pointer-events-auto"
            >
              
              {/* 3D Male Character Image with Smooth Radial Mask */}
              <img
                src="/images/male-hero.png"
                alt="Rajkishore Pradhan 3D Mascot Character"
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(124,58,237,0.35)] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_95%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_55%,transparent_95%)]"
              />

              {/* Floating 3D Badge 1: SAP S/4HANA (Top Left) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className={`absolute -top-2 -left-4 sm:left-0 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] ${
                  darkMode 
                    ? 'bg-[#180d30]/90 border border-purple-500/40 text-purple-200' 
                    : 'bg-white/90 border border-purple-200 text-purple-900'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-[11px] shadow-sm">
                  SAP
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-purple-400">Enterprise</div>
                  <div className="text-xs font-bold leading-tight">S/4HANA</div>
                </div>
              </motion.div>

              {/* Floating 3D Badge 2: Python (Top Right) */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className={`absolute top-6 -right-4 sm:right-0 px-3 py-1.5 rounded-2xl flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] ${
                  darkMode 
                    ? 'bg-[#180d30]/90 border border-purple-500/40 text-purple-200' 
                    : 'bg-white/90 border border-purple-200 text-purple-900'
                }`}
              >
                <span className="text-lg">🐍</span>
                <div className="text-xs font-bold leading-tight">Python</div>
              </motion.div>

              {/* Floating 3D Badge 3: SQL & BDC (Bottom Left) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1 }}
                className={`absolute bottom-4 -left-3 sm:left-2 px-3 py-1.5 rounded-2xl flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] ${
                  darkMode 
                    ? 'bg-[#180d30]/90 border border-purple-500/40 text-purple-200' 
                    : 'bg-white/90 border border-purple-200 text-purple-900'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <div className="text-xs font-bold leading-tight">SQL & BDC</div>
              </motion.div>

              {/* Floating 3D Badge 4: SAP BTP & Activate (Bottom Right) */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.1 }}
                className={`absolute bottom-8 -right-4 sm:right-2 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] ${
                  darkMode 
                    ? 'bg-[#180d30]/90 border border-purple-500/40 text-purple-200' 
                    : 'bg-white/90 border border-purple-200 text-purple-900'
                }`}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-purple-400">Cloud & ALM</div>
                  <div className="text-xs font-bold leading-tight">SAP BTP</div>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
