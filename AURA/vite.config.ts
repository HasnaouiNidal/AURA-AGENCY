import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        fs: {
          strict: false
        }
      },
      plugins: [react(), tailwindcss()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
          tailwindcss: path.resolve(__dirname, 'node_modules/tailwindcss/index.css'),
          motion: path.resolve(__dirname, 'node_modules/motion'),
          'motion/react': path.resolve(__dirname, 'node_modules/motion/dist/es/react.mjs'),
          recharts: path.resolve(__dirname, 'node_modules/recharts'),
        }
      }
    };
});
