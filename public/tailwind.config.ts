import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-500': '#ED1A39',
        'red-600': '#CB0D1F',
        'orange-500': '#F26324',
        'turquoise-400': '#00A8A9',
        'turquoise-500': '#27A3A9',
        'gray-200': '#E2DEDC',
        'gray-400': '#ACACAC',
        'gray-600': '#808185',
        'gray-700': '#626262',
        'gray-900': '#231F20',
        'indigo-900': '#1E2B50',
      },
      fontFamily: {
        'opens-sans': ['Open Sans', 'sans-serif'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
export default config
