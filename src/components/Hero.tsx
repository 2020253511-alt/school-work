import React from 'react';
import { ArrowRight, Cpu, Building2, Award, ChevronDown } from 'lucide-react';
import { projectMeta } from '../data/projectData';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-zinc-950 text-zinc-100 overflow-hidden"
    >
      {/* Background Decorative Grid & Subtle Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Bento Hero Layout */}
        <div className="max-w-4xl mx-auto">
          
          {/* Main Hero Bento Card */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-2xl">
            
            {/* Ambient Background Watermark */}
            <div className="absolute top-[-20px] right-[-20px] pointer-events-none">
              <span className="text-[12rem] font-black text-white/5 leading-none select-none">PBL</span>
            </div>

            <div className="relative z-10 space-y-8">
              
              {/* Academic Project Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                  <span>{projectMeta.institutionShort} Academic Case Study</span>
                </div>
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-mono font-semibold">
                  Course: {projectMeta.courseCode} ({projectMeta.courseYear})
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400 text-[10px] uppercase tracking-widest font-mono font-semibold">
                  Group: {projectMeta.groupName}
                </span>
              </div>

              {/* Headings */}
              <div className="space-y-3">
                <h1 
                  id="hero-main-title" 
                  className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans"
                >
                  {projectMeta.organizationName}
                </h1>
                <p 
                  id="hero-sub-title" 
                  className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-300 to-amber-200"
                >
                  Information Systems & Strategic Business Value Analysis
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
                A comprehensive university case study evaluating how Belize's premier maritime port leverages its <strong className="text-zinc-200 font-semibold">Management Information System (MIS)</strong>, desktop <strong className="text-zinc-200 font-semibold">Shipping Agent Portal</strong>, and web tracking applications to coordinate national maritime trade channels.
              </p>

              {/* Bento Metric Chips Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-zinc-500 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Entity Type</span>
                    <Building2 className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-sm font-bold text-zinc-200">{projectMeta.organizationType}</span>
                </div>

                <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-zinc-500 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Architecture</span>
                    <Cpu className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-sm font-bold text-zinc-200">Desktop & Web Portal</span>
                </div>

                <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-zinc-500 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Framework</span>
                    <Award className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-sm font-bold text-zinc-200">6 Business Objectives</span>
                </div>
              </div>

            </div>

            {/* Bottom Row: Micro Bar Visualizer & Action Buttons */}
            <div className="relative z-10 pt-8 mt-8 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-6">
              
              {/* Micro Activity Bar Chart */}
              <div className="flex items-end gap-3.5">
                <div className="flex items-end gap-1.5 h-10">
                  <div className="w-2.5 bg-zinc-800 h-[40%] rounded-sm"></div>
                  <div className="w-2.5 bg-zinc-800 h-[65%] rounded-sm"></div>
                  <div className="w-2.5 bg-zinc-800 h-[50%] rounded-sm"></div>
                  <div className="w-2.5 bg-indigo-500 h-[95%] rounded-sm shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div>
                  <div className="w-2.5 bg-zinc-800 h-[35%] rounded-sm"></div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold font-mono">MIS Throughput</div>
                  <div className="text-sm font-mono font-bold text-zinc-200">100% Paperless Flow</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  id="btn-hero-explore-is"
                  onClick={() => scrollToSection('information-system')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all cursor-pointer group"
                >
                  <span>Explore Systems</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="btn-hero-view-business-value"
                  onClick={() => scrollToSection('business-value')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Business Value</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-zinc-600 text-xs cursor-pointer hover:text-zinc-300 transition-colors" onClick={() => scrollToSection('home-intro')}>
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to explore</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-indigo-400" />
      </div>
    </section>
  );
};
