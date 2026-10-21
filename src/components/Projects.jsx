import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Layers, 
  Sparkles,
  Zap,
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'automation', label: 'Automation & Electrical' },
  { id: 'plc', label: 'PLC & SCADA' },
  { id: 'enterprise', label: 'Enterprise & SAP' }
];

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.categoryKey === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>APPLIED ENGINEERING & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Real-world power factor optimization, closed-loop industrial PLC/SCADA systems, and SAP S/4HANA enterprise workflow optimizations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-lg shadow-cyan-500/15'
                    : 'text-slate-400 bg-slate-900/60 hover:text-slate-200 hover:bg-slate-800/80 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Zoom Effect */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/bg_1.jpg";
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />

                    {/* Category Pill Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Interactive Inspect Hint Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute top-3 right-3 p-2 rounded-lg bg-slate-950/80 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400 transition-colors backdrop-blur-md"
                      title="Quick Deep Dive"
                    >
                      <Info className="w-4 h-4 text-cyan-400" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-[11px] font-mono text-cyan-400 mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                  >
                    <span>Technical Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Deep Dive Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
