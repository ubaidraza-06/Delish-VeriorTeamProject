// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tells Tailwind to scan your React component files
    "./public/index.html",        // Optional, but good if you have styles there
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#CB3A1A', 
      },
      fontFamily: {
        poppins: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
