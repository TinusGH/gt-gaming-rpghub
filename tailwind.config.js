module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class', // enables dark/light toggle
  theme: {
    extend: {
      colors: {
        // Brand
        primary: '#DC143C',             // GT Gaming red — buttons, accents, highlights
        'primary-hover': '#A50E2D',     // darker red for hover states

        // Backgrounds (light mode)
        background: '#F0F0F0',          // light mode page background
        'background-card': '#FFFFFF',   // light mode card surface
        'background-nav': '#E0E0E0',    // light mode navbar

        // Backgrounds (dark mode) — the default brand feel
        'background-dark': '#0D0D0D',       // dark page background
        'background-card-dark': '#1A1A1A',  // dark card surface
        'background-nav-dark': '#111111',   // dark navbar

        // Surfaces
        surface: '#222222',             // secondary panels / raised elements

        // Text (light mode)
        textPrimary: '#111111',
        textSecondary: '#4B5563',

        // Text (dark mode)
        'textPrimary-dark': '#F5F5F5',
        'textSecondary-dark': '#A0A0A0',
        'text-muted': '#555555',
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        tarrget: ['TarrgetAcad', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
