import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#07a478',
          DEFAULT: '#047857',
          dark: '#024633',
        },
        secondary: '#6EC1E4',
      },
    },
  },
  plugins: [],
}
export default config
