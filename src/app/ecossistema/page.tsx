import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getTranslation, Locale, i18n } from '@/i18n';

export const metadata = {
  title: 'Ecossistema OLV | Soluções Integradas para Comércio Global',
  description: 'O Ecossistema OLV integra 11 empresas especializadas em comércio exterior, supply chain, inovação e desenvolvimento de negócios internacionais para PMEs brasileiras.',
  keywords: [
    'Ecossistema de Negócios Internacionais',
    'Soluções Integradas em Comércio Exterior',
    'Consultoria Especializada em Exportação',
    'Supply Chain Internacional',
    'Desenvolvimento de Negócios Globais',
    'Tecnologia para Comércio Exterior',
    'Planejamento Estratégico Internacional',
    'Gestão de Operações Globais',
    'Empresas de Logística Internacional',
    'Inovação em Comércio Exterior'
  ],
  openGraph: {
    title: 'Ecossistema OLV | Soluções Integradas para Comércio Global',
    description: 'Conheça as empresas do Ecossistema OLV que trabalham de forma integrada para oferecer soluções completas em comércio exterior e negócios internacionais.',
    url: 'https://olv-site.vercel.app/ecossistema',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecossistema OLV Internacional',
    description: 'Empresas especializadas em comércio exterior, supply chain e desenvolvimento de negócios internacionais para PMEs brasileiras.'
  }
};

interface PageProps {
  params: { locale: string };
}

