import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // OLV Color System
        'olv-dark-blue': '#1A1F36',
        'olv-blue': '#243056',
        'olv-border': '#2C3352',
        'olv-gold': '#F5CB5C',
        'olv-gold-hover': '#F7D77E',
        'olv-light': '#FFFFFF',
        'olv-gray': '#757F9A',
        'olv-dark-gray': '#4D5166',
        
        dark: {
          bg: "var(--bg-dark)",
          text: "var(--txt-dark)",
          accent: "var(--accent-dark)",
          "accent-hover": "var(--accent-dark-hover)",
          secondary: "var(--bg-dark-secondary)",
          tertiary: "var(--bg-dark-tertiary)",
        },
        light: {
          bg: "var(--bg-light)",
          text: "var(--txt-light)",
          accent: "var(--accent-light)",
          "accent-hover": "var(--accent-light-hover)",
          secondary: "var(--bg-light-secondary)",
          tertiary: "var(--bg-light-tertiary)",
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'slideDown': 'slideDown 0.3s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'slideInLeft': 'slideInLeft 0.3s ease-out forwards',
        'slideUp': 'slideUp 0.3s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'fadeOut': 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
        '7xl': '4.5rem',    // 72px
        '8xl': '6rem',      // 96px
        '9xl': '8rem',      // 128px
      },
      borderRadius: {
        'sm': '0.125rem',   // 2px
        DEFAULT: '0.25rem', // 4px
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'blue': '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
        'gold': '0 4px 14px 0 rgba(245, 203, 92, 0.39)',
        'none': 'none',
      },
    },
  },
  plugins: [],
};
export default config; 