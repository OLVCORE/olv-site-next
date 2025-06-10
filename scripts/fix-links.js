const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Lista de arquivos que precisamos verificar
const componentFiles = [
  ...glob.sync('src/components/**/*.tsx'),
  ...glob.sync('src/app/**/*.tsx')
];

// Função para corrigir os Links
function fixLinks(filePath) {
  console.log(`Processando: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Verificar se o arquivo tem o padrão de erro <Link><a>
  if (content.includes('<Link') && content.includes('<a')) {
    // Padrão 1: <Link href="..."><a ...>...</a></Link>
    let newContent = content.replace(
      /<Link\s+href=["']([^"']+)["']\s*>\s*<a\s+([^>]*)>(.*?)<\/a>\s*<\/Link>/gs,
      (match, href, aAttrs, innerContent) => {
        // Remover className do <a> se existir
        const classMatch = aAttrs.match(/className=["']([^"']+)["']/);
        const className = classMatch ? classMatch[1] : '';
        
        // Construir o novo Link
        return `<Link href="${href}" className="${className}">${innerContent}</Link>`;
      }
    );
    
    // Padrão 2: <Link href="..." legacyBehavior><a ...>...</a></Link>
    newContent = newContent.replace(
      /<Link\s+href=["']([^"']+)["']\s+legacyBehavior\s*>\s*<a\s+([^>]*)>(.*?)<\/a>\s*<\/Link>/gs,
      (match, href, aAttrs, innerContent) => {
        // Remover className do <a> se existir
        const classMatch = aAttrs.match(/className=["']([^"']+)["']/);
        const className = classMatch ? classMatch[1] : '';
        
        // Construir o novo Link
        return `<Link href="${href}" className="${className}">${innerContent}</Link>`;
      }
    );
    
    // Salvar o arquivo se houve alterações
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`  ✅ Arquivo atualizado: ${filePath}`);
      return true;
    }
  }
  
  console.log(`  ⚠️ Sem problemas de Link encontrados: ${filePath}`);
  return false;
}

// Processar todos os arquivos
let totalFixed = 0;
componentFiles.forEach(file => {
  const fullPath = path.resolve(file);
  if (fixLinks(fullPath)) {
    totalFixed++;
  }
});

console.log(`\nProcessamento concluído! ${totalFixed} arquivos foram corrigidos.`); 