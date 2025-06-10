import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getTranslation, Locale, i18n } from '@/i18n';

export const metadata = {
  title: 'OLV CORE | Cockpit inteligente de gestão e performance',
  description: 'OLV CORE – Cockpit central de gestão empresarial, integração de KPIs, dashboards, performance financeira, operacional e estratégica. Gestão com inteligência e controle total.',
  keywords: [
    'OLV CORE',
    'Cockpit Empresarial',
    'Dashboard',
    'Gestão de Performance',
    'KPIs',
    'Inteligência Empresarial',
    'Indicadores',
    'Monitoramento',
    'Controle Operacional',
    'Ecossistema OLV'
  ],
  openGraph: {
    title: 'OLV CORE | Cockpit inteligente de gestão e performance',
    description: 'Gestão centralizada, dashboards inteligentes, KPIs financeiros e operacionais. Controle total do seu negócio em tempo real.',
    url: 'https://olv-site.vercel.app/core',
    type: 'website',
    images: [
      {
        url: '/images/core.jpg',
        width: 1200,
        height: 630,
        alt: 'OLV CORE'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OLV CORE | Cockpit inteligente de gestão e performance',
    description: 'Cockpit de gestão com dashboards, KPIs, performance financeira, operacional e estratégia integrada.'
  }
};

interface PageProps {
  params: {
    locale?: string;
  };
}

export default function CorePage({ params }: PageProps) {
  // Usar locale padrão pois esta página não está na rota dinâmica [locale]
  const locale = i18n.defaultLocale as Locale;
  
  return (
    <MainLayout locale={locale}>
      {/* Banner principal */}
      <section className="pt-8 pb-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-6 md:p-8 rounded-lg border border-[#2a3448] shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  OLV CORE | Cockpit Inteligente
                </h1>
                <p className="text-gray-300 mb-4">
                  O cockpit inteligente que conecta estratégia, operação e resultado.
                </p>
                <div className="bg-[#0a0f1d] p-4 rounded-lg border border-[#2a3448] mb-6">
                  <p className="text-amber-300 font-medium italic">
                    🚀 OLV CORE – Cockpit de gestão ativo | 💼 Dashboards inteligentes, KPIs, monitoramento operacional, financeiro e estratégico em tempo real!
                  </p>
                </div>
                <p className="text-gray-300 mb-6">
                  <strong className="text-white">OLV CORE</strong> é o painel de controle central do Ecossistema OLV, 
                  desenvolvido para oferecer visibilidade total sobre todas as operações, métricas e KPIs da sua empresa.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link 
                    href="/contato" 
                    className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Fale com um Especialista
                  </Link>
                  <a 
                    href="#funcionalidades" 
                    className="inline-block bg-transparent border border-[#d4af37] hover:bg-[#d4af37]/10 text-[#d4af37] font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Ver Funcionalidades
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center rounded-full bg-[#0a0f1d] border border-[#2a3448] p-4">
                  <Image 
                    src="/icons/core-icon.svg" 
                    alt="OLV CORE" 
                    width={120} 
                    height={120} 
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Recursos Principais
          </h2>
          
          <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] mb-8">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">✔️</span>
                <span>Monitoramento em tempo real da performance empresarial</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">✔️</span>
                <span>KPIs financeiros, operacionais e estratégicos integrados</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">✔️</span>
                <span>Dashboards de gestão, pipeline, status de projetos e operações</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">✔️</span>
                <span>Integração com todos os apps do ecossistema: STRATEVO, EXCELTTA, CONNECTA, VERITUS, FINX, LABS, VENTURES e ACADEMY</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">✔️</span>
                <span>Alertas inteligentes, acompanhamento de metas e governança</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-2">✔️</span>
                <span>Centralização de informações críticas para tomada de decisão</span>
              </li>
            </ul>
            <p className="mt-4 text-[#d4af37] italic">
              Com OLV CORE, sua empresa opera no mais alto nível de inteligência, controle e performance.
            </p>
          </div>
        </div>
      </section>

      {/* Funcionalidades Premium */}
      <section id="funcionalidades" className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Funcionalidades Premium
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] hover:border-[#d4af37] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Dashboards Financeiros</h3>
              <p className="text-gray-300">
                Controle de fluxo de caixa, rentabilidade, despesas, faturamento, indicadores de liquidez e viabilidade financeira.
              </p>
            </div>
            
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] hover:border-[#d4af37] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">KPIs Operacionais</h3>
              <p className="text-gray-300">
                Monitoramento de processos, produtividade, status de pedidos, fornecedores, entregas e operações logísticas.
              </p>
            </div>
            
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] hover:border-[#d4af37] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Pipeline de Projetos</h3>
              <p className="text-gray-300">
                Acompanhamento visual de projetos em andamento, prazos, metas e entregas.
              </p>
            </div>
            
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] hover:border-[#d4af37] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Alertas Inteligentes</h3>
              <p className="text-gray-300">
                Notificações de desvios operacionais, financeiros, prazos, riscos ou oportunidades.
              </p>
            </div>
            
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] hover:border-[#d4af37] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Governança e Compliance</h3>
              <p className="text-gray-300">
                Gestão da integridade, riscos, compliance, obrigações fiscais, contratuais e societárias.
              </p>
            </div>
            
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] hover:border-[#d4af37] transition-colors duration-300">
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Visão 360º do Ecossistema</h3>
              <p className="text-gray-300">
                Todas as informações, de todos os aplicativos, em um só lugar. O cockpit que conecta tudo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-6 md:p-8 rounded-lg border border-[#2a3448] shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quer ter o controle total da sua empresa com o OLV CORE?
            </h2>
            <p className="text-gray-300 mb-8">
              Entre em contato com nossos especialistas e descubra como o OLV CORE pode transformar a gestão da sua empresa.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/contato" 
                className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Falar com um Especialista
              </Link>
              <Link 
                href="/ecossistema" 
                className="inline-block bg-transparent border border-[#d4af37] hover:bg-[#d4af37]/10 text-[#d4af37] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Conhecer o Ecossistema
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}