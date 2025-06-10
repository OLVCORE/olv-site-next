import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

// Lista completa de palavras-chave para SEO e Google Ads, organizada por grupos de intenção
const keywordsList = 
  // Consultoria em Exportação
  "Como Exportar Legalmente?, Especialistas em Comex, Exportação para Iniciantes, Exportar Alimentos do Brasil, " +
  "Exportação Legalizada e Fácil, Exportação Café e Soja, Exportar com Lucro Real, Passo a Passo da Exportação, Reduza Custos de Exportação, " +
  // Consultoria em Importação
  "Abra sua Importadora!, Importação Sem Burocracia, Suporte Total no Comex, Importar com Segurança, Importação para Revenda, " +
  "Importar com Redução Fiscal, Desembaraço Aduaneiro Rápido, Regularize sua Empresa Comex, " +
  // Estratégia e Planejamento
  "Planeje sua Exportação, Planejamento Tributário Comex, Radar SISCOMEX, Suporte do Radar ao Embarque, " +
  "Reduza Erros e Custos na Importação, " +
  // Logística Internacional / Supply Chain
  "Logística 3PL para Exportação, Montamos sua Operação Comex, Consultoria em Logística 4PL, Operação integrada com inteligência logística, " +
  // Outras expressões obrigatórias
  "Comex sem mistérios, Consultoria em Comércio Exterior para PME, Especialistas com vivência prática em multinacionais, " +
  "Acompanhamento completo em todas as etapas, Consultoria em exportação, Consultoria em importação, Supply chain";

export const metadata = {
  title: "OLV Internacional | Consultoria Especializada em Comércio Exterior",
  description: "Especialistas em importação, exportação e logística internacional. Atuamos do Radar SISCOMEX ao embarque, simplificando operações complexas para PMEs que buscam expandir globalmente com segurança e rentabilidade.",
  keywords: keywordsList,
  metadataBase: new URL("https://olvinternacional.com.br"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
      "en-US": "/en-US"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="keywords" content={keywordsList} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Metadados adicionais para otimização de intenção do usuário */}
        <meta name="google-site-verification" content="verificação-do-site" />
        <meta name="author" content="OLV Internacional" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Portuguese" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="São Paulo" />

        {/* Open Graph para compartilhamento em redes sociais */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://olvinternacional.com.br" />
        <meta property="og:image" content="https://olvinternacional.com.br/images/olv-logo.jpeg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="OLV Internacional" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://olvinternacional.com.br/images/olv-logo.jpeg" />

        {/* Schema.org Markup for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OLV Internacional",
              "description": "Consultoria especializada em comércio exterior, importação, exportação e logística internacional para PMEs",
              "url": "https://olvinternacional.com.br",
              "logo": "https://olvinternacional.com.br/images/olv-logo.jpeg",
              "sameAs": [
                "https://www.linkedin.com/company/26251289/admin/dashboard/",
                "https://www.instagram.com/olvinternacional",
                "https://www.facebook.com/olvinternacional"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-2675-1446",
                "contactType": "customer service",
                "email": "atendimento@olvinternacional.com.br",
                "areaServed": "BR"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://olvinternacional.com.br/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Schema para FAQ - Aumenta as chances de featured snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Como iniciar a exportação de produtos do Brasil?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para iniciar a exportação de produtos do Brasil, é necessário obter um Radar SISCOMEX, realizar a habilitação da empresa junto à Receita Federal, definir a classificação fiscal (NCM) dos produtos, e estruturar a operação logística e cambial. A OLV Internacional oferece consultoria completa, do Radar SISCOMEX ao embarque."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como reduzir custos na importação?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para reduzir custos na importação, recomenda-se: realizar planejamento tributário adequado, avaliar benefícios fiscais disponíveis, otimizar a logística internacional, buscar fornecedores confiáveis, e estruturar operacionalmente o processo. A OLV Internacional oferece consultoria especializada em redução de custos e otimização tributária para importadores."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais documentos são necessários para exportar do Brasil?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Os principais documentos para exportação do Brasil incluem: Registro de Exportação (RE), Fatura Comercial (Commercial Invoice), Packing List, Conhecimento de Embarque (B/L ou AWB), Certificado de Origem, e documentos específicos dependendo do produto e país de destino. A OLV Internacional oferece suporte completo na documentação para exportação."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como abrir uma importadora no Brasil?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para abrir uma importadora no Brasil, é necessário: constituir uma empresa, obter CNPJ, realizar a habilitação RADAR junto à Receita Federal, registrar-se no SISCOMEX, abrir contas bancárias específicas para operações internacionais, e estruturar os processos logísticos e fiscais. A OLV Internacional oferece consultoria completa para quem deseja abrir sua importadora."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} theme-dark`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
} 