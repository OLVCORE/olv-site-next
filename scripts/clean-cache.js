const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Limpando cache do Next.js...');

// Paths to clean
const pathsToClean = [
  '.next',
  'node_modules/.cache'
];

// Clean each path
pathsToClean.forEach(dirPath => {
  const fullPath = path.join(process.cwd(), dirPath);
  
  if (fs.existsSync(fullPath)) {
    try {
      console.log(`🗑️ Removendo ${dirPath}...`);
      
      // Em Windows, use rd /s /q para remover diretórios
      if (process.platform === 'win32') {
        execSync(`rd /s /q "${fullPath}"`, { stdio: 'inherit' });
      } else {
        execSync(`rm -rf "${fullPath}"`, { stdio: 'inherit' });
      }
      
      console.log(`✅ ${dirPath} removido com sucesso.`);
    } catch (error) {
      console.error(`❌ Erro ao remover ${dirPath}: ${error.message}`);
    }
  } else {
    console.log(`ℹ️ ${dirPath} não existe, pulando...`);
  }
});

console.log('🧹 Limpeza de cache concluída.'); 