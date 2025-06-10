import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '../../components/layout/MainLayout';
import { getTranslation, Locale, i18n } from '@/i18n';

export const metadata = {
  title: 'Soluções Completas em Comércio Exterior | OLV Internacional',
  description: 'Consultoria especializada em importação, exportação, logística internacional e planejamento tributário. Transforme desafios em oportunidades no mercado global.',
  keywords: [
    'Soluções Completas em Comércio Exterior',
    'Consultoria para Radar SISCOMEX',
    'Reduza Erros com nossa Consultoria',
    'Importação Sem Burocracia',
    'Planejamento Tributário Comex',
    'Abra sua Importadora',
    'Importar com Redução Fiscal',
    'Exportar com Lucro Real',
    'Logística 3PL para Exportação',
    'Montamos sua Operação Comex',
    'Exportação Sem Erros'
  ],
  openGraph: {
    title: 'Soluções em Comércio Exterior para PMEs | OLV Internacional',
    description: 'Consultoria especializada em importação, exportação e logística internacional. Do planejamento à execução, simplificamos o comércio exterior para sua empresa.',
    url: 'https://olv-site.vercel.app/solucoes',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soluções em Comércio Exterior | OLV Internacional',
    description: 'Importação, exportação e logística internacional para PMEs brasileiras. Consultoria completa para seu negócio global.'
  }
};

