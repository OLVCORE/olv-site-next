"use client";

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'mobile-right';
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  position = 'bottom-right',
  phoneNumber = '5511999999999',
  message = 'Olá! Vim do site da OLV Internacional e gostaria de saber mais sobre os serviços.',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Different position classes based on the position prop
  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-24 right-6',
    'top-left': 'fixed top-24 left-6',
    'mobile-right': 'mobile-button'
  };

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  
  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  // If position is mobile-right, use the mobile button style
  if (position === 'mobile-right') {
    return (
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="mobile-button bg-green-600 hover:bg-green-700 flex items-center justify-center relative"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="text-white text-xl" />
        
        {showTooltip && (
          <div className="mobile-button-tooltip right-tooltip">
            Fale conosco via WhatsApp
          </div>
        )}
      </button>
    );
  }

  // Default desktop version
  return (
    <button
      onClick={handleClick}
      className={`${positionClasses[position]} z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none group overflow-visible`}
      aria-label="Contato via WhatsApp"
    >
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-pulse rounded-full"></span>
      
      <FaWhatsapp className="text-2xl" />
      
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-[#0a0f1d] text-sm py-2 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md border border-green-600 w-auto min-w-[180px] max-w-[240px] whitespace-normal">
        <span className="text-white text-xs font-semibold leading-tight">Atendimento imediato via WhatsApp</span>
        
        <span className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-[#0a0f1d] border-r border-t border-green-600"></span>
      </div>
    </button>
  );
};

export default WhatsAppButton; 