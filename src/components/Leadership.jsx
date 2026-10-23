import React from 'react';
import { Users, Globe, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import { leadership } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Community & Mentorship
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & Giving Back
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Advocating for women in STEM and fostering collaborative engineering communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, idx) => {
            const isEmpower = item.organization.includes("Moody");
            const Icon = isEmpower ? HeartHandshake : Globe;

            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                      {item.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-teal-400 mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs text-slate-400">
                    <strong className="text-emerald-400 font-semibold block mb-0.5">Core Impact:</strong>
                    {item.impact}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