interface PageProps {
  params: {
    locale?: string;
  };
}
export default function SolucoesPage({ params }: PageProps) {
  // Usar locale padrão pois esta página não está na rota dinâmica [locale]
  const locale = i18n.defaultLocale as Locale;
  
  // Dados das soluções
  const solucoes = [
    {
      id: "estrategia",
      icon: "/icons/estrat-icon.svg",
      title: "Estratégia e Planejamento",
      description: "Analisamos seu negócio, mercado, metas e desafios para criar um plano personalizado. Mapeamos riscos, oportunidades e definimos o caminho mais seguro e rentável para sua empresa.",
      items: [
        "Análise detalhada de mercado e competitividade",
        "Estudo de viabilidade de projetos internacionais",
        "Diagnóstico operacional e tributário",
        "Planejamento de expansão e acesso a novos mercados",
        "Identificação de oportunidades e riscos",
        "Definição de metas, KPIs e timelines"
      ]
    },
    {
      id: "importacao",
      icon: "/icons/import.svg",
      title: "Importação",
      description: "Simplificamos todo o processo de importação, desde a identificação de fornecedores até a entrega final. Reduzimos custos, eliminamos intermediários e garantimos compliance total.",
      items: [
        "Pesquisa e qualificação de fornecedores globais",
        "Análise de classificação fiscal (NCM)",
        "Estudo de tributos e regimes especiais",
        "Gestão de licenças e autorizações",
        "Acompanhamento de cargas e documentação",
        "Assessoria alfandegária e desembaraço"
      ]
    },
    {
      id: "exportacao",
      icon: "/icons/export.svg",
      title: "Exportação",
      description: "Transformamos sua empresa em um player global, abrindo mercados internacionais com estratégia, segurança e rentabilidade. Do planejamento ao pós-venda, cuidamos de tudo.",
      items: [
        "Identificação de mercados-alvo e oportunidades",
        "Adequação de produtos e certificações",
        "Planejamento logístico e operacional",
        "Estruturação de canais de distribuição",
        "Negociação internacional e contratos",
        "Operacionalização documental e aduaneira"
      ]
    },
    {
      id: "logistica",
      icon: "/icons/truck-gear.svg",
      title: "Logística Internacional",
      description: "Otimizamos sua cadeia logística global para garantir eficiência, rastreabilidade e redução de custos. Integramos sistemas, processos e parceiros para entregas perfeitas.",
      items: [
        "Desenho de rotas e modal ideal (aéreo, marítimo, rodoviário)",
        "Gestão de transportadores e agentes internacionais",
        "Consolidação de cargas e otimização de custos",
        "Monitoramento em tempo real de embarques",
        "Gestão de estoque internacional e centros de distribuição",
        "Planejamento de demanda e forecast logístico"
      ]
    },
    {
      id: "compliance",
      icon: "/icons/compliance.svg",
      title: "Due Diligence e Compliance",
      description: "Garantimos que suas operações internacionais estejam 100% em conformidade com leis e regulamentos. Identificamos riscos, criamos processos e protegemos seu negócio.",
      items: [
        "Avaliação de riscos regulatórios e legais",
        "Verificação de conformidade aduaneira e comercial",
        "Análise de parceiros e fornecedores internacionais",
        "Criação de manuais e processos de compliance",
        "Adequação a normas anticorrupção e AML",
        "Suporte em auditorias e fiscalizações"
      ]
    },
    {
      id: "capacitacao",
      icon: "/icons/training.svg",
      title: "Capacitação e Treinamento",
      description: "Transferimos conhecimento para sua equipe, capacitando-a para operar com excelência no mercado global. Workshops, treinamentos e mentoria contínua para autonomia.",
      items: [
        "Treinamentos personalizados em comércio exterior",
        "Workshops de negociação internacional",
        "Capacitação em documentação e sistemas",
        "Formação em logística e supply chain global",
        "Desenvolvimento de competências interculturais",
        "Mentoria para líderes de operações internacionais"
      ]
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
                  Soluções OLV Internacional
                </h1>
                <p className="text-gray-300 mb-4">
                  A OLV Internacional nasceu da expertise de mais de 35 anos de atuação em Supply Chain, Comércio Exterior, Internacionalização e Inteligência Empresarial. Nossa missão é simplificar operações complexas, acelerar negócios e integrar estratégias com resultados.
                </p>
                <p className="text-gray-300 mb-6">
                  Atuamos como uma extensão do seu negócio, sem ativos próprios, focando exclusivamente na entrega de valor. Nossa metodologia combina análise precisa, dados, inteligência artificial e experiência prática.
                </p>
                <p className="text-[#d4af37] text-lg font-medium italic mb-4">
                  Integramos Estratégia, Operação e Resultado.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link 
                    href="/contato" 
                    className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Fale com um Especialista
                  </Link>
                  <a 
                    href="#solucoes-lista" 
                    className="inline-block bg-transparent border border-[#d4af37] hover:bg-[#d4af37]/10 text-[#d4af37] font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Ver Soluções
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center rounded-full bg-[#0a0f1d] border border-[#2a3448] p-4">
                  <Image 
                    src="/icons/solutions-icon.svg" 
                    alt="Soluções OLV" 
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

      {/* Lista de soluções */}
      <section id="solucoes-lista" className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Nossas Soluções para Comércio Internacional
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solucoes.map((solucao) => (
              <div 
                key={solucao.id} 
                id={solucao.id} 
                className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0a0f1d] border border-[#2a3448] p-2">
                    <Image 
                      src={solucao.icon} 
                      alt={solucao.title} 
                      width={32} 
                      height={32} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{solucao.title}</h3>
                </div>

                <p className="text-gray-300 mb-4">
                  {solucao.description}
                </p>

                <h4 className="text-[#d4af37] font-semibold mb-3">Incluído neste serviço:</h4>
                <ul className="space-y-2">
                  {solucao.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Image 
                        src="/icons/check.svg" 
                        alt="Checkmark" 
                        width={20} 
                        height={20} 
                        className="mr-3 mt-1 flex-shrink-0" 
                      />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link 
                    href={`/contato?servico=${solucao.id}`} 
                    className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Solicitar este Serviço
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Serviço personalizado */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Precisa de uma solução personalizada?
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-6">
              Além das soluções listadas, desenvolvemos estratégias e serviços customizados para cada negócio. 
              Entre em contato para uma avaliação específica do seu caso.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contato" 
                className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
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