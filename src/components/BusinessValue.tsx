import React from 'react';
import { 
  Award, 
  Zap, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Trophy, 
  Shield, 
  BookOpen,
  CheckCircle
} from 'lucide-react';
import { businessObjectives, projectMeta } from '../data/projectData';

export const BusinessValue: React.FC = () => {
  const renderObjectiveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'Users': return <Users className="w-5 h-5 text-violet-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-indigo-400" />;
      default: return <Award className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="business-value" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Strategic Business Value • Laudon & Laudon Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
            How the Information System Adds Value to Port of Belize Limited
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Applying the Six Strategic Business Objectives framework (Laudon & Laudon, Chapter 1) to evaluate the quantifiable organizational benefits delivered by PBL's Management Information System.
          </p>
        </div>

        {/* Theoretical Framework Academic Notice */}
        <div className="bg-zinc-900/40 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-2xl mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
              <BookOpen className="w-4 h-4" />
              <span>Academic Theoretical Model (Laudon & Laudon Ch. 1)</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Six Strategic Business Objectives of Information Systems
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              In modern enterprise analysis, businesses invest in Information Systems to accomplish one or more of six essential strategic objectives. Our investigation confirms that Port of Belize Limited's integrated MIS directly enhances <strong className="text-white">all six dimensions</strong>.
            </p>
          </div>

          <div className="px-5 py-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-center shrink-0">
            <div className="text-2xl font-black font-mono text-emerald-400">6 / 6</div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest">Objectives Enhanced</div>
          </div>
        </div>

        {/* 6 Strategic Business Objectives Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {businessObjectives.map((obj) => (
            <div
              key={obj.id}
              id={obj.id}
              className="bg-zinc-900/40 rounded-3xl p-6 sm:p-7 border border-zinc-800 hover:border-emerald-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-md"
            >
              <div className="space-y-4">
                
                {/* Card Top: Number, Icon, Impact Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {renderObjectiveIcon(obj.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-zinc-500">
                        Objective 0{obj.number}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {obj.name}
                      </h4>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {obj.impact}
                  </span>
                </div>

                {/* Academic Definition */}
                <div className="p-3.5 bg-zinc-950/70 rounded-2xl border border-zinc-800/80 text-xs text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200 block text-[10px] font-mono uppercase tracking-wider mb-1">
                    Academic Definition:
                  </strong>
                  {obj.definition}
                </div>

                {/* How PBL's Information System Supports It */}
                <div className="space-y-1 text-xs text-zinc-300">
                  <strong className="text-indigo-400 block font-semibold text-[11px] font-mono uppercase">
                    How PBL's MIS Supports This:
                  </strong>
                  <p className="leading-relaxed text-zinc-300">
                    {obj.howPBLUses}
                  </p>
                </div>

                {/* Specific PBL Example */}
                <div className="p-3.5 bg-zinc-950/90 rounded-2xl border border-indigo-500/20 text-xs text-zinc-200 space-y-1">
                  <strong className="text-indigo-300 block font-bold text-[10px] font-mono uppercase tracking-wider">
                    Verified PBL Example:
                  </strong>
                  <p className="leading-relaxed text-zinc-300">
                    {obj.specificExample}
                  </p>
                </div>

              </div>

              {/* Card Footer Indicator */}
              <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Impact: ENHANCED
                </span>
                <span className="text-zinc-500">Laudon Model</span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Synthesis & Conclusion */}
        <div className="bg-zinc-900/40 text-white rounded-3xl p-8 sm:p-10 border border-zinc-800 shadow-2xl space-y-6 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            <BookOpen className="w-4 h-4" />
            <span>Academic Synthesis & Research Conclusion</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Conclusion: The Transformative Value of MIS at Port of Belize Limited
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            <p>
              Our academic investigation concludes that Port of Belize Limited's <strong className="text-white">Management Information System (MIS)</strong>, alongside the desktop <strong className="text-white">Shipping Agent Portal</strong> and web-based tracking suite, plays an indispensable role in upholding Belize's commercial maritime supply chain.
            </p>
            <p>
              By transitioning away from physical paperwork to digitized manifest ingestion, online berthage scheduling, and automated container stripping queries, PBL has systematically enhanced its <strong className="text-emerald-400">operational performance, customer service transparency, management decision making, and regional competitiveness</strong>.
            </p>
            <p>
              Furthermore, in an era of stringent international maritime regulations and digital carrier protocols, the MIS fulfills the critical business objective of <strong className="text-amber-400">Survival</strong>—ensuring Port of Belize Limited remains a modern, compliant, and highly capable trading hub for decades to come.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between text-xs text-zinc-500 font-mono">
            <span>Course: {projectMeta.courseCode} ({projectMeta.courseYear})</span>
            <span>Evaluator: {projectMeta.lecturerEmail}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
