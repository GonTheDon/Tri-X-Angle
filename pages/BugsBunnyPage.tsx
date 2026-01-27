import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Brain, Zap, Server, Code, Shield, Activity, 
  ChevronDown, ChevronUp, Terminal, Cpu, Globe, CheckCircle 
} from 'lucide-react';
import GlitchText from '../components/GlitchText';

const BugsBunnyPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // Entry Animation Sequence
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = 'unset';
    }, 2500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const capabilities = [
    {
      title: 'Custom Architecture',
      icon: Code,
      summary: 'Tailored system design without dependencies.',
      detail: 'We reject generic templates. Every node is engineered specifically for its data payload. No unnecessary libraries, no bloat, just raw functional code designed to execute immediately.'
    },
    {
      title: 'Ultra-Low Latency Hosting',
      icon: Server,
      summary: 'Performance-first infrastructure.',
      detail: 'Content is deployed across edge nodes selected for proximity to high-value traffic sources. We prioritize Time-To-First-Byte (TTFB) above all other metrics.'
    },
    {
      title: 'Intelligent Internal Linking',
      icon: Brain,
      summary: 'Logical page relationships & SEO synergy.',
      detail: 'Our internal AI maps the semantic structure of your content, creating a web of internal links that guides both users and crawlers to the highest-value information automatically.'
    },
    {
      title: 'Gift & Support Modules',
      icon: CheckCircle,
      summary: 'Built-in extras without chaos.',
      detail: 'Integrated support ticketing and gifting logic that lives within the architecture, not as a bolted-on plugin that slows down the core thread.'
    }
  ];

  const philosophy = [
    "Speed is a feature.",
    "Uniqueness is power.",
    "Intelligence beats ornamentation.",
    "Maintenance is part of the product.",
    "Systems should age gracefully."
  ];

  return (
    <div className="min-h-screen bg-tri-black text-gray-200 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* 1. CINEMATIC ENTRY */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Background Grid & Particles */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black z-0 pointer-events-none"></div>
        
        <div className={`relative z-10 text-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Logo Assembly */}
          <div className="mb-8 flex justify-center">
            <div className="p-4 border border-orange-500/20 bg-orange-500/5 rounded-full animate-pulse-slow">
              <Brain size={48} className="text-orange-500" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
            BugsBunny
          </h1>
          
          <div className="h-8 mb-6">
             <GlitchText text="The Fastest, Smartest Website Delivery System" speed={40} className="text-orange-400 font-mono text-sm md:text-lg uppercase tracking-[0.2em]" />
          </div>

          <p className="max-w-xl mx-auto text-gray-400 font-light text-sm md:text-base opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
            Engineered for velocity, optimized for intelligence, and deployed without compromise.
          </p>
        </div>

        {/* Loading Overlay */}
        <div className={`absolute inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 pointer-events-none ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
           <div className="flex flex-col items-center gap-4">
             <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
               <div className="h-full bg-orange-500 w-full animate-[loading_2s_ease-in-out]"></div>
             </div>
             <span className="text-[10px] font-mono text-orange-500 animate-pulse">ASSEMBLING ARCHITECTURE...</span>
           </div>
        </div>
      </section>

      {/* 2. WHY IT EXISTS (Context) */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-16 text-center">Context Layer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          <div className="md:pr-12 text-right">
             <h3 className="text-2xl font-display font-bold text-red-500/80 mb-6">Why Traditional Websites Fail</h3>
             <ul className="space-y-4 text-gray-400 font-mono text-sm">
               <li>Bloated frameworks & libraries</li>
               <li>Overpriced, slow agencies</li>
               <li>Fragile hosting infrastructure</li>
               <li>No structural intelligence</li>
               <li>Costly & Slow service & deployment</li>
             </ul>
          </div>

          <div className="md:pl-12">
             <h3 className="text-2xl font-display font-bold text-orange-400 mb-6">The Reality</h3>
             <p className="text-gray-300 leading-relaxed mb-4">
               Most websites are built to look good. Very few are built to work intelligently.
             </p>
             <p className="text-white font-bold border-l-2 border-orange-500 pl-4 py-2 bg-white/5">
               BugsBunny was built to eliminate friction - not decorate it.
             </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT IT IS (Identity) */}
      <section className="py-24 px-4 bg-tri-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
             <h2 className="text-3xl font-display font-bold text-white mb-2">System Identity</h2>
             <p className="text-gray-500 font-mono text-sm">Definition of parameters.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-tri-glassBorder border border-white/10 hover:border-orange-500/30 transition-colors rounded-xl group">
              <Activity className="text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">What It Is</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                A full-stack website delivery ecosystem. Hosted, optimized, and maintained. Built for performance, not trends.
              </p>
            </div>
            
            <div className="p-8 bg-tri-glassBorder border border-white/10 hover:border-red-500/30 transition-colors rounded-xl group">
              <Shield className="text-gray-500 group-hover:text-red-500 transition-colors mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">What It Is Not</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Not a template factory. Not a drag-and-drop toy. Not a bloated agency product.
              </p>
            </div>

            <div className="p-8 bg-tri-glassBorder border border-white/10 hover:border-green-500/30 transition-colors rounded-xl group">
              <Terminal className="text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Who It Is For</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Builders. Businesses that value speed. Founders who hate inefficiency. Systems that must scale cleanly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES (Accordion) */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-10 border-b border-gray-800 pb-2">Core Capabilities</h2>
        
        <div className="space-y-4">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${activeAccordion === idx ? 'bg-white/5 border-orange-500/50' : 'bg-transparent border-white/10 hover:border-white/20'}`}
            >
              <button 
                onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded ${activeAccordion === idx ? 'bg-orange-500/20 text-orange-500' : 'bg-white/5 text-gray-400'}`}>
                    <cap.icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-bold transition-colors ${activeAccordion === idx ? 'text-white' : 'text-gray-300'}`}>{cap.title}</h3>
                    <p className="text-xs text-gray-500 font-mono mt-1">{cap.summary}</p>
                  </div>
                </div>
                {activeAccordion === idx ? <ChevronUp size={18} className="text-orange-500" /> : <ChevronDown size={18} className="text-gray-600" />}
              </button>
              
              <div className={`px-6 text-sm text-gray-300 font-light leading-relaxed overflow-hidden transition-all duration-300 ${activeAccordion === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                <div className="pl-14 border-l border-orange-500/20 ml-5">
                   {cap.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DELIVERY MODES */}
      <section className="py-24 px-4 bg-gradient-to-b from-tri-dark to-black">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Delivery Modes</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: 'Rapid Deploy', desc: 'Fastest delivery. Pre-optimized structures. Ideal for speed-critical launches.', icon: Zap },
               { title: 'Custom Build', desc: 'Fully tailored architecture. Deep requirement analysis. Scales with business growth.', icon: Cpu },
               { title: 'Managed Intel', desc: 'Continuous optimization. Performance monitoring. System evolution over time.', icon: Brain }
             ].map((mode, i) => (
               <div key={i} className="relative p-8 border-t-2 border-white/10 hover:border-orange-500 transition-colors bg-white/5">
                 <mode.icon className="mb-6 text-gray-400" size={32} />
                 <h3 className="text-xl font-bold text-white mb-2">{mode.title}</h3>
                 <p className="text-sm text-gray-400 leading-relaxed">{mode.desc}</p>
                 <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600">0{i + 1}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 6. PROCESS FLOW */}
      <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-12 text-center">Operational Sequence</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10 transform -translate-y-1/2"></div>
          
          {['Signal', 'Map', 'Lock', 'Build', 'Deploy'].map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-4 bg-tri-black p-4 z-10 w-full md:w-auto">
              <div className="w-10 h-10 rounded-full bg-tri-glassBorder border border-orange-500/30 flex items-center justify-center text-orange-500 font-mono text-xs font-bold shadow-[0_0_15px_rgba(255,165,0,0.2)]">
                {i + 1}
              </div>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PHILOSOPHY */}
      <section className="py-20 bg-orange-500/5 border-y border-orange-500/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-display font-bold text-xl md:text-2xl text-white/80">
            {philosophy.map((philo, i) => (
              <span key={i} className="hover:text-orange-400 transition-colors cursor-default">
                {philo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ACCESS & CONTACT */}
      <section className="py-24 px-4 max-w-2xl mx-auto">
        <div className="border border-white/10 bg-tri-glassBorder rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
             <Terminal size={64} />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Initiate Interaction</h2>
          <p className="text-gray-400 text-sm mb-8 font-mono">
            BugsBunny does not engage in volume-based work. Requests are evaluated, not accepted automatically.
          </p>

          <form className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-[10px] font-mono text-orange-500 uppercase">Identity</label>
                 <input type="text" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-orange-500/50 outline-none transition-colors" placeholder="Name / Org" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-mono text-orange-500 uppercase">Scale</label>
                 <select className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-orange-500/50 outline-none transition-colors">
                   <option>Startup (Seed)</option>
                   <option>Growth (Series A+)</option>
                   <option>Enterprise</option>
                   <option>Classified</option>
                 </select>
               </div>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-mono text-orange-500 uppercase">Objective Payload</label>
                <textarea className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-orange-500/50 outline-none transition-colors h-24" placeholder="Briefly describe the system requirement..."></textarea>
             </div>
             
             <button type="button" className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold uppercase tracking-widest text-sm rounded transition-colors shadow-[0_0_20px_rgba(255,165,0,0.3)]">
               Submit System Request
             </button>
          </form>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-12 px-4 text-center border-t border-white/5">
         <Link to="/businesses" className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors font-mono text-xs uppercase tracking-widest">
            <ArrowLeft size={14} className="mr-2" /> Return to Mother Network
         </Link>
         <p className="text-[10px] text-gray-600 font-mono max-w-2xl mx-auto leading-relaxed">
            This page represents the public operational overview of BugsBunny.<br/>
            Internal systems, automation layers, and intelligence mechanisms are not publicly disclosed.
         </p>
      </footer>

    </div>
  );
};

export default BugsBunnyPage;