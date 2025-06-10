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
    <div className="language-switcher relative">
      <button
        className={`
          flex items-center justify-center
          w-11 h-11 rounded-full
          transition-all duration-300 ease-in-out
          shadow-md
          relative overflow-hidden
          bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
          opacity-50 cursor-not-allowed
        `}
        title="Multilíngue desativado"
        disabled={true}
      >
        {/* Globe icon */}
        <span className="relative flex items-center justify-center rounded-full text-blue-300">
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
      </button>
    </div>
  );
};

export default LanguageSwitcher; 