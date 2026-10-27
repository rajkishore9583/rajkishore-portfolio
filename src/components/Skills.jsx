import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Boxes, GitPullRequest, Code2, Sparkles, CheckCircle, Layers } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Skills({ darkMode }) {
  const { data } = usePortfolio();
  const skillsData = data.skillsData || [];

  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillsData.map(c => c.category)];

  const filteredCategories = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(cat => cat.category === activeTab);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'SAP & ERP':
        return <Boxes className="w-5 h-5 text-purple-400" />;
      case 'Functional Consulting':
        return <GitPullRequest className="w-5 h-5 text-purple-400" />;
      case 'Software & Technical':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div 
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
              darkMode
                ? 'bg-purple-950/70 text-purple-300 border border-purple-500/30 shadow-glow-sm'
                : 'bg-purple-100 text-purple-800 border border-purple-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            CORE CAPABILITIES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>Specialized </span>
            <span className="text-neon-purple">Skills & Expertise</span>
          </h2>

          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Bridging enterprise business architecture with hands-on software engineering and automated data intelligence.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : darkMode
                      ? 'bg-purple-950/40 text-purple-300/80 hover:text-white hover:bg-purple-900/40 border border-purple-500/20'
                      : 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Categorized Skills Grid with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] ${
                darkMode
                  ? 'glass-dark border-purple-500/25 hover:border-purple-400/50'
                  : 'glass-light border-purple-200/80 hover:border-purple-300'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-purple-600/20 border border-purple-500/30">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#1e1b4b]'}`}>
                      {catGroup.category}
                    </h3>
                  </div>
                </div>

                <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {catGroup.description}
                </p>

                {/* Skills List with Proficiency Meters */}
                <div className="space-y-4">
                  {catGroup.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                          {skill.name}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                          darkMode 
                            ? 'bg-purple-900/50 text-purple-300 border border-purple-500/20' 
                            : 'bg-purple-100 text-purple-800 border border-purple-200'
                        }`}>
                          {skill.tag}
                        </span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className={`w-full h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-purple-950/60' : 'bg-purple-100'
                      }`}>
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 transition-all duration-1000 shadow-glow-sm"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="pt-6 mt-6 border-t border-purple-500/15 flex items-center justify-between text-[11px]">
                <span className={darkMode ? 'text-purple-300/70' : 'text-purple-700/70'}>
                  {catGroup.skills.length} Core Competencies
                </span>
                <span className="flex items-center gap-1 font-bold text-neon-purple">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Proficiency
                </span>
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
