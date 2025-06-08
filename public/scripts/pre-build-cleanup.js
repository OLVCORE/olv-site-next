const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Diretórios a serem removidos
const dirsToRemove = [
  'backup-olv-site-current',
  'olvsite-full',
  'olv-site-next'
];

console.log('Iniciando limpeza de diretórios de backup...');

// Remove os diretórios
dirsToRemove.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  
  if (fs.existsSync(dirPath)) {
    try {
      console.log(`Removendo diretório: ${dir}`);
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Diretório removido: ${dir}`);
    } catch (err) {
      console.error(`❌ Erro ao remover diretório ${dir}:`, err);
    }
  } else {
    console.log(`⚠️ Diretório não encontrado: ${dir}`);
  }
});

console.log('✅ Limpeza concluída com sucesso!'); 