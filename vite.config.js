import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import importCss from 'vite-plugin-import-css';
import path from 'path';

export default defineConfig({
  plugins: [react(), importCss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
    server: {
      proxy: {
        '/api': {
          target: 'https://test.api.amadeus.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
