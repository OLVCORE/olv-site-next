import MainLayout from '../../components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslation, Locale } from '../../i18n';

interface PageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = params;
  
  return {
    title: getTranslation('seo.home.title'),
    description: getTranslation('seo.home.description'),
    keywords: [
      'Consultoria em Exportação',
      'Especialistas em Comex',
      'Como Exportar Legalmente',
      'Exportação para Iniciantes',
      'Suporte do Radar ao Embarque',
      'Exportação Sem Erros',
      'Passo a Passo da Exportação',
      'Reduza Custos de Importação',
      'Abra sua Importadora',
      'Planejamento Tributário Comex'
    ],
    openGraph: {
      title: getTranslation('seo.home.title'),
      description: getTranslation('seo.home.description'),
      url: `https://olv-site-next.app/${locale}`,
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {params.locale === 'pt-BR' ? 'Bem-vindo à OLV Internacional!' : 'Welcome to OLV Internacional!'}
        </h1>
        <p className="mb-4">
          {params.locale === 'pt-BR' 
            ? 'Especialistas em comércio exterior, importação, exportação e logística internacional.' 
            : 'Specialists in foreign trade, import, export, and international logistics.'}
        </p>
        <div className="bg-blue-100 p-4 rounded-lg dark:bg-blue-900">
          <p className="text-sm">
            {params.locale === 'pt-BR'
              ? 'Você está visualizando esta página em Português do Brasil.'
              : 'You are viewing this page in English.'}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}