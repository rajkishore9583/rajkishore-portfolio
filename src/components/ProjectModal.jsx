import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Zap, 
  Cpu, 
  ShieldAlert, 
  Activity, 
  BarChart2,
  Layers
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-3xl glass-card rounded-2xl border border-white/15 bg-[#0b1120]/95 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Engineering Specification • {project.category}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            
            {/* Project Image Preview */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/8] bg-slate-900 border border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/bg_1.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                  {project.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Problem & Solution Dual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-rose-500/20">
                <h4 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Engineering Challenge
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/20">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  Technical Solution
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Architectural Features */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Key Technical Highlights & Specifications
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-white/5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measured Impact */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-emerald-950/40 border border-cyan-500/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-cyan-400 uppercase font-bold">Verified Operational Impact</p>
                <p className="text-xs sm:text-sm font-medium text-white">{project.impact}</p>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-white/10 bg-slate-900/60 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              Balasore, Odisha • Rajkishore Pradhan
            </span>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-colors shadow-md shadow-cyan-500/20"
              >
                <span>Discuss Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
