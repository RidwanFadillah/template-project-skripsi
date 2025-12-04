import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Penting buat Windows
    },
    host: true, // Supaya bisa diakses dari luar container
    strictPort: true,
    port: 5173,
  }
})
