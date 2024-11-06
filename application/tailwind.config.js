module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',  // Azul profundo
        secondary: '#F97316',  // Laranja quente
        destructive: '#EF4444',  // Vermelho destrutivo
        'primary-foreground': '#FFFFFF',  // Texto branco para botões primários
        'secondary-foreground': '#FFFFFF',  // Texto branco para botões secundários
        'destructive-foreground': '#FFFFFF',  // Texto branco para botões destrutivos
        surface: '#FFFFFF',  // Branco para superfícies
        slate: '#1E293B',  // Cinza escuro para botões ghost
      },
    },
  },
  plugins: [],
};
