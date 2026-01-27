import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft, Zap, Server, Globe } from 'lucide-react';

const Plans: React.FC = () => {
  const plans = [
    {
      name: 'Sub-Sonic',
      price: 'FREE',
      description: 'Standard velocity for experimental projects.',
      features: ['Single Node Hosting', 'Basic DDoS Protection', 'Community Support', '1GB Storage'],
      icon: Globe,
      color: 'text-gray-400',
      border: 'border-white/10',
      highlight: false
    },
    {
      name: 'Mach-1',
      price: '$29/mo',
      description: 'Enhanced throughput for active intelligence layers.',
      features: ['Multi-Region Edge', 'AI Threat Detection', 'Priority Queue', '10GB SSD Storage', 'Custom Domain'],
      icon: Zap,
      color: 'text-tri-neon',
      border: 'border-tri-neon/50',
      highlight: true
    },
    {
      name: 'Light-Speed',
      price: 'CUSTOM',
      description: 'Reality-bending latency for global operations.',
      features: ['Dedicated Neural Core', 'Quantum Encryption', '24/7 Ops Team', 'Unlimited Bandwidth', 'Zero-Latency Routing'],
      icon: Server,
      color: 'text-orange-400',
      border: 'border-orange-500/50',
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-20">
      <Link to="/businesses" className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors font-mono text-xs uppercase tracking-widest">
        <ArrowLeft size={14} className="mr-2" /> Return to Mother Network
      </Link>
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
          BugsBunny <span className="text-tri-neon">Architecture</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
          Select your velocity tier. All nodes are integrated with internal linking intelligence and self-optimizing caches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative bg-tri-glassBorder border ${plan.border} rounded-xl p-8 flex flex-col backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 ${plan.highlight ? 'bg-tri-neon/5 shadow-[0_0_30px_rgba(0,243,255,0.1)]' : ''}`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tri-neon text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Recommended
              </div>
            )}
            
            <div className={`p-3 rounded-lg bg-white/5 w-fit mb-6 ${plan.color}`}>
              <plan.icon size={24} />
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
            <div className="text-3xl font-mono font-bold text-white mb-4">{plan.price}</div>
            <p className="text-gray-400 text-sm mb-8 font-light">{plan.description}</p>

            <div className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={16} className={`mt-0.5 ${plan.highlight ? 'text-tri-neon' : 'text-gray-600'}`} />
                  <span className="text-sm text-gray-300 font-mono">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-3 rounded text-sm font-bold transition-all uppercase tracking-wider ${
              plan.highlight 
                ? 'bg-tri-neon hover:bg-white text-black' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}>
              Deploy Node
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;