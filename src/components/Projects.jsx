import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDemo = (project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
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
            SHOWCASE PORTFOLIO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>My Creative </span>
            <span className="text-neon-purple">Projects</span>
          </h2>

          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore real-world enterprise architectures, SAP business process simulations, and automated telemetry solutions.
          </p>
        </motion.div>

        {/* 3-Card Carousel/Grid with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] ${
                darkMode
                  ? 'glass-dark border-purple-500/25 hover:border-purple-400/60'
                  : 'glass-light border-purple-200 hover:border-purple-300'
              }`}
            >
              <div>
                {/* Project Image Preview Banner with Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-purple-950/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0418] via-transparent to-transparent opacity-80" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-950/80 text-purple-300 border border-purple-500/40 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Role Chip */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-purple-200 drop-shadow">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className={`text-lg font-bold leading-snug mb-3 group-hover:text-purple-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-[#1e1b4b]'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 ${
                    darkMode ? 'text-slate-300/90' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold ${
                          darkMode
                            ? 'bg-purple-950/60 text-purple-300 border border-purple-500/20'
                            : 'bg-purple-50 text-purple-800 border border-purple-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Code & Live Demo */}
              <div className="p-6 pt-0 border-t border-purple-500/15 flex items-center justify-between gap-3 mt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    darkMode
                      ? 'border-purple-500/30 text-purple-200 hover:text-white hover:bg-purple-900/30 hover:border-purple-400'
                      : 'border-purple-300 text-purple-700 hover:bg-purple-50'
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => handleOpenDemo(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-glow-btn transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Interactive Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
}
