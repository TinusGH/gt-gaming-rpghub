module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class', // enables dark/light toggle
  theme: {
    extend: {
      colors: {
        primary: '#DC143C',
        background: '#FFFFFF',          // light-mode background
        'background-dark': '#0D0D0D',  // dark-mode background
        textPrimary: '#000000',         // light-mode text
        'textPrimary-dark': '#FFFFFF',  // dark-mode text
        textSecondary: '#4B5563',       // light secondary text
        'textSecondary-dark': '#B0B0B0', // dark secondary text
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
