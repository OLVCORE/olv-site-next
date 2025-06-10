import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlatformLayout from '../../components/platforms/PlatformLayout';
import MainLayout from '../../components/layout/MainLayout';
import { Locale, getTranslation, i18n } from '@/i18n';

interface PageProps {
  params: {
    locale?: string;
  };
}

export const metadata = {
  title: 'ACADEMY | Capacitação em Exportação e Comércio Internacional',
  description: 'Cursos e treinamentos práticos em importação, exportação e negócios internacionais. Aprenda com especialistas a operar no mercado global com segurança e eficiência.',
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
    title: 'ACADEMY | Capacitação em Comércio Internacional | OLV Internacional',
    description: 'Desenvolva as competências necessárias para expandir seu negócio globalmente com cursos práticos ministrados por especialistas de mercado.',
    url: 'https://olv-site.vercel.app/academy',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACADEMY | Capacitação em Comércio Exterior',
    description: 'Aprenda a operar no mercado internacional com cursos práticos e aplicados ao seu negócio.'
  }
};

export default function AcademyPage({ params }: PageProps) {
  // Verificar se o locale da URL é válido, caso contrário, usar o padrão
  const locale = i18n.locales.includes(params.locale as Locale) 
    ? params.locale as Locale 
    : i18n.defaultLocale;
    
  const t = (pt: string, en: string) => locale === 'pt-BR' ? pt : en;

  return (
    <MainLayout locale={locale}>
      <PlatformLayout
        platformName="ACADEMY"
        platformLogo="/images/academy.jpeg"
        platformDescription={t(
          'Capacitação e Desenvolvimento em Comércio Internacional',
          'Training & Development in International Trade'
        )}
        platformColor="#0a2463"
        locale={locale}
      >
        <div className="platform-content">
          <section className="mb-12">
            <h2 className="section-title">
              {t('Desenvolvimento Profissional em Comércio Exterior', 'Professional Development in Foreign Trade')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="platform-card">
                <h3 className="text-xl font-bold mb-3">{t('Cursos Práticos', 'Practical Courses')}</h3>
                <p>{t('Capacitações focadas em aplicações reais do dia a dia das operações internacionais.', 'Training focused on real-world applications of day-to-day international operations.')}</p>
              </div>
              <div className="platform-card">
                <h3 className="text-xl font-bold mb-3">{t('Mentoria Especializada', 'Specialized Mentoring')}</h3>
                <p>{t('Acompanhamento personalizado para profissionais e empresas que desejam expandir internacionalmente.', 'Personalized guidance for professionals and companies looking to expand internationally.')}</p>
              </div>
              <div className="platform-card">
                <h3 className="text-xl font-bold mb-3">{t('Consultoria In-Company', 'In-Company Consulting')}</h3>
                <p>{t('Treinamentos customizados para equipes, desenvolvidos conforme as necessidades específicas de cada empresa.', 'Customized team training, developed according to each company\'s specific needs.')}</p>
              </div>
            </div>
          </section>
        </div>
      </PlatformLayout>
    </MainLayout>
  );
}