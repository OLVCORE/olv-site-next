"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiGlobe } from 'react-icons/fi';
import { Locale } from '@/i18n';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale }) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Verificar no carregamento e no redimensionamento
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Obter o caminho sem o locale
  const getPathWithoutLocale = () => {
    // Verificar se o pathname inclui um locale
    if (pathname?.includes('/pt-BR/') || pathname?.includes('/en-US/')) {
      // Remove o locale do caminho
      return pathname.replace(/^\/(pt-BR|en-US)/, '');
    }
    
    // Se não tiver locale ou for a raiz com locale, retorna '/'
    return pathname?.replace(/^\/(pt-BR|en-US)$/, '/') || '/';
  };
  
  const pathWithoutLocale = getPathWithoutLocale();
  
  // Alternar entre pt-BR e en-US
  const targetLocale = currentLocale === 'pt-BR' ? 'en-US' : 'pt-BR';
  const targetPath = `/${targetLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

  return (
    <div 
      className="language-switcher relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && setIsHovered(!isHovered)}
    >
      <Link 
        href={targetPath}
        className={`
          flex items-center justify-center
          w-11 h-11 rounded-full
          transition-all duration-300 ease-in-out
          shadow-md
          relative overflow-hidden
          ${isHovered 
            ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800' 
            : 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900'}
        `}
        title={targetLocale === 'pt-BR' ? 'Alterar para Português' : 'Switch to English'}
        onClick={(e) => isMobile && e.preventDefault()}
      >
        {/* Globe icon */}
        <span className={`
          relative flex items-center justify-center 
          rounded-full 
          transition-all duration-300
          ${isHovered ? 'text-blue-200' : 'text-blue-300'}
        `}>
          <FiGlobe className="w-5 h-5" />
        </span>
        
        {/* Current language indicator */}
        <span className={`
          absolute top-1 right-1
          w-3 h-3 rounded-full
          border border-white/20
          ${currentLocale === 'pt-BR' 
            ? 'bg-green-400' 
            : 'bg-red-400'}
        `}></span>
      </Link>

      {/* Current language tooltip */}
      <div className={`
        absolute z-20
        ${isMobile ? 'top-full left-1/2 mt-2' : '-bottom-6 left-1/2'} 
        transform -translate-x-1/2
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
      `}>
        <div className={`
          py-0.5 px-2 text-xs font-bold rounded-full
          ${currentLocale === 'pt-BR' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'}
          shadow-lg
        `}>
          {currentLocale === 'pt-BR' ? 'PT' : 'EN'}
        </div>
      </div>
      
      {/* Mobile tooltip with more info */}
      {isMobile && isHovered && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-blue-600 rounded-lg p-3 shadow-xl z-50 w-[90vw] max-w-xs text-center">
          <p className="text-white text-sm mb-2">Alterar idioma para:</p>
          <div className="flex justify-center gap-4">
            <Link 
              href={targetPath}
              className={`py-2 px-4 rounded-lg ${targetLocale === 'pt-BR' ? 'bg-green-600' : 'bg-red-600'} text-white font-medium`}
            >
              {targetLocale === 'pt-BR' ? '🇧🇷 Português' : '🇺🇸 English'}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 