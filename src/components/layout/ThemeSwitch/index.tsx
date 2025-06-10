"use client";

import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitch: React.FC = () => {
  // Always use dark theme
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Force dark theme
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
    
  }, []);
  
  // Don't render during SSR to avoid hydration issues
  if (!isMounted) return null;

  return (
    <div className="theme-switch relative">
      <button 
        aria-label="Modo escuro ativado"
        className={`
          relative flex items-center justify-center
          w-11 h-11 rounded-full
          transition-all duration-300 ease-in-out
          shadow-md opacity-50 cursor-not-allowed
          bg-gradient-to-br from-indigo-800 via-blue-900 to-violet-900 text-indigo-100
        `}
        title="Modo escuro ativado"
        disabled={true}
      >
        {/* Icon */}
        <span className="relative z-10">
          <FiSun className="w-5 h-5 text-yellow-300" />
        </span>

        {/* Border ring */}
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-blue-500/30"></span>
      </button>
    </div>
  );
};

export default ThemeSwitch; 