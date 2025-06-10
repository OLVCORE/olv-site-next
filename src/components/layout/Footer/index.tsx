"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaCogs, FaChartLine, FaUsers, FaNetworkWired, FaGraduationCap, FaMoneyCheckAlt } from 'react-icons/fa';

// Objeto com informações das plataformas
const platforms = [
  {
    id: 'stratevo',
    name: 'STRATEVO',
    url: '/stratevo',
    icon: <FaChartLine size={16} className="text-blue-400" />,
    description: 'Inteligência de Mercado e Gestão Estratégica'
  },
  {
    id: 'exceltta',
    name: 'EXCELTTA',
    url: '/exceltta',
    icon: <FaCogs size={16} className="text-blue-400" />,
    description: 'Análise de Visão para Tomada de Decisão'
  },
  {
    id: 'connecta',
    name: 'CONNECTA',
    url: '/connecta',
    icon: <FaNetworkWired size={16} className="text-blue-400" />,
    description: 'Conexões Seguras com Fornecedores Homologados'
  },
  {
    id: 'engage',
    name: 'ENGAGE',
    url: '/engage',
    icon: <FaUsers size={16} className="text-blue-400" />,
    description: 'CRM e qualificação de leads inteligente'
  },
  {
    id: 'finx',
    name: 'FINX',
    url: '/finx',
    icon: <FaMoneyCheckAlt size={16} className="text-blue-400" />,
    description: 'Gestão Financeira e Otimização de Fluxo de Caixa'
  },
  {
    id: 'academy',
    name: 'ACADEMY',
    url: '/academy',
    icon: <FaGraduationCap size={16} className="text-blue-400" />,
    description: 'Educação Corporativa e Desenvolvimento de Talentos'
  },
  {
    id: 'core',
    name: 'OLV CORE',
    url: '/core',
    icon: <FaCogs size={16} className="text-blue-400" />,
    description: 'Cockpit inteligente de gestão e performance'
  }
];

// Adicionando estilos para tooltip no footer
const footerTooltipStyles = `
  @keyframes pulse {
    0% { box-shadow: 0 0 5px rgba(194, 167, 78, 0.6); }
    50% { box-shadow: 0 0 15px rgba(194, 167, 78, 0.8); }
    100% { box-shadow: 0 0 5px rgba(194, 167, 78, 0.6); }
  }

  .platform-tooltip {
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
    max-width: 250px;
    word-wrap: break-word;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .platform-tooltip {
      position: absolute;
      left: 0;
      top: 100%;
      margin-left: 0;
      margin-top: 5px;
      transform: none;
      width: max-content;
      max-width: calc(100vw - 40px);
      z-index: 100;
    }
    
    .platform-tooltip::after {
      content: '';
      position: absolute;
      top: -5px;
      left: 15px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #111;
    }
  }
`;

