"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeSwitch from '../ThemeSwitch';
import { Locale } from '@/i18n';

interface HeaderProps {
  locale: Locale;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const isActive = (path: string) => {
    return pathname === path || (pathname?.startsWith(path) && path !== '/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className={`header-wrapper sticky top-0 z-50 transition-all duration-300 
        ${scrolled 
          ? 'bg-gray-900/90 shadow-lg backdrop-blur-md' 
          : 'bg-gradient-to-b from-gray-900 to-gray-900/95'}`}>
        <div className="header-inner relative">
          {/* Logo + Slogan */}
          <div className="header-brand">
            <Link href={`/${locale}`} className="header-logo-link" title="OLV Internacional">
              <div className="header-logo-circle">
                <Image 
                  src="/images/olv-logo.jpeg" 
                  alt="OLV Internacional" 
                  width={90} 
                  height={90} 
                  className="header-logo-img"
                  priority
                />
              </div>
            </Link>
            <div className="header-slogan">
              Integramos Estratégia,<br />
              Operação e Resultado
            </div>
          </div>

          {/* Menu Principal - Visible only on desktop */}
          <nav className="nav-menu desktop-only">
            <Link href={`/${locale}`} className={`nav-item ${isActive('/') || isActive(`/${locale}`) ? 'active' : ''}`} data-page="home">Home</Link>
            <Link href={`/${locale}/sobre`} className={`nav-item ${isActive('/sobre') || isActive(`/${locale}/sobre`) ? 'active' : ''}`} data-page="sobre">Sobre</Link>
            <Link href={`/${locale}/solucoes`} className={`nav-item ${isActive('/solucoes') || isActive(`/${locale}/solucoes`) ? 'active' : ''}`} data-page="solucoes">Soluções</Link>
            <Link href={`/${locale}/ecossistema`} className={`nav-item ${isActive('/ecossistema') || isActive(`/${locale}/ecossistema`) ? 'active' : ''}`} data-page="ecossistema">Ecossistema</Link>
            <Link href={`/${locale}/radar360`} className={`nav-item ${isActive('/radar360') || isActive(`/${locale}/radar360`) ? 'active' : ''}`} data-page="radar360">Radar 360</Link>
            <Link href={`/${locale}/blog`} className={`nav-item ${isActive('/blog') || isActive(`/${locale}/blog`) ? 'active' : ''}`} data-page="blog">Blog</Link>
            <Link href={`/${locale}/contato`} className={`nav-item ${isActive('/contato') || isActive(`/${locale}/contato`) ? 'active' : ''}`} data-page="contato">Contato</Link>
            <Link href={`/${locale}/politica`} className={`nav-item ${isActive('/politica') || isActive(`/${locale}/politica`) ? 'active' : ''}`} data-page="politica">Política</Link>
          </nav>

          {/* Controls - Theme, Language, Menu - Desktop */}
          <div className="hidden lg:flex items-center justify-end gap-4 pr-6">
            <ThemeSwitch />
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile Controls - Fixed position with proper spacing */}
          <div className="lg:hidden flex items-center gap-3 absolute top-4 right-4 p-1.5 bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-md border border-gray-800/50 z-10">
            {/* Theme Switch */}
            <div className="flex-shrink-0">
              <ThemeSwitch />
            </div>
            
            {/* Language Switcher */}
            <div className="flex-shrink-0 ml-1">
              <LanguageSwitcher currentLocale={locale} />
            </div>
            
            {/* Menu Button */}
            <div className="flex-shrink-0 ml-1">
              <button 
                className="flex items-center justify-center w-11 h-11 rounded-full 
                          bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white 
                          hover:from-blue-800 hover:via-indigo-800 hover:to-violet-800
                          transition-all duration-300 ease-in-out
                          shadow-lg"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? 
                  <HiX className="w-6 h-6 text-red-200" /> : 
                  <HiMenu className="w-6 h-6 text-blue-200" />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu - Improved animation and styling */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 
                         bg-gradient-to-b from-gray-900/95 to-gray-950/95 backdrop-blur-md z-50 
                         border-t border-blue-900/30 shadow-2xl overflow-hidden 
                         animate-slideDown">
            <nav className="py-4 px-6">
              <ul className="space-y-1">
                <li>
                  <Link 
                    href={`/${locale}`}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200
                              ${isActive('/') || isActive(`/${locale}`) 
                                ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md' 
                                : 'text-gray-200 hover:bg-gray-800/60'}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/sobre`}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200
                              ${isActive('/sobre') || isActive(`/${locale}/sobre`) 
                                ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md' 
                                : 'text-gray-200 hover:bg-gray-800/60'}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/solucoes`}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200
                              ${isActive('/solucoes') || isActive(`/${locale}/solucoes`) 
                                ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md' 
                                : 'text-gray-200 hover:bg-gray-800/60'}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Soluções
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/ecossistema`}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200
                              ${isActive('/ecossistema') || isActive(`/${locale}/ecossistema`) 
                                ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md' 
                                : 'text-gray-200 hover:bg-gray-800/60'}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ecossistema
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/radar360`}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200
                              ${isActive('/radar360') || isActive(`/${locale}/radar360`) 
                                ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md' 
                                : 'text-gray-200 hover:bg-gray-800/60'}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Radar 360
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/blog`}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200
                              ${isActive('/blog') || isActive(`/${locale}/blog`) 
                                ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md' 
                                : 'text-gray-200 hover:bg-gray-800/60'}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/contato`}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200
                              ${isActive('/contato') || isActive(`/${locale}/contato`) 
                                ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md' 
                                : 'text-gray-200 hover:bg-gray-800/60'}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/politica`}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200
                              ${isActive('/politica') || isActive(`/${locale}/politica`) 
                                ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md' 
                                : 'text-gray-200 hover:bg-gray-800/60'}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Política
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header; 