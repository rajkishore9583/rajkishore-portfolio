import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, GraduationCap, Sparkles, CheckCircle2, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function CertificationsEducation({ darkMode }) {
  const { data } = usePortfolio();
  const certificationsData = data.certificationsData || [];
  const educationData = data.educationData || [];

  const [expandedSpecialization, setExpandedSpecialization] = useState(true);

  return (
    <section id="certificates" className="relative py-20 lg:py-28 overflow-hidden">
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
            CREDENTIALS & ACADEMICS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>Certifications & </span>
            <span className="text-neon-purple">Education</span>
          </h2>

          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Accredited SAP Professional credentials, industrial automation mastery, and rigorous engineering foundations.
          </p>
        </motion.div>

        {/* Two-Column Grid: Left Content (Certifications + Education) & Right Visual (male-cert.png) */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center"
        >
          
          {/* Left Column: Certifications List & Education Highlight */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Certifications Subsection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#1e1b4b]'}`}>
                  Professional Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certificationsData.map((cert) => {
                  const isSpecialization = !!cert.courses;

                  return (
                    <div
                      key={cert.title}
                      className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] ${
                        darkMode
                          ? 'glass-dark border-purple-500/25 hover:border-purple-400/50'
                          : 'glass-light border-purple-200 hover:border-purple-300'
                      }`}
                    >
                      {/* Top Header of Card */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-start gap-3">
                          <div className="p-2.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400 mt-0.5">
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-base sm:text-lg font-bold leading-snug ${
                              darkMode ? 'text-white' : 'text-[#1e1b4b]'
                            }`}>
                              {cert.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs font-medium text-purple-400 mt-0.5">
                              <span>{cert.issuer}</span>
                              <span>•</span>
                              <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>
                                {cert.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Verify Link */}
                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          href={cert.badgeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      </div>

                      <p className={`text-xs sm:text-sm mt-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {cert.description}
                      </p>

                      {/* Expandable 7-Course Specialization List */}
                      {isSpecialization && (
                        <div className="mt-4 pt-3 border-t border-purple-500/20">
                          <button
                            type="button"
                            onClick={() => setExpandedSpecialization(!expandedSpecialization)}
                            className="flex items-center justify-between w-full text-xs font-bold text-purple-300 hover:text-white transition-colors"
                          >
                            <span className="flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5" />
                              View 7 Specialization Modules
                            </span>
                            {expandedSpecialization ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>

                          {expandedSpecialization && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-2">
                              {cert.courses.map((course, cIdx) => (
                                <div 
                                  key={cIdx} 
                                  className={`flex items-start gap-2 p-2 rounded-xl text-xs ${
                                    darkMode 
                                      ? 'bg-purple-950/40 text-slate-300 border border-purple-500/15' 
                                      : 'bg-purple-50 text-slate-700 border border-purple-200'
                                  }`}
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                  <span>{course}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education Highlight Subsection with B.Tech 2024-2027 */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#1e1b4b]'}`}>
                  Education
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationData.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    whileHover={{ y: -4 }}
                    className={`p-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] ${
                      darkMode
                        ? 'glass-dark border-purple-500/20 hover:border-purple-400/40'
                        : 'glass-light border-purple-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-bold text-purple-400">
                        {edu.period}
                      </span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                        darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {edu.grade}
                      </span>
                    </div>

                    <h4 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-[#1e1b4b]'}`}>
                      {edu.degree}
                    </h4>

                    <p className="text-xs font-medium text-purple-300 dark:text-purple-300 text-purple-700 mt-0.5">
                      {edu.institution}
                    </p>

                    <p className={`text-xs mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {edu.highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: male-cert.png (Seamless Floating Cutout with Soft Radial Glow) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Soft Ambient Purple Radial Glow behind character */}
            <div className="absolute w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] bg-purple-600/25 blur-3xl rounded-full -z-10 pointer-events-none animate-pulse" />

            {/* Seamless Mascot Container (Zero square border, pure transparent cutout) */}
            <motion.div 
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square flex items-center justify-center"
            >
              
              {/* 3D Character Image with Smooth Radial Mask */}
              <img
                src="/images/male-cert.png"
                alt="Rajkishore Pradhan - Certified SAP Consultant"
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(124,58,237,0.35)] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_95%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_55%,transparent_95%)]"
              />

              {/* Floating Badge 1: 7-Course Specialization */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`absolute top-4 -left-4 sm:left-0 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] ${
                  darkMode 
                    ? 'bg-[#180d30]/90 border border-purple-500/40 text-purple-200' 
                    : 'bg-white/90 border border-purple-200 text-purple-900'
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-purple-400">Accredited</div>
                  <div className="text-xs font-bold">7 Courses Passed</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Academic Excellence */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`absolute bottom-6 -right-4 sm:right-0 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] ${
                  darkMode 
                    ? 'bg-[#180d30]/90 border border-purple-500/40 text-purple-200' 
                    : 'bg-white/90 border border-purple-200 text-purple-900'
                }`}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-purple-400">CUTM Distinction</div>
                  <div className="text-xs font-bold">CGPA: 8.81</div>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
