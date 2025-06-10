const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('📝 Iniciando correção de sintaxe em arquivos...');

// Lista de arquivos para verificar
const pageFiles = glob.sync('src/app/**/*.tsx');

// Função para corrigir o arquivo
function fixSyntaxIssues(filePath) {
  console.log(`Processando: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Corrigir chaves extras no final do arquivo
    content = content.replace(/\}\s*\}\s*\}[\s\n]*$/, '}\n');
    
    // Corrigir o padrão específico encontrado no exceltta/page.tsx
    content = content.replace(/\);\s*\}\s*\}\s*$/, ');\n}');
    
    // Verificar se o conteúdo foi modificado
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ Arquivo corrigido: ${filePath}`);
      return true;
    } else {
      console.log(`  ⚠️ Nenhum problema de sintaxe encontrado em: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`  ❌ Erro ao processar ${filePath}:`, error.message);
    return false;
  }
}

// Processar cada arquivo
let modifiedCount = 0;
pageFiles.forEach(filePath => {
  if (fixSyntaxIssues(filePath)) {
    modifiedCount++;
  }
});

console.log(`\nProcessamento concluído! ${modifiedCount} arquivos foram corrigidos.`); 