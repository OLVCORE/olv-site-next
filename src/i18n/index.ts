import { i18n } from './config';

/** TIPOS DE LOCALE SUPORTADOS */
export type Locale = 'pt-BR' | 'en-US'

/** CARREGA AS TRADUÇÕES CORRESPONDENTES AO LOCALE */
export async function getTranslation(locale: Locale) {
  // Exemplo mínimo: importe seus JSONs de tradução ou defina inline
  const translations = {
    'pt-BR': await import('./dictionaries/pt-BR.json'),
    'en-US': await import('./dictionaries/en-US.json'),
  }
  return translations[locale] || translations['pt-BR']
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