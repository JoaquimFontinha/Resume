import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Resume/', // Remplace 'Resume' par le nom de ton dépôt
  plugins: [react()]
});