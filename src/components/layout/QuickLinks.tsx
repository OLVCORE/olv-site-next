"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCompass } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Soluções', href: '/solucoes' },
  { name: 'Ecossistema', href: '/ecossistema' },
  { name: 'Radar 360', href: '/radar360' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
  { name: 'Política', href: '/politica' }
];

const platformLinks = [
  { name: 'STRATEVO', href: '/stratevo' },
  { name: 'EXCELTTA', href: '/exceltta' },
  { name: 'CONNECTA', href: '/connecta' },
  { name: 'ENGAGE', href: '/engage' },
  { name: 'VERITUS', href: '/veritus' },
  { name: 'FINX', href: '/finx' }
];

const QuickLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile button style that shows on the left side */}
      <button 
        className="mobile-button bg-blue-700 hover:bg-blue-800 flex items-center justify-center relative"
        onClick={toggleMenu}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Links Rápidos"
      >
        <FaCompass className="text-white text-xl" />
        
        {showTooltip && (
          <div className="mobile-button-tooltip left-tooltip">
            Links Rápidos
          </div>
        )}
      </button>

      {/* Quick links panel - Shown when open */}
      {isOpen && (
        <>
          {/* Overlay to close when clicked outside */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40" 
            onClick={toggleMenu}
          ></div>
          
          {/* Panel */}
          <div className="quick-links-panel fixed left-0 top-0 bottom-0 w-[80vw] max-w-xs bg-[#0a0f1d] shadow-lg z-50 animate-slideInLeft overflow-y-auto">
            <div className="quick-links-header p-4 border-b border-gray-800 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Links Rápidos</h3>
              <button 
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white"
                aria-label="Fechar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="quick-links-content p-4">
              <div className="quick-links-section mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Navegação</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="block py-2 px-3 rounded-lg text-gray-200 hover:bg-gray-800 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="quick-links-section">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Plataformas</h4>
                <ul className="space-y-2">
                  {platformLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="block py-2 px-3 rounded-lg text-gray-200 hover:bg-gray-800 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default QuickLinks; 