/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta oficial OLV CORE
        accent: {
          DEFAULT: "#0a0f1d",      // Azul OLV - Cor de fundo principal no tema escuro
          light: "#d4af37",        // Dourado - Destaques, bordas, ícones
          hover: "#b9952e",        // Azul Médio - Hover de botões, bordas
        },
        bg: {
          DEFAULT: "#0a0f1d",      // Azul OLV - Cor de fundo principal no tema escuro
          secondary: "#0e1425",    // Cinza Profundo - Sidebar, backgrounds secundários
          tertiary: "#111827",     // Variação mais clara para cards
          sidebar: "#0e1425",      // Cinza Profundo - Sidebar, backgrounds secundários
          light: "#ffffff",        // Branco Leve - Fundo principal no tema claro
          "light-secondary": "#f5f7fa", // Cinza Claro - Seções alternadas no tema claro
        },
        txt: {
          DEFAULT: "#e6f2ff",       // Azul Claro - Textos claros no tema escuro
          light: "#e6f2ff",        // Azul Claro - Textos claros no tema escuro
        },
        border: {
          DEFAULT: "#1e293b",      // Azul Médio - Bordas no tema escuro
          light: "#e5e7eb",        // Cinza Claro - Bordas no tema claro
        },
        // Para compatibilidade com classes existentes
        gold: {
          DEFAULT: "#d4af37",
          light: "#d4af37",
          dark: "#b9952e",
        },
        dark: {
          DEFAULT: "#000000",
          secondary: "#0a0f1d",
          tertiary: "#111827",
        },
        light: {
          DEFAULT: "#ffffff",
          secondary: "#f7f9fc",
          tertiary: "#edf2f7",
        },
      },
      spacing: {
        "header-height": "var(--height-header)",
        "footer-height": "var(--footer-height)",
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideIn': 'slideIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulseGlow': 'pulseGlow 2s infinite ease-in-out',
      },
      keyframes: {
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fadeIn': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slideIn': {
          'from': { transform: 'translateY(30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulseGlow': {
          '0%, 100%': { boxShadow: '0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      boxShadow: {
        'elegant-sm': '0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'elegant-md': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'elegant-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elegant-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        "inner-gold": "inset 0 0 0 2px #d4af37",
      },
      borderWidth: {
        "1": "1px",
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}; 