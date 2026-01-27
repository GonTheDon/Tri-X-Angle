import React, { useState, useEffect } from 'react';
import { useAccess } from './AccessContext';
import { X, Terminal as TerminalIcon } from 'lucide-react';
import { AccessLevel } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AccessModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState('');
  const [log, setLog] = useState<string[]>(['> Connection Established...', '> Awaiting Auth Token...']);
  const { unlockLevel1, unlockLevel2, accessLevel } = useAccess();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCode('');
      setLog(['> Connection Established...', '> Awaiting Auth Token...']);
      setError(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedCode = code.trim();

    if (normalizedCode === 'Mass') {
      setLog(prev => [...prev, `> Verifying: ${normalizedCode}`, '> SUCCESS. LEVEL 1 ACCESS GRANTED.']);
      setTimeout(() => {
        unlockLevel1();
        onClose();
      }, 1500);
    } else if (normalizedCode === "Mother's Code" || normalizedCode === "motherscode") { 
        // Note: In real production, this string check would be hashed or backend validated.
        // Keeping "Mother's Code" as the literal trigger based on the prompt description, 
        // though normally it would be a specific unguessable string. 
        // Interpreting prompt: "Level 2 Code: Mother’s Code ... Directly given only by MOTHERS".
      setLog(prev => [...prev, `> Verifying: *************`, '> SYSTEM OVERRIDE DETECTED.', '> WELCOME HOME.']);
      setTimeout(() => {
        unlockLevel2();
        onClose();
      }, 2000);
    } else {
      setLog(prev => [...prev, `> Verifying: ${normalizedCode}`, '> ACCESS DENIED.', '> TERMINATING...']);
      setError(true);
      setTimeout(() => {
        setLog(['> Awaiting Auth Token...']);
        setCode('');
        setError(false);
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-black border border-tri-neon/30 shadow-[0_0_30px_rgba(0,243,255,0.1)] rounded-lg overflow-hidden font-mono">
        <div className="flex items-center justify-between px-4 py-2 bg-tri-glassBorder border-b border-tri-neon/20">
          <div className="flex items-center gap-2 text-tri-neon text-xs">
            <TerminalIcon size={14} />
            <span>SECURE GATEWAY v4.0</span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white">
            <X size={16} />
          </button>
        </div>
        
        <div className="p-6 min-h-[300px] flex flex-col justify-between">
          <div className="space-y-2 mb-6 text-sm text-green-500/80">
            {log.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-tri-neon animate-pulse">{'>'}</span>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={`w-full bg-transparent border-none outline-none pl-6 text-white font-mono placeholder-gray-700 ${error ? 'text-red-500' : ''}`}
              placeholder="ENTER ACCESS CODE"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </form>
          
          <div className="mt-4 text-[10px] text-gray-600 text-center">
            UNAUTHORIZED ACCESS IS A FEDERAL OFFENSE. IP LOGGED.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessModal;