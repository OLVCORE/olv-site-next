import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getTranslation } from '@/i18n';

export const metadata = {
  title: 'Radar 360° | Sistema de Inteligência para Comércio Exterior',
  description: 'Monitoramento em tempo real de variáveis regulatórias, tributárias, logísticas e cambiais para otimizar suas operações de importação e exportação com análises preditivas.',
  keywords: [
    'Inteligência de Mercado para Exportação',
    'Monitoramento de Comércio Exterior',
    'Sistema de Alerta para Importadores',
    'Análise de Mercado Internacional',
    'Compliance em Tempo Real',
    'Monitoramento Tributário para Importação',
    'Radar SISCOMEX Inteligente',
    'Acompanhamento de Operações Internacionais',
    'Previsão de Riscos em Comércio Exterior',
    'Dados Estratégicos para Exportadores'
  ],
  openGraph: {
    title: 'Radar 360° | Inteligência para Comércio Exterior | OLV Internacional',
    description: 'Sistema de monitoramento e inteligência que antecipa riscos e identifica oportunidades para suas operações de importação e exportação.',
    url: 'https://olv-site.vercel.app/radar360',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radar 360° | OLV Internacional',
    description: 'Monitore em tempo real todas as variáveis que afetam suas operações de importação e exportação.'
  }
};

interface PageProps {
  params: {
    locale: string;
  };
}

