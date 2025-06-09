"use client";

import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Recuperar tema do localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(`theme-${savedTheme}`);
    } else {
      document.body.classList.add('theme-dark');
    }
    
    // Detectar se é dispositivo móvel
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Verificar no carregamento e no redimensionamento
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
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
    <div 
      className="theme-switch relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && setIsHovered(false)}
    >
      <button 
        onClick={toggleTheme}
        aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
        className={`
          relative flex items-center justify-center
          w-11 h-11 rounded-full
          transition-all duration-300 ease-in-out
          shadow-md
          ${theme === 'light' 
            ? 'bg-gradient-to-br from-amber-300 to-orange-400 text-amber-800' 
            : 'bg-gradient-to-br from-indigo-800 via-blue-900 to-violet-900 text-indigo-100'}
        `}
        title={`Modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        {/* Icon */}
        <span className="relative z-10">
          {theme === 'light' ? (
            <FiMoon className="w-5 h-5 text-gray-800" />
          ) : (
            <FiSun className="w-5 h-5 text-yellow-300" />
          )}
        </span>

        {/* Border ring */}
        <span className={`
          absolute inset-0 rounded-full 
          ring-1 ring-inset
          ${theme === 'light' 
            ? 'ring-amber-500/30' 
            : 'ring-blue-500/30'}
        `}></span>
      </button>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute z-20 -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className={`
            py-1 px-2 text-xs font-medium rounded-md
            bg-gray-800 text-white
            shadow-lg border border-gray-700
            whitespace-nowrap
            w-max
          `}>
            {theme === 'light' ? 'Mudar para escuro' : 'Mudar para claro'}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch; 