import { i18n } from './config';

/** TIPOS DE LOCALE SUPORTADOS */
export type Locale = 'pt-BR' | 'en-US'

/** CARREGA AS TRADUÇÕES CORRESPONDENTES AO LOCALE */
export function getTranslation(key: string, locale: Locale): string {
  // Substitua esses imports pelos caminhos dos seus arquivos JSON de tradução, se diferente
  const translations = {
    'pt-BR': {
      'seo.home.title': 'OLV Internacional – Ecossistema Estratégico',
      'seo.home.description': 'Soluções integradas de importação, exportação…',
      // …ou importe via: await import('./locales/pt-BR.json')
    },
    'en-US': {
      'seo.home.title': 'OLV International – Strategic Ecosystem',
      'seo.home.description': 'Integrated import, export solutions…',
      // …ou importe via: await import('./locales/en-US.json')
    }
  };

  const dict = translations[locale] || translations['pt-BR'];
  return dict[key] || key;
}

export { i18n };

export async function getDictionary(locale: Locale) {
  try {
    return (await import(`./dictionaries/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error);
    // Fallback to default locale
    return (await import(`./dictionaries/${i18n.defaultLocale}.json`)).default;
  }
} 