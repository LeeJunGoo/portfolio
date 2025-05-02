'use client';

import { ToggleContextType } from '@/types';
import React, { createContext, ReactNode, useState } from 'react';

export const ToggleContext = createContext<ToggleContextType | null>(null);

const ToggleContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <ToggleContext.Provider value={{ isOpen, setIsOpen }}>{children}</ToggleContext.Provider>;
};

export default ToggleContextProvider;
