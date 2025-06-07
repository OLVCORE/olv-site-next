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
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath)) {
    try {
      if (process.platform === 'win32') {
        // No Windows, use o comando rd para remover diretórios com conteúdo
        execSync(`rd /s /q "${dirPath}"`, { stdio: 'inherit' });
      } else {
        // No Linux/MacOS, use rm -rf
        execSync(`rm -rf "${dirPath}"`, { stdio: 'inherit' });
      }
      console.log(`Diretório removido: ${dir}`);
    } catch (err) {
      console.error(`Erro ao remover diretório ${dir}:`, err);
    }
  } else {
    console.log(`Diretório não encontrado: ${dir}`);
  }
});

console.log('Limpeza concluída com sucesso!'); 