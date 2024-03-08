import { defineConfig } from "vite"; // Importa la función defineConfig de Vite
import react from "@vitejs/plugin-react"; // Importa el plugin react de Vite para trabajar con React

// Configura Vite utilizando la función defineConfig
export default defineConfig({
  plugins: [react()], // Configura los plugins de Vite, en este caso, solo se utiliza el plugin de React
});
