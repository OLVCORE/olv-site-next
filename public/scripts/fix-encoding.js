/**
 * Script para verificar e corrigir problemas de codificação em arquivos CSS
 * 
 * Este script:
 * 1. Procura por caracteres BOM (Byte Order Mark) ou invisíveis no início dos arquivos
 * 2. Remove esses caracteres
 * 3. Salva os arquivos com codificação UTF-8 limpa
 */

const fs = require('fs');
const path = require('path');

// Função para verificar se um arquivo tem BOM
function hasBOM(buffer) {
  return buffer.length >= 3 && 
         buffer[0] === 0xEF && 
         buffer[1] === 0xBB && 
         buffer[2] === 0xBF;
}

// Função para remover o BOM de um arquivo
function removeBOM(buffer) {
  return buffer.slice(3);
}

// Função para verificar e corrigir a codificação de um arquivo
function fixEncoding(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    
    // Verifica se o arquivo tem BOM
    if (hasBOM(buffer)) {
      console.log(`Corrigindo codificação: ${filePath}`);
      // Remove o BOM e reescreve o arquivo
      fs.writeFileSync(filePath, removeBOM(buffer));
      return true;
    }
    
    // Verifica se há caracteres inválidos no início do arquivo
    const firstChars = buffer.toString('utf8', 0, 20);
    if (firstChars.includes('\ufffd')) {
      console.log(`Corrigindo caracteres inválidos em: ${filePath}`);
      
      // Lê o conteúdo como string
      let content = buffer.toString('utf8');
      
      // Substitui caracteres inválidos no início do arquivo
      content = content.replace(/\ufffd@/g, '@');
      
      // Se o arquivo é globals.css e não começa corretamente com @tailwind
      if (filePath.endsWith('globals.css') && !content.trim().startsWith('@tailwind')) {
        content = '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n';
      }
      
      // Reescreve o arquivo
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (err) {
    console.error(`Erro ao processar arquivo ${filePath}:`, err);
    return false;
  }
}

// Função para verificar diretório recursivamente
function checkDirectory(dir) {
  console.log(`Verificando diretório: ${dir}`);
  
  if (!fs.existsSync(dir)) {
    console.log(`Diretório não encontrado: ${dir}`);
    return 0;
  }
  
  let count = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursivamente verifica subdiretórios
        count += checkDirectory(filePath);
      } else if (stat.isFile() && file.endsWith('.css')) {
        // Verifica e corrige arquivos CSS
        if (fixEncoding(filePath)) {
          count++;
        }
      }
    }
  } catch (err) {
    console.error(`Erro ao ler diretório ${dir}:`, err);
  }
  
  return count;
}

// Função principal
function main() {
  console.log('Iniciando verificação de codificação de arquivos CSS...');
  
  // Diretórios a verificar
  const dirs = [
    path.join(process.cwd(), 'src'),
    path.join(process.cwd(), 'styles'),
    path.join(process.cwd(), 'css')
  ];
  
  let totalFixed = 0;
  
  // Verifica cada diretório
  for (const dir of dirs) {
    totalFixed += checkDirectory(dir);
  }
  
  if (totalFixed > 0) {
    console.log(`Corrigidos ${totalFixed} arquivos com problemas de codificação.`);
  } else {
    console.log('Nenhum problema de codificação encontrado!');
  }
}

// Executa a função principal
main(); 