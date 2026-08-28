import React from 'react';
import { 
  Cpu, 
  Monitor, 
  Globe, 
  FileText, 
  Ship, 
  Users, 
  Server, 
  HardDrive, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Database, 
  Award,
  Cloud,
  Layers3,
  Calendar,
  Activity,
  Boxes
} from 'lucide-react';
import { informationSystemData } from '../data/projectData';

export const InformationSystem: React.FC = () => {
  return (
    <section id="information-system" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-widest font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Information System Architecture & Business Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
            Information System at Port of Belize Limited
          </h2>
          <p className="text-base sm:text-lg font-bold text-indigo-400 font-mono">
            Navis Octopi Terminal Operating System (TOS), Agent Portal & Cloud Architecture
          </p>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            A comprehensive academic evaluation of PBL's digital data pipelines, software architecture, user ecosystem, operational throughput, and strategic organizational value.
          </p>
        </div>

        {/* Highlight Banner: System Type & Deployment (Verified Academic Findings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Card 1: System Type & Software */}
          <div className="bg-zinc-900/50 rounded-3xl p-7 sm:p-8 border border-zinc-800 hover:border-amber-500/60 transition-all shadow-2xl space-y-5 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Layers3 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-400 px-2 py-0.5 bg-zinc-950 border border-amber-500/30 rounded-full">
                    Software & System Type
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    System Type
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-xl border border-amber-400/20">
                Octopi by Navis
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-sm sm:text-base text-zinc-200 leading-relaxed space-y-2">
              <p>
                <strong className="text-amber-400 font-semibold">Software:</strong> They use <strong className="text-white font-bold">Octopi</strong>, a <strong className="text-white font-bold">Terminal Operating System (TOS)</strong> developed by <strong className="text-white font-bold">Navis</strong>. It manages transactional activities, vessel arrivals and departures, yard planning, and operational data tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center gap-2 text-zinc-300">
                <Activity className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Transactional activities</span>
              </div>
              <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center gap-2 text-zinc-300">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vessel arrivals & departures</span>
              </div>
              <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center gap-2 text-zinc-300">
                <Boxes className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Yard planning & allocation</span>
              </div>
              <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center gap-2 text-zinc-300">
                <Database className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Operational data tracking</span>
              </div>
            </div>
          </div>

          {/* Card 2: Deployment Model */}
          <div className="bg-zinc-900/50 rounded-3xl p-7 sm:p-8 border border-zinc-800 hover:border-indigo-500/60 transition-all shadow-2xl space-y-5 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-indigo-400 px-2 py-0.5 bg-zinc-950 border border-indigo-500/30 rounded-full">
                    Infrastructure Model
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Deployment
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-xl border border-indigo-400/20">
                Cloud-Based Platform
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-sm sm:text-base text-zinc-200 leading-relaxed space-y-2">
              <p>
                <strong className="text-indigo-400 font-semibold">Cloud-based:</strong> The <strong className="text-white font-bold">Octopi system operates via a cloud-based platform</strong> rather than strictly on local physical premises servers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Cloud availability & uptime</span>
              </div>
              <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Synchronized real-time quayside data</span>
              </div>
              <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Scalable storage for vessel surges</span>
              </div>
              <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Secure HTTPS / TLS data encryption</span>
              </div>
            </div>
          </div>

        </div>

        {/* MIS Core System Description Bento Card */}
        <div className="bg-zinc-900/40 text-white rounded-3xl p-8 sm:p-10 border border-zinc-800 shadow-2xl mb-16 space-y-6 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                <Layers className="w-4 h-4" />
                <span>Executive MIS Architecture</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Navis Octopi TOS & Digital Manifest Logistics
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {informationSystemData.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-200">
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 flex items-start gap-2.5">
                  <Cloud className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans mb-1">Navis Octopi TOS:</strong>
                    Cloud platform handling vessel arrivals, yard planning, and operational data tracking.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 flex items-start gap-2.5">
                  <Monitor className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans mb-1">Desktop Agent Portal:</strong>
                    Installed client for agents to submit and manage import, export, and Ryder manifests.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans mb-1">Web Tracking Tools:</strong>
                    24/7 self-service for Bill of Lading tracking, container stripping, and berthage requests.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-zinc-950/90 p-6 rounded-2xl border border-zinc-800 space-y-3 font-mono text-xs shadow-xl">
              <div className="text-[10px] uppercase tracking-widest pb-2 border-b border-zinc-800 font-bold text-amber-400">
                System Scope & Capabilities
              </div>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Cloud-based TOS execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Vessel arrival/departure logs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Real-time yard plan mapping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Digital manifest ingestion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Automated stripping notifications</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Detailed Breakdown: Octopi TOS, Desktop Shipping Agent Portal & Web Tools */}
        <div className="mb-20 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
              Component Specifications
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Cloud TOS, Desktop Portal & Web-Based Tools
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* 1. Navis Octopi TOS Card */}
            <div className="bg-zinc-900/40 rounded-3xl p-7 border border-zinc-800 hover:border-indigo-500/60 transition-all shadow-xl space-y-5 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-indigo-400 px-2 py-0.5 bg-zinc-950 border border-indigo-500/30 rounded-full">
                      Cloud Platform • Navis
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Octopi TOS
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  The primary Terminal Operating System (TOS) developed by Navis. Operates in the cloud to coordinate core transactional activities, vessel arrivals/departures, and container yard planning.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800/80">
                    <strong className="text-indigo-400 block font-semibold mb-0.5">Yard & Stacking Planning</strong>
                    <span className="text-zinc-400">Dynamic container positioning and quayside crane dispatch.</span>
                  </div>
                  <div className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs">
                    <strong className="text-indigo-400 block font-semibold mb-0.5">Vessel Scheduling</strong>
                    <span className="text-zinc-400">Tracking berth windows, arrival milestones, and ship departure clearances.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span><strong>Target:</strong> Operations & Controllers</span>
                <span className="text-indigo-400 font-mono">Cloud SaaS</span>
              </div>
            </div>

            {/* 2. Desktop Portal Card */}
            <div className="bg-zinc-900/40 rounded-3xl p-7 border border-zinc-800 hover:border-amber-500/60 transition-all shadow-xl space-y-5 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-400 px-2 py-0.5 bg-zinc-950 border border-amber-500/30 rounded-full">
                      Desktop Client
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Shipping Agent Portal
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  A specialized desktop software client installed on the local computers of approved shipping agents and freight forwarders for manifest submissions and validation.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800/80">
                    <strong className="text-amber-400 block font-semibold mb-0.5">Import & Export Manifests</strong>
                    <span className="text-zinc-400">Declarations of inbound cargo, container IDs, and export VGM weights.</span>
                  </div>
                  <div className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs">
                    <strong className="text-amber-400 block font-semibold mb-0.5">Ryder Manifests</strong>
                    <span className="text-zinc-400">Documentation supporting regional feeder routes and transshipments.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span><strong>Target:</strong> Shipping Agents</span>
                <span className="text-amber-400 font-mono">Workstation Client</span>
              </div>
            </div>

            {/* 3. Web-Based Tools Suite */}
            <div className="bg-zinc-900/40 rounded-3xl p-7 border border-zinc-800 hover:border-emerald-500/60 transition-all shadow-xl space-y-5 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 px-2 py-0.5 bg-zinc-950 border border-emerald-500/30 rounded-full">
                      Web Self-Service
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Online Tracking Suite
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Public and authenticated web utilities accessible 24/7 via modern web browsers, enabling remote tracking and scheduling without physical office visits.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800/80">
                    <strong className="text-emerald-400 block font-semibold mb-0.5">B/L & Stripping Tools</strong>
                    <span className="text-zinc-400">Real-time Bill of Lading tracking and container stripping warehouse queries.</span>
                  </div>
                  <div className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs">
                    <strong className="text-emerald-400 block font-semibold mb-0.5">Online Berthage System</strong>
                    <span className="text-zinc-400">Advance online berth reservations and arrival notifications for shipping lines.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span><strong>Target:</strong> Consignees & Importers</span>
                <span className="text-emerald-400 font-mono">HTTPS Web</span>
              </div>
            </div>

          </div>
        </div>

        {/* Conceptual Architecture Diagram: People -> Processes -> Technology -> MIS -> Operations -> Business Value */}
        <div className="mb-20 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
              Academic Modeling
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Information System Conceptual Architecture
            </h3>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Visualizing how human actors, business processes, and cloud infrastructure integrate into the Navis Octopi MIS to deliver operational performance and business value.
            </p>
          </div>

          <div className="bg-zinc-900/40 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-2xl overflow-x-auto backdrop-blur-md">
            <div className="min-w-[700px] flex flex-col md:flex-row items-center justify-between gap-4 text-center">
              
              {/* Step 1: People */}
              <div className="flex-1 bg-zinc-950/70 p-5 rounded-2xl border border-zinc-800 space-y-2">
                <div className="w-10 h-10 mx-auto rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase text-white font-mono">1. People</h4>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Shipping Agents, Freight Forwarders, Quayside Operators, Importers, PBL Controllers
                </p>
              </div>

              <div className="text-indigo-400 font-bold text-lg hidden md:block">➔</div>
              <div className="text-indigo-400 font-bold text-lg md:hidden">↓</div>

              {/* Step 2: Business Processes */}
              <div className="flex-1 bg-zinc-950/70 p-5 rounded-2xl border border-zinc-800 space-y-2">
                <div className="w-10 h-10 mx-auto rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase text-white font-mono">2. Processes</h4>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Manifest Filing, Berthage Booking, Yard Allocation, Container Stripping
                </p>
              </div>

              <div className="text-indigo-400 font-bold text-lg hidden md:block">➔</div>
              <div className="text-indigo-400 font-bold text-lg md:hidden">↓</div>

              {/* Step 3: Technology + Data */}
              <div className="flex-1 bg-zinc-950/70 p-5 rounded-2xl border border-zinc-800 space-y-2">
                <div className="w-10 h-10 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase text-white font-mono">3. Tech + Data</h4>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Cloud Platform, Workstations, Manifest Data, Real-Time Vessel & Yard Records
                </p>
              </div>

              <div className="text-indigo-400 font-bold text-lg hidden md:block">➔</div>
              <div className="text-indigo-400 font-bold text-lg md:hidden">↓</div>

              {/* Step 4: MIS Engine */}
              <div className="flex-1 bg-indigo-950/60 text-white p-5 rounded-2xl border border-indigo-500/40 shadow-lg space-y-2">
                <div className="w-10 h-10 mx-auto rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase text-white font-mono">4. MIS Engine</h4>
                <p className="text-[11px] text-indigo-200 leading-snug">
                  Navis Octopi TOS (Cloud) + Agent Portal + Web Tools
                </p>
              </div>

              <div className="text-indigo-400 font-bold text-lg hidden md:block">➔</div>
              <div className="text-indigo-400 font-bold text-lg md:hidden">↓</div>

              {/* Step 5: Operations */}
              <div className="flex-1 bg-zinc-950/70 p-5 rounded-2xl border border-zinc-800 space-y-2">
                <div className="w-10 h-10 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Ship className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase text-white font-mono">5. Operations</h4>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Optimized Yard Stacking, Rapid Vessel Turnaround, Stevedoring
                </p>
              </div>

              <div className="text-indigo-400 font-bold text-lg hidden md:block">➔</div>
              <div className="text-indigo-400 font-bold text-lg md:hidden">↓</div>

              {/* Step 6: Business Value */}
              <div className="flex-1 bg-amber-500 text-zinc-950 p-5 rounded-2xl border border-amber-300 shadow-xl space-y-2">
                <div className="w-10 h-10 mx-auto rounded-2xl bg-zinc-950 text-amber-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-black uppercase text-zinc-950 font-mono">6. Business Value</h4>
                <p className="text-[11px] text-zinc-950 font-bold leading-snug">
                  6 Strategic Objectives Enhanced (Laudon Framework)
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Technical Deep Dive: Users, Hosting, Accessibility, Hardware, Software, Security */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
              Technical Specifications & System Environment
            </span>
            <h3 className="text-2xl font-black text-white">
              Cloud Infrastructure, Software Stack & Security Controls
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. System Users Ecosystem */}
            <div className="bg-zinc-900/40 rounded-3xl p-6 border border-zinc-800 space-y-4 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">
                  {informationSystemData.users.title}
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300">
                {informationSystemData.users.categories.map((cat, i) => (
                  <li key={i} className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800/80">
                    <strong className="text-white block">{cat.name}:</strong>
                    <span className="text-zinc-400">{cat.role}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded-2xl bg-zinc-950/90 border border-indigo-500/30 text-[11px] text-indigo-300 font-mono">
                {informationSystemData.users.userCountNote}
              </div>
            </div>

            {/* 2. Hosting & Infrastructure */}
            <div className="bg-zinc-900/40 rounded-3xl p-6 border border-zinc-800 space-y-4 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">
                  {informationSystemData.hosting.title}
                </h4>
              </div>

              <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800 text-xs space-y-2">
                <span className="text-[10px] uppercase font-mono font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
                  {informationSystemData.hosting.status}
                </span>
                <p className="text-zinc-300 leading-relaxed">
                  {informationSystemData.hosting.details}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-950/90 border border-emerald-500/30 text-[11px] text-emerald-300 font-mono leading-relaxed">
                ✓ {informationSystemData.hosting.verificationNote}
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-zinc-300">Accessibility Channels:</div>
                <div className="text-zinc-400">• <strong className="text-zinc-200">On-Site:</strong> {informationSystemData.accessibility.onSite}</div>
                <div className="text-zinc-400">• <strong className="text-zinc-200">Remote Web:</strong> {informationSystemData.accessibility.remoteWeb}</div>
                <div className="text-[11px] text-indigo-300 font-mono mt-1">{informationSystemData.accessibility.internalRemoteNote}</div>
              </div>
            </div>

            {/* 3. Hardware, Software & Network */}
            <div className="bg-zinc-900/40 rounded-3xl p-6 border border-zinc-800 space-y-4 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <HardDrive className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">
                  Hardware, Software & Network
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800">
                  <strong className="text-white block mb-1">Hardware Infrastructure:</strong>
                  <ul className="space-y-1 text-zinc-400">
                    {informationSystemData.hardwareAndSoftware.hardware.map((hw, i) => (
                      <li key={i}>• {hw}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800">
                  <strong className="text-white block mb-1">Software Stack:</strong>
                  <ul className="space-y-1 text-zinc-400">
                    {informationSystemData.hardwareAndSoftware.software.map((sw, i) => (
                      <li key={i}>• {sw}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-zinc-950/70 rounded-2xl border border-zinc-800">
                  <strong className="text-white block mb-1">Network Connectivity:</strong>
                  <ul className="space-y-1 text-zinc-400">
                    {informationSystemData.hardwareAndSoftware.networking.map((net, i) => (
                      <li key={i}>• {net}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Data Managed & Information Security Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Data Managed Matrix */}
            <div className="bg-zinc-900/40 rounded-3xl p-6 border border-zinc-800 shadow-2xl space-y-4 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-indigo-400" />
                  <span>Data Entities Managed by Octopi TOS</span>
                </h4>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">PBL Operational Schemas</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {informationSystemData.dataManaged.map((item, index) => (
                  <div key={index} className="p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80">
                    <strong className="text-white block font-semibold">{item.type}</strong>
                    <span className="text-zinc-400 text-[11px]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Information Security & Assurance */}
            <div className="bg-zinc-900/40 rounded-3xl p-6 border border-zinc-800 shadow-2xl space-y-4 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{informationSystemData.security.title}</span>
                </h4>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Cloud Encrypted</span>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-950/90 border border-emerald-500/30 text-[11px] text-emerald-300 font-mono">
                ✓ {informationSystemData.security.verificationNote}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {informationSystemData.security.principles.map((sec, index) => (
                  <div key={index} className="p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80">
                    <strong className="text-white block font-semibold">{sec.name}</strong>
                    <span className="text-zinc-400 text-[11px]">{sec.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
