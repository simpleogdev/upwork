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
        primary: '#E1A730',
        secondary: '#1715130D',
        brandPrimary: '#997332',
        brandSecondary: '#171513',
        textBody: '#0D0C0BCC',
        textHeading: '#0D0C0B',
        textWhite: '#FFFFFF',
        line: '#0D0C0B1A',
        borderColor: '#0D0C0B'
      }
    },
  },
  plugins: [],
}
export default config
