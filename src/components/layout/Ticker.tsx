"use client";

import React from 'react';
import Link from 'next/link';

const Ticker: React.FC = () => {
  return (
    <div className="ticker">
      <div className="ticker-inner static-ticker">
        <p className="static-ticker-text">
          <span><Link href="/radar360">Radar 360 Ativo</Link> – </span>
          <span>
            <Link href="https://www.bcb.gov.br/estatisticas/mercadoabertodiario" target="_blank">
              Câmbio em Tempo Real
            </Link> – 
          </span>
          <span><Link href="/solucoes">Consultoria Premium em Logística</Link> – </span>
          <span>
            <Link href="https://comexstat.mdic.gov.br/" target="_blank">
              Últimas do Blog OLV Internacional
            </Link> – 
          </span>
          <span><Link href="/contato">Fale com um Especialista</Link></span>
        </p>
      </div>
      <style jsx>{`
        .static-ticker {
          overflow-x: auto;
          white-space: nowrap;
          padding: 0 16px;
        }
        .static-ticker::-webkit-scrollbar {
          height: 0;
          width: 0;
          display: none;
        }
        .static-ticker-text {
          animation: none;
          transform: none;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Ticker; 