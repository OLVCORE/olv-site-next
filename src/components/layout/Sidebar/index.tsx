"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLayerGroup } from 'react-icons/fa';

const platforms = [
  { 
    name: 'STRATEVO', 
    icon: '/icons/stratevo.svg', 
    href: '/stratevo',
    tooltip: 'Inteligência de Mercado e Gestão Estratégica'
  },
  { 
    name: 'EXCELTTA', 
    icon: '/icons/exceltta-simple.svg', 
    href: '/exceltta',
    tooltip: 'Análise de Visão para Tomada de Decisão'
  },
  { 
    name: 'OLV CONNECTA', 
    icon: '/icons/connecta.svg', 
    href: '/connecta',
    tooltip: 'Conexões Seguras com Fornecedores Homologados'
  },
  { 
    name: 'OLV ENGAGE', 
    icon: '/icons/engage.svg', 
    href: '/engage',
    tooltip: 'CRM e qualificação de leads inteligente'
  },
  { 
    name: 'OLV VERITUS', 
    icon: '/icons/veritus.svg', 
    href: '/veritus',
    tooltip: 'Compliance, Due Diligence e Governança'
  },
  { 
    name: 'OLV FINX', 
    icon: '/icons/finx.svg', 
    href: '/finx',
    tooltip: 'Gestão Financeira e Otimização de Fluxo de Caixa'
  },
  { 
    name: 'OLV ACADEMY', 
    icon: '/icons/academy.svg', 
    href: '/academy',
    tooltip: 'Educação Corporativa e Desenvolvimento de Talentos'
  },
  { 
    name: 'OLV LABS', 
    icon: '/icons/labs.svg', 
    href: '/labs',
    tooltip: 'Inovação, Pesquisa e Desenvolvimento com IA'
  },
  { 
    name: 'OLV VENTURES', 
    icon: '/icons/ventures.svg', 
    href: '/ventures',
    tooltip: 'Venture Builder e Aceleração de Startups'
  },
  { 
    name: 'OLV CORE', 
    icon: '/icons/core.svg', 
    href: '/core',
    tooltip: 'Cockpit de Gestão 360° e Business Intelligence'
  },
];

// Adicionando keyframes para animação do tooltip e estilo do tooltip para torná-lo flexível
const tooltipStyles = `
  @keyframes pulse {
    0% { box-shadow: 0 0 5px rgba(194, 167, 78, 0.6); }
    50% { box-shadow: 0 0 15px rgba(194, 167, 78, 0.8); }
    100% { box-shadow: 0 0 5px rgba(194, 167, 78, 0.6); }
  }

  .sidebar-tooltip {
    position: absolute;
    left: 100%;
    margin-left: 12px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 50;
    background-color: #111;
    border: 1px solid #c2a74e;
    padding: 6px 10px;
    font-size: 0.85rem;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    animation: pulse 2s infinite;
    width: max-content;
    max-width: 200px;
    word-wrap: break-word;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .sidebar-tooltip {
      position: fixed;
      left: 50%;
      top: auto;
      bottom: 20px;
      transform: translateX(-50%);
      margin-left: 0;
      max-width: 80vw;
      text-align: center;
    }
  }
`;

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const pathname = usePathname();
  
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
  
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false);
      setActiveTooltip(null);
    }
  };
  
  const handleItemMouseEnter = (platformName: string) => {
    if (!isMobile) {
      setActiveTooltip(platformName);
    }
  };
  
  const handleItemMouseLeave = () => {
    if (!isMobile) {
      setActiveTooltip(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Função para alternar o tooltip no mobile (touch)
  const toggleTooltip = (platformName: string) => {
    if (isMobile) {
      setActiveTooltip(activeTooltip === platformName ? null : platformName);
    }
  };

  // For mobile view, render a mobile button
  if (isMobile) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: tooltipStyles }} />
        
        {/* Mobile button that shows on the left side */}
        <button 
          className="mobile-button bg-amber-700 hover:bg-amber-800 flex items-center justify-center relative"
          onClick={toggleMobileMenu}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Plataformas"
        >
          <FaLayerGroup className="text-white text-xl" />
          
          {showTooltip && (
            <div className="mobile-button-tooltip left-tooltip">
              Plataformas
            </div>
          )}
        </button>

        {/* Mobile Platform Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay to close when clicked outside */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40" 
              onClick={toggleMobileMenu}
            ></div>
            
            {/* Sidebar panel */}
            <div className="fixed left-0 top-0 bottom-0 w-[80vw] max-w-xs bg-[#0a0f1d] shadow-lg z-50 animate-slideInLeft overflow-y-auto">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Plataformas</h3>
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-400 hover:text-white"
                  aria-label="Fechar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="p-4">
                <ul className="space-y-3">
                  {platforms.map((platform) => {
                    const isActive = pathname === platform.href;
                    return (
                      <li 
                        key={platform.name} 
                        className="relative" 
                        onClick={() => toggleTooltip(platform.name)}
                      >
                        <div className="flex items-center">
                          <Link 
                            href={platform.href} 
                            className={`flex items-center py-2 px-3 rounded-lg text-gray-200 hover:bg-gray-800 hover:text-white transition-colors w-full ${isActive ? 'bg-blue-900 text-white' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="w-8 h-8 bg-gray-800 rounded-full p-1.5 mr-3 flex items-center justify-center">
                              <Image 
                                src={platform.icon} 
                                alt={`Ícone ${platform.name}`} 
                                width={20} 
                                height={20} 
                                className="sidebar-icon" 
                              />
                            </div>
                            <span>{platform.name}</span>
                          </Link>
                        </div>
                        
                        {activeTooltip === platform.name && (
                          <div className="bg-[#141c2f] border border-[#d4af37] p-2 text-sm text-gray-300 rounded mt-1">
                            {platform.tooltip}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        )}
      </>
    );
  }

  // Default desktop view - unchanged
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tooltipStyles }} />
      
      <aside 
        className={`sidebar ${isExpanded ? 'expanded' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="sidebar-nav">
          <ul>
            {platforms.map((platform) => {
              const isActive = pathname === platform.href;
              return (
                <li 
                  key={platform.name} 
                  className="relative" 
                  onMouseEnter={() => handleItemMouseEnter(platform.name)} 
                  onMouseLeave={() => handleItemMouseLeave()}
                >
                  <Link 
                    href={platform.href} 
                    className={`sidebar-item ${isActive ? 'active' : ''}`}
                  >
                    <Image 
                      src={platform.icon} 
                      alt={`Ícone ${platform.name}`} 
                      width={24} 
                      height={24} 
                      className="sidebar-icon" 
                    />
                    <span className="sidebar-text">{platform.name}</span>
                  </Link>
                  {activeTooltip === platform.name && (
                    <div className="sidebar-tooltip">
                      {platform.tooltip}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar; 