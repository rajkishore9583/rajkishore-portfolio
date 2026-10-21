import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  CheckCircle2, 
  Cpu, 
  Activity, 
  Zap, 
  Layers, 
  FileCode,
  MapPin,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = portfolioData.personal.typingRoles;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-sm shadow-cyan-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{portfolioData.personal.statusBadge}</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <span className="text-slate-400 font-mono text-sm uppercase tracking-wider block">
                Hello, I am
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="text-white">{portfolioData.personal.name}</span>
              </h1>
              
              {/* Dynamic Rotating Role */}
              <div className="h-10 flex items-center">
                <span className="text-lg sm:text-xl font-mono text-slate-300 mr-2">Focusing on:</span>
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent font-mono"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug"
            >
              {portfolioData.personal.heroHeadline}
            </motion.h2>

            {/* Sub-text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl"
            >
              {portfolioData.personal.heroSubtext}
            </motion.p>

            {/* Hero CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Get in Touch</span>
              </a>
            </motion.div>

            {/* Quick Location & Email info pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Balasore, Odisha, India</span>
              </div>
              <div className="h-3 w-px bg-slate-800" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dr. Reddy's Lab Quality Alumni</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Rotating Cyber Ring Effect */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-blue-500/20 blur-xl opacity-75 animate-pulse-slow pointer-events-none" />

              {/* Main Profile Card Container */}
              <div className="relative glass-card rounded-2xl p-4 sm:p-5 border border-white/15 overflow-hidden">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-400">automation_eng.sys</span>
                  </div>
                  <span className="text-cyan-400 text-[11px]">ACTIVE / ONLINE</span>
                </div>

                {/* Photo & Hologram Effect */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/4] bg-slate-900 border border-white/10 group">
                  <img
                    src="/images/about-me.png"
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/bg_1.png";
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Markers */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-400" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-400" />

                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-slate-400 font-mono">Specialization</p>
                      <p className="text-xs font-bold text-white">PLC • SCADA • E-CAD</p>
                    </div>
                    <div className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                      SDI Certified
                    </div>
                  </div>
                </div>

                {/* Floating Tech Chips Row */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors">
                    <span className="text-cyan-400 font-bold block">PLC / SCADA</span>
                    <span className="text-[10px] text-slate-400">Controls</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 transition-colors">
                    <span className="text-emerald-400 font-bold block">Python</span>
                    <span className="text-[10px] text-slate-400">Automation</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5 hover:border-blue-500/30 transition-colors">
                    <span className="text-blue-400 font-bold block">SAP S/4HANA</span>
                    <span className="text-[10px] text-slate-400">BDC Flow</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {portfolioData.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-xl p-4 sm:p-5 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors font-mono">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                {stat.sub}
              </p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <a 
        href="#about"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px]">EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
