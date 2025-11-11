import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
  define: {
    // Polyfill for Buffer and process in browser environment
    'global': 'window', // Define global as window
    'global.Buffer': 'buffer.Buffer', // Map global.Buffer to buffer.Buffer
    'process': { // Define process object
      env: {} // Empty env object
    }
  }
})

