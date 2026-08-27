import React from 'react';
import { 
  Cpu, 
  Monitor, 
  Globe, 
  FileText, 
  Ship, 
  Users, 
  Server, 
  Wifi, 
  HardDrive, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Lock, 
  Key, 
  FileCheck, 
  Radio, 
  Clock, 
  Database, 
  Building, 
  Anchor, 
  HelpCircle,
  Award
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
            Management Information System (MIS), Agent Portal & Strategic Business Value
          </p>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            A comprehensive academic evaluation of PBL's digital data pipelines, software architecture, user ecosystem, operational throughput, and strategic organizational value.
          </p>
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
                Digital Cargo & Manifest Information Management
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {informationSystemData.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-200">
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 flex items-start gap-2.5">
                  <Monitor className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans mb-1">Desktop Client Portal:</strong>
                    Installed for accredited shipping agents to author and maintain import, export, and Ryder manifests.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans mb-1">Web-Based Tracking Suite:</strong>
                    24/7 self-service tools for Bill of Lading tracking, container stripping queries, and berthage reservations.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-zinc-950/90 p-6 rounded-2xl border border-zinc-800 space-y-3 font-mono text-xs shadow-xl">
              <div className="text-[10px] uppercase tracking-widest pb-2 border-b border-zinc-800 font-bold text-amber-400">
                System Purpose & Scope
              </div>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Digital manifest ingestion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Paperless cargo coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Automated stripping notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pre-arrival berth planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Regulatory data compliance</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Detailed Breakdown: Desktop Shipping Agent Portal & Web Tools */}
        <div className="mb-20 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
              Component Specification
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Desktop Program & Web-Based Tools
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Desktop Portal Card */}
            <div className="bg-zinc-900/40 rounded-3xl p-7 border border-zinc-800 hover:border-amber-500/60 transition-all shadow-xl space-y-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-400 px-2 py-0.5 bg-zinc-950 border border-amber-500/30 rounded-full">
                      Desktop Client Software
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1">
                      Shipping Agent Portal
                    </h4>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                A specialized desktop application installed on the local computers of approved shipping agents and freight forwarders. It serves as the primary gateway for submitting, maintaining, and validating digital manifests directly to PBL.
              </p>

              <div className="space-y-3">
                <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                  Supported Manifest Documentation:
                </div>
                
                <div className="space-y-2">
                  <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs">
                    <strong className="text-amber-400 block font-semibold mb-0.5">1. Import Manifests</strong>
                    <span className="text-zinc-400">Declarations of inbound cargo, container IDs, consignees, seal numbers, and commodity codes.</span>
                  </div>

                  <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs">
                    <strong className="text-amber-400 block font-semibold mb-0.5">2. Export Manifests</strong>
                    <span className="text-zinc-400">Outbound shipment manifests, VGM container weights, customs clearances, and loading sequences.</span>
                  </div>

                  <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs">
                    <strong className="text-amber-400 block font-semibold mb-0.5">3. Ryder Manifests</strong>
                    <span className="text-zinc-400">Specialized manifest documentation supporting feeder routes, regional transshipments, and supplementary consignment lines.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-xs text-zinc-400">
                <span><strong>Target Users:</strong> Approved Agents & Forwarders</span>
                <span className="text-amber-400 font-mono font-medium">Desktop Environment</span>
              </div>
            </div>

            {/* Web-Based Tools Suite */}
            <div className="bg-zinc-900/40 rounded-3xl p-7 border border-zinc-800 hover:border-indigo-500/60 transition-all shadow-xl space-y-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-indigo-400 px-2 py-0.5 bg-zinc-950 border border-indigo-500/30 rounded-full">
                      Web-Based Self-Service
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1">
                      Online Tracking & Request Tools
                    </h4>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Public-facing and authenticated web utilities accessible 24/7 via modern web browsers, enabling remote tracking and scheduling without physical office visits.
              </p>

              <div className="space-y-3">
                <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                  The Three Identified Web Tools:
                </div>

                <div className="space-y-2">
                  <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs">
                    <strong className="text-indigo-400 block font-semibold mb-0.5">Bill of Lading Tracker</strong>
                    <span className="text-zinc-400">Allows importers, exporters, and brokers to query real-time cargo status, customs processing, and release readiness using their B/L number.</span>
                  </div>

                  <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs">
                    <strong className="text-indigo-400 block font-semibold mb-0.5">Container Stripping Status Query Tool</strong>
                    <span className="text-zinc-400">Allows consignees and truckers to check whether a specific container has been de-stuffed/stripped into the warehouse for collection.</span>
                  </div>

                  <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs">
                    <strong className="text-indigo-400 block font-semibold mb-0.5">Online Berthage Request</strong>
                    <span className="text-zinc-400">Enables ship masters and agents to submit advance berth reservation applications, draft requirements, and arrival estimates online.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-xs text-zinc-400">
                <span><strong>Target Users:</strong> Importers, Consignees, Agents, Public</span>
                <span className="text-indigo-400 font-mono font-medium">Browser Accessible (HTTPS)</span>
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
              Visualizing how human actors, business processes, and technological infrastructure integrate into the Management Information System to deliver operational performance and business value.
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
                  Shipping Agents, Freight Forwarders, Quayside Staff, Importers, PBL Managers
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
                  Manifest Filing, Berthage Requests, Container Stripping, Weighbridge VGM
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
                  Desktops, HTTPS Web Stack, Database, Import/Export & Ryder Manifest Data
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
                  Desktop Agent Portal + Web Tracking Utilities
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
                  Container Yard Dispatch, Rapid Vessel Turnaround, Stevedoring
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
              Technical Specifications & Verification Matrices
            </span>
            <h3 className="text-2xl font-black text-white">
              System Environment, Hosting & Security Controls
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

              <div className="p-3 rounded-2xl bg-zinc-950/90 border border-amber-500/30 text-[11px] text-amber-300 font-mono">
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

              <div className="p-3 rounded-2xl bg-zinc-950/90 border border-amber-500/30 text-[11px] text-amber-300 font-mono leading-relaxed">
                {informationSystemData.hosting.verificationNote}
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-zinc-300">Accessibility Channels:</div>
                <div className="text-zinc-400">• <strong className="text-zinc-200">On-Site:</strong> {informationSystemData.accessibility.onSite}</div>
                <div className="text-zinc-400">• <strong className="text-zinc-200">Remote Web:</strong> {informationSystemData.accessibility.remoteWeb}</div>
                <div className="text-[11px] text-amber-300 font-mono mt-1">{informationSystemData.accessibility.internalRemoteNote}</div>
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
                  <strong className="text-white block mb-1">Hardware Clients:</strong>
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
                  <span>Data Entities Managed by the MIS</span>
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
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">ISPS Compliant</span>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-950/90 border border-amber-500/30 text-[11px] text-amber-300 font-mono">
                {informationSystemData.security.verificationNote}
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
