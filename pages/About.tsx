import React from 'react';
import GlitchText from '../components/GlitchText';
import { Fingerprint, Eye, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Profile Visual */}
        <div className="md:col-span-5 relative">
          <div className="aspect-[3/4] bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
               {/* Abstract Silhouette representation using CSS */}
               <div className="w-32 h-32 rounded-full bg-tri-neon blur-3xl animate-pulse"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
              <h1 className="text-3xl font-display font-bold text-white">Spark Sum</h1>
              <p className="text-tri-neon font-mono text-sm">CEO Sumit</p>
            </div>
            
            {/* Overlay Codes */}
            <div className="absolute top-4 right-4 text-[10px] font-mono text-green-500 opacity-50 flex flex-col items-end">
              <span>ID: 99-X-ALPHA</span>
              <span>STATUS: OPERATIONAL</span>
              <span>LOC: UNDISCLOSED</span>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Entity Profile</h2>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              He does not seek applause. He seeks <span className="text-white font-medium">architecture</span>.
              <br/><br/>
              An underground intelligence architect and builder of systems. Spark Sum operates in the silence between signals, believing that true control comes from the backend, not the billboard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="p-4 bg-white/5 rounded border border-white/5 hover:border-tri-neon/30 transition-colors">
               <Eye className="w-6 h-6 text-tri-neon mb-3" />
               <h3 className="font-bold text-white mb-1">Observation</h3>
               <p className="text-xs text-gray-400">Seeing what the masses miss. Identifying the glitch in reality.</p>
             </div>
             <div className="p-4 bg-white/5 rounded border border-white/5 hover:border-tri-neon/30 transition-colors">
               <ShieldCheck className="w-6 h-6 text-tri-violet mb-3" />
               <h3 className="font-bold text-white mb-1">Protection</h3>
               <p className="text-xs text-gray-400">Designing safety layers for the vulnerable through X-Force and Divu.</p>
             </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <GlitchText text="True systems don't ask for attention. They command outcomes." speed={20} className="font-mono text-sm text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;