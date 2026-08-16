import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/video-production/', // Строго имя твоего репозитория
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        review: resolve(__dirname, 'review.html'),
        service: resolve(__dirname, 'service.html'),
      },
    },
  },
  server: {
    open: true,
  },
});
