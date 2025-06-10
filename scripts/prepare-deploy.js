const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando preparação para deploy...');

try {
  // 0. Limpar cache e arquivos temporários
  console.log('\n🧹 Limpando cache e arquivos temporários...');
  
  // Remover pasta .next
  if (fs.existsSync(path.join(__dirname, '..', '.next'))) {
    if (process.platform === 'win32') {
      execSync('rd /s /q .next', { stdio: 'inherit' });
    } else {
      execSync('rm -rf .next', { stdio: 'inherit' });
    }
    console.log('  ✅ Pasta .next removida');
  }
  
  // 1. Executar o script de correção de importações duplicadas
  console.log('\n📦 Corrigindo importações duplicadas...');
  execSync('node scripts/fix-duplicate-imports.js', { stdio: 'inherit' });
  
  // 2. Executar o script de correção de tipos de locale
  console.log('\n📦 Corrigindo tipos de locale...');
  execSync('node scripts/fix-locale-typing.js', { stdio: 'inherit' });
  
  // 3. Executar o script de correção de chaves extras
  console.log('\n📦 Corrigindo chaves extras em arquivos...');
  execSync('node scripts/fix-extra-bracket.js', { stdio: 'inherit' });
  
  // 4. Executar o script de correção de problemas com links
  console.log('\n📦 Corrigindo problemas com links...');
  execSync('node scripts/fix-links.js', { stdio: 'inherit' });
  
  // 5. Executar o script de correção de sintaxe
  console.log('\n📦 Corrigindo problemas de sintaxe em arquivos...');
  execSync('node scripts/fix-syntax.js', { stdio: 'inherit' });
  
  // 6. Forçar o tema escuro (tema único)
  console.log('\n📦 Configurando tema padrão como escuro...');
  const themeProviderPath = path.join(__dirname, '..', 'src', 'providers', 'ThemeProvider.tsx');
  
  if (fs.existsSync(themeProviderPath)) {
    let content = fs.readFileSync(themeProviderPath, 'utf8');
    content = content.replace(/const \[theme, setTheme\] = useState<Theme>\([^)]+\)/, "const [theme, setTheme] = useState<Theme>('dark')");
    content = content.replace(/useEffect\(\(\) => \{\s*const storedTheme[^}]+\}\);/, "useEffect(() => { setTheme('dark'); }, []);");
    fs.writeFileSync(themeProviderPath, content, 'utf8');
    console.log('  ✅ Tema escuro configurado');
  } else {
    console.log('  ⚠️ Arquivo ThemeProvider.tsx não encontrado');
  }
  
  // 7. Configurar locale padrão (sem multilíngua)
  console.log('\n📦 Configurando locale padrão...');
  const middlewarePath = path.join(__dirname, '..', 'src', 'middleware.ts');
  
  if (fs.existsSync(middlewarePath)) {
    let content = fs.readFileSync(middlewarePath, 'utf8');
    content = content.replace(/\/\/ if no locale is found\s+if \([^}]+\}\)/, 
      "// Sempre usar locale padrão\n  return NextResponse.redirect(new URL(`/pt-BR${pathname}`, request.url));");
    fs.writeFileSync(middlewarePath, content, 'utf8');
    console.log('  ✅ Middleware configurado para usar locale padrão');
  } else {
    console.log('  ⚠️ Arquivo middleware.ts não encontrado');
  }
  
  // 8. Executa o build para verificar se tudo está ok
  console.log('\n📦 Executando build para verificação...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('\n✅ Preparação para deploy concluída com sucesso!');
  console.log('\n🔍 Próximos passos:');
  console.log('  1. Confirme que o build foi concluído com sucesso');
  console.log('  2. Faça commit das alterações: git add . && git commit -m "Preparar para deploy"');
  console.log('  3. Faça push para o GitHub: git push');
  console.log('  4. Deploy no Vercel: vercel --prod (ou configure o deploy automático no Vercel)');
  
} catch (error) {
  console.error('\n❌ Erro durante a preparação para deploy:', error);
  process.exit(1);
} 