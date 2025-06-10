// src/components/layout/Header/index.tsx
"use client";

import React, { useState } from 'react';
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

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 shadow-lg backdrop-blur-md">
      
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + Slogan */}
        <div className="flex items-center space-x-3">
          <Link 
            href={`/${locale}`}
            className="block w-12 h-12"
            title="OLV Internacional"
          >
            <Image 
              src="/images/olv-logo.jpeg" 
              alt="OLV Internacional" 
              width={48} 
              height={48} 
              className="rounded-full" 
              priority
            />
          </Link>
          <span className="text-white font-semibold">
            Integramos Estratégia,<br />Operação e Resultado
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-gray-200">
          {['', 'sobre', 'solucoes', 'ecossistema', 'radar360', 'blog', 'contato', 'politica'].map((p) => {
            const path = p ? `/${locale}/${p}` : `/${locale}`;
            const label = p === '' ? 'Home' : p.charAt(0).toUpperCase() + p.slice(1);
            return (
              <Link 
                key={p} 
                href={path}
                className={`hover:text-white transition ${isActive(path) ? 'text-white font-bold' : ''}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center space-x-4">
          <ThemeSwitch />
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center space-x-3">
          <ThemeSwitch />
          <LanguageSwitcher currentLocale={locale} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="p-2 bg-gray-800 rounded-md text-gray-200 hover:text-white"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-gray-900 text-gray-200 space-y-2 px-4 pb-4">
          {['', 'sobre', 'solucoes', 'ecossistema', 'radar360', 'blog', 'contato', 'politica'].map((p) => {
            const path = p ? `/${locale}/${p}` : `/${locale}`;
            const label = p === '' ? 'Home' : p.charAt(0).toUpperCase() + p.slice(1);
            return (
              <Link 
                key={p} 
                href={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition ${
                  isActive(path) ? 'bg-gray-800 text-white' : 'hover:bg-gray-800'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
