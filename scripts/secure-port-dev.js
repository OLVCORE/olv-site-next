const { exec, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 3999;

// Verificar se todos os arquivos necessários existem
function verifyRequiredFiles() {
  const requiredFiles = [
    'package.json',
    'next.config.js',
    'tailwind.config.ts',
    'tsconfig.json'
  ];
  
  const missingFiles = [];
  
  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(process.cwd(), file))) {
      missingFiles.push(file);
    }
  }
  
  if (missingFiles.length > 0) {
    console.error(`❌ Arquivos necessários não encontrados: ${missingFiles.join(', ')}`);
    return false;
  }
  
  // Verificar se o package.json contém a dependência next
  try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'));
    if (!packageJson.dependencies || !packageJson.dependencies.next) {
      console.error('❌ Dependência "next" não encontrada no package.json');
      return false;
    }
  } catch (error) {
    console.error('❌ Erro ao ler package.json:', error.message);
    return false;
  }
  
  // Verificar se o diretório ativo é olv-site-next
  const currentDir = path.basename(process.cwd());
  if (currentDir !== 'olv-site-next') {
    console.error(`❌ O diretório ativo deve ser olv-site-next, mas é ${currentDir}`);
    return false;
  }
  
  return true;
}

// Função principal
(async () => {
  console.log('🔍 Verificando ambiente...');
  
  if (!verifyRequiredFiles()) {
    process.exit(1);
  }
  
  console.log('✅ Verificação de ambiente concluída com sucesso');
  
  // Executar o script fix-encoding.js se existir
  const fixEncodingPath = path.join(process.cwd(), 'scripts', 'fix-encoding.js');
  if (fs.existsSync(fixEncodingPath)) {
    console.log('🔧 Executando fix-encoding.js...');
    try {
      execSync('node scripts/fix-encoding.js', { stdio: 'inherit' });
      console.log('✅ Encoding corrigido com sucesso');
    } catch (error) {
      console.error('⚠️ Erro ao executar fix-encoding.js, continuando mesmo assim:', error.message);
    }
  }
  
  console.log(`✅ Script de porta dinâmica criado com sucesso!`);
  console.log(`🚀 Servidor Next.js iniciado com sucesso!`);
  console.log(`🌐 Acesse o site pelo navegador:`);
  console.log(`➡️ http://localhost:${PORT}/`);
  console.log(`🧭 Projeto ativo: olv-site-next`);
  console.log(`📁 Repositório Git: https://github.com/OLVCORE/olv-site`);
  
  const child = exec(`next dev -p ${PORT}`);
  
  // Encaminhar saída do processo filho para o console
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
  
  // Manipular encerramento do processo
  process.on('SIGINT', () => {
    child.kill('SIGINT');
  });
})(); 