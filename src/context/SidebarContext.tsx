"use client";

// SidebarContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ISidebarContext {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

type Props = {
  children: ReactNode;
};

const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

export const SidebarProvider = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): ISidebarContext => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