const Footer: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
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

  // Função para alternar o tooltip no mobile (touch)
  const toggleTooltip = (id: string) => {
    if (isMobile) {
      setActiveTooltip(activeTooltip === id ? null : id);
    }
  };

  return (
    <footer className="footer-reveal reveal">
      <style dangerouslySetInnerHTML={{ __html: footerTooltipStyles }} />
      <div className="footer-container max-w-7xl mx-auto px-4 py-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">OLV Internacional</h3>
            <p className="text-sm mb-4 text-gray-300">
              Há mais de 35 anos integrando estratégia, operação e resultado para empresas que querem operar globalmente com segurança e alta performance.
            </p>
            <div className="social-icons flex gap-4 mt-4">
              <a href="https://www.instagram.com/olvinternacional/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Image src="/icons/instagram-original.svg" alt="Instagram" width={20} height={20} />
              </a>
              <a href="https://www.linkedin.com/company/26251289/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Image src="/icons/linkedin-original.svg" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="https://www.facebook.com/olvinternacional/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Image src="/icons/facebook-original.svg" alt="Facebook" width={20} height={20} />
              </a>
              <a href="https://twitter.com/olvinternacional" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Image src="/icons/twitter-original.svg" alt="X" width={20} height={20} />
              </a>
              <a href="https://www.youtube.com/@olvinternacional" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Image src="/icons/youtube-original.svg" alt="YouTube" width={20} height={20} />
              </a>
              <a href="mailto:atendimento@olvinternacional.com.br" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Image src="/icons/email-original.svg" alt="E-mail" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solucoes" className="text-gray-300 hover:text-white transition-colors">Soluções</Link>
              </li>
              <li>
                <Link href="/ecossistema" className="text-gray-300 hover:text-white transition-colors">Ecossistema</Link>
              </li>
              <li>
                <Link href="/radar360" className="text-gray-300 hover:text-white transition-colors">Radar 360</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Plataformas */}
          <div className="overflow-visible">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Nossas Plataformas</h3>
            <ul className="space-y-2">
              {platforms.map(platform => (
                <li key={platform.id} className="relative group block mb-2">
                  <div 
                    className="flex items-center"
                    onClick={() => toggleTooltip(platform.id)}
                    onMouseEnter={() => !isMobile && setActiveTooltip(platform.id)}
                    onMouseLeave={() => !isMobile && setActiveTooltip(null)}
                  >
                    {/* Ícone da plataforma - visível em dispositivos móveis */}
                    <div className="w-8 h-8 bg-gray-800 rounded-full p-1.5 mr-2 flex items-center justify-center">
                      {platform.icon}
                    </div>
                    
                    {/* Nome da plataforma */}
                    <Link 
                      href={platform.url} 
                      className="text-white hover:text-[#d4af37] transition-colors border-b border-transparent hover:border-[#d4af37] inline-block hover:underline"
                    >
                      {platform.name}
                    </Link>
                  </div>
                  
                  {/* Tooltip */}
                  {activeTooltip === platform.id && (
                    <div className="platform-tooltip">
                      {platform.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contato</h3>
            
            <div className="grid gap-4">
              {/* Endereço */}
              <div className="flex">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={18} />
                <div>
                  <p className="text-sm text-white font-semibold mb-1">Endereço:</p>
                  <p className="text-sm text-gray-300">
                    Avenida Paulista, 1471 - Conj 1110<br />
                    CEP 01311-927 - Bela Vista<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>
              
              {/* Telefone */}
              <div className="flex">
                <FaPhone className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={16} />
                <div>
                  <p className="text-sm text-white font-semibold mb-1">Telefone:</p>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-300">+55 11 2675 1446</p>
                    <FaWhatsapp className="ml-2 text-blue-400" size={14} />
                  </div>
                </div>
              </div>
              
              {/* Email - Consultas */}
              <div className="flex">
                <FaEnvelope className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-sm text-white">
                  <span className="font-semibold">Consultas e Projetos:</span> 
                  <a href="mailto:atendimento@olvinternacional.com.br" className="ml-1 text-gray-300 hover:text-white transition-colors">
                    atendimento@olvinternacional.com.br
                  </a>
                </p>
              </div>
              
              {/* Email - Vendas */}
              <div className="flex">
                <FaEnvelope className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={16} />
                <p className="text-sm text-white">
                  <span className="font-semibold">Vendas:</span> 
                  <a href="mailto:comercial@olvinternacional.com.br" className="ml-1 text-gray-300 hover:text-white transition-colors">
                    comercial@olvinternacional.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright e Informações Legais */}
        <div className="border-t border-gray-700 pt-6 mt-4">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-400 text-center md:text-left">
                <span className="text-white font-semibold">OLV INTERNACIONAL</span> - <span className="text-white font-semibold">OLV CORE DIGITAL</span>
              </p>
              <div className="flex gap-4">
                <Link href="/politica" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/termos" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center">
              © Copyright - 2025   |   <span className="text-white font-semibold">OLV INTERNACIONAL</span> - CNPJ 67.867.580/0001-90 / Desenvolvido por <span className="text-white font-semibold">OLV CORE DIGITAL</span>  |   All Rights Reserved   |   Powered by OLV Internacional
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 