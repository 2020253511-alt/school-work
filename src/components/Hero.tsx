import React from 'react';
import { 
  Building, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  Compass, 
  Cpu, 
  Users, 
  Clock, 
  FileText,
  Ship,
  Sparkles
} from 'lucide-react';
import { projectMeta, groupMembers } from '../data/projectData';

interface HeroProps {
  onOpenGuide?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGuide }) => {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-zinc-950 text-white pt-28 pb-20 lg:pt-36 lg:pb-24 border-b border-zinc-900">
      {/* Background Decorative Pattern & Gradient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Academic Credentials, Title & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Course & Institution Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-lg">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-zinc-300">
                {projectMeta.institutionName} • {projectMeta.courseCode}: {projectMeta.courseName}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Management Information System
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-amber-300">
                Port of Belize Limited (PBL)
              </div>
            </div>

            {/* Descriptive Subheading */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              An in-depth academic study examining how Belize's premier maritime port leverages the cloud-based <strong>Navis Octopi Terminal Operating System (TOS)</strong>, desktop agent portals, and digital tracking tools to streamline logistics throughput, achieve operational excellence, and drive competitive advantage.
            </p>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3 bg-zinc-900/60 rounded-2xl border border-zinc-800/80 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-mono font-bold text-amber-400">Navis Octopi</div>
                <div className="text-[11px] text-zinc-400">Cloud-Based TOS</div>
              </div>
              <div className="p-3 bg-zinc-900/60 rounded-2xl border border-zinc-800/80 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-mono font-bold text-indigo-400">6 Strategic</div>
                <div className="text-[11px] text-zinc-400">Laudon Objectives</div>
              </div>
              <div className="p-3 bg-zinc-900/60 rounded-2xl border border-zinc-800/80 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-mono font-bold text-emerald-400">20 Services</div>
                <div className="text-[11px] text-zinc-400">Core & Maritime</div>
              </div>
              <div className="p-3 bg-zinc-900/60 rounded-2xl border border-zinc-800/80 backdrop-blur-sm">
                <div className="text-lg sm:text-xl font-mono font-bold text-violet-400">{groupMembers.length} Analysts</div>
                <div className="text-[11px] text-zinc-400">Research Team</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-explore-system-btn"
                onClick={() => scrollToSection('information-system')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Information System</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-team-btn"
                onClick={() => scrollToSection('about-us')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                <Users className="w-4 h-4 text-violet-400" />
                <span>Meet the Team ({groupMembers.length})</span>
              </button>

              {onOpenGuide && (
                <button
                  id="hero-student-guide-btn"
                  onClick={onOpenGuide}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 text-amber-300 border border-amber-500/30 text-xs font-mono font-semibold transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Student Guide</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Organization & System Card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Card Header with Logo */}
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md overflow-hidden border border-zinc-700">
                    <img 
                      src={projectMeta.logoUrl} 
                      alt={projectMeta.organizationName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">
                      {projectMeta.organizationName}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {projectMeta.organizationType}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  Case Organization
                </span>
              </div>

              {/* Research Scope Highlights */}
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Software Platform:</strong>
                    <span className="text-zinc-400">Navis Octopi Terminal Operating System (TOS) with cloud deployment and real-time quayside synchronization.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Strategic Framework:</strong>
                    <span className="text-zinc-400">Mapped against Laudon & Laudon Chapter 1 Business Objectives (Operational Excellence, Decision Making, Competitive Advantage).</span>
                  </div>
                </div>

                <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 flex items-start gap-3">
                  <FileText className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Academic Evaluation:</strong>
                    <span className="text-zinc-400">Prepared for Lecturer {projectMeta.lecturerName} • {projectMeta.academicTerm}.</span>
                  </div>
                </div>
              </div>

              {/* Quick Jump Bar */}
              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <button 
                  onClick={() => scrollToSection('organization')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Ship className="w-3.5 h-3.5" />
                  <span>Port Profile →</span>
                </button>
                <button 
                  onClick={() => scrollToSection('business-value')}
                  className="hover:text-indigo-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Business Value →</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
