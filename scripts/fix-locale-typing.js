const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Lista de arquivos que precisamos verificar
const pageFiles = glob.sync('src/app/**/*.tsx');

// Função para corrigir o arquivo
function fixFile(filePath) {
  console.log(`Processando: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Verificar se o arquivo tem MainLayout com locale={locale}
  if (content.includes('<MainLayout') && content.includes('locale={locale}')) {
    // Verificar se a variável locale já é tipada corretamente
    if (content.includes('locale = i18n.defaultLocale as Locale') || 
        content.includes('locale: Locale') ||
        content.includes('locale = params.locale as Locale')) {
      console.log(`  Pulando: Arquivo já corrigido`);
      return false;
    }
    
    // Substituir a linha que declara a variável locale
    let newContent = content;
    
    // Substituição 1: const locale = params.locale || i18n.defaultLocale
    newContent = newContent.replace(
      /const\s+locale\s*=\s*params\.locale\s*\|\|\s*i18n\.defaultLocale/g,
      'const locale = (params.locale || i18n.defaultLocale) as Locale'
    );
    
    // Substituição 2: const locale = i18n.defaultLocale
    newContent = newContent.replace(
      /const\s+locale\s*=\s*i18n\.defaultLocale/g,
      'const locale = i18n.defaultLocale as Locale'
    );
    
    // Substituição 3: const { locale = 'pt-BR' } = params
    newContent = newContent.replace(
      /const\s*{\s*locale\s*=\s*['"]pt-BR['"]\s*}\s*=\s*params/g,
      'const locale = i18n.defaultLocale as Locale'
    );
    
    // Substituição 4: const locale = params.locale
    newContent = newContent.replace(
      /const\s+locale\s*=\s*params\.locale/g,
      'const locale = params.locale as Locale'
    );
    
    // Salvar o arquivo se houve alterações
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`  Arquivo atualizado: ${filePath}`);
      return true;
    }
  }
  
  console.log(`  Pulando: MainLayout não encontrado ou já corrigido`);
  return false;
}

// Processar todos os arquivos
let totalFixed = 0;
pageFiles.forEach(file => {
  const fullPath = path.resolve(file);
  if (fixFile(fullPath)) {
    totalFixed++;
  }
});

console.log(`Processamento concluído! ${totalFixed} arquivos foram corrigidos.`); 