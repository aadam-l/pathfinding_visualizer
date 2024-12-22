import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [], // Your existing plugins
  base: '/pathfinding_visualizer/', // GitHub repo name
  build: {
    outDir: 'dist', // Matches your deploy script
  },
});