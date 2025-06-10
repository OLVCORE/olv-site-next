// Portuguese page version
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { Locale, i18n } from '@/i18n';

export default function HomePage() {
  const locale = 'pt-BR' as Locale;
  
  return (
    <MainLayout locale={locale}>
      <div className="container mx-auto py-12">
        <section className="hero-section mb-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Integramos Estratégia, Operação e Resultado
              </h1>
              <p className="text-xl mb-6">
                35 anos integrando estratégia, operações e resultados. Somos especialistas em Supply Chain, Comércio Exterior, Logística Internacional e Desenvolvimento de Negócios.
              </p>
              <p className="text-lg mb-6">
                Atuamos como o braço consultivo do Ecossistema OLV, oferecendo suporte completo para empresas que querem importar, exportar, expandir seus negócios, operar com segurança e alta performance no mercado global.
              </p>
              <p className="text-lg mb-8">
                Nossa missão é simplificar operações complexas, acelerar negócios e integrar estratégias com resultados. Atuamos como uma extensão do seu negócio, sem ativos próprios, focando exclusivamente na entrega de valor.
              </p>
              <p className="text-lg font-semibold">
                Do Radar SISCOMEX ao Embarque. Da Estratégia à Execução. Da Burocracia ao Resultado.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/images/hero-banner.jpg" 
                  alt="OLV Internacional – Banner Hero"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pillars-section mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Pilares da Nossa Atuação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Operação Legalizada",
                description: "Condução de processos de importação e exportação dentro das normativas brasileiras e internacionais."
              },
              {
                title: "Redução Tributária Estruturada",
                description: "Planejamento fiscal estratégico para redução de carga tributária em operações de comércio exterior."
              },
              {
                title: "Planejamento Logístico Integrado",
                description: "Organização completa do fluxo logístico internacional, da origem ao destino."
              },
              {
                title: "Planejamento Estratégico",
                description: "Estruturação de operações internacionais para empresas brasileiras."
              },
              {
                title: "Acompanhamento Total",
                description: "Gestão de ponta a ponta das etapas operacionais, desde a negociação até a entrega final."
              },
              {
                title: "Gestão de Riscos",
                description: "Identificação, prevenção e mitigação de riscos aduaneiros, cambiais, logísticos e contratuais."
              },
              {
                title: "Desenvolvimento de Negócios",
                description: "Estruturação de ofertas, definição de canais e abertura de novos mercados no exterior."
              },
              {
                title: "Compliance e Governança",
                description: "Estruturação de modelos de compliance e governança para o mercado Nacional e Internacional."
              },
              {
                title: "Automação e Tecnologia Aplicada",
                description: "Uso de plataformas digitais inteligentes para simular, integrar e otimizar operações internacionais com inteligência artificial e dados públicos."
              },
              {
                title: "Consultoria Customizada por Projeto",
                description: "Diagnóstico sob medida com soluções práticas e direcionadas à realidade de cada cliente, sem estruturas fixas ou pacotes engessados."
              },
              {
                title: "Inteligência de Mercado e Análise de Dados",
                description: "Utilização de dados privados e governamentais (Comex Stat, Receita Federal, SIASG, etc.) para tomada de decisão estratégica."
              },
              {
                title: "Capacitação e Formação Técnica para PMEs",
                description: "Treinamentos, mentorias e suporte técnico para equipes internas de empresas que desejam internalizar competências de Comex e Supply Chain."
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="solutions-section mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossas Soluções Estratégicas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Consultoria Estratégica em Comex</h3>
              <p className="mb-4">
                Análise profunda de cenários, estruturação de operações internacionais e desenho de estratégias personalizadas para cada perfil de empresa. Desenvolvemos roadmaps completos para internacionalização segura, eficiente e escalável.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Análise de viabilidade para mercados-alvo
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Estruturação de modelos de negócio global
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Planejamento estratégico internacional
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                Ver mais soluções →
              </Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Soluções Operacionais para Exportação e Importação</h3>
              <p className="mb-4">
                Condução completa de todos os processos operacionais de comércio exterior, desde habilitações e registros até o fechamento de câmbio, documentação e desembaraço aduaneiro, com foco em conformidade e eficiência.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Habilitação e manutenção de Radar SISCOMEX
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Operações completas de importação e exportação
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Gestão documental e análise de parametrização
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                Ver mais soluções →
              </Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Gestão de Supply Chain Integrado</h3>
              <p className="mb-4">
                Planejamento e otimização de toda a cadeia de suprimentos internacional, desde a identificação de fornecedores até a entrega ao cliente final, com foco em redução de custos, minimização de riscos e aumento de eficiência.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Gestão integrada de fornecedores globais
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Otimização de fluxos logísticos internacionais
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Controle de inventário e planejamento de demanda
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                Ver mais soluções →
              </Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Tecnologia Aplicada à Competitividade</h3>
              <p className="mb-4">
                Implementação de soluções tecnológicas que automatizam processos e geram insights estratégicos para tomada de decisão baseada em dados. Nossa abordagem combina ferramentas tecnológicas com expertise humana.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Automação de processos em comércio exterior
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Integração de sistemas e plataformas globais
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Análise de dados e inteligência de mercado
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                Ver mais soluções →
              </Link>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Compliance e Governança</h3>
              <p className="mb-4">
                Implementação de estruturas de compliance e governança corporativa adaptadas a operações internacionais, garantindo conformidade com legislações locais e internacionais, reduzindo riscos regulatórios e reputacionais.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Estruturação de programas de compliance internacional
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Adequação a normas FCPA, UK Bribery Act e legislações locais
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  Gestão de riscos em operações multinacionais
                </li>
              </ul>
              <Link href="/solucoes" className="text-blue-400 hover:text-blue-300">
                Ver mais soluções →
              </Link>
            </div>
          </div>
        </section>

        <section className="human-factor-section mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">O Fator Humano</h2>
          <p className="text-lg text-center mb-8">
            Nossa abordagem é fundamentada na combinação de expertise técnica com inteligência emocional. Acreditamos que por trás de cada operação há pessoas, e compreender suas necessidades é essencial para entregar resultados excepcionais.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Expertise Humana</h3>
              <p>Nossa equipe multidisciplinar combina conhecimento técnico com habilidades interpessoais para construir relacionamentos de confiança e entregar soluções personalizadas.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Parceria de Longo Prazo</h3>
              <p>Não somos apenas prestadores de serviço, mas parceiros estratégicos comprometidos com o crescimento sustentável e o sucesso contínuo dos nossos clientes.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-xl font-bold mb-3">Sensibilidade Cultural</h3>
              <p>Entendemos as nuances culturais dos diferentes mercados e facilitamos a comunicação e negociação em ambientes internacionais diversos.</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}