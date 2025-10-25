import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // URL del backend (ajusta el puerto si es diferente, ej. 8000)
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Remueve /api del path enviado al backend
      },
    },
  },
})
