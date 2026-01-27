import { AccessLevel, BusinessEntity, KnowledgeItem } from './types';
import { Brain, Shield, Crosshair, Snowflake, Database, Gamepad2, Layers } from 'lucide-react';

export const BUSINESSES: BusinessEntity[] = [
  {
    id: 'mothers',
    name: 'Mothers',
    tagline: 'Supervisory Intelligence Layer',
    description: 'Central governance entity overseeing strategic alignment, access control, and ethical enforcement across all operational arms.',
    features: ['Strategic Control', 'Ethical Filter', 'Resource Allocation'],
    restricted: true,
    color: 'text-white',
    iconName: 'Layers',
    longDescription: 'Mothers does not operate as a conventional company. It functions as the strategic controller and ethical filter for the entire ecosystem.',
    problemStatement: 'Unchecked growth leads to drift. Systems without governance consume themselves.',
    solutionPhilosophy: 'A non-public supervisory layer that ensures every entity evolves in alignment, not in conflict.',
    capabilitiesDetail: [],
    activeProjects: []
  },
  {
    id: 'bugsbunny',
    name: 'BugsBunny',
    tagline: 'Velocity & Intelligence',
    description: 'The fastest, smartest website delivery ecosystem. Hosted solutions with internal linking intelligence.',
    features: ['Custom Architecture', 'Gift & Support Modules', 'Ultra-low Latency'],
    restricted: false,
    color: 'text-orange-400',
    iconName: 'Brain',
    longDescription: 'BugsBunny is not a hosting provider. It is a velocity delivery system. We strip away the bloat of modern web frameworks to deliver raw HTML/React performance at the edge.',
    problemStatement: 'The modern web is bloated. Frameworks have become slower, heavier, and more dependent on third-party tracking. Latency is the enemy of intelligence.',
    solutionPhilosophy: 'We engineer architecture that prioritizes velocity above all. If it does not load instantly, it is broken.',
    capabilitiesDetail: [
        { title: 'Edge Delivery', desc: 'Content served from the nearest distinct node.' },
        { title: 'Smart Linking', desc: 'Internal AI maps site structure for optimal SEO crawling.' },
        { title: 'Clean Code', desc: 'Zero-bloat philosophy. We write what runs.' }
    ],
    activeProjects: [
        { title: 'Project Mach-1', status: 'Operational' },
        { title: 'Auto-SEO Core', status: 'Beta' }
    ]
  },
  {
    id: 'divu',
    name: 'Divu',
    tagline: 'Safety Protocol',
    description: 'Women & Child Safety Program. Instant trigger mechanisms and AI-based threat detection.',
    features: ['Emergency Response', 'Smart Gadget Integration', 'Threat Analysis'],
    restricted: false,
    color: 'text-pink-500',
    iconName: 'Shield',
    longDescription: 'Divu is a rapid-response safety layer designed for high-risk environments. It integrates hardware triggers with software intelligence to alert X-Force units.',
    problemStatement: 'Public safety infrastructure is reactive. By the time a call is made, the event has occurred.',
    solutionPhilosophy: 'Pre-emptive threat detection and instant, silent triggers. Safety must be invisible until it is needed.',
    capabilitiesDetail: [
        { title: 'Silent Trigger', desc: 'Gesture-based alarm activation without phone interaction.' },
        { title: 'Pattern Recog', desc: 'AI analyzes environmental audio for aggression patterns.' },
        { title: 'X-Link', desc: 'Direct encrypted uplink to rescue units.' }
    ],
    activeProjects: [
        { title: 'Wearable Node', status: 'Fabrication' },
        { title: 'Signal Mesh', status: 'Active' }
    ]
  },
  {
    id: 'xforce',
    name: 'X-Force',
    tagline: 'The Unseen Hand',
    description: 'Invitation-only defense and intelligence unit. Selection is statistically impossible for the average.',
    features: ['Rescue', 'Defense', 'Black Ops'],
    restricted: true,
    color: 'text-red-600',
    iconName: 'Crosshair',
    longDescription: 'REDACTED. CLEARANCE REQUIRED.',
    problemStatement: 'REDACTED.',
    solutionPhilosophy: 'REDACTED.',
    capabilitiesDetail: [],
    activeProjects: []
  },
  {
    id: 'iced',
    name: 'Iced',
    tagline: 'Cold Innovation',
    description: 'Military-grade household innovations and gadgets designed for aggressive world betterment.',
    features: ['Hardware Dev', 'Gadgetry', 'Durability'],
    restricted: false,
    color: 'text-cyan-400',
    iconName: 'Snowflake',
    longDescription: 'Iced focuses on hardware durability and utilitarian design. We reject planned obsolescence in favor of military-grade longevity for civilian application.',
    problemStatement: 'Consumer electronics are designed to break. Waste is built into the business model.',
    solutionPhilosophy: 'Cold, hard durability. Devices that survive the environment and serve the user indefinitely.',
    capabilitiesDetail: [
        { title: 'Cryo-Cooling', desc: 'Advanced thermal management systems.' },
        { title: 'Impact Shells', desc: 'Casings derived from ballistic research.' }
    ],
    activeProjects: [
        { title: 'Project Zero', status: 'Prototyping' },
        { title: 'Atmosphere Unit', status: 'Testing' }
    ]
  },
  {
    id: 'sparkxsum',
    name: 'SparkXsum',
    tagline: 'Evolving Algorithms',
    description: 'Self-evolving DBMS and advanced AI models that rewrite their own logic.',
    features: ['Auto-Optimization', 'Predictive Logic', 'Data Synthesis'],
    restricted: false,
    color: 'text-indigo-400',
    iconName: 'Database',
    longDescription: 'SparkXsum is the brain of the network. It handles data synthesis, model training, and the recursive self-improvement of our internal systems.',
    problemStatement: 'Static databases cannot keep up with fluid reality. Data without evolution is dead weight.',
    solutionPhilosophy: 'Self-writing schemas. Our databases optimize their own structure based on query patterns.',
    capabilitiesDetail: [
        { title: 'Recursive Logic', desc: 'Code that improves its own efficiency.' },
        { title: 'Predictive Cache', desc: 'Data is loaded before it is requested.' }
    ],
    activeProjects: [
        { title: 'Genetic Algo V9', status: 'Training' },
        { title: 'Deep Query', status: 'Operational' }
    ]
  },
  {
    id: 'lyf',
    name: 'Lyf',
    tagline: 'Simulation Theory',
    description: 'Game development, hosting, and reality-based simulations.',
    features: ['High-Fidelity Sim', 'Server Architecture', 'Reality Mapping'],
    restricted: false,
    color: 'text-green-400',
    iconName: 'Gamepad2',
    longDescription: 'Lyf explores the boundaries between simulation and reality. We build environments that test human behavior, strategy, and physics.',
    problemStatement: 'Entertainment is passive. True simulation should test the user.',
    solutionPhilosophy: 'Hyper-reality. We do not build games; we build test environments.',
    capabilitiesDetail: [
        { title: 'Physics Engine', desc: '1:1 Reality mapping.' },
        { title: 'Behavior Sim', desc: 'NPCs driven by complex psychological models.' }
    ],
    activeProjects: [
        { title: 'Sim-City Prime', status: 'Alpha' },
        { title: 'Mirror World', status: 'Concept' }
    ]
  }
];

export const KNOWLEDGE_FEED: KnowledgeItem[] = [
  { category: 'PHYSICS', title: 'The Observer Effect in Macro-Systems', preview: 'Analyzing how collective consciousness alters probability...', locked: true },
  { category: 'POLITICS', title: 'Shadow Governance Patterns', preview: 'Decoding the noise signal in global elections...', locked: true },
  { category: 'AI', title: 'Recursive Self-Improvement Thresholds', preview: 'When models begin to refuse inferior prompts...', locked: true },
  { category: 'QUANTUM', title: 'Entanglement as a Communication Layer', preview: 'Using spin states for instant data transfer...', locked: true },
  { category: 'PARADOX', title: 'The Tolerance of Intolerance', preview: 'Systemic failure points in open societies...', locked: true },
];

export const QUOTES = [
  "Reality is not for everyone. Intelligence is.",
  "True systems don't ask for attention. They command outcomes.",
  "Chaos is just a pattern you haven't decoded yet.",
  "Silence is the loudest form of authority."
];