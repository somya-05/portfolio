import React, { useState } from 'react';
import { 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Check, 
  Copy, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Code2,
  Server
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/15 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-medium shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Engineer • Backend & Cloud Systems</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-medium leading-snug">
                Engineering Scalable <span className="text-emerald-400">Microservices</span>, <span className="text-teal-300">AWS Cloud</span> & <span className="text-cyan-400">Agentic AI</span> Systems.
              </p>
            </div>

            {/* Summary description */}
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              {personalInfo.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Resume / CV</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-all"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span className="text-xs">{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social links & quick contacts */}
            <div className="pt-2 flex items-center gap-5 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs font-mono">github/somya-05</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs font-mono">linkedin/somya-bansal</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Highlights Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glow border backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 p-5 shadow-2xl backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      somya@engineer:~$ whoami
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    v2.5.0-prod
                  </span>
                </div>

                {/* Terminal Content / Code View */}
                <div className="pt-4 font-mono text-xs leading-relaxed space-y-3">
                  <div className="text-slate-400">
                    <span className="text-emerald-400">const</span> <span className="text-cyan-300">engineer</span> = &#123;
                  </div>
                  <div className="pl-4 space-y-1 text-slate-300">
                    <div>
                      <span className="text-slate-400">name:</span> <span className="text-amber-200">"{personalInfo.name}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">currentRole:</span> <span className="text-teal-300">"Associate Software Engineer @ Moody's Ratings"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">previousRole:</span> <span className="text-teal-300">"Data & Automation Intern @ Dell Technologies"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">education:</span> <span className="text-amber-200">"B.Tech IT @ Manipal (CGPA: 8.59)"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">cloudCert:</span> <span className="text-emerald-400">"AWS Certified Cloud Practitioner (2025)"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">coreStack:</span> [
                      <span className="text-teal-300">"Java"</span>, 
                      <span className="text-teal-300">"Spring Boot"</span>, 
                      <span className="text-teal-300">"AWS"</span>, 
                      <span className="text-teal-300">"Angular"</span>,
                      <span className="text-teal-300">"PostgreSQL"</span>
                      ]
                    </div>
                  </div>
                  <div className="text-slate-400">&#125;;</div>

                  {/* Live Activity indicator */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                      Production-ready Systems
                    </span>
                    <span className="text-slate-500">Delhi & Gurugram, IN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
