import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, darkMode }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className={`relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden transition-all ${
          darkMode 
            ? 'bg-[#130924] border border-purple-500/40 text-slate-100' 
            : 'bg-white border border-purple-200 text-slate-800'
        }`}
      >
        {/* Glow Accent */}
        <div 
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)' }}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                darkMode ? 'bg-purple-900/60 text-purple-300' : 'bg-purple-100 text-purple-800'
              }`}>
                {project.category}
              </span>
              <span className="text-xs font-semibold text-purple-400">
                • {project.role}
              </span>
            </div>

            <h3 className={`text-xl sm:text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-[#1e1b4b]'}`}>
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              darkMode ? 'text-slate-400 hover:text-white hover:bg-purple-900/40' : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6">
          {/* Overview */}
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {project.overview}
          </p>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div 
                key={m.label} 
                className={`p-3.5 rounded-2xl text-center ${
                  darkMode ? 'bg-purple-950/40 border border-purple-500/20' : 'bg-purple-50 border border-purple-200'
                }`}
              >
                <div className="text-xl sm:text-2xl font-extrabold text-neon-purple">{m.value}</div>
                <div className={`text-[11px] font-semibold mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl ${
              darkMode ? 'bg-[#180d30]/60 border border-purple-500/15' : 'bg-slate-50 border border-slate-200'
            }`}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1.5">Enterprise Challenge</h4>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.challenge}
              </p>
            </div>

            <div className={`p-4 rounded-2xl ${
              darkMode ? 'bg-[#180d30]/60 border border-purple-500/15' : 'bg-slate-50 border border-slate-200'
            }`}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1.5">Delivered Solution</h4>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                  darkMode
                    ? 'bg-purple-900/40 text-purple-200 border border-purple-500/25'
                    : 'bg-purple-100 text-purple-900 border border-purple-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-purple-500/20">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                darkMode
                  ? 'border-purple-500/30 text-purple-200 hover:text-white hover:bg-purple-900/30'
                  : 'border-purple-300 text-purple-700 hover:bg-purple-50'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-glow-btn transition-all"
            >
              Close Deep-Dive
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
