import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Monitor, 
  Settings, 
  Sliders, 
  CircuitBoard, 
  Zap, 
  Shield, 
  FileCode, 
  Layers, 
  Wrench, 
  Box, 
  Code, 
  Database, 
  Cloud, 
  FileSpreadsheet, 
  GitBranch, 
  CheckCircle2, 
  MessageSquare, 
  Users, 
  ShieldAlert,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Monitor: Monitor,
  Settings: Settings,
  Sliders: Sliders,
  CircuitBoard: CircuitBoard,
  Zap: Zap,
  Shield: Shield,
  FileCode: FileCode,
  Layers: Layers,
  Wrench: Wrench,
  Box: Box,
  Code: Code,
  Database: Database,
  Cloud: Cloud,
  FileSpreadsheet: FileSpreadsheet,
  GitBranch: GitBranch,
  CheckCircle2: CheckCircle2,
  MessageSquare: MessageSquare,
  Users: Users,
  ShieldAlert: ShieldAlert,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills.items
    : skills.items.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY & TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Domain Expertise</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Categorized competence spanning industrial automation hardware, electrical design CAD, Python scripting, and enterprise SAP.
          </p>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skills.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-lg shadow-cyan-500/15'
                    : 'text-slate-400 bg-slate-900/60 hover:text-slate-200 hover:bg-slate-800/80 border border-white/5'
                }`}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl border border-cyan-400/30 pointer-events-none"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Cpu;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className={`glass-card glass-card-hover rounded-xl p-5 border ${
                    skill.highlight 
                      ? 'border-cyan-500/25 bg-gradient-to-br from-cyan-950/15 to-slate-900/70' 
                      : 'border-white/5'
                  } flex flex-col justify-between`}
                >
                  <div>
                    {/* Card Top: Icon & Title */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          skill.highlight 
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                            : 'bg-slate-800/80 text-slate-300 border border-white/5'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-white flex items-center gap-2">
                            {skill.name}
                            {skill.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" title="Core Specialty" />
                            )}
                          </h3>
                          <span className="text-[11px] font-mono text-cyan-400/80 uppercase">
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      {/* Percentage Badge */}
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-slate-950/60 border border-white/10 text-cyan-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Brief Note */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {skill.note}
                    </p>
                  </div>

                  {/* Level Indicator Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                      <span>Proficiency</span>
                      <span>{skill.level >= 85 ? 'Advanced' : 'Proficient'}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400'
                            : 'bg-gradient-to-r from-slate-500 to-cyan-500'
                        }`}
                      />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Industrial Standards & Protocol Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Regulatory & Safety Standard Compliance</h4>
              <p className="text-xs text-slate-400">Trained in FDA/cGMP pharma SEZ quality audits, IEEE/IEC electrical drafting standards, and Indian Electricity Grid Rules.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-mono">
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-slate-300">IEC 61131-3</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-slate-300">cGMP / SEZ</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-slate-300">IEEE Standards</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-slate-300">LOTO Safety</span>
          </div>
        </div>

      </div>
    </section>
  );
}
