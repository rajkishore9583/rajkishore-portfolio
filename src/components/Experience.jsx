import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Experience({ darkMode }) {
  const { data } = usePortfolio();
  const experienceData = data.experienceData || [];

  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <div 
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
              darkMode
                ? 'bg-purple-950/70 text-purple-300 border border-purple-500/30 shadow-glow-sm'
                : 'bg-purple-100 text-purple-800 border border-purple-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            CAREER TRAJECTORY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>Experience & </span>
            <span className="text-neon-purple">Internships</span>
          </h2>

          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Cross-functional background across SAP functional consulting, software engineering, and high-stakes enterprise manufacturing quality.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-indigo-500/30 shadow-glow-sm" />

          <div className="space-y-8 sm:space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={exp.role + index} 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Indicator */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#180d30] border-2 border-purple-500 shadow-glow-sm items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                  </div>

                  {/* Content Card (Takes half the width) */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div 
                      className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] ${
                        darkMode
                          ? 'glass-dark border-purple-500/25 hover:border-purple-400/50'
                          : 'glass-light border-purple-200 hover:border-purple-300'
                      }`}
                    >
                      {/* Top Badges: Type & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          darkMode 
                            ? 'bg-purple-900/60 text-purple-300 border border-purple-500/30' 
                            : 'bg-purple-100 text-purple-800 border border-purple-200'
                        }`}>
                          {exp.badge}
                        </span>

                        <div className={`flex items-center gap-1.5 text-xs font-mono font-semibold ${
                          darkMode ? 'text-purple-300' : 'text-purple-700'
                        }`}>
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${
                        darkMode ? 'text-white' : 'text-[#1e1b4b]'
                      }`}>
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-medium text-purple-400 mt-1 mb-4">
                        <span className="font-semibold text-purple-300 dark:text-purple-300 text-purple-800">
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className={`flex items-center gap-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="space-y-2 mb-5">
                          {exp.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                              <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                              <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech Chips */}
                      {exp.tech && exp.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-500/15">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold ${
                                darkMode
                                  ? 'bg-[#0b0418]/60 text-purple-200 border border-purple-500/20'
                                  : 'bg-white text-purple-800 border border-purple-200'
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Empty spacer on opposite side for desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
