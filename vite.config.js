import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://v3.vitejs.ru/config/shared-options.html
export default defineConfig({
  server: {
    port: 8080,
    strictPort: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/app/scss/_imports.scss";`,
      },
    },
  },
  plugins: [vue()],
});
