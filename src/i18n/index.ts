// src/i18n.ts
export type Locale = string;
// stub que retorna sempre a própria chave ou um texto estático
export function getTranslation(key: string, locale?: string): string {
  return key; // ou retorne um texto padrão: "Título do site"
}
