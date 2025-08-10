import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#0f766e',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [],
}

export default config