export default function EcossistemaPage({ params }: PageProps) {
  // Usar locale padrão pois esta página não está na rota dinâmica [locale]
  const locale = i18n.defaultLocale as Locale;
  
  // Dados das empresas do ecossistema
  const empresas = [
    {
      id: "olv-internacional",
      logo: "/images/olv-internacional-logo.jpeg",
      titulo: "OLV Internacional",
      descricao: "Consultoria especializada em comércio exterior, supply chain e internacionalização, oferecendo soluções completas para empresas que desejam expandir seus negócios globalmente.",
      servicos: [
        "Consultoria estratégica em comércio internacional",
        "Planejamento e operação de importação e exportação",
        "Supply chain global e logística internacional",
        "Compliance, due diligence e redução tributária",
        "Habilitação e gestão de Radar SISCOMEX"
      ],
      linkSite: "https://olvinternacional.com.br"
    },
    {
      id: "stratevo",
      logo: "/images/stratevo-logo.jpeg",
      titulo: "STRATEVO",
      descricao: "Consultoria estratégica especializada em evolução organizacional, transformação de negócios e planejamento de crescimento sustentável para empresas de todos os portes.",
      servicos: [
        "Planejamento estratégico e direcionamento executivo",
        "Gestão de mudança organizacional",
        "Transformação digital e inovação empresarial",
        "KPIs estratégicos e monitoramento de performance",
        "Mentoria executiva e desenvolvimento de lideranças"
      ],
      linkSite: "https://stratevo.com.br"
    },
    {
      id: "exceltta",
      logo: "/images/exceltta-logo.jpeg",
      titulo: "EXCELTTA",
      descricao: "Consultoria especializada em excelência operacional, otimização de processos e implementação de metodologias ágeis, Lean Six Sigma e gestão de projetos complexos.",
      servicos: [
        "Diagnóstico e redesenho de processos",
        "Implementação de modelos Lean Six Sigma",
        "Automatização e otimização operacional",
        "Redução de custos e eliminação de desperdícios",
        "Gestão de projetos e programas transformacionais"
      ],
      linkSite: "https://exceltta.com.br"
    },
    {
      id: "connecta",
      logo: "/images/connecta-logo.jpeg",
      titulo: "OLV CONNECTA",
      descricao: "Plataforma de conexões estratégicas que aproxima empresas de parceiros comerciais, fornecedores globais, compradores internacionais e distribuidores em diversos mercados.",
      servicos: [
        "Acesso a rede global de fornecedores qualificados",
        "Conexão com compradores internacionais",
        "Desenvolvimento de canais de distribuição",
        "Parcerias estratégicas e joint ventures",
        "Rodadas de negócios e matchmaking empresarial"
      ],
      linkSite: "https://olv-connecta.com"
    },
    {
      id: "engage",
      logo: "/images/engage-logo.jpeg",
      titulo: "OLV ENGAGE",
      descricao: "Consultoria focada em engajamento, desenvolvimento humano e alta performance de equipes, utilizando metodologias inovadoras para transformar talentos em resultados.",
      servicos: [
        "Desenvolvimento de equipes de alta performance",
        "Programas de formação de líderes",
        "Cultura organizacional e engajamento",
        "Atração e retenção de talentos",
        "Gestão de mudanças e transformação cultural"
      ],
      linkSite: "https://olv-engage.com"
    },
    {
      id: "core",
      logo: "/images/core-logo.jpeg",
      titulo: "OLV CORE",
      descricao: "Centro estratégico que integra e potencializa todas as empresas do ecossistema OLV, oferecendo recursos compartilhados, infraestrutura e suporte para maximizar o valor entregue aos clientes.",
      servicos: [
        "Hub central de inteligência e recursos",
        "Integração de soluções multidisciplinares",
        "Governança e compliance corporativo",
        "Desenvolvimento de novos negócios",
        "Gestão de recursos compartilhados"
      ],
      linkSite: "https://olv-core.com"
    },
    {
      id: "finx",
      logo: "/images/finx-logo.jpeg",
      titulo: "OLV FINX",
      descricao: "Soluções financeiras e acesso a capital para operações internacionais, investimentos e expansão de negócios, com abordagem customizada para cada perfil empresarial.",
      servicos: [
        "Estruturação financeira para comércio exterior",
        "Acesso a crédito e capital para operações globais",
        "Planejamento financeiro para expansão internacional",
        "Gestão de riscos cambiais e operacionais",
        "Soluções de financiamento para importação e exportação"
      ],
      linkSite: "https://olv-finx.com"
    },
    {
      id: "academy",
      logo: "/images/academy-logo.jpeg",
      titulo: "OLV ACADEMY",
      descricao: "Centro de conhecimento e desenvolvimento profissional em negócios internacionais, supply chain e gestão empresarial, oferecendo formação prática e aplicada.",
      servicos: [
        "Cursos e workshops em comércio exterior",
        "Formação executiva em gestão internacional",
        "Programas de certificação profissional",
        "Treinamentos customizados in-company",
        "Materiais educativos e recursos de aprendizagem"
      ],
      linkSite: "https://olv-academy.com"
    },
    {
      id: "veritus",
      logo: "/images/veritus-logo.jpeg",
      titulo: "OLV VERITUS",
      descricao: "Consultoria especializada em compliance, governança corporativa e gestão de riscos para operações internacionais, garantindo segurança jurídica e conformidade normativa.",
      servicos: [
        "Due diligence e análise de riscos operacionais",
        "Implementação de programas de compliance",
        "Governança corporativa e ética empresarial",
        "Auditoria de processos e conformidade",
        "Gestão de crise e planos de contingência"
      ],
      linkSite: "https://olv-veritus.com"
    },
    {
      id: "labs",
      logo: "/images/labs-logo.jpeg",
      titulo: "OLV LABS",
      descricao: "Centro de inovação e desenvolvimento de soluções tecnológicas para comércio exterior, logística internacional e gestão empresarial, combinando tecnologia e conhecimento prático.",
      servicos: [
        "Desenvolvimento de soluções tecnológicas customizadas",
        "Automação de processos de comércio exterior",
        "Inteligência artificial aplicada à supply chain",
        "Plataformas digitais para gestão internacional",
        "Análise de dados e business intelligence"
      ],
      linkSite: "https://olv-labs.com"
    },
    {
      id: "ventures",
      logo: "/images/ventures-logo.jpeg",
      titulo: "OLV VENTURES",
      descricao: "Braço de investimentos do ecossistema OLV, focado em startups e empresas inovadoras nas áreas de comércio internacional, logística, supply chain e tecnologias aplicadas.",
      servicos: [
        "Investimento em startups e scale-ups",
        "Aceleração de negócios inovadores",
        "Participação estratégica em empresas",
        "Desenvolvimento de novos empreendimentos",
        "Mentoria para startups em internacionalização"
      ],
      linkSite: "https://olv-ventures.com"
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
                  Ecossistema OLV
                </h1>
                <p className="text-gray-300 mb-4">
                  O Ecossistema OLV é um conjunto integrado de empresas especializadas que trabalham de forma sinérgica para oferecer soluções completas em negócios internacionais, inovação e estratégia empresarial.
                </p>
                <p className="text-gray-300 mb-6">
                  Cada empresa do ecossistema possui sua própria especialidade, mas todas compartilham os mesmos valores e compromisso com a excelência, entregando um conjunto de soluções coordenadas que maximizam resultados para nossos clientes.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link 
                    href="/contato" 
                    className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Fale com um Especialista
                  </Link>
                  <a 
                    href="#empresas-lista" 
                    className="inline-block bg-transparent border border-[#d4af37] hover:bg-[#d4af37]/10 text-[#d4af37] font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Conhecer Empresas
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center rounded-full bg-[#0a0f1d] border border-[#2a3448] p-4">
                  <Image 
                    src="/icons/ecosystem-icon.svg" 
                    alt="Ecossistema OLV" 
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

      {/* Como funciona o ecossistema */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Como Funciona o Ecossistema OLV
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Especialidades Integradas</h3>
              <p className="text-gray-300">
                Cada empresa do ecossistema é especializada em uma área específica, mas todas trabalham de forma integrada, compartilhando conhecimento, recursos e tecnologia para entregar soluções completas.
              </p>
            </div>
            
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Colaboração Sinérgica</h3>
              <p className="text-gray-300">
                As empresas do ecossistema colaboram de forma sinérgica, permitindo que os clientes tenham acesso a todas as competências necessárias para resolver desafios complexos de forma coordenada e eficiente.
              </p>
            </div>
            
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Valor Exponencial</h3>
              <p className="text-gray-300">
                O ecossistema multiplica o valor entregue ao cliente, pois a combinação de especialidades gera resultados superiores aos que seriam obtidos com empresas isoladas, criando soluções verdadeiramente transformadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de empresas */}
      <section id="empresas-lista" className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Empresas do Ecossistema
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {empresas.map((empresa) => (
              <div 
                key={empresa.id} 
                id={empresa.id} 
                className="bg-[#141c2f] rounded-lg border border-[#2a3448] shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-44 bg-white p-4 flex items-center justify-center">
                  <Image 
                    src={empresa.logo} 
                    alt={`${empresa.titulo} Logo`} 
                    width={180} 
                    height={180} 
                    className="object-contain max-h-36" 
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{empresa.titulo}</h3>
                  <p className="text-gray-300 mb-4">
                    {empresa.descricao}
                  </p>
                  
                  <h4 className="text-[#d4af37] font-semibold mb-3">Principais serviços:</h4>
                  <ul className="space-y-2 mb-5">
                    {empresa.servicos.map((servico, index) => (
                      <li key={index} className="flex items-start">
                        <Image 
                          src="/icons/check.svg" 
                          alt="Checkmark" 
                          width={20} 
                          height={20} 
                          className="mr-2 mt-1 flex-shrink-0" 
                        />
                        <span className="text-gray-300 text-sm">{servico}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={empresa.linkSite} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#d4af37] hover:underline font-medium flex items-center"
                    >
                      Visitar site
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    
                    <Link
                      href={`/contato?empresa=${empresa.id}`}
                      className="bg-[#0a0f1d] text-white hover:bg-[#d4af37] hover:text-black py-1.5 px-4 rounded transition-colors duration-300 text-sm font-medium"
                    >
                      Saber mais
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios do ecossistema */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Benefícios de trabalhar com o Ecossistema OLV
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-black font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Soluções Integradas</h3>
                  <p className="text-gray-300">
                    Acesso a um conjunto completo de soluções que se integram perfeitamente, evitando a fragmentação que ocorre ao trabalhar com múltiplos fornecedores desconectados.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-black font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expertise Multidisciplinar</h3>
                  <p className="text-gray-300">
                    Beneficie-se de conhecimentos especializados em diversas áreas, desde estratégia até operação, tecnologia e finanças, todos alinhados em torno dos seus objetivos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-black font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Eficiência Operacional</h3>
                  <p className="text-gray-300">
                    Processos otimizados e comunicação fluida entre as empresas do ecossistema resultam em maior agilidade e menor tempo de resposta para suas necessidades.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-black font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Inovação Constante</h3>
                  <p className="text-gray-300">
                    Acesso às mais recentes inovações em negócios internacionais, logística e gestão empresarial, desenvolvidas e testadas dentro do próprio ecossistema.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/contato" 
                className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Conheça Nossas Soluções Integradas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 