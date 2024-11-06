/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './(tabs)/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Azul profundo
        secondary: '#F97316', // Laranja quente
        destructive: '#EF4444', // Vermelho destrutivo
        'primary-foreground': '#FFFFFF', // Texto branco para botões primários
        'secondary-foreground': '#FFFFFF', // Texto branco para botões secundários
        'destructive-foreground': '#FFFFFF', // Texto branco para botões destrutivos
        surface: '#FFFFFF', // Branco para superfícies
        slate: '#1E293B', // Cinza escuro para botões ghost
      },
    },
  },
  plugins: [],
};
