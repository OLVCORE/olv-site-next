// src/i18n/index.ts

export const i18n = {
  locales: ['pt-BR', 'en-US'] as const,
  defaultLocale: 'pt-BR' as const,
};

export type Locale = typeof i18n.locales[number];

export function getTranslation(key: string, locale: Locale): string {
  const translations: Record<Locale, Record<string, string>> = {
    'pt-BR': {
      'seo.home.title': 'OLV Internacional – Integramos Estratégia, Operação e Resultado',
      'seo.home.description': 'Especialistas em Supply Chain, Comércio Exterior, Logística Internacional e Desenvolvimento de Negócios.',
      'home.hero.title': 'Integramos Estratégia, Operação e Resultado',
      'home.hero.subtitle': '35 anos integrando estratégia, operações e resultados.',
      'home.hero.note': 'Do Radar SISCOMEX ao Embarque. Da Estratégia à Execução. Da Burocracia ao Resultado.',
      // adicione aqui outras chaves que usar...
    },
    'en-US': {
      'seo.home.title': 'OLV Internacional – We Integrate Strategy, Operations & Results',
      'seo.home.description': 'Specialists in Supply Chain, Foreign Trade, International Logistics, and Business Development.',
      'home.hero.title': 'We Integrate Strategy, Operations & Results',
      'home.hero.subtitle': '35 years integrating strategy, operations, and results.',
      'home.hero.note': 'From Radar SISCOMEX to Shipment. From Strategy to Execution. From Bureaucracy to Results.',
      // adicione aqui outras chaves que usar...
    },
  };
  return translations[locale][key] || key;
}
