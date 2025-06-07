const fs = require('fs');
const path = require('path');

console.log('🔧 Corrigindo arquivos para deploy na Vercel...');

// 1. Reescrever globals.css
const globalsPath = path.join(__dirname, 'src/app/globals.css');
if (fs.existsSync(globalsPath)) {
  console.log('📄 Reescrevendo globals.css...');
  const content = `@tailwind base;
@tailwind components;
@tailwind utilities;

/* ========================================================================
   ESTILOS ORIGINAIS DO OLV SITE
   ======================================================================== */

/*--------------------------------------------------------------------------- 
  RESET & TIPOGRAFIA
---------------------------------------------------------------------------*/
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Inter", sans-serif;
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--txt);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Outras partes do CSS aqui... */`;

  fs.writeFileSync(globalsPath, content, 'utf8');
  console.log('✅ globals.css corrigido!');
} else {
  console.log('⚠️ Arquivo globals.css não encontrado');
}

// 2. Remover diretórios de backup
const backupDirs = [
  'backup-olv-site-current',
  'olvsite-full',
  'olv-site-next'
];

backupDirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`🗑️ Removendo diretório ${dir}...`);
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Diretório ${dir} removido!`);
    } catch (err) {
      console.error(`❌ Erro ao remover diretório ${dir}:`, err);
    }
  } else {
    console.log(`⚠️ Diretório ${dir} não encontrado`);
  }
});

console.log('✅ Processo de correção concluído!'); 