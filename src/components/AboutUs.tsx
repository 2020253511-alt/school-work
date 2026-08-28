import React, { useState } from 'react';
import { Users, Crown, FileText, ExternalLink } from 'lucide-react';
import { groupMembers } from '../data/projectData';
import { StudentMember } from '../types';
import { ResumeModal } from './ResumeModal';

export const AboutUs: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<StudentMember | null>(null);

  return (
    <section id="about-us" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-900 relative">
      {/* Background Decorative Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-widest font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>Academic Research Group</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
            Our Research Team & Project Governance
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            The university student analysts behind the Port of Belize Limited Information Systems and Business Value case study.
          </p>
        </div>

        {/* Group Members Grid (Standardized 3:5 Card Template for Every Member) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {groupMembers.map((member) => {
            return (
              <div
                key={member.id}
                id={`member-card-${member.id}`}
                className={`group bg-zinc-900/40 rounded-3xl border transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden backdrop-blur-md ${
                  member.isLeader 
                    ? 'border-amber-500/50 shadow-lg ring-1 ring-amber-500/30' 
                    : 'border-zinc-800 hover:border-indigo-500/60'
                }`}
              >
                {/* 3:5 Aspect Ratio Portrait Container */}
                <div className="relative w-full aspect-[3/5] overflow-hidden bg-zinc-950">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (member.photoUrl.includes('lh3.googleusercontent.com/d/')) {
                        const fileId = member.photoUrl.split('lh3.googleusercontent.com/d/')[1];
                        target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
                      }
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                  {/* Group Leader Badge */}
                  {member.isLeader ? (
                    <div className="absolute top-3 left-3 bg-amber-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-amber-300">
                      <Crown className="w-3.5 h-3.5" />
                      <span>Group Leader</span>
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-sm text-zinc-300 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-zinc-700/80">
                      Researcher
                    </div>
                  )}

                  {/* Name Overlay on Bottom of Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold leading-snug drop-shadow-md">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-4 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center gap-2">
                  <button
                    id={`btn-view-cv-${member.id}`}
                    onClick={() => setSelectedMember(member)}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                      member.isLeader
                        ? 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-zinc-900 hover:bg-indigo-600 text-zinc-200 hover:text-white border border-zinc-800 shadow-sm'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Academic Profile</span>
                  </button>
                  <a
                    id={`btn-open-pdf-${member.id}`}
                    href={member.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open PDF in new tab"
                    className="p-2.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors shrink-0 flex items-center justify-center cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Render Modal */}
      <ResumeModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};
