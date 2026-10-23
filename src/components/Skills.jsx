import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  Search, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Server: Server,
  Cloud: Cloud,
  Database: Database
};

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section id="skills" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills, Tools & Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficiencies honed across production backend systems, AWS cloud architectures, data pipelines, and AI engineering.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Java, AWS, Spring, PostgreSQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Layers;
            const filteredSkills = cat.skills.filter(s => 
              s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-100 text-base">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {filteredSkills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className={`font-medium flex items-center gap-1.5 ${
                            skill.highlighted ? 'text-slate-200' : 'text-slate-400'
                          }`}>
                            {skill.highlighted && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            )}
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-slate-500">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              skill.highlighted
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                                : 'bg-slate-600'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{filteredSkills.length} competencies</span>
                  <span className="text-emerald-500/80">Production Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
