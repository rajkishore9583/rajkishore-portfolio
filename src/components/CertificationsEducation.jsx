import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Building, 
  Sparkles,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CertificationsEducation() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>QUALIFICATIONS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Rigorous electrical engineering academia backed by premier vocational skill institutes and certified enterprise systems training.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Formal Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Academic Journey</h3>
                <p className="text-xs text-slate-400 font-mono">B.Tech & Diploma in Electrical Engineering</p>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden"
                >
                  {/* Score / Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {edu.period}
                    </span>

                    {edu.score ? (
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20">
                        {edu.score}
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  {/* Degree Name */}
                  <h4 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {edu.degree}
                  </h4>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-medium mt-1 mb-4">
                    <Building className="w-4 h-4 shrink-0" />
                    <span>{edu.institution}</span>
                    {edu.location && <span className="text-slate-500 font-mono">({edu.location})</span>}
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 pt-3 border-t border-white/5">
                    {edu.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Professional Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Technical Certifications</h3>
                <p className="text-xs text-slate-400 font-mono">Industry-Recognized Vocational Qualifications</p>
              </div>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Badge & Year */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{cert.badge}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {cert.date}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <h4 className="text-lg font-bold text-white leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-1 mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills Pill Tags */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
