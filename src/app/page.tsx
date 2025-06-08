import MainLayout from '../components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  // Os pilares de atuação da OLV Internacional
  const keyPoints = [
    { title: "Operação Legalizada", icon: "/icons/check.svg", 
      description: "Condução de processos de importação e exportação dentro das normativas brasileiras e internacionais." },
    { title: "Redução Tributária Estruturada", icon: "/icons/check.svg", 
      description: "Planejamento fiscal estratégico para redução de carga tributária em operações de comércio exterior." },
    { title: "Planejamento Logístico Integrado", icon: "/icons/check.svg", 
      description: "Organização completa do fluxo logístico internacional, da origem ao destino." },
    { title: "Planejamento Estratégico", icon: "/icons/check.svg", 
      description: "Estruturação de operações internacionais para empresas brasileiras." },
    { title: "Acompanhamento Total", icon: "/icons/check.svg", 
      description: "Gestão de ponta a ponta das etapas operacionais, desde a negociação até a entrega final." },
    { title: "Gestão de Riscos", icon: "/icons/check.svg", 
      description: "Identificação, prevenção e mitigação de riscos aduaneiros, cambiais, logísticos e contratuais." },
    { title: "Desenvolvimento de Negócios", icon: "/icons/check.svg", 
      description: "Estruturação de ofertas, definição de canais e abertura de novos mercados no exterior." },
    { title: "Compliance e Governança", icon: "/icons/check.svg", 
      description: "Estruturação de modelos de compliance e governança para o mercado Nacional e Internacional." },
    { title: "Automação e Tecnologia Aplicada", icon: "/icons/check.svg", 
      description: "Uso de plataformas digitais inteligentes para simular, integrar e otimizar operações internacionais com inteligência artificial e dados públicos." },
    { title: "Consultoria Customizada por Projeto", icon: "/icons/check.svg", 
      description: "Diagnóstico sob medida com soluções práticas e direcionadas à realidade de cada cliente, sem estruturas fixas ou pacotes engessados." },
    { title: "Inteligência de Mercado e Análise de Dados", icon: "/icons/check.svg", 
      description: "Utilização de dados privados e governamentais (Comex Stat, Receita Federal, SIASG, etc.) para tomada de decisão estratégica." },
    { title: "Capacitação e Formação Técnica para PMEs", icon: "/icons/check.svg", 
      description: "Treinamentos, mentorias e suporte técnico para equipes internas de empresas que desejam internalizar competências de Comex e Supply Chain." }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="section hero pt-8 pb-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Integramos Estratégia, Operação e Resultado</h1>
              <div className="flex items-center mb-6">
                <Image 
                  src="/images/olv-internacional-logo.jpeg" 
                  alt="OLV Internacional Logo" 
                  width={160} 
                  height={80} 
                  className="mr-4" 
                  priority
                />
                <p className="text-lg text-[#d4af37] font-medium">
                  35 anos de experiência em soluções estratégicas
                </p>
              </div>
              <p className="mb-4 text-gray-300 text-base">
                Somos especialistas em Supply Chain, Comércio Exterior, Logística Internacional e Desenvolvimento de Negócios.
              </p>
              <p className="mb-4 text-gray-300 text-base">
                Atuamos como o braço consultivo do Ecossistema OLV, oferecendo suporte completo para
                empresas que querem importar, exportar, expandir seus negócios, operar com segurança e alta performance no
                mercado global.
              </p>
              <p className="text-[#d4af37] font-medium italic mb-4">
                Do Radar SISCOMEX ao Embarque. Da Estratégia à Execução. Da Burocracia ao Resultado.
              </p>
            </div>
            <div className="flex-shrink-0 md:w-1/3">
              <div className="bg-[#0a0f1d] p-4 rounded-lg border border-[#2a3448] shadow-md">
                <Image 
                  src="/images/olv-internacional-banner.webp" 
                  alt="OLV Internacional – Banner Hero" 
                  width={400} 
                  height={400} 
                  className="rounded-lg" 
                  priority
                />
              </div>
            </div>
          </div>

          {/* Blocos explicativos - O Fator Humano */}
          <div className="mb-16">
            <div className="bg-[#141c2f] rounded-lg border border-[#2a3448] overflow-hidden shadow-xl p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">O Fator Humano</h2>
              <p className="text-gray-300 text-center max-w-3xl mx-auto text-base mb-10">
                Nossa abordagem é fundamentada na combinação de expertise técnica com inteligência emocional. 
                Acreditamos que por trás de cada operação há pessoas, e compreender suas necessidades 
                é essencial para entregar resultados excepcionais.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-[#0a0f1d] p-5 rounded-lg border border-[#2a3448] hover:border-[#d4af37] transition-colors duration-300 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#141c2f] border border-[#d4af37] flex items-center justify-center mr-4">
                      <Image src="/icons/team.svg" alt="Ícone de Equipe" width={24} height={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Expertise Humana</h3>
                  </div>
                  <p className="text-gray-300 text-base">
                    Nossa equipe multidisciplinar combina conhecimento técnico com habilidades interpessoais 
                    para construir relacionamentos de confiança e entregar soluções personalizadas.
                  </p>
                </div>
                
                <div className="bg-[#0a0f1d] p-5 rounded-lg border border-[#2a3448] hover:border-[#d4af37] transition-colors duration-300 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#141c2f] border border-[#d4af37] flex items-center justify-center mr-4">
                      <Image src="/icons/handshake.svg" alt="Ícone de Parceria" width={24} height={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Parceria de Longo Prazo</h3>
                  </div>
                  <p className="text-gray-300 text-base">
                    Não somos apenas prestadores de serviço, mas parceiros estratégicos comprometidos 
                    com o crescimento sustentável e o sucesso contínuo dos nossos clientes.
                  </p>
                </div>
                
                <div className="bg-[#0a0f1d] p-5 rounded-lg border border-[#2a3448] hover:border-[#d4af37] transition-colors duration-300 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#141c2f] border border-[#d4af37] flex items-center justify-center mr-4">
                      <Image src="/icons/culture.svg" alt="Ícone de Cultura" width={24} height={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Sensibilidade Cultural</h3>
                  </div>
                  <p className="text-gray-300 text-base">
                    Entendemos as nuances culturais dos diferentes mercados e facilitamos a 
                    comunicação e negociação em ambientes internacionais diversos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pilares de Atuação em mini-cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-[#d4af37]">Pilares da Nossa Atuação</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {keyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-[#141c2f] p-4 rounded-lg border border-[#2a3448] shadow-md hover:border-[#d4af37] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start mb-2">
                    <Image src={point.icon} alt={point.title} width={20} height={20} className="mt-1 mr-2 flex-shrink-0" />
                    <h4 className="text-gray-200 font-semibold">{point.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm pl-7">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Botão para Ecossistema */}
          <div className="text-center mb-16">
            <Link 
              href="/ecossistema" 
              className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Conheça Nosso Ecossistema Completo
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}