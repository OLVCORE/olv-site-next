"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const pathname = usePathname();
  
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    setActiveTooltip(null);
  };
  
  const handleItemMouseEnter = (platformName: string) => {
    setActiveTooltip(platformName);
  };
  
  const handleItemMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <aside 
      className="sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="sidebar-nav">
        <ul>
          {platforms.map((platform) => {
            const isActive = pathname === platform.href;
            return (
              <li key={platform.name} className="relative" onMouseEnter={() => handleItemMouseEnter(platform.name)} onMouseLeave={handleItemMouseLeave}>
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
                  <div className="sidebar-tooltip" style={{
                    opacity: 1,
                    visibility: 'visible',
                    boxShadow: '0 0 15px rgba(212, 175, 55, 0.7)',
                    border: '2px solid #d4af37',
                    animation: 'tooltipGlow 2s infinite'
                  }}>
                    {platform.tooltip}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 