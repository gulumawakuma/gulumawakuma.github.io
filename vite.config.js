import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (id.includes('framer-motion')) return 'motion';
          if (
            id.includes('react-dom') ||
            id.includes('react-router') ||
            id.includes('/react/') ||
            id.includes('scheduler')
          ) {
            return 'react-vendor';
          }
          if (id.includes('react-helmet-async')) return 'helmet';
          if (id.includes('lucide-react')) return 'icons';
        },
      },
    },
  },
})
