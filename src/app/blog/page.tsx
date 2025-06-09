import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getTranslation } from '@/i18n';

export const metadata = {
  title: 'Blog sobre Comércio Exterior | Conteúdo Especializado para Importadores e Exportadores',
  description: 'Artigos e guias práticos sobre importação, exportação, logística internacional e supply chain. Aprenda com especialistas como operar no mercado global.',
  keywords: [
    'Blog de Comércio Exterior',
    'Guia de Importação para Iniciantes',
    'Como Exportar do Brasil',
    'Tendências Logística Internacional',
    'Estratégias de Redução de Custos em Importação',
    'Planejamento Tributário Comex',
    'Compliance em Exportação',
    'Dicas para Importadores',
    'Análise de Mercado Internacional',
    'Exportação para PMEs'
  ],
  openGraph: {
    title: 'Blog OLV Internacional | Conteúdo Especializado em Comércio Exterior',
    description: 'Aprenda como importar, exportar e expandir seu negócio globalmente com nossos artigos, guias e análises de especialistas em comércio internacional.',
    url: 'https://olv-site.vercel.app/blog',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog OLV Internacional | Comércio Exterior',
    description: 'Artigos especializados sobre importação, exportação e logística internacional para empresas brasileiras.'
  }
};

interface PageProps {
  params: {
    locale: string;
  };
}

export default function BlogPage({ params }: PageProps) {
  const { locale = 'pt-BR' } = params || {};
  
  // Dados dos artigos do blog
  const articles = [
    {
      id: "comercio-exterior-2025",
      image: "/images/blog/comercio-exterior-2025.jpg",
      title: "Tendências de Comércio Exterior para 2025",
      excerpt: "Análise das principais tendências que moldarão o comércio internacional no próximo ano, incluindo novas rotas, tecnologias e acordos comerciais.",
      author: "André Santos",
      date: "12 de maio de 2025",
      category: "Tendências",
      readTime: "6 min de leitura"
    },
    {
      id: "logistica-internacional",
      image: "/images/blog/logistica-internacional.jpg",
      title: "Desafios da Logística Internacional Pós-Pandemia",
      excerpt: "Como empresas estão superando gargalos logísticos e adaptando suas estratégias de supply chain para um mundo em constante mudança.",
      author: "Camila Rocha",
      date: "5 de maio de 2025",
      category: "Logística",
      readTime: "8 min de leitura"
    },
    {
      id: "importacao-tecnologia",
      image: "/images/blog/importacao-tecnologia.jpg",
      title: "Guia Completo para Importação de Tecnologia",
      excerpt: "Passo a passo para empresas que desejam importar equipamentos tecnológicos, incluindo aspectos regulatórios e tributários.",
      author: "Ricardo Mendes",
      date: "28 de abril de 2025",
      category: "Importação",
      readTime: "10 min de leitura"
    },
    {
      id: "internacionalizacao-pmes",
      image: "/images/blog/internacionalizacao-pmes.jpg",
      title: "Estratégias de Internacionalização para PMEs",
      excerpt: "Como pequenas e médias empresas podem expandir suas operações globalmente com recursos limitados e riscos calculados.",
      author: "Juliana Costa",
      date: "20 de abril de 2025",
      category: "Estratégia",
      readTime: "7 min de leitura"
    },
    {
      id: "compliance-global",
      image: "/images/blog/compliance-global.jpg",
      title: "Compliance Global: Além das Fronteiras",
      excerpt: "A importância de uma estratégia de compliance que abrange múltiplas jurisdições e como implementá-la de forma eficiente.",
      author: "Marcos Oliveira",
      date: "15 de abril de 2025",
      category: "Compliance",
      readTime: "9 min de leitura"
    },
    {
      id: "inovacao-supply-chain",
      image: "/images/blog/inovacao-supply-chain.jpg",
      title: "Inovação em Supply Chain: Casos de Sucesso",
      excerpt: "Exemplos reais de empresas que revolucionaram suas cadeias de suprimentos com tecnologias emergentes e abordagens inovadoras.",
      author: "Fernanda Lima",
      date: "8 de abril de 2025",
      category: "Inovação",
      readTime: "8 min de leitura"
    }
  ];

  // Categorias do blog
  const categories = [
    "Todos",
    "Tendências",
    "Logística",
    "Importação",
    "Exportação",
    "Estratégia",
    "Compliance",
    "Inovação",
    "Tributário",
    "Geopolítica"
  ];

  // Newsletter
  const newsletterBenefits = [
    "Análises exclusivas de especialistas",
    "Alertas sobre mudanças regulatórias",
    "Cases de sucesso e benchmarks",
    "Tendências e oportunidades de mercado",
    "Convites para eventos e webinars exclusivos"
  ];

  return (
    <MainLayout locale={locale}>
      {/* Banner principal */}
      <section className="pt-8 pb-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                OLV Blog
              </h1>
              <p className="mt-4 text-xl text-gray-300">
                Tendências, Insights e Dicas de Comércio Exterior
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/blog/header-image.jpg"
                alt="OLV Blog Header"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts destacados */}
      <section className="py-16 bg-gradient-to-b from-[#0a0f1d] to-[#141c2f]">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Destaques do Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destaque 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <Image
                src="/images/blog/post1.jpg"
                alt="Imagem do artigo"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-blue-600 uppercase font-bold">Exportação</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                  Como Estruturar sua Primeira Exportação em 2023
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Aprenda os passos fundamentais para iniciar suas operações de exportação...
                </p>
                <div className="mt-4 flex items-center">
                  <Image
                    src="/images/team/john-doe.jpg"
                    alt="Autor"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      João Silva
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      12 Jun 2023 • 8 min leitura
                    </p>
                  </div>
                </div>
                <Link href="/blog/post1" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Ler mais
                </Link>
              </div>
            </div>
            
            {/* Destaque 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <Image
                src="/images/blog/post2.jpg"
                alt="Imagem do artigo"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-green-600 uppercase font-bold">Importação</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                  Reduzindo Custos na Importação: Estratégias Eficientes
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Descubra como otimizar seus processos de importação e reduzir custos...
                </p>
                <div className="mt-4 flex items-center">
                  <Image
                    src="/images/team/jane-doe.jpg"
                    alt="Autor"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Maria Oliveira
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      5 Jun 2023 • 10 min leitura
                    </p>
                  </div>
                </div>
                <Link href="/blog/post2" className="mt-6 inline-block px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Ler mais
                </Link>
              </div>
            </div>
            
            {/* Destaque 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <Image
                src="/images/blog/post3.jpg"
                alt="Imagem do artigo"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-purple-600 uppercase font-bold">Tendências</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                  O Futuro do Comércio Internacional Pós-Pandemia
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Análise das principais tendências que moldarão o comex nos próximos anos...
                </p>
                <div className="mt-4 flex items-center">
                  <Image
                    src="/images/team/alex-doe.jpg"
                    alt="Autor"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Carlos Santos
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      28 May 2023 • 12 min leitura
                    </p>
                  </div>
                </div>
                <Link href="/blog/post3" className="mt-6 inline-block px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300">
                  Ler mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Quer receber nossos artigos?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Assine nossa newsletter e receba conteúdos exclusivos sobre comércio internacional, compliance e muito mais.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none"
              />
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-md transition-colors"
              >
                Assinar
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-3">
              Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}