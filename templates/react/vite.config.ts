import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// When deploying to a sub-path (e.g. GitHub Pages project sites), the CI
// pipeline sets VITE_BASE_PATH (e.g. "/my-repo/react/"). Left as "/" for local
// development so the app keeps serving from the root.
const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
