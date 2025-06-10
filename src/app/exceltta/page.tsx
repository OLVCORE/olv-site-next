import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import PlatformLayout from '../../components/platforms/PlatformLayout';
import { Locale, i18n } from '@/i18n';

interface PageProps {
  params: {
    locale?: string;
  };
}

export const metadata = {
  title: 'EXCELTTA | Otimização de Processos para Comércio Exterior',
  description: 'Plataforma de gestão e automação de processos para empresas importadoras e exportadoras.'
};

export default function ExcelttaPage({ params }: PageProps) {
  // Usar locale padrão pois esta página não está na rota dinâmica [locale]
  const locale = i18n.defaultLocale as Locale;
  
  return (
    <MainLayout locale={locale}>
      <PlatformLayout
        platformName="EXCELTTA"
        platformLogo="/images/exceltta.jpg"
        platformDescription="Excelência em Gestão de Comércio Exterior"
        platformColor="#2c3e50"
      >
        <section className="mb-12">
          <h2 className="section-title">Sobre a EXCELTTA</h2>
          <p className="mb-4">
            A EXCELTTA é a plataforma de gestão de processos da OLV Internacional, projetada para otimizar fluxos de trabalho.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/exceltta-simple.svg" alt="Process Mapping Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-xl">Mapeamento de Processos</h3>
              </div>
              <p>Identificação e documentação de fluxos de trabalho para visualizar oportunidades de melhoria.</p>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/automation.svg" alt="Automation Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-xl">Automação Inteligente</h3>
              </div>
              <p>Implementação de soluções tecnológicas para automatizar tarefas repetitivas.</p>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/chart.svg" alt="Monitoring Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-xl">Monitoramento Contínuo</h3>
              </div>
              <p>Acompanhamento em tempo real de KPIs para identificar gargalos.</p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Pronto para transformar seus processos?</h2>
            <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas para saber mais.</p>
            <Link href="/contato" className="inline-block bg-blue-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-900 transition duration-300 flex items-center justify-center">
              <img src="/icons/specialist.svg" alt="Specialist Icon" className="w-5 h-5 mr-2" />
              Fale com um Especialista
            </Link>
          </div>
        </section>
      </PlatformLayout>
    </MainLayout>
  );
}