export default function Radar360Page({ params }: PageProps) {
  const { locale = 'pt-BR' } = params || {};
  
  // Benefícios do Radar360
  const beneficios = [
    {
      titulo: "Monitoramento Contínuo",
      descricao: "Acompanhamento em tempo real de todas as variáveis que afetam sua operação internacional.",
      icon: "/icons/dashboard-chart.svg"
    },
    {
      titulo: "Inteligência de Mercado",
      descricao: "Análises exclusivas e insights estratégicos para identificar oportunidades e evitar riscos.",
      icon: "/icons/link-document.svg"
    },
    {
      titulo: "Alertas Personalizados",
      descricao: "Notificações imediatas sobre mudanças regulatórias, tributárias e de mercado que impactam seu negócio.",
      icon: "/icons/notification.svg"
    },
    {
      titulo: "Atuação Preventiva",
      descricao: "Antecipação a problemas e identificação de oportunidades antes da concorrência.",
      icon: "/icons/clock.svg"
    },
    {
      titulo: "Dados Georreferenciados",
      descricao: "Informações estratégicas mapeadas por região, país e setor para decisões mais precisas.",
      icon: "/icons/location.svg"
    },
    {
      titulo: "Consultoria Especializada",
      descricao: "Análises conduzidas por especialistas com mais de 35 anos de experiência em comércio internacional.",
      icon: "/icons/user-profile.svg"
    }
  ];

  // Módulos do Radar360
  const modulos = [
    {
      id: "regulatorio",
      titulo: "Radar Regulatório",
      descricao: "Monitoramento constante de mudanças em legislações, normas e regulamentos que afetam operações de comércio exterior, tanto no Brasil quanto em países-alvo.",
      features: [
        "Acompanhamento de novas legislações e normativas",
        "Alertas sobre mudanças regulatórias impactantes",
        "Análise de impacto regulatório personalizada",
        "Orientação para adaptação a novos cenários normativos",
        "Mapeamento de oportunidades em regimes especiais"
      ],
      cor: "bg-blue-600"
    },
    {
      id: "tributario",
      titulo: "Radar Tributário",
      descricao: "Vigilância sobre alterações tributárias, incentivos fiscais e regimes especiais que podem gerar economia ou aumentar custos em operações internacionais.",
      features: [
        "Monitoramento de alíquotas e tributos aduaneiros",
        "Identificação de oportunidades de economia fiscal",
        "Alertas sobre aumentos de carga tributária",
        "Análise comparativa de regimes tributários",
        "Orientação para planejamento tributário"
      ],
      cor: "bg-green-600"
    },
    {
      id: "mercado",
      titulo: "Radar de Mercado",
      descricao: "Acompanhamento de tendências, movimentos competitivos, variações de preços e demanda em mercados globais relevantes para seu negócio.",
      features: [
        "Análise de tendências e ciclos de mercado",
        "Monitoramento de preços e condições comerciais",
        "Identificação de novos players e movimentos competitivos",
        "Alertas sobre oportunidades de negócios",
        "Insights sobre comportamento de consumo global"
      ],
      cor: "bg-purple-600"
    },
    {
      id: "logistico",
      titulo: "Radar Logístico",
      descricao: "Monitoramento de rotas, custos de frete, tempo de trânsito, capacidade e disponibilidade em diferentes modais de transporte internacional.",
      features: [
        "Acompanhamento de condições de frete internacional",
        "Alertas sobre congestionamentos e gargalos logísticos",
        "Previsão de impactos em lead time e custos",
        "Identificação de rotas alternativas",
        "Monitoramento de capacidade e disponibilidade"
      ],
      cor: "bg-amber-600"
    },
    {
      id: "geopolitico",
      titulo: "Radar Geopolítico",
      descricao: "Análise de cenários políticos, conflitos, acordos comerciais e outros fatores geopolíticos que podem impactar operações internacionais.",
      features: [
        "Monitoramento de tensões e acordos internacionais",
        "Análise de impacto de eleições e mudanças políticas",
        "Alertas sobre sanções e restrições comerciais",
        "Avaliação de riscos geopolíticos por região",
        "Orientação para diversificação estratégica"
      ],
      cor: "bg-red-600"
    },
    {
      id: "cambial",
      titulo: "Radar Cambial",
      descricao: "Acompanhamento de tendências e movimentos cambiais, políticas monetárias e fatores que influenciam a valorização ou desvalorização de moedas.",
      features: [
        "Monitoramento de variações cambiais relevantes",
        "Alertas sobre movimentos significativos de mercado",
        "Análise de impacto cambial em operações",
        "Orientação para estratégias de proteção (hedge)",
        "Previsões baseadas em análise técnica e fundamentalista"
      ],
      cor: "bg-indigo-600"
    }
  ];

  return (
    <MainLayout locale={locale}>
      {/* Banner principal */}
      <section className="pt-8 pb-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-6 md:p-8 rounded-lg border border-[#2a3448] shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Radar 360° - Inteligência de Mercado Global
                </h1>
                <p className="text-gray-300 mb-4">
                  O Radar 360° é um sistema exclusivo de inteligência e monitoramento contínuo que permite a sua empresa acompanhar em tempo real todas as variáveis críticas que afetam suas operações internacionais.
                </p>
                <p className="text-gray-300 mb-6">
                  Regulatório, Tributário, Logístico, Cambial, Geopolítico, Mercadológico — monitoramos todos os ângulos para garantir que você tome decisões baseadas em informações precisas e atualizadas, antecipando-se a riscos e identificando oportunidades antes da concorrência.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link 
                    href="/contato?servico=radar360" 
                    className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Solicitar Demonstração
                  </Link>
                  <a 
                    href="#modulos" 
                    className="inline-block bg-transparent border border-[#d4af37] hover:bg-[#d4af37]/10 text-[#d4af37] font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Ver Módulos
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center rounded-full bg-[#0a0f1d] border border-[#2a3448] p-4">
                  <Image 
                    src="/icons/radar-icon.svg" 
                    alt="Radar 360°" 
                    width={120} 
                    height={120} 
                    className="object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que o Radar 360° */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Por Que Sua Empresa Precisa do Radar 360°
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index} 
                className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0a0f1d] border border-[#2a3448] p-2">
                    <Image 
                      src={beneficio.icon} 
                      alt={beneficio.titulo} 
                      width={24} 
                      height={24} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{beneficio.titulo}</h3>
                </div>
                <p className="text-gray-300">
                  {beneficio.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Como Funciona o Radar 360°
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center mb-4">
                  <span className="text-black text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Diagnóstico Personalizado</h3>
                <p className="text-gray-300">
                  Realizamos um diagnóstico completo das operações internacionais da sua empresa para identificar quais variáveis são críticas para seu negócio.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center mb-4">
                  <span className="text-black text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Configuração do Sistema</h3>
                <p className="text-gray-300">
                  Configuramos o Radar 360° de acordo com as necessidades específicas da sua operação, definindo parâmetros de monitoramento e alertas.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center mb-4">
                  <span className="text-black text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Monitoramento Contínuo</h3>
                <p className="text-gray-300">
                  Nossa equipe de especialistas monitora continuamente todas as variáveis relevantes, enviando alertas e análises personalizadas para sua equipe.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                O Radar 360° combina tecnologia avançada com expertise humana para garantir que sua empresa esteja sempre um passo à frente no complexo cenário do comércio internacional.
              </p>
              
              <Link 
                href="/contato?servico=radar360" 
                className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Quero Conhecer Melhor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos do Radar 360° */}
      <section id="modulos" className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Módulos do Radar 360°
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {modulos.map((modulo) => (
              <div 
                key={modulo.id} 
                className="bg-[#141c2f] rounded-lg border border-[#2a3448] shadow-lg overflow-hidden"
              >
                <div className={`p-4 ${modulo.cor}`}>
                  <h3 className="text-xl font-bold text-white">{modulo.titulo}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    {modulo.descricao}
                  </p>
                  
                  <h4 className="text-[#d4af37] font-semibold mb-3">Principais recursos:</h4>
                  <ul className="space-y-2 mb-4">
                    {modulo.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Image 
                          src="/icons/check.svg" 
                          alt="Checkmark" 
                          width={20} 
                          height={20} 
                          className="mr-2 mt-1 flex-shrink-0" 
                        />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Cada módulo pode ser contratado individualmente ou como parte do pacote completo Radar 360°. 
              Nossos consultores podem ajudar a identificar quais módulos são mais relevantes para o seu negócio.
            </p>
            
            <Link 
              href="/contato?servico=radar360" 
              className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Solicitar Proposta Personalizada
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            O Que Nossos Clientes Dizem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#0a0f1d] flex items-center justify-center">
                  <span className="text-[#d4af37] text-2xl font-bold">MC</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Marcos Costa</h3>
                  <p className="text-gray-400 text-sm">CEO, Importadora Global Tech</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "O Radar 360° transformou nossa operação internacional. Conseguimos antecipar mudanças regulatórias que teriam causado atrasos significativos em nossas importações. O retorno sobre o investimento foi imediato."
              </p>
            </div>
            
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#0a0f1d] flex items-center justify-center">
                  <span className="text-[#d4af37] text-2xl font-bold">AS</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Ana Silva</h3>
                  <p className="text-gray-400 text-sm">Diretora de Operações, Exportadora Brasileira</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Graças ao módulo de Radar Logístico, conseguimos identificar gargalos em rotas marítimas com antecedência e replanejar nossos embarques, evitando atrasos e multas contratuais. A consultoria especializada fez toda a diferença."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Pronto para Transformar sua Visibilidade Global?
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Solicite uma demonstração do Radar 360° e descubra como nossa solução pode ajudar sua empresa a navegar com mais segurança no complexo cenário do comércio internacional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato?servico=radar360" 
                className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Solicitar Demonstração
              </Link>
              
              <Link 
                href="/contato" 
                className="inline-block bg-transparent border border-[#d4af37] hover:bg-[#d4af37]/10 text-[#d4af37] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Falar com um Consultor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}