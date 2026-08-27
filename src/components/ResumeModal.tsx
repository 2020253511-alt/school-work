import React from 'react';
import { X, FileText, ExternalLink } from 'lucide-react';
import { StudentMember } from '../types';
import { projectMeta } from '../data/projectData';

interface ResumeModalProps {
  member: StudentMember | null;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  const pdfPreviewUrl = member.pdfFileId
    ? `https://drive.google.com/file/d/${member.pdfFileId}/preview`
    : member.pdfUrl;

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-zinc-900/95 rounded-3xl shadow-2xl border border-zinc-800 text-zinc-100 backdrop-blur-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 bg-zinc-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* 3:5 Aspect Ratio Mini Thumbnail */}
            <div className="w-12 h-16 rounded-xl overflow-hidden shadow bg-zinc-950 border border-zinc-800 shrink-0">
              <img 
                src={member.photoUrl} 
                alt={member.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (member.photoUrl.includes('lh3.googleusercontent.com/d/')) {
                    const fileId = member.photoUrl.split('lh3.googleusercontent.com/d/')[1];
                    target.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
                  }
                }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">{member.name}</h3>
                {member.isLeader && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    GROUP LEADER
                  </span>
                )}
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Academic Profile PDF
              </div>
            </div>
          </div>

          {/* Quick Actions & Close */}
          <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto justify-end">
            <a
              id="btn-open-drive-pdf"
              href={member.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Open PDF in Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              id="btn-close-resume-modal"
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-zinc-700"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal PDF Viewer Frame */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col min-h-[500px] sm:min-h-[580px]">
          <div className="flex-1 min-h-[500px] sm:min-h-[560px] bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-inner flex flex-col relative">
            <iframe
              src={pdfPreviewUrl}
              title={`${member.name} Academic PDF Profile`}
              className="w-full h-full min-h-[500px] sm:min-h-[560px] border-0 rounded-2xl"
              allow="autoplay"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 px-1">
            <span>Viewing Google Drive Document</span>
            <a
              href={member.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1 underline underline-offset-2"
            >
              Direct Link <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 sm:px-6 border-t border-zinc-800 bg-zinc-950/90 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>{projectMeta.institutionName} • {projectMeta.courseYear}</span>
          <div className="flex items-center gap-3">
            <a
              href={member.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Full Screen</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-colors cursor-pointer border border-zinc-700"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

