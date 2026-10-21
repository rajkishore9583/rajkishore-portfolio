import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  ShieldCheck, 
  Layers, 
  MapPin, 
  Phone, 
  Mail, 
  Languages, 
  CheckCircle, 
  GraduationCap,
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Layers: Layers
};

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Rajkishore Pradhan</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Synthesizing core electrical power systems, plant-floor automation, and modern enterprise software.
          </p>
        </div>

        {/* Top Split: Detailed Bio & Quick Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Bio Narrative (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Electrical & Industrial Automation Trajectory</h3>
                <p className="text-xs text-slate-400 font-mono">B.Tech Student & Certified Control Specialist</p>
              </div>
            </div>

            <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
              {about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Languages Spoken Chips */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                <Languages className="w-4 h-4 text-cyan-400" />
                <span>LANGUAGES SPOKEN:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {about.languages.map((lang, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-2.5"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div>
                      <p className="text-xs font-bold text-white">{lang.name}</p>
                      <p className="text-[10px] text-slate-400">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Quick Spec Sheet & Direct Contact (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Spec Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2 text-cyan-400">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                Quick Profile Overview
              </h3>

              <div className="divide-y divide-white/5 text-xs sm:text-sm">
                {about.quickFacts.map((fact, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center gap-2">
                    <span className="text-slate-400 font-mono text-xs">{fact.label}</span>
                    <span className="font-semibold text-slate-200 text-right">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 bg-gradient-to-br from-cyan-950/20 via-slate-900/60 to-emerald-950/20 space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Contact Coordinates</h4>
              
              <a 
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 transition-all text-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-slate-400 block text-[10px]">Email</span>
                  <span className="text-white font-mono truncate block">{personal.email}</span>
                </div>
              </a>

              <a 
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/5 hover:border-emerald-500/30 transition-all text-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Phone / WhatsApp</span>
                  <span className="text-white font-mono">{personal.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Location</span>
                  <span className="text-white font-mono">{personal.location}</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom: Core Strengths / Highlights Cards (3 Cards) */}
        <div>
          <div className="text-left mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              Core Engineering Pillars
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">Three high-impact domains where theoretical expertise meets factory-floor execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.highlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || Cpu;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Badges / Pill Tags */}
                  <div className="pt-6 mt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/5 group-hover:border-cyan-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
