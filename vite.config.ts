import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.CLIENT_PORT)
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
