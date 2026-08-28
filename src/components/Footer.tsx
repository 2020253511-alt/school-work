import React from 'react';
import { Anchor, Cpu, Building2, BookOpen, Mail, ShieldCheck } from 'lucide-react';
import { projectMeta } from '../data/projectData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 text-xs font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Academic Project Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
              {projectMeta.logoUrl ? (
                <div className="h-8 px-2 py-0.5 rounded-lg bg-white flex items-center justify-center shadow-sm border border-zinc-200">
                  <img
                    src={projectMeta.logoUrl}
                    alt="Port of Belize Limited Logo"
                    className="h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Anchor className="w-4 h-4 text-amber-300" />
                </div>
              )}
              <span className="font-black text-white text-base">
                {projectMeta.organizationShort} MIS Case Study
              </span>
            </div>

            <p className="text-zinc-400 leading-relaxed text-xs">
              A university academic research project analyzing the Management Information System and Strategic Business Value of Port of Belize Limited.
            </p>

            <div className="text-[11px] text-zinc-500 font-mono">
              Website Created: <span className="text-amber-400">{projectMeta.websiteCreatedDate}</span>
            </div>
          </div>

          {/* Column 2: Academic Specification */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">
              Course Details
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-zinc-500 block">Course Name:</span>
                <span className="text-zinc-200 font-semibold">{projectMeta.courseName}</span>
              </li>
              <li>
                <span className="text-zinc-500 block">Course Year:</span>
                <span className="text-zinc-200 font-mono">{projectMeta.courseYear}</span>
              </li>
              <li>
                <span className="text-zinc-500 block">Lecturer:</span>
                <span className="text-zinc-200">{projectMeta.lecturerName}</span>
              </li>
              <li>
                <span className="text-zinc-500 block">Group:</span>
                <span className="text-zinc-200 font-mono">{projectMeta.groupName}</span>
              </li>
              <li>
                <span className="text-zinc-500 block">Group Leader:</span>
                <span className="text-zinc-200">{projectMeta.groupLeaderName}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Organization & System Details */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">
              Organization & System
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-zinc-500 block">Organization:</span>
                <span className="text-zinc-200 font-semibold">{projectMeta.organizationName}</span>
              </li>
              <li>
                <span className="text-zinc-500 block">Organization Type:</span>
                <span className="text-zinc-200">{projectMeta.organizationType}</span>
              </li>
              <li>
                <span className="text-zinc-500 block">Information System:</span>
                <span className="text-zinc-200">{projectMeta.systemName}</span>
              </li>
              <li>
                <span className="text-zinc-500 block">Evaluator Contact:</span>
                <span className="text-indigo-400 font-mono">{projectMeta.lecturerEmail}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Anchor Nav */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-1 gap-1.5 text-xs">
              <a href="#home" className="text-zinc-400 hover:text-white transition-colors">Home Page</a>
              <a href="#about-us" className="text-zinc-400 hover:text-white transition-colors">About Us & Team</a>
              <a href="#organization" className="text-zinc-400 hover:text-white transition-colors">Port Organization Profile</a>
              <a href="#information-system" className="text-zinc-400 hover:text-white transition-colors">Information System & Business Value</a>
              <a href="#contact-us" className="text-zinc-400 hover:text-white transition-colors">University Map & Contact</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            Website Created: {projectMeta.websiteCreatedDate} • © {projectMeta.courseYear} {projectMeta.groupName}. Academic Information Systems Project.
          </div>
          <div className="flex items-center gap-4">
            <span>{projectMeta.institutionName}</span>
            <span>•</span>
            <button 
              onClick={scrollToTop} 
              className="text-indigo-400 hover:text-indigo-300 hover:underline cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
