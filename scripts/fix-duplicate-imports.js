const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Lista de arquivos que precisamos verificar
const pageFiles = glob.sync('src/app/**/*.tsx');

// Função para corrigir importações duplicadas
function fixDuplicateImports(filePath) {
  console.log(`Processando: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Verificar se tem importações duplicadas de i18n
  const hasMultipleI18nImports = (content.match(/import.*i18n.*from\s+['"]@\/i18n['"]/g) || []).length > 1;
  
  if (hasMultipleI18nImports) {
    // Encontrar todas as importações do i18n
    const i18nImports = content.match(/import\s+{[^}]*}\s+from\s+['"]@\/i18n['"]/g) || [];
    
    if (i18nImports.length > 1) {
      // Extrair todos os itens importados
      const allImportedItems = new Set();
      i18nImports.forEach(importStatement => {
        const items = importStatement.match(/{\s*([^}]*)\s*}/)[1].split(',').map(item => item.trim());
        items.forEach(item => {
          if (item) allImportedItems.add(item);
        });
      });
      
      // Criar uma nova declaração de importação única
      const newImportStatement = `import { ${Array.from(allImportedItems).join(', ')} } from '@/i18n';`;
      
      // Substituir a primeira ocorrência pela nova declaração e remover as outras
      let newContent = content;
      let firstImportReplaced = false;
      
      newContent = newContent.replace(/import\s+{[^}]*}\s+from\s+['"]@\/i18n['"];?/g, match => {
        if (!firstImportReplaced) {
          firstImportReplaced = true;
          return newImportStatement;
        }
        return '';
      });
      
      // Remover linhas em branco extras que possam ter sido criadas
      newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      // Salvar o arquivo corrigido
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`  ✅ Arquivo atualizado: ${filePath}`);
      return true;
    }
  }
  
  console.log(`  ⚠️ Sem importações duplicadas: ${filePath}`);
  return false;
}

// Processar todos os arquivos
let totalFixed = 0;
pageFiles.forEach(file => {
  const fullPath = path.resolve(file);
  if (fixDuplicateImports(fullPath)) {
    totalFixed++;
  }
});

console.log(`\nProcessamento concluído! ${totalFixed} arquivos foram corrigidos.`); 