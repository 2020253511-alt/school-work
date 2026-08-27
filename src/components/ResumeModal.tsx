import React from 'react';
import { X, Award, BookOpen, Briefcase, GraduationCap, Mail, CheckCircle2, FileText, UserCheck } from 'lucide-react';
import { StudentMember } from '../types';
import { projectMeta } from '../data/projectData';

interface ResumeModalProps {
  member: StudentMember | null;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900/95 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 space-y-6 text-zinc-100 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-resume-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-zinc-700/80"
          aria-label="Close Resume"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header Profile */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-zinc-800">
          {/* 3:5 Aspect Ratio Photo Container */}
          <div className="w-24 sm:w-28 aspect-[3/5] rounded-2xl overflow-hidden shadow-lg bg-zinc-950 border border-zinc-800 shrink-0 relative">
            <img 
              src={member.photoUrl} 
              alt={member.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {member.isLeader && (
              <div className="absolute top-1 right-1 bg-amber-500 text-zinc-950 text-[9px] font-black px-1.5 py-0.5 rounded shadow">
                LEADER
              </div>
            )}
          </div>

          <div className="text-center sm:text-left space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              {member.isLeader && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  GROUP LEADER
                </span>
              )}
            </div>
            
            <div className="text-xs font-mono text-indigo-400 font-semibold">
              {member.studentId}
            </div>
            
            <div className="text-sm font-medium text-zinc-300">
              {member.role}
            </div>
            
            <div className="text-xs text-zinc-400 flex items-center justify-center sm:justify-start gap-1.5 pt-1">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{member.resume.contactEmail}</span>
            </div>
          </div>
        </div>

        {/* Bio / Executive Summary */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Academic Profile & Bio</span>
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-950/70 p-4 rounded-2xl border border-zinc-800/80">
            {member.bio}
          </p>
        </div>

        {/* Education */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Education & Degree Program</span>
          </h4>
          <div className="text-xs sm:text-sm font-medium text-zinc-200 bg-zinc-950/70 border border-zinc-800/80 p-3.5 rounded-2xl">
            {member.resume.education}
          </div>
        </div>

        {/* Core Skills / Competencies */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>Core Competencies & Skills</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.resume.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-zinc-950 text-zinc-300 border border-zinc-800">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Relevant University Coursework</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
            {member.resume.coursework.map((course, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Responsibilities & Contributions */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Project Responsibilities & Contributions</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-zinc-300">
            {member.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>{projectMeta.institutionName} • {projectMeta.courseYear}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-colors cursor-pointer border border-zinc-700"
          >
            Close Profile
          </button>
        </div>

      </div>
    </div>
  );
};
