import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#22c55e',
        accent: '#38bdf8',
        gold: '#fbbf24',
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
