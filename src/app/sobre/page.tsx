import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getTranslation, Locale, i18n } from '@/i18n';

export const metadata = {
  title: 'Sobre a OLV Internacional | Especialistas em Comércio Exterior',
  description: 'Conheça a OLV Internacional: 35 anos de experiência transformando a maneira como PMEs acessam mercados globais com consultoria especializada e tecnologia avançada.',
  keywords: [
    'Especialistas em Comex',
    'Consultoria em Comércio Exterior',
    'Consultoria Customizada por Projeto',
    'Comex sem Mistérios',
    'Planeje sua Exportação',
    'Supply Chain Internacional',
    'Consultoria para PMEs',
    'Importação e Exportação Brasil',
    'Experiência em Comex',
    'Logística Internacional Consultoria'
  ],
  openGraph: {
    title: 'Sobre a OLV Internacional | Especialistas em Comércio Exterior',
    description: 'Conheça nossa história, missão e valores. 35 anos de experiência ajudando empresas brasileiras a conquistarem o mercado global.',
    url: 'https://olv-site.vercel.app/sobre',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre a OLV Internacional',
    description: 'Conheça nossa história, missão e valores. Consultoria especializada em comércio exterior para PMEs brasileiras.'
  }
};

interface PageProps {
  params: {
    locale?: string;
  };
}
export default function SobrePage({ params }: PageProps) {
  // Usar locale padrão pois esta página não está na rota dinâmica [locale]
  const locale = i18n.defaultLocale as Locale;
  
  // Lista de expertise OLV
  const expertiseList = [
    "Supply Chain",
    "Comércio Exterior",
    "Due Diligence e Compliance",
    "Planejamento Tributário e Operacional",
    "Gestão Financeira e Inteligência Empresarial",
    "Conexão com fornecedores globais",
    "Acesso a crédito e expansão internacional",
    "Automação, IA e Inovação tecnológica"
  ];

  // O que defendemos
  const valuesList = [
    {
      title: "Humanização dos negócios.",
      description: "A tecnologia e os dados são nossos aliados, mas nunca substituem o fator humano, a empatia e a escuta ativa."
    },
    {
      title: "Transparência absoluta.",
      description: "Nossos clientes sabem exatamente onde estão, para onde podem ir e quais riscos e oportunidades existem."
    },
    {
      title: "Simplicidade com sofisticação.",
      description: "Processos claros, objetivos e otimizados, com a profundidade e a robustez que grandes operações demandam."
    },
    {
      title: "Crescimento com responsabilidade.",
      description: "Pensar global, agir local. Expandir, sim — mas com ética, sustentabilidade e respeito aos mercados, às culturas e às pessoas."
    }
  ];

  // O que não aceitamos
  const rejectList = [
    "Complexidade desnecessária.",
    "Dependência de fornecedores ou intermediários que não agregam valor.",
    "Omissão de informações críticas.",
    "Barreiras que limitam o acesso das PMEs a mercados internacionais."
  ];

  // Nosso compromisso
  const commitmentList = [
    {
      title: "Acesso.",
      description: "Levar às PMEs ferramentas, informações e estratégias que antes só estavam disponíveis para grandes corporações."
    },
    {
      title: "Autonomia.",
      description: "Nossos clientes saem mais fortes, mais preparados e mais independentes."
    },
    {
      title: "Resultado real.",
      description: "O discurso não basta. Atuamos para gerar resultado tangível, econômico, estratégico e operacional."
    }
  ];

  // A OLV é
  const identityList = [
    "Uma ponte entre mercados",
    "Um orquestrador de cadeias globais",
    "Um intérprete das complexidades do comércio internacional",
    "E, acima de tudo, um parceiro leal e incansável das PMEs"
  ];

  // Expertise final
  const finalExpertiseList = [
    "Operação Legalizada",
    "Redução Tributária",
    "Planejamento Logístico",
    "Acompanhamento Total"
  ];

  return (
    <MainLayout locale={locale}>
      <div className="main-content">
        {/* SEÇÃO HERO */}
        <section className="section hero">
          <div className="container">
            <div className="section-heading">
              <h1 className="hero-title">Sobre a OLV Internacional</h1>
              <p className="hero-description text-center max-w-3xl mx-auto">
                Integramos Estratégia, Operação e Resultado para empresas que desejam expandir seus negócios globalmente.
              </p>
            </div>
          </div>
        </section>

        {/* HISTÓRIA DA EMPRESA */}
        <section className="section bg-gray-800">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Nossa Trajetória</h2>
                <p className="text-gray-300 mb-4">
                  A OLV Internacional iniciou sua trajetória como uma importadora e exportadora, operando diretamente em projetos estratégicos de comércio exterior. Com o passar dos anos, participou de importantes iniciativas em grandes corporações nacionais e multinacionais, acumulando um repertório prático incomparável em operações logísticas, tributárias e de gestão internacional.
                </p>
                <p className="text-gray-300 mb-4">
                  Ao longo dessa jornada, a OLV consolidou um valioso ecossistema de parceiros especializados — como transportadoras, agentes de carga (freight forwarders), despachantes aduaneiros, consultores independentes e prestadores de serviços de alto nível no setor de supply chain. Essa base de relacionamento, construída com confiança e entregas concretas, deu origem ao que hoje é o núcleo consultivo estratégico da empresa.
                </p>
                <p className="text-gray-300">
                  Foi justamente essa vivência, aliada à maturidade operacional conquistada ao longo de décadas, que levou a OLV Internacional a dar um passo ousado: voltar sua atuação ao fortalecimento das pequenas e médias empresas (PMEs), oferecendo a elas o que até então era acessível apenas a grandes players.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/olv-internacional-banner.webp" 
                    alt="História da OLV Internacional" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOVA SEÇÃO: MODELO DE ATUAÇÃO */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Nosso Modelo de Atuação</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <p className="mb-4">
                  A OLV passou a trabalhar com um modelo de consultoria por projeto, onde executivos experientes, especializados e independentes atuam diretamente nos desafios dos clientes — sem a necessidade de estruturas internas onerosas, vínculos empregatícios ou investimentos pesados em departamentos próprios.
                </p>
                <p className="font-semibold text-lg mb-4">
                  Ao invés de contratar pessoas, o cliente contrata resultados.
                </p>
                <p className="font-semibold text-lg">
                  Ao invés de montar estrutura, o cliente acessa inteligência, experiência e rede estratégica.
                </p>
              </div>
              <div className="card">
                <h3 className="card-title mb-4">Nossa Proposta Única</h3>
                <p className="mb-4">
                  É nesse novo momento que a OLV Internacional lança ao mercado uma proposta única: aliar conhecimento prático, vivência real e automação tecnológica por meio de um corpo consultivo de alto nível, sustentado por um arsenal de plataformas digitais:
                </p>
                <ul className="card-list">
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">STRATEVO</span> – Inteligência de mercado e dados públicos
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">EXCELTTA</span> – Simuladores de importação e viabilidade
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">OLV CONNECTA</span> – Conexão com fornecedores globais
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">OLV ENGAGE</span> – Qualificação automatizada de leads
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">OLV CORE</span> – Central de comando de todos os projetos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MISSÃO, VISÃO E VALORES */}
        <section className="section bg-gray-800">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Missão, Visão e Valores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-gray-700">
                <h3 className="card-title text-white">Missão</h3>
                <p className="text-gray-300">
                  Simplificar operações complexas, acelerar negócios e integrar estratégias com 
                  resultados no comércio exterior e logística internacional, permitindo que PMEs operem com a segurança, a inteligência e a força estratégica que antes só grandes empresas possuíam.
                </p>
              </div>
              <div className="card bg-gray-700">
                <h3 className="card-title text-white">Visão</h3>
                <p className="text-gray-300">
                  Ser reconhecida como a principal consultoria estratégica em comércio exterior 
                  do Brasil, transformando a maneira como as empresas acessam mercados globais através da integração de tecnologia, conhecimento prático e networking estratégico.
                </p>
              </div>
              <div className="card bg-gray-700">
                <h3 className="card-title text-white">Valores</h3>
                <ul className="card-list text-gray-300">
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Excelência operacional
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Integridade e transparência
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Inovação contínua
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Foco em resultados mensuráveis
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Responsabilidade social e ambiental
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE DEFENDEMOS */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">O Que Defendemos</h2>
              <p className="text-gray-500 text-center mb-10">Nossos princípios e valores fundamentais</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valuesList.map((value, index) => (
                <div key={index} className="card">
                  <h3 className="card-title">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE NÃO ACEITAMOS */}
        <section className="section bg-gray-800">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">O Que Não Aceitamos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rejectList.map((item, index) => (
                <div key={index} className="card bg-gray-700">
                  <p className="text-gray-300 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOSSO COMPROMISSO */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Nosso Compromisso</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {commitmentList.map((commitment, index) => (
                <div key={index} className="card">
                  <h3 className="card-title">{commitment.title}</h3>
                  <p>{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A OLV É... */}
        <section className="section bg-gray-800">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">A OLV Internacional é...</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {identityList.map((item, index) => (
                <div key={index} className="card bg-gray-700">
                  <p className="text-gray-300 font-semibold text-lg text-center">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOSSA EXPERTISE */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Nossa Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertiseList.map((expertise, index) => (
                <div key={index} className="card">
                  <p className="font-semibold text-center">{expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section bg-primary-900">
          <div className="container">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Pronto para Iniciar sua Jornada Internacional?</h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Comece com segurança, respaldo e toda a expertise que sua empresa precisa para operar no mercado global.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contato" className="btn btn-white">
                  Fale com um especialista
                </Link>
                <Link href="/radar360" className="btn btn-outline-white">
                  Conheça o Radar 360
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 