import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  // Use a repo-base in production (for GitHub Pages), but root in dev for HMR/assets
  base: mode === 'production' ? '/DSA_Learing_Hub/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 4000,
    open: true
  },
  preview: {
    port: 4173,
    open: true
  }
}));
