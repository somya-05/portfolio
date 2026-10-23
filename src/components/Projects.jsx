import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950/70 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Personal & Open Source Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Full-stack AI query applications and native mobile platforms with real-time data integration.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all duration-300 p-6 sm:p-8 shadow-lg shadow-black/30"
            >
              {/* Card Header & Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mt-2.5">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 rounded-xl transition-colors shrink-0"
                    title="View Source on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Metrics / Tech Highlights Banner */}
                <div className="px-3.5 py-2 rounded-lg bg-slate-950/70 border border-slate-800/70 text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{project.metrics}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Key Features & Implementation:
                  </span>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Tag Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repository Showcase Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/somya-05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-700 transition-colors shadow-sm"
          >
            <FolderGit2 className="w-4 h-4 text-emerald-400" />
            <span>Discover more on GitHub (github.com/somya-05)</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
