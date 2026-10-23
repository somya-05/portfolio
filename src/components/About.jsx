import React from 'react';
import { 
  Server, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

const corePillars = [
  {
    icon: Server,
    title: "Scalable Microservices & REST APIs",
    description: "Designing resilient backend architectures with Java, Spring Boot, and PostgreSQL. Experienced in eliminating manual bottlenecks and architecting high-throughput services.",
    tag: "Spring Boot • Java • REST"
  },
  {
    icon: Cloud,
    title: "AWS Cloud & Serverless Pipelines",
    description: "Certified Cloud Practitioner building serverless solutions on AWS Lambda and EventBridge, ensuring strict compliance (ESMA) and high availability.",
    tag: "AWS Lambda • Jenkins • CI/CD"
  },
  {
    icon: Cpu,
    title: "Agentic AI & LLM Integrations",
    description: "Pioneering enterprise Agentic AI workflows with Model Context Protocol (MCP) servers and RAG architectures (ChromaDB, Groq) to automate complex cognitive tasks.",
    tag: "MCP • Agentic AI • RAG"
  },
  {
    icon: ShieldCheck,
    title: "Security & Code Hardening",
    description: "Led core framework upgrades (Angular) and resolved 25+ critical security vulnerabilities (Snyk), boosting overall application security by 40%.",
    tag: "Snyk • Vulnerability Remediation"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building reliable systems with high operational impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Passionate about backend performance, cloud-native infrastructure, and modern AI engineering. I turn complex enterprise requirements into scalable, robust, and automated software solutions.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/80 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-base font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="pt-1">
                      <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Facts Card */}
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-800 text-teal-400 mt-0.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Current Position</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">Associate Software Engineer</div>
                <div className="text-xs text-slate-400">Moody's Ratings (Gurugram)</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-800 text-emerald-400 mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Education</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">B.Tech in IT (CGPA: 8.59)</div>
                <div className="text-xs text-slate-400">Manipal Institute of Technology</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Cloud Certification</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">AWS Certified Cloud Practitioner</div>
                <div className="text-xs text-slate-400">Amazon Web Services (2025)</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-800 text-amber-400 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Location</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">{personalInfo.location}</div>
                <div className="text-xs text-emerald-400 font-medium">Open to Relocation / Hybrid</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
