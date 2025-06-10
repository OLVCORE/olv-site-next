# OLV Internacional Website

Este é o repositório do site da OLV Internacional, uma consultoria especializada em comércio exterior.

## Sobre o Projeto

O site foi desenvolvido utilizando o framework Next.js, com TypeScript e Tailwind CSS para estilização. O projeto implementa um design moderno e responsivo, focado em apresentar os serviços e soluções da OLV Internacional.

### Características principais

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Tema**: Dark mode fixo
- **Locale**: Português (pt-BR) como padrão

## Requisitos

- Node.js 18.x ou superior
- npm 9.x ou superior

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/olv-site.git
cd olv-site
```

2. Instale as dependências
```bash
npm install
```

3. Execute o servidor de desenvolvimento
```bash
npm run dev
```

4. Acesse o site em `http://localhost:3000`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de lint
- `npm run prepare` - Prepara o projeto para deploy (corrige erros comuns)

### Scripts de utilidade

- `npm run fix:locale` - Corrige problemas de tipagem em locales
- `npm run fix:bracket` - Corrige problemas de chaves extras em arquivos
- `npm run fix:imports` - Corrige importações duplicadas
- `npm run fix:links` - Corrige problemas com componentes Link

## Estrutura do Projeto

```
olv-site/
├── public/             # Arquivos estáticos (imagens, ícones, etc.)
├── scripts/            # Scripts de utilidade
├── src/
│   ├── app/            # Páginas da aplicação (estrutura Next.js App Router)
│   ├── components/     # Componentes reutilizáveis
│   ├── i18n/           # Configurações de internacionalização
│   ├── providers/      # Providers de contexto (tema, etc.)
│   └── styles/         # Estilos globais
├── package.json        # Dependências e scripts
└── tsconfig.json       # Configuração do TypeScript
```

## Plataformas

O site apresenta diversas plataformas de serviços da OLV Internacional:

- **EXCELTTA**: Otimização de processos para comércio exterior
- **STRATEVO**: Estratégias para internacionalização
- **RADAR360**: Inteligência de mercado
- **CONNECTA**: Networking e conexões de negócios
- **FINX**: Soluções financeiras para comércio exterior
- **VERITUS**: Compliance e conformidade regulatória
- **ENGAGE**: Comunicação e marketing internacional
- **LABS**: Laboratório de inovação
- **VENTURES**: Investimentos e parcerias estratégicas
- **ACADEMY**: Treinamentos e capacitação

## Deploy

O site está configurado para deploy na plataforma Vercel. Para preparar o projeto para deploy, execute:

```bash
npm run prepare
```

Este comando corrigirá automaticamente problemas comuns antes do deploy.

## Licença

Todos os direitos reservados à OLV Internacional.

## Contato

Para mais informações, entre em contato:
- Website: https://olvinternacional.com.br
- Email: contato@olvinternacional.com.br 