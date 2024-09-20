module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',  // Azul Profundo
        secondary: '#F97316',  // Laranja Quente
        accent: '#22C55E',  // Verde Vibrante
        background: '#F3F4F6',  // Cinza Claro
        surface: '#FFFFFF',  // Branco Puro
        error: '#EF4444',  // Vermelho Vibrante
        warning: '#F59E0B',  // Amarelo Alerta
        info: '#3B82F6',  // Azul Informativo
        success: '#10B981',  // Verde Sucesso
        muted: '#9CA3AF',  // Cinza Suave
        textPrimary: '#111827',  // Preto Escuro
        textSecondary: '#6B7280',  // Cinza Médio
      },
    },
  },
  plugins: [],
};
