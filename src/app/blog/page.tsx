import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { Locale, i18n } from '@/i18n';

interface PageProps {
  params: {
    locale?: string;
  };
}

export const metadata = {
  title: 'Blog | Conteúdo Especializado em Comércio Exterior e Logística Internacional',
  description: 'Artigos, tutoriais e novidades sobre importação, exportação, logística internacional e regulamentações aduaneiras. Conteúdo estratégico para sua empresa operar globalmente.',
  keywords: [
    // Consultoria em Exportação
    'Como Exportar Legalmente?',
    'Exportação para Iniciantes',
    'Exportar Alimentos do Brasil',
    'Exportação Legalizada e Fácil',
    'Passo a Passo da Exportação',
    'Reduza Custos de Exportação',
    // Consultoria em Importação
    'Abra sua Importadora!',
    'Importação Sem Burocracia',
    'Importar com Segurança',
    'Importação para Revenda',
    'Desembaraço Aduaneiro Rápido',
    'Regularize sua Empresa Comex',
    // Estratégia e Planejamento
    'Planejamento Tributário Comex',
    'Radar SISCOMEX',
    'Suporte do Radar ao Embarque',
    'Reduza Erros e Custos na Importação',
    // Logística Internacional / Supply Chain
    'Logística 3PL para Exportação',
    'Consultoria em Logística 4PL',
    // Outras expressões obrigatórias
    'Comex sem mistérios',
    'Especialistas com vivência prática em multinacionais',
    'Acompanhamento completo em todas as etapas'
  ],
  openGraph: {
    title: 'Blog | Conteúdo Especializado em Comércio Exterior | OLV Internacional',
    description: 'Artigos, tutoriais e novidades sobre importação, exportação, logística internacional e regulamentações aduaneiras.',
    url: 'https://olvinternacional.com.br/blog',
    type: 'website',
    images: [
      {
        url: 'https://olvinternacional.com.br/images/blog-cover.jpeg',
        width: 1200,
        height: 630,
        alt: 'Blog OLV Internacional - Comércio Exterior e Logística'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Conteúdo Especializado em Comércio Exterior',
    description: 'Artigos, tutoriais e novidades sobre importação, exportação e logística internacional.',
    images: ['https://olvinternacional.com.br/images/blog-cover.jpeg']
  }
};

// Dados simulados de postagens do blog
const blogPosts = [
  {
    id: 1,
    title: 'Como obter o Radar SISCOMEX: Guia completo para empresas',
    excerpt: 'Saiba como obter a habilitação RADAR SISCOMEX, documento essencial para empresas que desejam importar ou exportar no Brasil.',
    image: '/images/blog/radar-siscomex.jpeg',
    date: '15 de Maio de 2024',
    slug: 'como-obter-radar-siscomex-guia-completo',
    category: 'Importação e Exportação'
  },
  {
    id: 2,
    title: 'Reduza custos na importação: 7 estratégias fiscais pouco conhecidas',
    excerpt: 'Conheça estratégias fiscais legais que podem reduzir significativamente os custos de suas operações de importação.',
    image: '/images/blog/reducao-custos.jpeg',
    date: '28 de Abril de 2024',
    slug: 'reducao-custos-importacao-estrategias-fiscais',
    category: 'Planejamento Tributário'
  },
  {
    id: 3,
    title: 'Exportação de alimentos: requisitos sanitários e certificações',
    excerpt: 'Um guia completo sobre os requisitos sanitários e certificações necessárias para exportar alimentos do Brasil para diferentes mercados.',
    image: '/images/blog/exportacao-alimentos.jpeg',
    date: '10 de Abril de 2024',
    slug: 'exportacao-alimentos-requisitos-sanitarios-certificacoes',
    category: 'Exportação'
  },
  {
    id: 4,
    title: 'Logística 3PL vs 4PL: Qual a melhor escolha para sua operação internacional?',
    excerpt: 'Entenda as diferenças entre provedores logísticos 3PL e 4PL e como escolher o modelo mais adequado para sua empresa.',
    image: '/images/blog/3pl-4pl.jpeg',
    date: '2 de Abril de 2024',
    slug: 'logistica-3pl-vs-4pl-melhor-escolha-operacao-internacional',
    category: 'Logística Internacional'
  },
  {
    id: 5,
    title: 'Novas regras de comércio internacional: o que mudou em 2024',
    excerpt: 'Um panorama completo sobre as principais mudanças nas regras de comércio internacional implementadas em 2024.',
    image: '/images/blog/novas-regras-2024.jpeg',
    date: '15 de Março de 2024',
    slug: 'novas-regras-comercio-internacional-2024',
    category: 'Regulamentação'
  },
  {
    id: 6,
    title: 'Desembaraço aduaneiro: como evitar atrasos e multas',
    excerpt: 'Dicas práticas para otimizar o processo de desembaraço aduaneiro, evitando atrasos, multas e custos desnecessários.',
    image: '/images/blog/desembaraco-aduaneiro.jpeg',
    date: '1 de Março de 2024',
    slug: 'desembaraco-aduaneiro-evitar-atrasos-multas',
    category: 'Importação'
  }
];

export default function BlogPage({ params }: PageProps) {
  // Usar locale padrão pois esta página não está na rota dinâmica [locale]
  const locale = i18n.defaultLocale as Locale;
  
  return (
    <MainLayout locale={locale}>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Banner de cabeçalho */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog OLV Internacional</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Artigos, tutoriais e novidades sobre comércio exterior, importação, exportação e logística internacional.
            </p>
          </div>
          
          {/* Categorias */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Link href="/blog" className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
              Todos
            </Link>
            <Link href="/blog?category=importacao" className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Importação
            </Link>
            <Link href="/blog?category=exportacao" className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Exportação
            </Link>
            <Link href="/blog?category=logistica" className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Logística
            </Link>
            <Link href="/blog?category=tributario" className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Tributário
            </Link>
            <Link href="/blog?category=regulamentacao" className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Regulamentação
            </Link>
          </div>
          
          {/* Grid de posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-48">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-xs text-blue-400">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Ler mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Newsletter */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Fique atualizado sobre o mundo do comércio exterior</h3>
                <p className="text-gray-200">
                  Assine nossa newsletter e receba regularmente conteúdos exclusivos, novidades do setor e dicas práticas para suas operações internacionais.
                </p>
              </div>
              <div className="md:w-1/3">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    className="px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    type="submit" 
                    className="px-4 py-3 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 transition-colors"
                  >
                    Assinar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}