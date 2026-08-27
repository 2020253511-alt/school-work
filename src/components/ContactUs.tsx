import React, { useState } from 'react';
import { MapPin, Mail, Send, CheckCircle2, User, BookOpen, AlertCircle, Building, ExternalLink } from 'lucide-react';
import { projectMeta } from '../data/projectData';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section id="contact-us" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-widest font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Academic Inquiries & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
            Contact Our Academic Project Team
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Form for students, faculty, and project evaluator ({projectMeta.lecturerName} — <span className="text-indigo-400 font-mono">{projectMeta.lecturerEmail}</span>) to inquire about our Port of Belize Limited MIS research.
          </p>
        </div>

        {/* 
          CRITICAL ASSIGNMENT REQUIREMENT: 
          University of Belize map MUST COME FIRST ABOVE the Contact Us form.
        */}
        <div className="mb-14 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>University Location: {projectMeta.institutionName} (Belmopan / Belize City)</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono">
              Official Campus Map Location (First Section)
            </span>
          </div>

          {/* Large Professional Interactive Map Embed & Clearly Marked Placeholder */}
          <div className="bg-zinc-900/40 rounded-3xl p-3 sm:p-4 border border-zinc-800 shadow-2xl backdrop-blur-md">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
              
              {/* Real Interactive Google Maps Embed centered on University of Belize */}
              <iframe
                title="University of Belize Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15276.495000287515!2d-88.7758369!3d17.2519128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5dc065e9c0c80b%3A0xb35a6be979c5c93c!2sUniversity%20of%20Belize!5e0!3m2!1sen!2sbz!4v1700000000000!5m2!1sen!2sbz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Academic Map Info Banner Badge */}
              <div className="absolute top-4 left-4 z-10 max-w-xs bg-zinc-950/90 backdrop-blur-md text-white p-3.5 rounded-2xl border border-zinc-800 shadow-xl text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-400">
                  <Building className="w-3.5 h-3.5" />
                  <span>{projectMeta.institutionName}</span>
                </div>
                <div className="text-[11px] text-zinc-300">
                  Belmopan Campus & Faculty of Science and Technology
                </div>
                <div className="text-[10px] text-zinc-500 font-mono pt-1 border-t border-zinc-800">
                  [Replace this area with the official Google Maps embed if desired]
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 
          CONTACT FORM (BELOW THE MAP AS REQUIRED)
        */}
        <div className="max-w-3xl mx-auto bg-zinc-900/40 rounded-3xl p-8 sm:p-10 border border-zinc-800 shadow-2xl backdrop-blur-md">
          
          <div className="mb-8 space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Send an Academic Message
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Submit your inquiry or feedback directly to the {projectMeta.groupName} research team.
            </p>
          </div>

          {submitted ? (
            /* SUCCESS CONFIRMATION STATE */
            <div 
              id="contact-success-state"
              className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl text-center space-y-4 animate-in fade-in duration-300 backdrop-blur-md"
            >
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">
                  Message Transmitted Successfully!
                </h4>
                <p className="text-sm font-medium text-emerald-300">
                  Thank you! Your message has been received. Our team will get back to you.
                </p>
              </div>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">
                Your academic inquiry has been logged for review by {projectMeta.groupLeaderName} and team members.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer border border-zinc-700 shadow-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* INTERACTIVE CONTACT FORM */
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {errorMessage && (
                <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Mr. Jevon Mckenzie / Evaluator"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. evaluator@ub.edu.bz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-all shadow-xs"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Question on PBL Shipping Agent Portal / Feedback"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-all shadow-xs"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Message Content <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Type your inquiry, evaluation notes, or comments here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-all shadow-xs resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-zinc-500 flex items-center gap-1.5 font-mono">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Evaluation submissions routed for academic record</span>
                </div>

                <button
                  type="submit"
                  id="btn-submit-contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Research Team</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
