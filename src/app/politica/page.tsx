import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getTranslation } from '@/i18n';

export const metadata = {
  title: 'Política | OLV Internacional',
  description: 'Política de Privacidade e LGPD da OLV Internacional: como coletamos, armazenamos, tratamos e protegemos seus dados pessoais, em conformidade com a legislação brasileira e melhores práticas de comércio exterior, supply chain e importação/exportação.'
};

interface PageProps {
  params: {
    locale: string;
  };
}

export default function PoliticaPage({ params }: PageProps) {
  const { locale = 'pt-BR' } = params || {};
  
  // Data da última atualização
  const ultimaAtualizacao = "15 de maio de 2025";

  // Seções da política
  const secoes = [
    {
      id: "introducao",
      titulo: "Introdução",
      conteudo: "A OLV Internacional ('nós', 'nosso' ou 'empresa') está comprometida em proteger a privacidade dos dados pessoais que coletamos de nossos clientes, parceiros e visitantes do nosso site. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras regulamentações aplicáveis de privacidade."
    },
    {
      id: "dados-coletados",
      titulo: "Dados que Coletamos",
      conteudo: "Podemos coletar diferentes tipos de informações pessoais dependendo de como você interage conosco:",
      itens: [
        "Informações de identificação (nome, cargo, empresa)",
        "Informações de contato (e-mail, telefone, endereço)",
        "Informações profissionais (histórico profissional, área de atuação)",
        "Dados de interação com nosso site (páginas visitadas, ações realizadas)",
        "Preferências e interesses relacionados aos nossos serviços",
        "Comunicações e interações que você tem conosco"
      ]
    },
    {
      id: "finalidades",
      titulo: "Finalidades do Tratamento",
      conteudo: "Utilizamos suas informações pessoais para as seguintes finalidades:",
      itens: [
        "Fornecer e personalizar nossos serviços conforme suas necessidades",
        "Processar transações e gerenciar seu relacionamento conosco",
        "Enviar comunicações relevantes sobre nossos serviços",
        "Fornecer suporte técnico e atendimento ao cliente",
        "Melhorar nossos serviços e desenvolver novos produtos",
        "Cumprir obrigações legais e regulatórias",
        "Proteger nossos direitos, propriedade ou segurança"
      ]
    },
    {
      id: "base-legal",
      titulo: "Base Legal para o Tratamento",
      conteudo: "O tratamento de seus dados pessoais é realizado com base nas seguintes justificativas legais:",
      itens: [
        "Execução de contrato: quando o tratamento for necessário para cumprir nossas obrigações contratuais com você",
        "Consentimento: quando você nos autoriza expressamente a tratar seus dados para finalidades específicas",
        "Interesse legítimo: quando o tratamento é necessário para atender aos interesses legítimos da nossa empresa",
        "Obrigação legal: quando o tratamento for necessário para cumprir uma obrigação legal ou regulatória",
        "Proteção ao crédito: para atividades de análise de risco e proteção ao crédito, quando aplicável"
      ]
    },
    {
      id: "compartilhamento",
      titulo: "Compartilhamento de Dados",
      conteudo: "Podemos compartilhar suas informações pessoais com as seguintes categorias de destinatários:",
      itens: [
        "Empresas do grupo OLV: para fins administrativos e prestação de serviços integrados",
        "Prestadores de serviços: que nos auxiliam na operação de nossos negócios",
        "Parceiros comerciais: quando necessário para fornecer os serviços solicitados",
        "Autoridades governamentais: quando exigido por lei ou processo legal",
        "Em caso de reorganização empresarial: como fusão, aquisição ou venda de ativos"
      ]
    },
    {
      id: "seguranca",
      titulo: "Medidas de Segurança",
      conteudo: "Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, perda, alteração ou destruição acidental. Algumas das medidas que adotamos incluem:",
      itens: [
        "Criptografia de dados sensíveis",
        "Controles de acesso rigorosos e autenticação multifator",
        "Monitoramento e testes regulares de segurança",
        "Treinamento de conscientização em segurança para funcionários",
        "Avaliações regulares de risco e auditorias de segurança"
      ]
    },
    {
      id: "retencao",
      titulo: "Período de Retenção",
      conteudo: "Mantemos suas informações pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Os critérios utilizados para determinar nossos períodos de retenção incluem:",
      itens: [
        "O período necessário para fornecer os serviços solicitados",
        "Obrigações legais, fiscais e regulatórias aplicáveis",
        "Períodos de prescrição aplicáveis sob as leis relevantes",
        "Resolução de disputas ou para fazer cumprir nossos acordos"
      ]
    },
    {
      id: "direitos",
      titulo: "Seus Direitos",
      conteudo: "De acordo com a LGPD e outras leis de proteção de dados aplicáveis, você pode ter os seguintes direitos em relação aos seus dados pessoais:",
      itens: [
        "Direito de acesso: obter confirmação de que tratamos seus dados e acessar seus dados pessoais",
        "Direito de retificação: corrigir dados incompletos, inexatos ou desatualizados",
        "Direito de exclusão: solicitar a exclusão de seus dados, exceto em situações previstas em lei",
        "Direito de restrição: solicitar a limitação do tratamento de seus dados",
        "Direito de portabilidade: receber seus dados em formato estruturado para transferência a outro controlador",
        "Direito de oposição: opor-se ao tratamento baseado em interesses legítimos",
        "Direito de não ser submetido a decisões automatizadas: solicitar revisão humana de decisões tomadas exclusivamente com base em tratamento automatizado"
      ]
    },
    {
      id: "cookies",
      titulo: "Cookies e Tecnologias Semelhantes",
      conteudo: "Nosso site utiliza cookies e tecnologias semelhantes para melhorar sua experiência de navegação, analisar o uso do site e personalizar conteúdos. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. Para mais informações sobre como utilizamos cookies, consulte nossa Política de Cookies.",
    },
    {
      id: "internacional",
      titulo: "Transferências Internacionais",
      conteudo: "Suas informações pessoais podem ser transferidas para, e processadas em, países fora do Brasil. Nesses casos, implementamos salvaguardas apropriadas para garantir que seus dados recebam um nível adequado de proteção, incluindo cláusulas contratuais padrão aprovadas pelas autoridades competentes.",
    },
    {
      id: "criancas",
      titulo: "Proteção de Dados de Crianças",
      conteudo: "Nossos serviços não são direcionados a crianças menores de 18 anos e não coletamos intencionalmente informações pessoais de crianças. Se acredita que coletamos informações de uma criança, entre em contato conosco imediatamente.",
    },
    {
      id: "alteracoes",
      titulo: "Alterações a esta Política",
      conteudo: "Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de privacidade. Encorajamos você a revisar esta política regularmente. As alterações significativas serão notificadas através do nosso site ou por outros meios apropriados.",
    },
    {
      id: "contato",
      titulo: "Entre em Contato",
      conteudo: "Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados (DPO) pelos seguintes canais:",
      itens: [
        "E-mail: privacidade@olvinternacional.com.br",
        "Telefone: +55 (11) 3000-7000",
        "Endereço: Av. Brigadeiro Faria Lima, 1234, 15º andar, São Paulo - SP, CEP 01452-001"
      ]
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
                  Política de Privacidade
                </h1>
                <p className="text-gray-300 mb-4">
                  Nesta página, detalhamos como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais quando você interage com a OLV Internacional.
                </p>
                <p className="text-gray-300 mb-6">
                  Nossa política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras regulamentações aplicáveis, garantindo transparência e segurança no tratamento de suas informações.
                </p>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Última atualização: {ultimaAtualizacao}</span>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center rounded-full bg-[#0a0f1d] border border-[#2a3448] p-4">
                  <Image 
                    src="/icons/privacy-icon.svg" 
                    alt="Política de Privacidade" 
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

      {/* Conteúdo principal - Política de privacidade */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Índice lateral (navegação) */}
            <div className="lg:w-1/4">
              <div className="bg-[#141c2f] p-6 rounded-lg border border-[#2a3448] shadow-lg sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4">Índice</h3>
                <nav className="space-y-2">
                  {secoes.map((secao) => (
                    <a 
                      key={secao.id} 
                      href={`#${secao.id}`} 
                      className="block py-2 px-3 text-gray-300 hover:bg-[#1a2642] hover:text-white rounded-lg transition-colors"
                    >
                      {secao.titulo}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 p-4 bg-[#0a0f1d] rounded-lg border border-[#2a3448]">
                  <p className="text-gray-300 text-sm">
                    <span className="text-[#d4af37] font-bold">Dúvidas?</span> Entre em contato com nosso encarregado de proteção de dados (DPO).
                  </p>
                  <a 
                    href="mailto:privacidade@olvinternacional.com.br" 
                    className="inline-block mt-2 text-[#d4af37] hover:underline font-medium text-sm"
                  >
                    privacidade@olvinternacional.com.br
                  </a>
                </div>
              </div>
            </div>
            
            {/* Conteúdo principal da política */}
            <div className="lg:w-3/4">
              <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg">
                {secoes.map((secao) => (
                  <div key={secao.id} id={secao.id} className="mb-10 last:mb-0 scroll-mt-28">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {secao.titulo}
                    </h2>
                    <p className="text-gray-300 mb-4">
                      {secao.conteudo}
                    </p>
                    {secao.itens && (
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        {secao.itens.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                
                {/* Rodapé do documento */}
                <div className="mt-12 pt-6 border-t border-[#2a3448]">
                  <p className="text-gray-400 text-sm">
                    © 2025 OLV Internacional. Todos os direitos reservados.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Para obter mais informações ou esclarecer dúvidas sobre esta política, entre em contato com nosso Encarregado de Proteção de Dados através do e-mail <a href="mailto:privacidade@olvinternacional.com.br" className="text-[#d4af37] hover:underline">privacidade@olvinternacional.com.br</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA - Fale Conosco */}
      <section className="py-12 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="bg-[#141c2f] p-8 rounded-lg border border-[#2a3448] shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Precisa de ajuda adicional?
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Nossa equipe está disponível para esclarecer quaisquer dúvidas sobre nossa Política de Privacidade ou sobre como tratamos seus dados pessoais.
            </p>
            
            <Link 
              href="/contato" 
              className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Entrar em Contato
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 