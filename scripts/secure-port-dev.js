const { exec, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Fixed port range to try
const PORTS = [3999, 4000, 4001, 4002, 4003];

// Verify if all required files exist
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
  
  // Verify if package.json contains the next dependency
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
  
  // Verify if the active directory is olv-site-next
  const currentDir = path.basename(process.cwd());
  if (currentDir !== 'olv-site-next') {
    console.warn(`⚠️ O diretório ativo deveria ser olv-site-next, mas é ${currentDir}`);
    // Allow continuing even if directory name doesn't match
  }
  
  return true;
}

// Simple function to find an available port
function startWithPort(portIndex = 0) {
  if (portIndex >= PORTS.length) {
    console.error('❌ Nenhuma porta disponível entre', PORTS[0], 'e', PORTS[PORTS.length - 1]);
    console.error('Por favor, encerre outros processos e tente novamente.');
    process.exit(1);
  }

  const port = PORTS[portIndex];
  console.log(`🔍 Tentando porta ${port}...`);
  
  const child = exec(`next dev -p ${port}`);
  
  // Forward output from child process to console
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
  
  // Handle error if port is already in use
  child.stderr.on('data', (data) => {
    if (data.includes('EADDRINUSE')) {
      console.log(`⚠️ Porta ${port} já está em uso, tentando próxima...`);
      child.kill();
      startWithPort(portIndex + 1);
    }
  });
  
  // Handle process termination
  process.on('SIGINT', () => {
    child.kill('SIGINT');
  });
}

// Main function
(async () => {
  console.log('🔍 Verificando ambiente...');
  
  if (!verifyRequiredFiles()) {
    process.exit(1);
  }
  
  console.log('✅ Verificação de ambiente concluída com sucesso');
  
  // Run fix-encoding.js script if it exists
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
  
  console.log(`🔍 Buscando porta disponível...`);
  startWithPort();
})(); 