import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, FolderKanban, ShieldCheck, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function About({ darkMode }) {
  const { data } = usePortfolio();
  const personalInfo = data.personalInfo;

  return (
    <section 
      id="about" 
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Visual: male-about.png (Seamless Floating Cutout with Soft Radial Glow) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Soft Ambient Purple Radial Glow behind character */}
            <div className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] bg-purple-600/25 blur-3xl rounded-full -z-10 pointer-events-none animate-pulse" />

            {/* Seamless Character Container (Zero square border, pure transparent cutout) */}
            <motion.div 
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[300px] sm:w-[360px] aspect-square flex items-center justify-center"
            >
              {/* 3D Character Image (Suit Pose) with Smooth Radial Gradient Mask */}
              <img
                src="/images/male-about.png"
                alt="Rajkishore Pradhan - SAP Technology Consultant"
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(124,58,237,0.35)] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_95%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_55%,transparent_95%)]"
              />

              {/* Floating Verified Badge */}
              <motion.div 
                whileHover={{ scale: 1.08 }}
                className={`absolute bottom-2 right-4 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] ${
                  darkMode
                    ? 'bg-[#180d30]/95 border border-purple-500/40 text-purple-200'
                    : 'bg-white/95 border border-purple-200 text-purple-900'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold">SAP Certified</span>
              </motion.div>
            </motion.div>

          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Tag Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                darkMode
                  ? 'bg-purple-950/70 text-purple-300 border border-purple-500/30 shadow-glow-sm'
                  : 'bg-purple-100 text-purple-800 border border-purple-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              ABOUT ME
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>
                {personalInfo.aboutHeading}
              </span>
            </h2>

            {/* Description */}
            <p className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300/90' : 'text-slate-600'
            }`}>
              {personalInfo.aboutDescription}
            </p>

            {/* 3 Stat Counter Cards with Interactive Hover Glow */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Stat 1 */}
              {personalInfo.stats?.[0] && (
                <motion.div 
                  whileHover={{ y: -6 }}
                  className={`p-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] ${
                    darkMode 
                      ? 'glass-dark border-purple-500/20 hover:border-purple-500/50' 
                      : 'glass-light border-purple-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-neon-purple">
                      {personalInfo.stats[0].value}
                    </span>
                    <Award className="w-6 h-6 text-purple-400/80" />
                  </div>
                  <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {personalInfo.stats[0].label}
                  </p>
                </motion.div>
              )}

              {/* Stat 2 */}
              {personalInfo.stats?.[1] && (
                <motion.div 
                  whileHover={{ y: -6 }}
                  className={`p-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] ${
                    darkMode 
                      ? 'glass-dark border-purple-500/20 hover:border-purple-500/50' 
                      : 'glass-light border-purple-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-neon-purple">
                      {personalInfo.stats[1].value}
                    </span>
                    <FolderKanban className="w-6 h-6 text-purple-400/80" />
                  </div>
                  <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {personalInfo.stats[1].label}
                  </p>
                </motion.div>
              )}

              {/* Stat 3 */}
              {personalInfo.stats?.[2] && (
                <motion.div 
                  whileHover={{ y: -6 }}
                  className={`p-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] ${
                    darkMode 
                      ? 'glass-dark border-purple-500/20 hover:border-purple-500/50' 
                      : 'glass-light border-purple-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-neon-purple">
                      {personalInfo.stats[2].value}
                    </span>
                    <ShieldCheck className="w-6 h-6 text-purple-400/80" />
                  </div>
                  <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {personalInfo.stats[2].label}
                  </p>
                </motion.div>
              )}

            </div>

            {/* CTA Button: Let's Talk -> with Hover Glow */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-glow-btn hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
