import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'Blog | OLV Internacional',
  description: 'Conteúdo especializado sobre comércio exterior, estratégia, operações internacionais e soluções para PMEs.'
};

export default function BlogPage() {
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
    <MainLayout>
      {/* Banner principal */}
      <section className="pt-8 pb-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-6 md:p-8 rounded-lg border border-[#2a3448] shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Blog OLV Internacional
                </h1>
                <p className="text-gray-300 mb-4">
                  Insights, análises e conhecimento prático sobre comércio exterior, logística internacional, 
                  supply chain e estratégias de internacionalização para empresas que buscam crescimento global.
                </p>
                <p className="text-gray-300 mb-6">
                  Acompanhe nosso conteúdo especializado e mantenha-se atualizado sobre as tendências, 
                  oportunidades e desafios do mercado internacional.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link 
                    href="#newsletter" 
                    className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Assinar Newsletter
                  </Link>
                  <a 
                    href="#articles" 
                    className="inline-block bg-transparent border border-[#d4af37] hover:bg-[#d4af37]/10 text-[#d4af37] font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Ver Artigos
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center rounded-full bg-[#0a0f1d] border border-[#2a3448] p-4">
                  <Image 
                    src="/icons/blog-icon.svg" 
                    alt="Blog OLV" 
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

      {/* Filtro de categorias */}
      <section className="py-8 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Filtrar por categoria:</h2>
            <div className="relative">
              <select
                className="bg-[#141c2f] text-white border border-[#2a3448] rounded-lg py-2 px-4 pr-8 appearance-none focus:outline-none focus:border-[#d4af37]"
              >
                <option>Mais recentes</option>
                <option>Mais antigos</option>
                <option>Mais lidos</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-[#d4af37] text-black"
                    : "bg-[#141c2f] text-white hover:bg-[#1f2b4a]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de artigos */}
      <section id="articles" className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id} 
                className="bg-[#141c2f] rounded-lg border border-[#2a3448] overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-52 relative">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    className="object-cover" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#0a0f1d] flex items-center justify-center mr-2">
                        <span className="text-[#d4af37] text-xs font-bold">
                          {article.author.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <span className="text-gray-300 text-sm">{article.author}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${article.id}`}
                      className="text-[#d4af37] hover:text-[#b8941f] font-medium flex items-center"
                    >
                      Ler mais
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="bg-[#141c2f] hover:bg-[#1f2b4a] text-white font-medium py-3 px-8 rounded-lg transition-colors border border-[#2a3448]">
              Carregar mais artigos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Assine nossa Newsletter
                </h2>
                <p className="text-gray-300 mb-6">
                  Receba conteúdo exclusivo, análises de mercado e insights valiosos diretamente em seu e-mail. 
                  Mantenha-se à frente com informações privilegiadas sobre comércio exterior e negócios internacionais.
                </p>
                
                <h3 className="text-[#d4af37] font-bold mb-3">
                  O que você receberá:
                </h3>
                <ul className="space-y-2 mb-6">
                  {newsletterBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Image 
                        src="/icons/check.svg" 
                        alt="Checkmark" 
                        width={20} 
                        height={20} 
                        className="mr-2 mt-1 flex-shrink-0" 
                      />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <form className="bg-[#0a0f1d] p-6 rounded-lg border border-[#2a3448]">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-[#141c2f] border border-[#2a3448] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37]" 
                      placeholder="Seu nome completo" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-[#141c2f] border border-[#2a3448] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37]" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-gray-300 mb-2 font-medium">Empresa (opcional)</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full bg-[#141c2f] border border-[#2a3448] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37]" 
                      placeholder="Nome da sua empresa" 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Assinar Newsletter
                  </button>
                  
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    Ao assinar, você concorda com nossa Política de Privacidade. 
                    Prometemos não enviar spam e você pode cancelar a qualquer momento.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Precisa de ajuda com sua estratégia internacional?
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Além de conteúdo, oferecemos consultoria especializada para empresas que desejam expandir seus negócios globalmente. 
              Fale com nossos especialistas e descubra como podemos ajudar sua empresa a alcançar novos mercados.
            </p>
            
            <Link 
              href="/contato" 
              className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Falar com um Especialista
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}