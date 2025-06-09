import { i18n } from './config';

export { i18n };

export async function getDictionary(locale: string) {
  try {
    return (await import(`./dictionaries/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error);
    // Fallback to default locale
    return (await import(`./dictionaries/${i18n.defaultLocale}.json`)).default;
  }
} 