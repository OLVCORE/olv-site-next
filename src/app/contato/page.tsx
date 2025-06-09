import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getTranslation } from '@/i18n';

export const metadata = {
  title: 'Contato | Consultoria Especializada em Comércio Exterior | OLV Internacional',
  description: 'Entre em contato com nossos especialistas em importação, exportação e logística internacional. Solicite uma análise gratuita para sua operação de comércio exterior.',
  keywords: [
    'Consultoria em Comércio Exterior',
    'Contato Especialistas em Importação',
    'Consultoria Radar SISCOMEX',
    'Ajuda para Exportar',
    'Consultoria em Importação',
    'Falar com Especialista em Comex',
    'Assessoria para Importadores',
    'Suporte em Exportação',
    'Consultoria Aduaneira',
    'Planejamento Tributário para Importação'
  ],
  openGraph: {
    title: 'Entre em Contato | OLV Internacional',
    description: 'Fale com especialistas em comércio exterior, importação, exportação e logística internacional. Solicite uma análise personalizada para seu negócio.',
    url: 'https://olv-site.vercel.app/contato',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato | OLV Internacional',
    description: 'Fale com especialistas em comércio exterior. Consultoria para importação e exportação.'
  }
};

interface PageProps {
  params: { locale: string };
}

export default function ContatoPage({ params }: PageProps) {
  const { locale = 'pt-BR' } = params || {};
  
  // Dados de contato da empresa
  const contactInfo = {
    address: "Av. Paulista, 1578, 7º andar, Bela Vista",
    city: "São Paulo - SP, 01310-200",
    phone: "+55 (11) 3456-7890",
    email: "contato@olvinternacional.com.br",
    whatsapp: "+55 11 98765-4321"
  };

  // Dados dos escritórios
  const offices = [
    {
      city: "São Paulo",
      address: "Av. Paulista, 1578, 7º andar, Bela Vista",
      postalCode: "São Paulo - SP, 01310-200",
      phone: "+55 (11) 3456-7890",
      email: "sp@olvinternacional.com.br"
    },
    {
      city: "Rio de Janeiro",
      address: "Av. Rio Branco, 115, 20º andar, Centro",
      postalCode: "Rio de Janeiro - RJ, 20040-004",
      phone: "+55 (21) 3456-7890",
      email: "rj@olvinternacional.com.br"
    },
    {
      city: "Santos",
      address: "Praça da República, 80, 5º andar",
      postalCode: "Santos - SP, 11013-010",
      phone: "+55 (13) 3456-7890",
      email: "santos@olvinternacional.com.br"
    }
  ];

  // Perguntas frequentes
  const faqs = [
    {
      question: "Quais serviços de comércio exterior a OLV Internacional oferece?",
      answer: "A OLV Internacional oferece uma ampla gama de serviços, incluindo importação e exportação, assessoria em logística internacional, consultoria em tributação internacional, planejamento estratégico para internacionalização, compliance em comércio exterior, entre outros. Nossa abordagem integrada garante que possamos atender a todas as necessidades da sua operação internacional."
    },
    {
      question: "Como posso iniciar um projeto com a OLV Internacional?",
      answer: "O processo para iniciar um projeto conosco é simples. Você pode entrar em contato através do formulário nesta página, por telefone ou e-mail. Nossa equipe agendará uma consulta inicial gratuita para entender suas necessidades, após a qual desenvolveremos uma proposta personalizada para sua empresa."
    },
    {
      question: "Vocês atendem pequenas e médias empresas ou apenas grandes corporações?",
      answer: "Atendemos empresas de todos os portes, desde startups e pequenas empresas que estão iniciando sua jornada internacional até grandes corporações com operações globais estabelecidas. Nossos serviços são escaláveis e adaptáveis às necessidades específicas de cada cliente, independentemente do tamanho da operação."
    },
    {
      question: "A OLV Internacional possui especialistas em mercados específicos?",
      answer: "Sim, contamos com especialistas em diversos mercados internacionais, incluindo América do Norte, Europa, Ásia, Oriente Médio e América Latina. Nossa equipe possui conhecimento profundo sobre regulamentações locais, práticas comerciais e aspectos culturais que podem impactar suas operações em cada região."
    },
    {
      question: "Qual é o tempo médio para implementação de um projeto de importação?",
      answer: "O tempo de implementação varia de acordo com a complexidade do projeto, o tipo de mercadoria e os países envolvidos. Em média, um projeto de importação pode levar de 30 a 90 dias desde o planejamento inicial até a chegada da mercadoria. Durante nossa consulta inicial, forneceremos um cronograma personalizado baseado nas especificidades da sua operação."
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
                  Entre em Contato
                </h1>
                <p className="text-gray-300 mb-4">
                  Estamos prontos para ajudar sua empresa a alcançar novos mercados e otimizar suas operações internacionais.
                  Nossa equipe de especialistas está disponível para responder suas dúvidas e desenvolver soluções personalizadas para o seu negócio.
                </p>
                <p className="text-gray-300 mb-6">
                  Preencha o formulário abaixo, entre em contato por telefone ou visite um de nossos escritórios.
                  Estamos ansiosos para iniciar essa jornada global com você.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a 
                    href="#contact-form" 
                    className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                  >
                    Formulário de Contato
                  </a>
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border border-[#d4af37] hover:bg-[#d4af37]/10 text-[#d4af37] font-bold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center"
                  >
                    <Image 
                      src="/icons/whatsapp.svg" 
                      alt="WhatsApp" 
                      width={20} 
                      height={20} 
                      className="mr-2" 
                    />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center rounded-full bg-[#0a0f1d] border border-[#2a3448] p-4">
                  <Image 
                    src="/icons/contact-icon.svg" 
                    alt="Contato" 
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

      {/* Seção de contato principal */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Formulário de contato */}
            <div className="lg:w-2/3" id="contact-form">
              <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Formulário de Contato
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                        Nome completo *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-[#0a0f1d] border border-[#2a3448] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37]" 
                        placeholder="Seu nome" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                        E-mail corporativo *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-[#0a0f1d] border border-[#2a3448] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37]" 
                        placeholder="seu@empresa.com.br" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-gray-300 mb-2 font-medium">
                        Empresa *
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        required
                        className="w-full bg-[#0a0f1d] border border-[#2a3448] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37]" 
                        placeholder="Nome da empresa" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                        Telefone
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full bg-[#0a0f1d] border border-[#2a3448] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37]" 
                        placeholder="(11) 99999-9999" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                      Assunto *
                    </label>
                    <select 
                      id="subject" 
                      required
                      className="w-full bg-[#0a0f1d] border border-[#2a3448] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="" disabled selected>Selecione o assunto</option>
                      <option value="importacao">Importação</option>
                      <option value="exportacao">Exportação</option>
                      <option value="logistica">Logística Internacional</option>
                      <option value="consultoria">Consultoria Estratégica</option>
                      <option value="compliance">Compliance Internacional</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                      Mensagem *
                    </label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required
                      className="w-full bg-[#0a0f1d] border border-[#2a3448] rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37]" 
                      placeholder="Descreva como podemos ajudar sua empresa..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      required
                      className="mt-1 mr-3" 
                    />
                    <label htmlFor="privacy" className="text-gray-300 text-sm">
                      Concordo com a <Link href="/privacidade" className="text-[#d4af37] hover:underline">Política de Privacidade</Link> e 
                      autorizo o tratamento dos meus dados para fins de contato comercial.
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
              
              {/* FAQs */}
              <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Perguntas Frequentes
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-[#2a3448] pb-6 last:border-0 last:pb-0">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Informações de contato */}
            <div className="lg:w-1/3">
              {/* Dados de contato */}
              <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Informações de Contato
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a0f1d] flex items-center justify-center mr-3">
                      <Image 
                        src="/icons/location.svg" 
                        alt="Endereço" 
                        width={20} 
                        height={20} 
                      />
                    </div>
                    <div>
                      <h3 className="text-[#d4af37] font-bold">Endereço</h3>
                      <p className="text-gray-300">{contactInfo.address}</p>
                      <p className="text-gray-300">{contactInfo.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a0f1d] flex items-center justify-center mr-3">
                      <Image 
                        src="/icons/phone.svg" 
                        alt="Telefone" 
                        width={20} 
                        height={20} 
                      />
                    </div>
                    <div>
                      <h3 className="text-[#d4af37] font-bold">Telefone</h3>
                      <p className="text-gray-300">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a0f1d] flex items-center justify-center mr-3">
                      <Image 
                        src="/icons/email.svg" 
                        alt="E-mail" 
                        width={20} 
                        height={20} 
                      />
                    </div>
                    <div>
                      <h3 className="text-[#d4af37] font-bold">E-mail</h3>
                      <p className="text-gray-300">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a0f1d] flex items-center justify-center mr-3">
                      <Image 
                        src="/icons/clock.svg" 
                        alt="Horário" 
                        width={20} 
                        height={20} 
                      />
                    </div>
                    <div>
                      <h3 className="text-[#d4af37] font-bold">Horário de Atendimento</h3>
                      <p className="text-gray-300">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Redes Sociais
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/company/olvinternacional" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0a0f1d] flex items-center justify-center hover:bg-[#0e1328] transition-colors"
                    >
                      <Image 
                        src="/icons/linkedin.svg" 
                        alt="LinkedIn" 
                        width={20} 
                        height={20} 
                      />
                    </a>
                    <a 
                      href="https://facebook.com/olvinternacional" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0a0f1d] flex items-center justify-center hover:bg-[#0e1328] transition-colors"
                    >
                      <Image 
                        src="/icons/facebook.svg" 
                        alt="Facebook" 
                        width={20} 
                        height={20} 
                      />
                    </a>
                    <a 
                      href="https://instagram.com/olvinternacional" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0a0f1d] flex items-center justify-center hover:bg-[#0e1328] transition-colors"
                    >
                      <Image 
                        src="/icons/instagram.svg" 
                        alt="Instagram" 
                        width={20} 
                        height={20} 
                      />
                    </a>
                    <a 
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0a0f1d] flex items-center justify-center hover:bg-[#0e1328] transition-colors"
                    >
                      <Image 
                        src="/icons/whatsapp.svg" 
                        alt="WhatsApp" 
                        width={20} 
                        height={20} 
                      />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Escritórios */}
              <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Nossos Escritórios
                </h2>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className={index !== offices.length - 1 ? "pb-6 border-b border-[#2a3448]" : ""}>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {office.city}
                      </h3>
                      <p className="text-gray-300">{office.address}</p>
                      <p className="text-gray-300 mb-2">{office.postalCode}</p>
                      <p className="text-gray-300">
                        <span className="text-[#d4af37]">Tel:</span> {office.phone}
                      </p>
                      <p className="text-gray-300">
                        <span className="text-[#d4af37]">E-mail:</span> {office.email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mapa */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Onde Estamos
            </h2>
            
            <div className="h-[400px] rounded-lg overflow-hidden border border-[#2a3448]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951540542!2d-46.65773902392796!3d-23.563727178929954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1685791131054!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA final */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Consultoria Gratuita de 30 Minutos
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Agende uma consultoria inicial gratuita com nossos especialistas e descubra como podemos ajudar 
              sua empresa a superar desafios e aproveitar oportunidades no mercado internacional.
            </p>
            
            <a 
              href="https://calendly.com/olvinternacional/consultoria-inicial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Agendar Consultoria Gratuita
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 