import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Building2,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;
  const [activeExpId, setActiveExpId] = useState(experience[0].id);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL TIMELINE & TRAINEESHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-gradient-cyan">Industrial Training</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            From high-stakes pharmaceutical SEZ quality engineering and high-voltage grid substations to intensive PLC/SCADA industrial certifications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Glowing Line (hidden on smallest screens, centered or left-aligned) */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500/50 via-emerald-500/40 to-blue-500/20 hidden sm:block" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              const isFirst = index === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#080c14] border-2 border-cyan-400 flex items-center justify-center z-20 shadow-lg shadow-cyan-500/30 hidden sm:flex">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Empty Spacer Column for balance on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card (Half width on desktop) */}
                  <div className={`w-full sm:w-1/2 ${
                    isEven ? 'sm:pr-10' : 'sm:pl-10'
                  }`}>
                    <div className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border ${
                      isFirst 
                        ? 'border-cyan-500/40 bg-gradient-to-br from-cyan-950/20 via-slate-900/80 to-slate-900/60 shadow-xl shadow-cyan-500/5' 
                        : 'border-white/10'
                    }`}>
                      
                      {/* Top Badges & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold ${
                          item.color === 'emerald'
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                            : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                        }`}>
                          {item.badge}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm mt-1">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{item.company}</span>
                      </div>

                      {/* Location & Duration Meta */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400 mt-2.5 pb-4 border-b border-white/5">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span className="line-clamp-1">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <ul className="mt-4 space-y-2.5">
                        {item.highlights.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tag Chips */}
                      <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 text-slate-400 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
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
