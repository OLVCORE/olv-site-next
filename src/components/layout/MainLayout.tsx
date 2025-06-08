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

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  isPlatformPage?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className = '',
  isPlatformPage = false 
}) => {
  const [showFooter, setShowFooter] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  const pathname = usePathname();
  
  // Check if current page is a platform page
  const isCurrentPagePlatform = [
    '/stratevo', 
    '/exceltta', 
    '/connecta', 
    '/engage', 
    '/mecs'
  ].includes(pathname);

  useEffect(() => {
    // Show footer after 500ms
    const footerTimer = setTimeout(() => {
      setShowFooter(true);
    }, 500);

    // Show page after 200ms for transition effect
    const pageTimer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 200);
    
    return () => {
      clearTimeout(footerTimer);
      clearTimeout(pageTimer);
    };
  }, []);

  return (
    <div className={`app-container ${className} ${isPageLoaded ? 'loaded' : ''}`}>
      <ThemeSwitch />
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <Ticker />
        
        {/* Beta Version Box - only on platform pages and below ticker */}
        {isPlatformPage || isCurrentPagePlatform ? <BetaVersion /> : null}
        
        {/* Mobile Quick Links Navigation */}
        <div className="mobile-navigation">
          <QuickLinks />
        </div>
        
        <main className={`main-content ${isPageLoaded ? 'fade-in' : ''} min-h-screen pb-36`}>
          {children}
        </main>
        
        {/* Reduzindo o espaçamento antes do footer para evitar muito espaço */}
        <div className="h-12"></div>
        
        {showFooter && <Footer />}
        
        {/* Fixed buttons */}
        <WhatsAppButton phoneNumber="5511999999999" message="Olá! Vim do site da OLV Internacional e gostaria de saber mais sobre os serviços." />
        
        {/* Chatbot Widget */}
        <ChatWidget />
      </div>
      
      {/* Script para gerenciar o layout e as colisões */}
      <Script src="/scripts/footer-handler.js" strategy="afterInteractive" />
    </div>
  );
};

export default MainLayout; 