import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor code into its own chunk
          }
          if (id.includes('src/components')) {
            return 'components'; // Separate components into their own chunk
          }
          if (id.includes('src/hooks')) {
            return 'hooks'; // Separate hooks into their own chunk
          }
          if (id.includes('src/utils')) {
            return 'utils'; // Separate utils into their own chunk
          }
          if (id.includes('src/contexts')) {
            return 'contexts'; // Separate contexts into their own chunk
          }
          if (id.includes('src/pages')) {
            return 'pages'; // Separate pages into their own chunk
          }
          if (id.includes('src/assets')) {
            return 'assets'; // Separate assets into their own chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 800, // Set to a higher limit if necessary
  },
});
