/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CB3A1A',
        secondary: '#111111',
        paragraph: '#74787C',
        white: '#ffffff',
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      fontSize: {
        'h1': ['66px', { lineHeight: '76px' }],
        'h2': ['48px', { lineHeight: '58px' }],
        'h3': ['36px', { lineHeight: '46px' }],
        'h4': ['30px', { lineHeight: '40px' }],
        'h5': ['24px', { lineHeight: '34px' }],
        'h6': ['20px', { lineHeight: '30px' }],
        'paragraph': ['16px', { lineHeight: '26px' }],
      },
      spacing: {
        'container': '24px',
        'gutter': '24px',
        'section': '120px',
      },
      maxWidth: {
        'container': '1200px',
      },
      padding: {
        'section': '120px',
      },
    },
  },
  plugins: [],
}