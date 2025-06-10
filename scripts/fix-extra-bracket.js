const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Lista de arquivos com problemas
const filesWithIssues = [
  'src/app/exceltta/page.tsx',
  'src/app/politica/page.tsx',
  'src/app/radar360/page.tsx',
  'src/app/sobre/page.tsx',
  'src/app/solucoes/page.tsx',
  'src/app/termos/page.tsx',
];

// Função para corrigir o arquivo
function fixExtraBracket(filePath) {
  console.log(`Processando: ${filePath}`);
  
  try {
    // Ler o conteúdo do arquivo
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Verificar o padrão específico do erro (chave adicional após a interface PageProps)
    const regex = /interface PageProps[\s\S]*?}\s*}\s*\n/g;
    
    if (regex.test(content)) {
      content = content.replace(/interface PageProps[\s\S]*?}\s*}\s*\n/, match => {
        // Remover a última chave extra
        const fixed = match.replace(/}\s*}\s*\n/, '}\n');
        return fixed;
      });
      
      // Salvar as alterações
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`  ✅ Arquivo corrigido: ${filePath}`);
    } else {
      console.log(`  ⚠️ Não foi possível encontrar o padrão para corrigir em: ${filePath}`);
    }
  } catch (error) {
    console.error(`  ❌ Erro ao processar ${filePath}:`, error.message);
  }
}

// Processar cada arquivo na lista
filesWithIssues.forEach(filePath => {
  fixExtraBracket(path.resolve(filePath));
});

console.log('Processamento concluído!'); 