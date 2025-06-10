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
  title: 'EXCELTTA | Otimização de Processos para Importação e Exportação | OLV Internacional',
  description: 'Plataforma especializada em gestão e automação de processos para importadoras e exportadoras. Reduza custos, elimine ineficiências e aumente a produtividade em suas operações internacionais com a EXCELTTA.',
  keywords: [
    // Termos específicos da plataforma
    'EXCELTTA',
    'Gestão de Processos em Comex',
    'Otimização de Fluxos de Importação',
    'BPM para Comércio Exterior',
    'Automação de Processos de Exportação',
    'Eficiência Operacional em Comex',
    'Gestão Documental de Importação',
    'Monitoramento de KPIs em Comex',
    // Consultoria em Exportação
    'Como Exportar Legalmente?',
    'Exportação Legalizada e Fácil',
    'Exportar com Lucro Real',
    'Passo a Passo da Exportação',
    'Reduza Custos de Exportação',
    // Consultoria em Importação
    'Importação Sem Burocracia',
    'Suporte Total no Comex',
    'Importar com Segurança',
    'Importação para Revenda',
    'Desembaraço Aduaneiro Rápido',
    // Estratégia e Planejamento
    'Planejamento Tributário Comex',
    'Reduza Erros e Custos na Importação',
    // Logística Internacional
    'Logística 3PL para Exportação',
    'Montamos sua Operação Comex',
    'Operação integrada com inteligência logística'
  ],
  openGraph: {
    title: 'EXCELTTA | Otimização de Processos para Importação e Exportação',
    description: 'Plataforma especializada em gestão e automação de processos que otimiza fluxos de trabalho, reduz ineficiências e aumenta a produtividade em operações internacionais.',
    url: 'https://olvinternacional.com.br/exceltta',
    type: 'website',
    images: [
      {
        url: 'https://olvinternacional.com.br/images/exceltta.jpg',
        width: 1200,
        height: 630,
        alt: 'EXCELTTA - Otimização de Processos para Comércio Exterior'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EXCELTTA | Otimização de Processos para Importação e Exportação',
    description: 'Plataforma especializada em gestão e automação de processos para importadoras e exportadoras.',
    images: ['https://olvinternacional.com.br/images/exceltta.jpg']
  }
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
        {/* Seção Sobre */}
        <section className="mb-12">
          <h2 className="section-title">Sobre a EXCELTTA</h2>
          <p className="mb-4">
            A EXCELTTA é a plataforma de gestão de processos da OLV Internacional, projetada para otimizar fluxos de trabalho, reduzir ineficiências e aumentar a produtividade em operações internacionais.
          </p>
          <p className="mb-8">
            Nossa plataforma integra metodologias comprovadas de BPM (Business Process Management) com tecnologias avançadas para simplificar operações complexas e garantir consistência nos resultados.
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
              <p>Implementação de soluções tecnológicas para automatizar tarefas repetitivas e reduzir erros humanos.</p>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/chart.svg" alt="Monitoring Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-xl">Monitoramento Contínuo</h3>
              </div>
              <p>Acompanhamento em tempo real de KPIs para identificar gargalos e oportunidades de melhoria.</p>
            </div>
          </div>
        </section>
        
        {/* Serviços */}
        <section className="mb-12">
          <h2 className="section-title">Serviços EXCELTTA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/qualification.svg" alt="Consulting Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-xl">Consultoria em Processos</h3>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Diagnóstico de processos existentes</li>
                <li>Redesenho de fluxos de trabalho</li>
                <li>Implementação de metodologias ágeis</li>
                <li>Treinamento de equipes</li>
              </ul>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/tech-value.svg" alt="Document Management Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-xl">Gestão Documental</h3>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Digitalização de documentos</li>
                <li>Implementação de workflows digitais</li>
                <li>Controle de versões e aprovações</li>
                <li>Conformidade com regulamentações</li>
              </ul>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/analytics.svg" alt="Process Automation Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-xl">Automação de Processos</h3>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Identificação de oportunidades de automação</li>
                <li>Desenvolvimento de fluxos automatizados</li>
                <li>Integração com sistemas existentes</li>
                <li>Redução de intervenção manual</li>
              </ul>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/rocket.svg" alt="Performance Analysis Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-xl">Análise de Performance</h3>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Definição de KPIs relevantes</li>
                <li>Implementação de dashboards de controle</li>
                <li>Identificação de gargalos operacionais</li>
                <li>Recomendações baseadas em dados</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Benefícios */}
        <section className="mb-12">
          <h2 className="section-title">Benefícios EXCELTTA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/check.svg" alt="Efficiency Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-lg">Maior Eficiência Operacional</h3>
              </div>
              <p className="text-sm">Redução de tempo e recursos necessários para executar processos críticos do negócio.</p>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/check.svg" alt="Error Reduction Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-lg">Menor Taxa de Erros</h3>
              </div>
              <p className="text-sm">Padronização e automação que minimizam falhas humanas e garantem consistência nas operações.</p>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/chart-bar.svg" alt="Data Decision Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-lg">Tomada de Decisão Baseada em Dados</h3>
              </div>
              <p className="text-sm">Visibilidade completa do desempenho dos processos para decisões mais assertivas.</p>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/rocket.svg" alt="Scalability Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-lg">Escalabilidade</h3>
              </div>
              <p className="text-sm">Processos otimizados que permitem crescimento sem aumento proporcional de custos operacionais.</p>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/compliance.svg" alt="Compliance Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-lg">Conformidade Regulatória</h3>
              </div>
              <p className="text-sm">Garantia de que todos os processos estão alinhados com requisitos legais e regulatórios internacionais.</p>
            </div>
            <div className="platform-card">
              <div className="flex items-center mb-3">
                <img src="/icons/integration.svg" alt="Agility Icon" className="w-6 h-6 mr-2" />
                <h3 className="text-lg">Agilidade para Mudanças</h3>
              </div>
              <p className="text-sm">Flexibilidade para adaptar processos rapidamente em resposta a mudanças no mercado ou regulamentações.</p>
            </div>
          </div>
        </section>
        
        {/* Depoimentos */}
        <section className="mb-12">
          <h2 className="section-title">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="platform-card">
              <p className="text-sm italic mb-4">
                "A implementação da metodologia EXCELTTA transformou nossa operação logística internacional. Reduzimos o tempo de processamento de pedidos em 40% e praticamente eliminamos erros documentais."
              </p>
              <div className="flex items-center">
                <div className="ml-2">
                  <p className="font-semibold">Pedro Almeida</p>
                  <p className="text-xs">Diretor de Operações, LogisBrasil</p>
                </div>
              </div>
            </div>
            <div className="platform-card">
              <p className="text-sm italic mb-4">
                "A automação de processos desenvolvida pela equipe EXCELTTA nos permitiu escalar nossas operações sem precisar aumentar proporcionalmente nossa equipe. Resultado: crescimento de 60% em receita com apenas 15% de aumento em custos operacionais."
              </p>
              <div className="flex items-center">
                <div className="ml-2">
                  <p className="font-semibold">Luciana Campos</p>
                  <p className="text-xs">COO, TradeTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="mb-12">
          <h2 className="section-title">FAQ - Perguntas Frequentes</h2>
          <div className="space-y-6 mt-8">
            <div className="platform-card">
              <div className="flex items-start">
                <img src="/icons/faq.svg" alt="FAQ Icon" className="w-6 h-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Como a EXCELTTA pode identificar ineficiências nos processos da minha empresa?</h3>
                  <p className="text-sm">
                    A EXCELTTA utiliza uma metodologia proprietária de diagnóstico que combina mapeamento detalhado de processos, análise de dados operacionais e benchmarking com melhores práticas do setor. Nossos especialistas realizam entrevistas com stakeholders, observam operações e analisam documentação existente para identificar gargalos, redundâncias e oportunidades de melhoria nos fluxos de trabalho.
                  </p>
                </div>
              </div>
            </div>
            <div className="platform-card">
              <div className="flex items-start">
                <img src="/icons/faq.svg" alt="FAQ Icon" className="w-6 h-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Quais tipos de processos podem ser otimizados com a EXCELTTA?</h3>
                  <p className="text-sm">
                    A EXCELTTA é versátil e pode otimizar diversos tipos de processos, incluindo operações logísticas internacionais, gestão de documentação aduaneira, processos de compliance, fluxos de aprovação, controle de qualidade, gestão de fornecedores, processos financeiros relacionados ao comércio exterior, e muito mais. Nossa plataforma é adaptável a qualquer processo estruturado que possua etapas bem definidas.
                  </p>
                </div>
              </div>
            </div>
            <div className="platform-card">
              <div className="flex items-start">
                <img src="/icons/faq.svg" alt="FAQ Icon" className="w-6 h-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Quanto tempo leva para implementar as soluções EXCELTTA?</h3>
                  <p className="text-sm">
                    O tempo de implementação varia de acordo com a complexidade dos processos e o escopo do projeto. Projetos menores focados em um único processo podem ser implementados em 4-6 semanas, enquanto transformações mais amplas podem levar de 3 a 6 meses. Trabalhamos com uma abordagem ágil, entregando resultados incrementais para que sua empresa comece a colher benefícios mais rapidamente.
                  </p>
                </div>
              </div>
            </div>
            <div className="platform-card">
              <div className="flex items-start">
                <img src="/icons/faq.svg" alt="FAQ Icon" className="w-6 h-6 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">As soluções EXCELTTA se integram com sistemas existentes?</h3>
                  <p className="text-sm">
                    Sim, desenvolvemos nossas soluções com foco na integração. A EXCELTTA pode se conectar com ERPs, CRMs, sistemas de gestão de documentos, plataformas de comércio exterior e praticamente qualquer sistema que possua APIs ou outras interfaces de integração. Isso permite que os dados fluam sem retrabalho e que os processos sejam verdadeiramente end-to-end, eliminando ilhas de automação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section>
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Pronto para transformar seus processos?</h2>
            <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas para saber como a EXCELTTA pode otimizar as operações da sua empresa.</p>
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