import { resolve } from 'path'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'PDFObjectVuePlugin',
      fileName: (format) => `pdfobject-vue.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'pdfobject'], // Do not bundle vue and pdfobject
      output: {
        globals: {
          vue: 'Vue',
          pdfobject: 'PDFObject'
        }
      }
    }
  }
});
