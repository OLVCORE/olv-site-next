"use client";

import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Verificar se é dispositivo móvel
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Recuperar tema do localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(`theme-${savedTheme}`);
    } else {
      document.body.classList.add('theme-dark');
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Remover classes de tema atuais
    document.body.classList.remove('theme-light', 'theme-dark');
    // Adicionar nova classe de tema
    document.body.classList.add(`theme-${newTheme}`);
    
    // Salvar no localStorage
    localStorage.setItem('theme', newTheme);
  };
  
  // Não renderizar durante SSR para evitar hidratação
  if (!isMounted) return null;

  return (
    <button 
      onClick={toggleTheme}
      aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      className={`
        fixed z-50 flex items-center justify-center transition-all duration-300 ease-in-out
        ${isMobile ? 'bottom-20 right-4 top-auto' : 'top-4 right-4'}
        w-10 h-10 rounded-full bg-opacity-80 backdrop-blur-sm
        ${theme === 'light' 
          ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
          : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}
        shadow-lg border-2 border-opacity-20
        ${theme === 'light' ? 'border-gray-400' : 'border-gray-600'}
        hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${theme === 'light' ? 'focus:ring-blue-400' : 'focus:ring-yellow-500'}
      `}
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
      
      {/* Tooltip para desktop */}
      <span className="absolute right-full mr-2 whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
        Modo {theme === 'light' ? 'escuro' : 'claro'}
      </span>
    </button>
  );
};

export default ThemeSwitch; 