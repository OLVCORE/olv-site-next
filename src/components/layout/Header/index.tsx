"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return pathname === path || (pathname?.startsWith(path) && path !== '/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="header-wrapper">
        <div className="header-inner">
          {/* Logo + Slogan */}
          <div className="header-brand">
            <Link href="/" className="header-logo-link" title="OLV Internacional">
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
            <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`} data-page="home">Home</Link>
            <Link href="/sobre" className={`nav-item ${isActive('/sobre') ? 'active' : ''}`} data-page="sobre">Sobre</Link>
            <Link href="/solucoes" className={`nav-item ${isActive('/solucoes') ? 'active' : ''}`} data-page="solucoes">Soluções</Link>
            <Link href="/ecossistema" className={`nav-item ${isActive('/ecossistema') ? 'active' : ''}`} data-page="ecossistema">Ecossistema</Link>
            <Link href="/radar360" className={`nav-item ${isActive('/radar360') ? 'active' : ''}`} data-page="radar360">Radar 360</Link>
            <Link href="/blog" className={`nav-item ${isActive('/blog') ? 'active' : ''}`} data-page="blog">Blog</Link>
            <Link href="/contato" className={`nav-item ${isActive('/contato') ? 'active' : ''}`} data-page="contato">Contato</Link>
            <Link href="/politica" className={`nav-item ${isActive('/politica') ? 'active' : ''}`} data-page="politica">Política</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 z-50 border-t border-gray-800 shadow-lg">
            <nav className="py-4 px-6">
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className={`block py-2 px-3 rounded ${isActive('/') ? 'bg-blue-900 text-white' : 'text-gray-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/sobre" 
                    className={`block py-2 px-3 rounded ${isActive('/sobre') ? 'bg-blue-900 text-white' : 'text-gray-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/solucoes" 
                    className={`block py-2 px-3 rounded ${isActive('/solucoes') ? 'bg-blue-900 text-white' : 'text-gray-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Soluções
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/ecossistema" 
                    className={`block py-2 px-3 rounded ${isActive('/ecossistema') ? 'bg-blue-900 text-white' : 'text-gray-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ecossistema
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/radar360" 
                    className={`block py-2 px-3 rounded ${isActive('/radar360') ? 'bg-blue-900 text-white' : 'text-gray-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Radar 360
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className={`block py-2 px-3 rounded ${isActive('/blog') ? 'bg-blue-900 text-white' : 'text-gray-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contato" 
                    className={`block py-2 px-3 rounded ${isActive('/contato') ? 'bg-blue-900 text-white' : 'text-gray-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/politica" 
                    className={`block py-2 px-3 rounded ${isActive('/politica') ? 'bg-blue-900 text-white' : 'text-gray-200'}`}
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