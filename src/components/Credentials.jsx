import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { education, certificationsAndAwards } from '../data/portfolioData';

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 bg-slate-950/70 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Qualifications & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic foundation from Manipal Institute of Technology paired with industry-recognized cloud credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Education Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
            <div className="space-y-6">
              
              {/* Card Top */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-semibold">
                      Higher Education
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                      {education.degree} in {education.field}
                    </h3>
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0 whitespace-nowrap pl-14 sm:pl-0">
                  <div className="inline-flex items-baseline gap-1.5 font-mono whitespace-nowrap">
                    <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                      8.59
                    </span>
                    <span className="text-sm font-medium text-slate-400">
                      / 10
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                    Cumulative GPA
                  </div>
                </div>
              </div>

              {/* Institution & Metadata */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="text-base font-semibold text-teal-300">
                  {education.institution}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {education.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {education.location}
                  </span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Academic Highlights & Activities:
                </span>
                <ul className="space-y-2">
                  {education.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Manipal Institute of Technology (MIT)</span>
              <span className="text-emerald-400 font-medium">Graduated First Class</span>
            </div>
          </div>

          {/* Certifications & Awards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {certificationsAndAwards.map((item, idx) => {
              const isCert = item.type === "Certification";
              const Icon = isCert ? ShieldCheck : Trophy;

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between flex-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <div className="text-xs text-teal-300 font-medium mt-0.5">
                        {item.issuer} • <span className="font-mono text-slate-400">{item.year}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      Verified
                    </span>
                    <span className="font-mono">{item.year}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
