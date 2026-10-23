import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  ShieldAlert, 
  Cpu, 
  Sparkles,
  ChevronRight,
  Award
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section id="experience" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Proven Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering high-performance backend microservices, enterprise automation, serverless cloud pipelines, and AI-driven workflows.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-12">
          {experiences.map((exp, expIdx) => (
            <div 
              key={expIdx}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-300"
            >
              {/* Top Bar / Role & Company Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                    {exp.company === "Moody's Ratings" && (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        <Award className="w-3 h-3" />
                        Bronze Award (Q1 2025)
                      </span>
                    )}
                  </div>
                  <div className="text-base font-semibold text-teal-400">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlight summary statement */}
              <div className="py-4 text-sm text-slate-300 font-medium italic border-b border-slate-800/60">
                "{exp.highlight}"
              </div>

              {/* Key Deliverables & Impact Bullets */}
              <div className="py-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Deliverables & Quantified Impact
                </h4>
                
                <div className="grid grid-cols-1 gap-3.5">
                  {exp.achievements.map((ach, achIdx) => (
                    <div 
                      key={achIdx}
                      className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/70 hover:border-emerald-500/30 transition-colors flex items-start gap-3.5 group"
                    >
                      <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                            {ach.title}
                          </span>
                          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                            {ach.tag}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {ach.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs font-mono text-slate-300 bg-slate-800/60 hover:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
