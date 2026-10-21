/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#0b0418',
        darkCard: '#130924',
        darkCardHover: '#1c0e35',
        lightBg: '#f8f6ff',
        lightCard: '#ffffff',
        lightCardHover: '#f5f0ff',
        purpleGlow: '#9333ea',
        neonPurple: '#a855f7',
        deepViolet: '#7c3aed',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(168, 85, 247, 0.2)',
        'glow': '0 0 25px rgba(168, 85, 247, 0.35)',
        'glow-lg': '0 0 45px rgba(147, 51, 234, 0.45)',
        'glow-btn': '0 0 20px rgba(124, 58, 237, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(168, 85, 247, 0.15)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
