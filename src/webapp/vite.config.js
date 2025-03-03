import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2407, // Change to your preferred port
    strictPort: true // Ensures Vite fails if the port is in use
  }
})
