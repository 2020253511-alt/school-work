import React from 'react';
import { Building2, Cpu, Award, Users, ArrowRight, ShieldCheck, CheckCircle2, Globe, TrendingUp, Anchor, Compass } from 'lucide-react';
import { projectMeta } from '../data/projectData';

export const HomeIntro: React.FC = () => {
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

  const overviewCards = [
    {
      id: 'card-org',
      sectionId: 'organization',
      title: 'Organization Profile',
      subtitle: 'Port of Belize Limited (PBL)',
      description: "A comprehensive look at Belize's premier private, for-profit maritime gateway, its cargo handling domains (container, bulk, break-bulk), and secondary maritime regulatory services.",
      icon: Building2,
      accentColor: 'border-zinc-800 hover:border-indigo-500/50',
      iconBg: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
      badge: 'Private / For-Profit'
    },
    {
      id: 'card-is',
      sectionId: 'information-system',
      title: 'Information System & Business Value',
      subtitle: 'MIS, Agent Portal & Laudon Model',
      description: 'Technical evaluation of the desktop Shipping Agent Portal, web tools, interactive simulators, and the 6 Strategic Business Objectives framework (Laudon & Laudon Ch. 1).',
      icon: Cpu,
      accentColor: 'border-zinc-800 hover:border-amber-500/50',
      iconBg: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
      badge: 'MIS & Business Value'
    },
    {
      id: 'card-team',
      sectionId: 'about-us',
      title: 'Research Team',
      subtitle: 'University Student Analysts',
      description: 'The student researchers, project governance structure, individual research responsibilities, standardized CV profiles, and collaborative methodology behind this study.',
      icon: Users,
      accentColor: 'border-zinc-800 hover:border-violet-500/50',
      iconBg: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
      badge: '5 Student Analysts'
    },
    {
      id: 'card-contact',
      sectionId: 'contact-us',
      title: 'University Map & Contact',
      subtitle: 'UB Campus & Evaluation Channel',
      description: 'Interactive University of Belize campus map embed, student researcher contact details, and direct submission channel for course evaluator review.',
      icon: Compass,
      accentColor: 'border-zinc-800 hover:border-emerald-500/50',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      badge: 'Academic Contact'
    },
  ];

  return (
    <section id="home-intro" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-widest font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>Academic Project Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
            Bridging Maritime Logistics and Information Systems
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            An in-depth academic inquiry into how strategic information systems transform physical port infrastructure into high-efficiency digital supply chain nodes.
          </p>
        </div>

        {/* Academic Introduction Detailed Narrative Bento Card */}
        <div className="bg-zinc-900/40 rounded-3xl p-8 sm:p-10 border border-zinc-800 shadow-2xl backdrop-blur-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-5 text-zinc-300 leading-relaxed text-sm">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Anchor className="w-5 h-5 text-indigo-400" />
                <span>Executive Academic Overview</span>
              </h3>
              
              <p>
                <strong className="text-white">What This Project Is About:</strong> This project presents a structured Information Systems analysis of <strong className="text-white">Port of Belize Limited (PBL)</strong>, focusing on its core technology stack—specifically the <strong className="text-white">Management Information System (MIS)</strong>, the desktop <strong className="text-white">Shipping Agent Portal</strong>, and associated web-based tracking and request applications.
              </p>

              <p>
                <strong className="text-white">Why Port of Belize Limited Was Selected:</strong> Port of Belize Limited is the economic lifeblood of the nation, serving as Belize's primary commercial maritime port for containerized goods, agricultural exports, and bulk imports. Because port operations involve complex, time-sensitive coordination among shipping lines, customs brokers, trucking companies, and quayside stevedores, PBL represents an exemplary real-world case study of information systems in action.
              </p>

              <p>
                <strong className="text-white">The Critical Role of Information Systems in Port Logistics:</strong> Modern ports can no longer function using traditional paper logs, manual manifests, and phone calls. Information systems provide the real-time data spine required to coordinate ship berthing, track container staging in storage yards, enforce international safety regulations (such as SOLAS Verified Gross Mass weighing), and process import/export manifests without costly vessel demurrage.
              </p>
            </div>

            <div className="lg:col-span-5 bg-zinc-950/80 border border-zinc-800 text-white rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                  Core Analytical Findings
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-100">Paperless Manifest Flow:</strong> Digital import, export, and Ryder manifest handling cuts processing delays.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-100">Stakeholder Transparency:</strong> Web-based Bill of Lading and Container Stripping query tools reduce customer friction.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-100">Data-Driven Operations:</strong> Pre-arrival berthage applications enable proactive quayside resource allocation.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-100">Strategic Alignment:</strong> System enhances all six fundamental business objectives defined by Laudon & Laudon.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-500 font-mono">
                Course: {projectMeta.courseCode} • {projectMeta.academicTerm}
              </div>
            </div>

          </div>
        </div>

        {/* Four Visual Overview Bento Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">
              Project Structure & Navigation Pillars
            </h3>
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline uppercase tracking-wider">
              Select card to navigate
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  id={card.id}
                  onClick={() => scrollToSection(card.sectionId)}
                  className={`group bg-zinc-900/40 rounded-3xl p-6 border transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between backdrop-blur-md ${card.accentColor}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${card.iconBg} group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800">
                        {card.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                        {card.title}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors mt-0.5">
                        {card.subtitle}
                      </h4>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
                    <span>Explore Section</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
