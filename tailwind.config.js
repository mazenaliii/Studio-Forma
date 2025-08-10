module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // include if you're using Pages Router
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D1104',         //  background color
        secondary: '#1D1104',      // secondary background color
        button: '#69361C',           // button background color
        text: '#946534',           
      },
    },
  },
  plugins: [],
};
