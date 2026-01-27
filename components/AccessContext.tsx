import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AccessLevel } from '../types';

interface AccessContextType {
  accessLevel: AccessLevel;
  unlockLevel1: () => void;
  unlockLevel2: () => void;
  lock: () => void;
}

const AccessContext = createContext<AccessContextType | undefined>(undefined);

export const AccessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accessLevel, setAccessLevel] = useState<AccessLevel>(AccessLevel.PUBLIC);

  const unlockLevel1 = () => setAccessLevel(AccessLevel.MASS);
  const unlockLevel2 = () => setAccessLevel(AccessLevel.MOTHER);
  const lock = () => setAccessLevel(AccessLevel.PUBLIC);

  return (
    <AccessContext.Provider value={{ accessLevel, unlockLevel1, unlockLevel2, lock }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => {
  const context = useContext(AccessContext);
  if (!context) {
    throw new Error('useAccess must be used within an AccessProvider');
  }
  return context;
};