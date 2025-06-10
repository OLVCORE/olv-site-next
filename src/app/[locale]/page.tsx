import MainLayout from '../../components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslation, Locale } from '../../i18n';

interface PageProps {
  params: { locale: Locale };
}

export async function generateMetadata() {
  return {
    title: getTranslation('seo.home.title'),
    description: getTranslation('seo.home.description'),
    keywords: [
      'Consultoria em exportação',
      'Consultoria em importação',
      'Exportação de produtos',
      'Logística internacional / 3PL / 4PL',
      'Como Exportar Legalmente',
      'Especialistas em Comex',
      'Abra sua Importadora',
      'Importação Sem Burocracia',
      'Suporte Total no Comex',
      'Comex para Empresas PME',
      'Planeje sua Exportação',
      'Importar com Segurança',
      'Exportação para Iniciantes',
      'Documentação de Comex',
      'Treinamento em Comércio',
      'Desembaraço Aduaneiro Rápido',
      'Planejamento Tributário Comex',
      'Passo a Passo da Exportação',
      'Exportar Alimentos do Brasil',
      'Importar com Redução Fiscal',
      'Consultoria para Radar SISCOMEX',
      'Regularize sua Empresa Comex',
      'Exportar com Baixo Custo',
      'Importação para Revenda',
      'Exportação Café e Soja',
      'Logística 3PL para Exportação',
      'Montamos sua Operação Comex',
      'Suporte do Radar ao Embarque',
      'Exportação Sem Erros',
      'Reduza Custos de Importação',
      'Exportação Legalizada e Fácil',
      'Exportar com Lucro Real'
    ],
    openGraph: {
      title: getTranslation('seo.home.title'),
      description: getTranslation('seo.home.description'),
      url: 'https://olv-site-next.app',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: getTranslation('seo.home.title'),
      description: getTranslation('seo.home.description')
    },
    alternates: {
      canonical: 'https://olv-site-next.app/',
      languages: {
        'pt-BR': 'https://olv-site-next.app/pt-BR',
        'en-US': 'https://olv-site-next.app/en-US'
      }
    }
  };
}

export default function LocaleHomePage({ params }: PageProps) {
  const { locale } = params;

  return (
    <MainLayout locale={locale}>
      {/* Hero */}
      <section className="bg-[#0a0f24] text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">
              {getTranslation('home.hero.title', locale)}
            </h1>
            <p className="text-lg">
              {getTranslation('home.hero.subtitle', locale)}
            </p>
            <p className="italic text-yellow-300">
              {getTranslation('home.hero.note', locale)}
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/images/hero-banner.webp"
              alt="OLV Internacional"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pilares da Nossa Atuação */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-8">
          {locale === 'pt-BR'
            ? 'Pilares da Nossa Atuação'
            : 'Our Core Pillars'}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              titlePt: 'Operação Legalizada',
              descPt: 'Condução de processos de importação e exportação dentro das normativas brasileiras e internacionais.',
              titleEn: 'Legalized Operation',
              descEn: 'Managing import/export processes in full compliance.'
            },
            {
              titlePt: 'Redução Tributária Estruturada',
              descPt: 'Planejamento fiscal estratégico para redução de carga tributária em operações de comércio exterior.',
              titleEn: 'Structured Tax Reduction',
              descEn: 'Strategic tax planning to reduce trade tax burden.'
            },
            {
              titlePt: 'Logística Internacional / 3PL / 4PL',
              descPt: 'Soluções completas de transporte, armazenagem e distribuição global.',
              titleEn: 'International Logistics / 3PL / 4PL',
              descEn: 'Comprehensive transportation & distribution solutions.'
            }
          ].map((p, i) => (
            <div
              key={i}
              className="p-6 bg-[#1b1f3a] rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-2">
                {locale === 'pt-BR' ? p.titlePt : p.titleEn}
              </h3>
              <p className="text-gray-300">
                {locale === 'pt-BR' ? p.descPt : p.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* (Aqui você adiciona as Soluções e O Fator Humano da mesma forma) */}

    </MainLayout>
  );
}
