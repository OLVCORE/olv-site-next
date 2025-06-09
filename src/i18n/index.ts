import { i18n } from './config';

/** TIPOS DE LOCALE SUPORTADOS */
export type Locale = 'pt-BR' | 'en-US'

/** CARREGA AS TRADUÇÕES CORRESPONDENTES AO LOCALE */
export async function getTranslation(key: string, locale: Locale = 'pt-BR') {
  // Exemplo mínimo: importe seus JSONs de tradução ou defina inline
  const translations = {
    'pt-BR': await import('./dictionaries/pt-BR.json'),
    'en-US': await import('./dictionaries/en-US.json'),
  }
  
  // Get the translation object for the locale
  const dict = translations[locale] || translations['pt-BR'];
  
  // Access the nested key (e.g., 'seo.home.title')
  const keys = key.split('.');
  let result = dict;
  
  for (const k of keys) {
    if (result && result.default) {
      result = result.default[k];
    } else {
      result = result?.[k];
    }
    
    if (!result) break;
  }
  
  return result || key; // Fallback to the key if translation not found
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