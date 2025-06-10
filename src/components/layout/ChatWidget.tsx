"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ChatWidgetProps {
  isMobile?: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // If on mobile, render as a mobile button
  if (isMobile) {
    return (
      <div className="chat-widget-mobile">
        <button 
          onClick={toggleChat}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="mobile-button bg-indigo-700 hover:bg-indigo-800 flex items-center justify-center relative"
          aria-label="Abrir chat"
        >
          <Image 
            src="/icons/chat.svg" 
            alt="Chat" 
            width={20} 
            height={20} 
            className="text-white" 
          />
          
          {showTooltip && (
            <div className="mobile-button-tooltip right-tooltip">
              Assistente virtual
            </div>
          )}
        </button>

        {/* Janela de chat - posicionada para mobile */}
        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleChat}></div>
            <div className="chat-window fixed bottom-0 left-0 right-0 h-[80vh] bg-[#141c2f] border-t border-[#2a3448] rounded-t-xl shadow-xl overflow-hidden z-50 animate-slideUp">
              {/* Cabeçalho */}
              <div className="chat-header bg-[#0a0f1d] p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Image 
                    src="/images/olv-logo.jpeg" 
                    alt="OLV Internacional" 
                    width={40} 
                    height={40} 
                    className="rounded-full mr-3" 
                  />
                  <div>
                    <h3 className="text-white font-medium">Assistente OLV</h3>
                    <p className="text-gray-400 text-xs">Atendimento online</p>
                  </div>
                </div>
                <button 
                  onClick={toggleChat}
                  className="text-gray-400 hover:text-white"
                  aria-label="Fechar chat"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {/* Corpo do chat */}
              <div className="chat-body flex-grow h-[calc(80vh-120px)] overflow-y-auto p-4 bg-[#0a0f1d]">
                {/* Mensagem do sistema */}
                <div className="chat-message system mb-4">
                  <div className="bg-[#141c2f] p-3 rounded-lg inline-block max-w-[80%]">
                    <p className="text-gray-300 text-sm">
                      Olá! Sou o assistente virtual da OLV Internacional. Como posso ajudar você hoje?
                    </p>
                    <span className="text-gray-500 text-xs block mt-1">14:35</span>
                  </div>
                </div>
                
                {/* Mensagem de boas-vindas */}
                <div className="chat-message system mb-4">
                  <div className="bg-[#141c2f] p-3 rounded-lg inline-block max-w-[80%]">
                    <p className="text-gray-300 text-sm">
                      Você tem dúvidas sobre importação, exportação ou nossos serviços de consultoria?
                    </p>
                    <span className="text-gray-500 text-xs block mt-1">14:35</span>
                  </div>
                </div>
              </div>
              
              {/* Rodapé do chat */}
              <div className="chat-footer p-3 bg-[#141c2f] border-t border-[#2a3448]">
                <form className="flex items-center">
                  <input 
                    type="text" 
                    placeholder="Digite sua mensagem..." 
                    className="flex-1 bg-[#0a0f1d] border border-[#2a3448] rounded-lg py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37]"
                  />
                  <button 
                    type="submit"
                    className="ml-2 bg-[#d4af37] hover:bg-[#b8941f] text-black rounded-lg p-2 transition-colors"
                    aria-label="Enviar mensagem"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Default desktop version
  return (
    <div className="chat-widget fixed bottom-24 right-4 z-50">
      {/* Botão de chat */}
      <button 
        onClick={toggleChat}
        className="w-14 h-14 bg-[#141c2f] border-2 border-[#d4af37] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a243a] transition-colors"
        aria-label="Abrir chat"
      >
        <Image 
          src="/icons/chat.svg" 
          alt="Chat" 
          width={24} 
          height={24} 
          className="text-white" 
        />
      </button>

      {/* Janela de chat */}
      {isOpen && (
        <div className="chat-window absolute bottom-16 right-0 w-80 md:w-96 bg-[#141c2f] border border-[#2a3448] rounded-lg shadow-xl overflow-hidden">
          {/* Cabeçalho */}
          <div className="chat-header bg-[#0a0f1d] p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="/images/olv-logo.jpeg" 
                alt="OLV Internacional" 
                width={40} 
                height={40} 
                className="rounded-full mr-3" 
              />
              <div>
                <h3 className="text-white font-medium">Assistente OLV</h3>
                <p className="text-gray-400 text-xs">Atendimento online</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-gray-400 hover:text-white"
              aria-label="Fechar chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Corpo do chat */}
          <div className="chat-body h-80 overflow-y-auto p-4 bg-[#0a0f1d]">
            {/* Mensagem do sistema */}
            <div className="chat-message system mb-4">
              <div className="bg-[#141c2f] p-3 rounded-lg inline-block max-w-[80%]">
                <p className="text-gray-300 text-sm">
                  Olá! Sou o assistente virtual da OLV Internacional. Como posso ajudar você hoje?
                </p>
                <span className="text-gray-500 text-xs block mt-1">14:35</span>
              </div>
            </div>
            
            {/* Mensagem de boas-vindas */}
            <div className="chat-message system mb-4">
              <div className="bg-[#141c2f] p-3 rounded-lg inline-block max-w-[80%]">
                <p className="text-gray-300 text-sm">
                  Você tem dúvidas sobre importação, exportação ou nossos serviços de consultoria?
                </p>
                <span className="text-gray-500 text-xs block mt-1">14:35</span>
              </div>
            </div>
          </div>
          
          {/* Rodapé do chat */}
          <div className="chat-footer p-3 bg-[#141c2f] border-t border-[#2a3448]">
            <form className="flex items-center">
              <input 
                type="text" 
                placeholder="Digite sua mensagem..." 
                className="flex-1 bg-[#0a0f1d] border border-[#2a3448] rounded-lg py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37]"
              />
              <button 
                type="submit"
                className="ml-2 bg-[#d4af37] hover:bg-[#b8941f] text-black rounded-lg p-2 transition-colors"
                aria-label="Enviar mensagem"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget; 