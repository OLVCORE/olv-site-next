import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';

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

export default function Sobre() {
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
    <MainLayout>
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
                    Parceria estratégica
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Nosso Diferencial</h2>
              <p className="text-center max-w-3xl mx-auto mb-8">
                Com nosso portfólio integrado, a OLV Internacional transforma tecnologia em ponte, consultoria em solução e networking em resultado mensurável.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="card-title">Experiência Prática</h3>
                <p>
                  Nossa origem sólida como importadora/exportadora garante conhecimento real sobre os desafios e oportunidades do comércio internacional.
                </p>
              </div>
              <div className="card">
                <h3 className="card-title">Rede Estratégica</h3>
                <p>
                  Um ecossistema de especialistas e parceiros globais como diferencial competitivo para resolver problemas complexos.
                </p>
              </div>
              <div className="card">
                <h3 className="card-title">Modelo Flexível</h3>
                <p>
                  Atuamos como um braço externo da sua empresa, sem passivos trabalhistas, com estrutura enxuta e impacto elevado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO RÁPIDO */}
        <section className="section contato">
          <div className="container contato-container">
            <div className="contato-card">
              <p className="contact-paragraph">
                Quer saber mais sobre como podemos ajudar sua empresa a expandir globalmente? Entre em contato conosco.
              </p>
              <Link href="/contato" className="cta-button-alt">Fale Com um Especialista Agora</Link>
            </div>
          </div>
        </section>

        {/* Seção Sobre a OLV Internacional */}
        <section className="section pt-8 pb-8" id="sobre-olv">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-6 text-white">Sobre a OLV Internacional</h2>
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8">
              <p className="mb-4 text-gray-300">
                <strong className="text-white">OLV INTERNACIONAL – O Braço Consultivo do Ecossistema OLV CORE</strong>
              </p>
              <p className="mb-4 text-gray-300">
                A OLV Internacional nasceu da expertise de mais de 35 anos de atuação em Supply Chain, Comércio Exterior, Internacionalização e Inteligência Empresarial. Nossa missão é simplificar operações complexas, acelerar negócios e integrar estratégias com resultados.
              </p>
              <p className="mb-4 text-gray-300">
                Atuamos como uma extensão do seu negócio, sem ativos próprios, focando exclusivamente na entrega de valor. Nossa metodologia combina análise precisa, dados, inteligência artificial e experiência prática. Estamos preparados para atender empresas que nunca internacionalizaram até aquelas que já operam globalmente, mas precisam de um salto de performance.
              </p>
              <p className="mb-6 text-[#d4af37] font-medium italic">
                Integramos Estratégia, Operação e Resultado.
              </p>
              <ul className="space-y-2 mb-4">
                {expertiseList.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Image 
                      src="/icons/check.svg" 
                      alt="Checkmark" 
                      width={20} 
                      height={20} 
                      className="mr-3 flex-shrink-0" 
                    />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Manifesto OLV Internacional */}
        <section className="section pb-16" id="manifesto-olv">
          <div className="container mx-auto max-w-7xl px-4">
            {/* Título do Manifesto */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h2 className="flex items-center gap-3 text-3xl font-bold text-white mb-2">
                <Image 
                  src="/icons/manifesto-icon.svg" 
                  alt="Manifesto Icon" 
                  width={32} 
                  height={32} 
                />
                Manifesto OLV Internacional
              </h2>
              <p className="text-[#d4af37] italic">
                "Integramos estratégia, operação e resultado. Com inteligência, ética e propósito."
              </p>
            </div>

            {/* Nossa Causa */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">🔹 Nossa Causa</h3>
              <p className="text-gray-300">
                Nós existimos para libertar o potencial das pequenas e médias empresas. Acreditamos que inteligência, conexão e estratégia são forças capazes de romper barreiras, transformar mercados e gerar prosperidade. Somos mais que uma consultoria — somos um movimento que promove a internacionalização, o crescimento sustentável e o acesso democrático às cadeias globais de valor.
              </p>
            </div>

            {/* Por Que Existimos */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">🔹 Por Que Existimos</h3>
              <p className="text-gray-300">
                Porque não aceitamos a desigualdade de acesso. Porque é inconcebível que PMEs fiquem à margem das oportunidades que movem o mundo. Porque sabemos que, com os recursos certos, nenhuma empresa é pequena demais para pensar grande, inovar e conquistar mercados globais.
              </p>
            </div>

            {/* Nosso Propósito */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">🔹 Nosso Propósito</h3>
              <p className="text-gray-300">
                Transformar negócios em protagonistas globais. Fazemos isso integrando tecnologia, inteligência de mercado, estratégia operacional e visão internacional. Atuamos como uma extensão da empresa cliente, sem ativos próprios, sem vícios de mercado e sem interesses ocultos. Nosso compromisso é com o sucesso de quem nos escolhe.
              </p>
            </div>

            {/* O Que Defendemos */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">🔹 O Que Defendemos</h3>
              <ul className="space-y-4">
                {valuesList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Image 
                      src="/icons/check.svg" 
                      alt="Checkmark" 
                      width={20} 
                      height={20} 
                      className="mr-3 mt-1 flex-shrink-0" 
                    />
                    <div>
                      <span className="text-white font-semibold">{item.title}</span>{" "}
                      <span className="text-gray-300">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* O Que Não Aceitamos */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">🔹 O Que Não Aceitamos</h3>
              <ul className="space-y-3">
                {rejectList.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Image 
                      src="/icons/check.svg" 
                      alt="Checkmark" 
                      width={20} 
                      height={20} 
                      className="mr-3 flex-shrink-0" 
                    />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nosso Compromisso */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">🔹 Nosso Compromisso é com:</h3>
              <ul className="space-y-4">
                {commitmentList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Image 
                      src="/icons/check.svg" 
                      alt="Checkmark" 
                      width={20} 
                      height={20} 
                      className="mr-3 mt-1 flex-shrink-0" 
                    />
                    <div>
                      <span className="text-white font-semibold">{item.title}</span>{" "}
                      <span className="text-gray-300">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* A OLV é */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">🔹 A OLV é:</h3>
              <ul className="space-y-3">
                {identityList.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Image 
                      src="/icons/check.svg" 
                      alt="Checkmark" 
                      width={20} 
                      height={20} 
                      className="mr-3 flex-shrink-0" 
                    />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nossa Visão de Futuro */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">💡 Nossa Visão de Futuro</h3>
              <p className="text-gray-300">
                Sonhamos com um mundo onde as pequenas e médias empresas tenham o mesmo acesso às oportunidades que hoje movem as multinacionais. Um mundo onde a inteligência, a colaboração e a ética sejam os principais ativos econômicos.
              </p>
            </div>

            {/* Manifesto Signature */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <p className="text-gray-300">
                🚀 Assinamos este Manifesto com a convicção de que:<br />
                <span className="text-[#d4af37] italic">
                  "Quando uma PME cresce, toda uma cadeia cresce com ela. Cresce a indústria. Cresce o emprego. Cresce a dignidade. Cresce o país. E cresce o mundo."
                </span><br />
                Nós somos a OLV Internacional.<br />
                Integramos estratégia, operação e resultado.
              </p>
            </div>

            {/* Nossa Expertise */}
            <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg mb-8 transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Nossa Expertise</h3>
              <p className="mb-4 text-gray-300">
                Além de 35 anos integrando estratégia, operação e resultado. Somos especialistas em Supply Chain, Comércio Exterior e Logística Internacional. Atuamos como o braço consultivo do Ecossistema OLV, oferecendo suporte completo para empresas que querem importar, exportar, expandir seus negócios, operar com segurança e alta performance no mercado global.
              </p>
              <p className="mb-4 text-gray-300">
                Nossa missão é simplificar operações complexas, acelerar negócios e integrar estratégias com resultados. Atuamos como uma extensão do seu negócio, sem ativos próprios, focando exclusivamente na entrega de valor. Nossa metodologia combina análise precisa, dados, inteligência de mercado, tecnologias e experiência prática. Estamos preparados para atender empresas que nunca internacionalizaram até aquelas que já operam globalmente, mas precisam de um salto de performance.
              </p>
              <p className="mb-6 text-[#d4af37] font-medium italic">
                Do Radar SISCOMEX ao Embarque. Da Estratégia à Execução. Da Burocracia ao Resultado.
              </p>
              <ul className="space-y-2">
                {finalExpertiseList.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Image 
                      src="/icons/check.svg" 
                      alt="Checkmark" 
                      width={20} 
                      height={20} 
                      className="mr-3 flex-shrink-0" 
                    />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA - Contato Rápido */}
        <section className="py-10 bg-[#0a0f1d]">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-200 text-lg max-w-3xl">
                Entre em contato agora via WhatsApp, e-mail ou formulário. Nossa equipe está pronta para transformar sua operação.
              </p>
              <Link 
                href="/contato" 
                className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg whitespace-nowrap"
              >
                Fale Agora
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 