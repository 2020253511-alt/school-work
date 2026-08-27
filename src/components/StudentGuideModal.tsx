import React, { useState } from 'react';
import { X, HelpCircle, Code, Globe, Copy, Check, ExternalLink, Edit3, Monitor, Layers } from 'lucide-react';
import { projectMeta } from '../data/projectData';

interface StudentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentGuideModal: React.FC<StudentGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIframe, setCopiedIframe] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  if (!isOpen) return null;

  const currentUrl = window.location.origin;
  const sampleIframeCode = `<iframe \n  src="${currentUrl}" \n  width="100%" \n  height="900" \n  style="border:none; border-radius:12px; overflow:hidden;" \n  title="Port of Belize Limited MIS Academic Project" \n  allowfullscreen>\n</iframe>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleIframeCode);
    setCopiedIframe(true);
    setTimeout(() => setCopiedIframe(false), 2500);
  };

  return (
    <div 
      id="guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="guide-modal-container"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 p-6 sm:p-8 space-y-6 text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close Guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 pb-4 border-b border-zinc-800">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider border border-indigo-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Student & Lecturer Deployment Guide</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            How to Edit, Deploy & Embed in Google Sites
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Follow this 5-step checklist to customize team data, deploy your website, and embed it into your university Google Sites portfolio.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="flex flex-wrap gap-2 pb-2">
          {[
            { num: 1, label: '1. Local Run' },
            { num: 2, label: '2. Deploy Online' },
            { num: 3, label: '3. Copy URL' },
            { num: 4, label: '4. Google Sites Embed' },
            { num: 5, label: '5. Edit Team & Data' },
          ].map((tab) => (
            <button
              key={tab.num}
              onClick={() => setActiveStep(tab.num)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeStep === tab.num
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Step Contents */}
        <div className="p-5 bg-zinc-950/80 rounded-2xl border border-zinc-800 space-y-4 text-xs sm:text-sm">
          
          {/* STEP 1: LOCAL RUN */}
          {activeStep === 1 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">1</span>
                <span>How to Run the Website Locally</span>
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                To test the project on your personal computer:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 text-zinc-200 p-4 rounded-xl font-mono text-xs space-y-2">
                <div><span className="text-zinc-500"># 1. Install dependencies</span><br />npm install</div>
                <div><span className="text-zinc-500"># 2. Start development server</span><br />npm run dev</div>
                <div><span className="text-zinc-500"># 3. Open browser at:</span><br /><span className="text-emerald-400">http://localhost:3000</span></div>
              </div>
            </div>
          )}

          {/* STEP 2: DEPLOYMENT */}
          {activeStep === 2 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">2</span>
                <span>Deploy to a Free Hosting Service</span>
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                Because this application is a pure client-side SPA (no database required), you can deploy it in 1 click using:
              </p>
              <ul className="space-y-2 text-zinc-300">
                <li className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <strong className="text-indigo-400">Vercel:</strong> Import the repository and set build command to <code className="bg-zinc-950 px-1 py-0.5 rounded font-mono text-zinc-300">npm run build</code> (output directory <code className="bg-zinc-950 px-1 py-0.5 rounded font-mono text-zinc-300">dist</code>).
                </li>
                <li className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <strong className="text-indigo-400">Netlify:</strong> Drag and drop the <code className="bg-zinc-950 px-1 py-0.5 rounded font-mono text-zinc-300">dist/</code> folder into Netlify Drop.
                </li>
                <li className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <strong className="text-indigo-400">GitHub Pages / Cloud Run:</strong> Deploy via standard static site export.
                </li>
              </ul>
            </div>
          )}

          {/* STEP 3: COPY PUBLIC URL */}
          {activeStep === 3 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">3</span>
                <span>Obtain Your Live Public URL</span>
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                After deployment, your service gives you a public HTTPS URL (for example: <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-indigo-400 font-mono">https://your-pbl-project.vercel.app</code> or your Google AI Studio shared link).
              </p>
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs text-indigo-300 font-medium">
                Current App URL: <span className="font-mono text-white">{currentUrl}</span>
              </div>
            </div>
          )}

          {/* STEP 4: GOOGLE SITES EMBED */}
          {activeStep === 4 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">4</span>
                <span>Embed URL or iframe into Google Sites</span>
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                In Google Sites (sites.google.com):
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-zinc-300">
                <li>Open your University of Belize Google Site with your student account.</li>
                <li>In the right panel, click <strong>"Insert" ➔ "Embed" (&lt;/&gt;)</strong>.</li>
                <li>You can paste the <strong>URL directly</strong> or click <strong>"Embed code"</strong> and paste the iframe snippet below:</li>
              </ol>

              {/* Copyable Iframe Code */}
              <div className="relative bg-zinc-900 border border-zinc-800 text-zinc-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
                <pre>{sampleIframeCode}</pre>
                <button
                  onClick={copyToClipboard}
                  className="absolute top-3 right-3 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow"
                >
                  {copiedIframe ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedIframe ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <p className="text-[11px] text-zinc-500">
                * Note: The website is 100% responsive and will seamlessly adapt to any width inside Google Sites without horizontal scrolling!
              </p>
            </div>
          )}

          {/* STEP 5: HOW TO EDIT TEAM & DATA */}
          {activeStep === 5 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-mono">5</span>
                <span>How to Edit Names, Student IDs, Photos & Resumes</span>
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                All data is centralized in a single, well-documented configuration file:
              </p>
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 font-mono text-xs text-indigo-400">
                📁 src/data/projectData.ts
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                <li>• <strong>Student Names & IDs:</strong> Update the <code className="bg-zinc-900 px-1 rounded font-mono text-zinc-300">groupMembers</code> array.</li>
                <li>• <strong>Photos:</strong> Replace the <code className="bg-zinc-900 px-1 rounded font-mono text-zinc-300">photoUrl</code> links with real student image URLs or local assets.</li>
                <li>• <strong>Course & Group Name:</strong> Edit <code className="bg-zinc-900 px-1 rounded font-mono text-zinc-300">projectMeta.courseName</code> and <code className="bg-zinc-900 px-1 rounded font-mono text-zinc-300">projectMeta.groupName</code>.</li>
                <li>• <strong>Mission & Vision:</strong> Once verified from official PBL documentation, replace the placeholders in <code className="bg-zinc-900 px-1 rounded font-mono text-zinc-300">Organization.tsx</code>.</li>
              </ul>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono">
            Evaluator: {projectMeta.lecturerEmail}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
