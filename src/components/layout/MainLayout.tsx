"use client";

import React, { useState, useEffect } from 'react';
import Header from './Header/index';
import Footer from './Footer/index';
import Sidebar from './Sidebar/index';
import WhatsAppButton from '../layout/WhatsAppButton';
import ChatWidget from '../layout/ChatWidget';
import Ticker from './Ticker';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';
import BetaVersion from './BetaVersion';
import QuickLinks from './QuickLinks';
import Script from 'next/script';
import { Locale } from '@/i18n';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  isPlatformPage?: boolean;
  locale?: Locale;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className = '',
  isPlatformPage = false,
  locale = 'pt-BR'
}) => {
  const pathname = usePathname();
  
  // Check if current page is a platform page
  const isCurrentPagePlatform = [
    '/stratevo', 
    '/exceltta', 
    '/connecta', 
    '/engage', 
    '/mecs'
  ].includes(pathname);

  // CSS styles for the floating action buttons container
  const mobileButtonsStyle = `
    @media (max-width: 768px) {
      .mobile-left-buttons {
        position: fixed;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 12px;
        z-index: 50;
        padding: 8px;
      }
      
      .mobile-right-buttons {
        position: fixed;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 12px;
        z-index: 50;
        padding: 8px;
      }
      
      .mobile-button {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #141c2f, #0a0f1d);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .mobile-button-tooltip {
        position: absolute;
        background: #0a0f1d;
        color: #fff;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        border: 1px solid #d4af37;
      }
      
      .left-tooltip {
        left: 100%;
        margin-left: 12px;
      }
      
      .right-tooltip {
        right: 100%;
        margin-right: 12px;
      }
    }
  `;

  return (
    <div className={`app-container ${className} loaded`}>
      <style dangerouslySetInnerHTML={{ __html: mobileButtonsStyle }} />
      
      <ThemeSwitch />
      <Sidebar />
      <div className="content-wrapper">
        <Header locale={locale} />
        <Ticker />
        
        {/* Beta Version Box - only on platform pages and below ticker */}
        {isPlatformPage || isCurrentPagePlatform ? <BetaVersion /> : null}
        
        {/* Mobile Quick Links Navigation - Now hidden, we'll use floating buttons instead */}
        <div className="hidden">
          <QuickLinks />
        </div>
        
        <main className="main-content min-h-screen pb-36">
          {children}
        </main>
        
        {/* Mobile floating buttons - Left side (visible only on mobile) */}
        <div className="mobile-left-buttons md:hidden">
          {/* Quick Links Button */}
          <QuickLinks />
          
          {/* Platforms Button */}
          <Sidebar />
        </div>
        
        {/* Mobile floating buttons - Right side (visible only on mobile) */}
        <div className="mobile-right-buttons md:hidden">
          {/* WhatsApp Button - Now managed inside the component with mobile optimized position */}
          <WhatsAppButton position="mobile-right" phoneNumber="5511999999999" message="Olá! Vim do site da OLV Internacional e gostaria de saber mais sobre os serviços." />
          
          {/* Chat Widget - Now managed inside the component with mobile optimized position */}
          <ChatWidget isMobile={true} />
        </div>
        
        {/* Reduzindo o espaçamento antes do footer para evitar muito espaço */}
        <div className="h-12"></div>
        
        <Footer />
        
        {/* Fixed buttons - Now hidden on mobile, shown on desktop */}
        <div className="hidden md:block">
          <WhatsAppButton position="bottom-right" phoneNumber="5511999999999" message="Olá! Vim do site da OLV Internacional e gostaria de saber mais sobre os serviços." />
          <ChatWidget isMobile={false} />
        </div>
      </div>
      
      {/* Script para gerenciar o layout e as colisões */}
      <Script src="/scripts/footer-handler.js" strategy="afterInteractive" />
    </div>
  );
};

export default MainLayout; 