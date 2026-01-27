import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Snowflake, Factory, Shield, Cpu, 
  Thermometer, Anchor, Settings, Lock, Boxes
} from 'lucide-react';

const IcedPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visiblePrinciple, setVisiblePrinciple] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const principles = [
    "Reliability over novelty.",
    "Stress-first design.",
    "Minimal points of failure.",
    "Environment-aware systems.",
    "Longevity as a requirement."
  ];

  // Sequence animations for principles
  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setVisiblePrinciple(prev => (prev < principles.length ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(interval);
  }, [isLoaded, principles.length]);

  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-300 font-sans selection:bg-slate-700 selection:text-white overflow-x-hidden">
      
      {/* 1. ENTRY SECTION - THE COLD ARRIVAL */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4 border-b border-slate-800">
        {/* Graphite Background with Frost Texture */}
        <div className="absolute inset-0 bg-[#0a0c10]"></div>
        
        {/* Subtle Metallic Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0a0c10] to-[#0a0c10]"></div>
        
        {/* Frost Particles (Simulated via CSS) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
           {[...Array(20)].map((_, i) => (
             <div 
               key={i}
               className="absolute bg-white rounded-full opacity-30"
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
                 width: `${Math.random() * 3 + 1}px`,
                 height: `${Math.random() * 3 + 1}px`,
                 animation: `float ${10 + Math.random() * 20}s linear infinite`,
                 animationDelay: `-${Math.random() * 10}s`
               }}
             />
           ))}
        </div>

        <div className={`relative z-10 text-center transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8 flex justify-center">
            <div className="p-6 border border-slate-700 bg-slate-900/50 backdrop-blur-sm rounded-none">
              <Snowflake size={48} className="text-slate-400" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-display font-bold text-slate-200 mb-8 tracking-tighter uppercase">
            Iced
          </h1>
          
          <div className="h-px w-24 bg-slate-600 mx-auto mb-8"></div>

          <h2 className="text-sm md:text-base font-mono text-slate-500 mb-6 uppercase tracking-[0.2em]">
            Innovative Systems for Civilian, Industrial & Strategic Use
          </h2>

          <p className="max-w-xl mx-auto text-slate-400 font-mono text-xs md:text-sm border-l-2 border-slate-700 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
            Designed for reliability where failure is unacceptable.
          </p>
        </div>
      </section>

      {/* 2. WHY ICED EXISTS */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-b border-slate-900/50">
        <h2 className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-20 text-center">Engineering Reality</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800"></div>

          <div className="md:text-right md:pr-16">
            <h3 className="text-xl font-display font-bold text-slate-500 mb-8">Why Most Innovation Fails</h3>
            <ul className="space-y-6 text-slate-400 font-mono text-xs md:text-sm">
              <li className="flex items-center justify-end gap-4 opacity-70">
                <span>Innovation stops at prototypes</span> <div className="w-1.5 h-1.5 bg-slate-700"></div>
              </li>
              <li className="flex items-center justify-end gap-4 opacity-70">
                <span>Consumer-first thinking dominates</span> <div className="w-1.5 h-1.5 bg-slate-700"></div>
              </li>
              <li className="flex items-center justify-end gap-4 opacity-70">
                <span>No stress testing in real conditions</span> <div className="w-1.5 h-1.5 bg-slate-700"></div>
              </li>
              <li className="flex items-center justify-end gap-4 opacity-70">
                <span>Fragile designs built for marketing</span> <div className="w-1.5 h-1.5 bg-slate-700"></div>
              </li>
            </ul>
          </div>

          <div className="md:pl-16 flex flex-col justify-center">
            <h3 className="text-xl font-display font-bold text-white mb-8">The Truth</h3>
            <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-8">
              Innovation without deployment discipline is fiction.
            </p>
            <div className="pl-6 border-l-4 border-slate-700">
              <p className="text-xs text-slate-500 font-mono uppercase tracking-wide leading-loose">
                Iced was created to close the gap between idea and operational reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT ICED IS */}
      <section className="py-24 px-4 bg-[#0c0e12]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-12">Operational Definition</h2>
          
          <div className="space-y-2">
            <div className="p-8 md:p-12 bg-[#11141a] border-l-4 border-slate-600 flex flex-col md:flex-row gap-8 items-start hover:bg-[#151921] transition-colors duration-500">
               <div className="p-4 bg-slate-900 border border-slate-800">
                 <Boxes size={24} className="text-slate-400" />
               </div>
               <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-3 font-display uppercase tracking-wide">Applied Engineering Division</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed font-mono">
                    Focused on function over form. Designs survive stress, misuse, and time. Built for environments, not demos.
                  </p>
               </div>
            </div>
            
            <div className="p-8 md:p-12 bg-[#11141a] border-l-4 border-slate-400 flex flex-col md:flex-row gap-8 items-start hover:bg-[#151921] transition-colors duration-500">
               <div className="p-4 bg-slate-900 border border-slate-800">
                 <Settings size={24} className="text-slate-400" />
               </div>
               <div className="w-full">
                  <h3 className="text-lg font-bold text-slate-200 mb-4 font-display uppercase tracking-wide">Multi-Domain Capability</h3>
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-4">
                    <div className="text-center">
                        <span className="block text-xs font-mono text-slate-500 uppercase mb-1">Level 1</span>
                        <span className="text-slate-300 text-sm">Civilian</span>
                    </div>
                    <div className="text-center border-l border-slate-800">
                        <span className="block text-xs font-mono text-slate-500 uppercase mb-1">Level 2</span>
                        <span className="text-slate-300 text-sm">Industrial</span>
                    </div>
                    <div className="text-center border-l border-slate-800">
                        <span className="block text-xs font-mono text-slate-500 uppercase mb-1">Level 3</span>
                        <span className="text-slate-300 text-sm">Strategic</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs font-mono mt-6 uppercase tracking-wider text-right">
                    Domain determines constraints. Constraints determine design.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITY SPECTRUM */}
      <section className="py-24 px-4 max-w-[1400px] mx-auto">
        <h2 className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-16 ml-4">Capability Spectrum</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {/* Civilian */}
          <div className="bg-[#11141a] p-10 lg:p-14 group hover:bg-[#161a21] transition-all duration-500 border-r border-b lg:border-b-0 border-black/50">
             <div className="flex justify-between items-start mb-8">
               <Thermometer size={32} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
               <span className="text-[10px] font-mono border border-slate-800 px-2 py-1 text-slate-500">CAT-1</span>
             </div>
             <h3 className="text-lg font-bold text-slate-200 uppercase tracking-widest mb-2">Civilian Systems</h3>
             <div className="text-[10px] font-mono text-slate-500 mb-8 uppercase">Low Visibility · High Utility</div>
             
             <div className="space-y-4 mb-8">
               <div className="h-px w-full bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
               <p className="text-slate-400 text-sm leading-relaxed font-mono">
                 Smart household devices.<br/>
                 Personal safety gadgets.<br/>
                 Energy-efficient systems.<br/>
                 Everyday problem solvers.
               </p>
             </div>
             <div className="text-xs text-slate-500 font-mono italic">
               Tone: Quietly reliable. Built to last.
             </div>
          </div>

          {/* Industrial */}
          <div className="bg-[#11141a] p-10 lg:p-14 group hover:bg-[#161a21] transition-all duration-500 border-r border-b lg:border-b-0 border-black/50">
             <div className="flex justify-between items-start mb-8">
               <Factory size={32} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
               <span className="text-[10px] font-mono border border-slate-800 px-2 py-1 text-slate-500">CAT-2</span>
             </div>
             <h3 className="text-lg font-bold text-slate-200 uppercase tracking-widest mb-2">Industrial Systems</h3>
             <div className="text-[10px] font-mono text-slate-500 mb-8 uppercase">High Durability · Precision</div>
             
             <div className="space-y-4 mb-8">
               <div className="h-px w-full bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
               <p className="text-slate-400 text-sm leading-relaxed font-mono">
                 Monitoring equipment.<br/>
                 Automation support systems.<br/>
                 Control interfaces.<br/>
                 Environmental resilience tools.
               </p>
             </div>
             <div className="text-xs text-slate-500 font-mono italic">
               Tone: Continuous operation under pressure.
             </div>
          </div>

          {/* Strategic */}
          <div className="bg-[#11141a] p-10 lg:p-14 group hover:bg-[#161a21] transition-all duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield size={120} />
             </div>
             <div className="flex justify-between items-start mb-8 relative z-10">
               <Shield size={32} className="text-slate-700 group-hover:text-red-900 transition-colors" />
               <div className="flex items-center gap-2 text-[10px] font-mono border border-red-900/30 px-2 py-1 text-red-900/70 bg-red-900/5">
                 <Lock size={10} /> RESTRICTED
               </div>
             </div>
             <h3 className="text-lg font-bold text-slate-200 uppercase tracking-widest mb-2 relative z-10">Strategic Systems</h3>
             <div className="text-[10px] font-mono text-red-900/60 mb-8 uppercase relative z-10">Defense-Grade · Non-Public</div>
             
             <div className="space-y-4 mb-8 relative z-10">
               <div className="h-px w-full bg-slate-800 group-hover:bg-red-900/30 transition-colors"></div>
               <p className="text-slate-400 text-sm leading-relaxed font-mono">
                 Advanced materials.<br/>
                 Tactical equipment.<br/>
                 Field-support systems.<br/>
                 Specialized hardware.
               </p>
             </div>
             <div className="text-xs text-slate-600 font-mono italic border-l-2 border-slate-800 pl-3 relative z-10 group-hover:border-red-900/50 transition-colors">
               Details are intentionally withheld.
             </div>
          </div>
        </div>
      </section>

      {/* 5. DESIGN PHILOSOPHY */}
      <section className="py-32 bg-[#08090b] border-y border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-16">Engineering Principles</h2>
          <div className="flex flex-col gap-8 items-center">
            {principles.map((p, i) => (
              <p 
                key={i} 
                className={`text-xl md:text-3xl font-display font-light text-slate-300 transition-all duration-1000 transform ${i <= visiblePrinciple ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTING & REALITY */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#0f1115] border border-slate-800 p-12 md:p-16 flex flex-col justify-center">
               <Anchor className="text-slate-600 w-12 h-12 mb-8" />
               <h2 className="text-3xl font-display font-bold text-slate-200 mb-8">Built for Real Conditions</h2>
               <div className="space-y-6 text-slate-400 font-mono text-xs md:text-sm tracking-wide">
                  <p className="border-l border-slate-700 pl-4 py-1">Tested beyond normal usage parameters.</p>
                  <p className="border-l border-slate-700 pl-4 py-1">Designed for misuse scenarios.</p>
                  <p className="border-l border-slate-700 pl-4 py-1">Failure modes analyzed before production.</p>
                  <p className="border-l border-slate-700 pl-4 py-1">No public beta culture.</p>
               </div>
            </div>
            <div className="bg-[#0a0c10] border-t md:border-t-0 md:border-r md:border-b border-slate-800 p-12 md:p-16 flex items-center justify-center">
               <p className="text-center text-xl md:text-2xl font-display text-slate-500 uppercase tracking-widest leading-relaxed">
                  "If a system cannot survive reality,<br/>it is not deployed."
               </p>
            </div>
         </div>
      </section>

      {/* 7. ACCESS & VISIBILITY */}
      <section className="py-24 px-4 bg-[#08090b]">
         <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-xs font-mono text-slate-600 uppercase tracking-widest">Visibility & Access Protocol</h2>
            <div className="h-px w-12 bg-slate-800 mx-auto"></div>
            <p className="text-slate-300 font-light leading-loose text-sm md:text-base">
               Public visibility is limited. Civilian products may surface publicly.<br/> 
               Industrial and strategic systems require authorization.<br/>
               Defense-grade projects are non-discoverable.
            </p>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest pt-4">
               Not every system is meant to be seen. All systems are meant to work.
            </p>
         </div>
      </section>

      {/* 8. COLLABORATION */}
      <section className="py-24 px-4 max-w-3xl mx-auto">
         <div className="border border-slate-800 bg-[#0c0e12] p-10 md:p-16 text-center shadow-2xl shadow-black/50">
            <h2 className="text-xl font-bold text-slate-200 mb-4 font-display uppercase tracking-wide">Collaboration Model</h2>
            <p className="text-slate-400 text-sm mb-10 font-light font-mono">
               Iced does not sell ideas. It integrates capability.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[10px] font-mono text-slate-600 uppercase mb-10">
               <span className="border border-slate-800 px-3 py-1">Infrastructure</span>
               <span className="border border-slate-800 px-3 py-1">Safety Programs</span>
               <span className="border border-slate-800 px-3 py-1">Strategic Initiatives</span>
               <span className="border border-slate-800 px-3 py-1">Institutions</span>
            </div>
            <button className="px-10 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs uppercase tracking-widest border border-slate-600 transition-colors">
               Initiate Technical Inquiry
            </button>
         </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-16 px-4 text-center border-t border-slate-900 bg-[#050608]">
         <Link to="/businesses" className="inline-flex items-center text-slate-600 hover:text-slate-400 mb-8 transition-colors font-mono text-xs uppercase tracking-widest">
            <ArrowLeft size={14} className="mr-2" /> Return to Mother Network
         </Link>
         <p className="text-[10px] text-slate-700 font-mono max-w-2xl mx-auto leading-relaxed uppercase">
            This page represents the public-facing overview of Iced.<br/>
            System schematics, materials, and deployment logic are restricted.
         </p>
      </footer>

    </div>
  );
};

export default IcedPage;