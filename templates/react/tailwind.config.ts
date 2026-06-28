import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        accent: '#0ea5e9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      maxWidth: {
        section: '900px',
      },
    },
  },
  plugins: [],
};

export default config;
