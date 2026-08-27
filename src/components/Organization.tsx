import React from 'react';
import { 
  Building2, 
  Container, 
  Boxes, 
  PackageCheck, 
  Warehouse, 
  Scale, 
  ThermometerSnowflake, 
  Truck, 
  Compass, 
  Ship, 
  Anchor, 
  UserCheck, 
  Wrench, 
  ShieldAlert, 
  ClipboardCheck, 
  Layers, 
  ShieldCheck, 
  MapPin, 
  FileCheck, 
  Target, 
  Eye, 
  Globe2, 
  CheckCircle2
} from 'lucide-react';
import { organizationServices, projectMeta } from '../data/projectData';

export const Organization: React.FC = () => {
  // Dynamic Icon Resolver
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Container': return <Container className={className} />;
      case 'Boxes': return <Boxes className={className} />;
      case 'PackageCheck': return <PackageCheck className={className} />;
      case 'Warehouse': return <Warehouse className={className} />;
      case 'Scale': return <Scale className={className} />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'Truck': return <Truck className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Ship': return <Ship className={className} />;
      case 'Anchor': return <Anchor className={className} />;
      case 'UserCheck': return <UserCheck className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'ClipboardCheck': return <ClipboardCheck className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'MapPin': return <MapPin className={className} />;
      case 'FileCheck': return <FileCheck className={className} />;
      default: return <Anchor className={className} />;
    }
  };

  return (
    <section id="organization" className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-widest font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>Organization Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
            Port of Belize Limited (PBL)
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Belize's premier commercial maritime gateway, providing essential cargo stevedoring, container logistics, and harbor services.
          </p>
        </div>

        {/* Organization Overview Bento Banner */}
        <div className="bg-zinc-900/40 rounded-3xl p-8 sm:p-10 border border-zinc-800 shadow-2xl mb-16 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-zinc-300 leading-relaxed text-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-indigo-600 text-white uppercase tracking-widest">
                  Organization Type
                </span>
                <span className="text-xs font-mono font-semibold text-indigo-300 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">
                  {projectMeta.organizationType}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Gateway for Belize's International Trade & Cargo
              </h3>

              <p>
                <strong className="text-white">Port of Belize Limited (PBL)</strong> is a private, for-profit commercial organization operating the principal port facility located in Belize City. PBL handles the overwhelming majority of Belize's international sea-borne cargo, encompassing containerized imports, agricultural and manufacturing exports, bulk commodities, and specialized marine logistics.
              </p>

              <p className="text-xs text-zinc-400">
                As a vital national economic asset, PBL links Belize's domestic market to major global shipping corridors across North America, the Caribbean, Central America, and Europe. Efficient port operations are essential for maintaining supply chain stability, controlling retail commodity costs, and supporting national export revenues.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-zinc-200">
                <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Deep-Water Facility</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>24/7 Port Logistics</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>ISPS Code Certified</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-zinc-950/80 border border-zinc-800 text-white p-6 sm:p-7 rounded-2xl shadow-xl space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                <Globe2 className="w-4 h-4" />
                <span>Economic Significance</span>
              </div>
              
              <div className="space-y-3 text-xs text-zinc-300 leading-relaxed">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <strong className="text-white block mb-1">National Import Gateway</strong>
                  Facilitates essential food, medical supplies, fuel, raw materials, electronics, and consumer commodities.
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <strong className="text-white block mb-1">Export Channel</strong>
                  Empowers Belizean producers of sugar, citrus, bananas, and seafood to reach global markets reliably.
                </div>
              </div>

              <div className="pt-2 text-[10px] text-zinc-500 font-mono">
                Location: Caesar Ridge Road, Belize City
              </div>
            </div>

          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              <span>Mission & Vision</span>
            </h3>
            <span className="text-xs text-indigo-400/90 font-mono hidden sm:inline uppercase tracking-wider bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
              Official Corporate Mandate
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Mission Card */}
            <div className="bg-zinc-900/40 rounded-3xl p-6 sm:p-8 border border-zinc-800 hover:border-indigo-500/40 transition-all shadow-lg flex flex-col justify-between space-y-4 backdrop-blur-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">
                    Corporate Purpose
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    Official Mission Statement
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/80">
                  "{projectMeta.mission}"
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Port of Belize Limited</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-zinc-900/40 rounded-3xl p-6 sm:p-8 border border-zinc-800 hover:border-violet-500/40 transition-all shadow-lg flex flex-col justify-between space-y-4 backdrop-blur-md">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-violet-400 uppercase tracking-widest block mb-1">
                    Strategic Horizon
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    Official Vision Statement
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/80">
                  "{projectMeta.vision}"
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Port of Belize Limited</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 10 Core Products & Services Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
              Documented Commercial Operations
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Core Products & Port Services
            </h3>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Comprehensive cargo handling and maritime services documented in Port of Belize Limited's operational portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {organizationServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-zinc-900/40 rounded-3xl p-5 border border-zinc-800 hover:border-indigo-500/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all flex flex-col justify-between group backdrop-blur-md"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500">
                      Service 0{index + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h4>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {service.details && (
                  <div className="pt-3 mt-3 border-t border-zinc-800/80 text-[11px] text-zinc-500 italic">
                    {service.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
