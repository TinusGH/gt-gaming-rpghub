module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class', // enables dark/light toggle
  theme: {
    extend: {
      colors: {
        primary: '#DC143C',
        background: '#0D0D0D',
        textPrimary: '#FFFFFF',
        textSecondary: '#B0B0B0',
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
