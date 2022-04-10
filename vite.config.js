import { defineConfig } from "vite";
import { resolve } from "path";
// https://github.com/IndexXuan/vite-plugin-html-template
import htmlTemplate from "vite-plugin-html-template";
import mpa from 'vite-plugin-mpa';

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// * vite.config.js
export default defineConfig({
  plugins: [
    mpa({
      // * options
    }),
    // ...other plugins
    htmlTemplate({
      /** Options */
      pagesDir: resolve(root, "pages"),
      pages: {
        index: {
          template: resolve(root, "pages/index.html"),
          title: "Homepage",
          entry: resolve(root, "pages", "main.js"),
        },
      },
      // * expose to template
      data: {
        title: "Homepage",
      },
    }),
  ],
  server: {
    // * Change port
    port: 3001,
  },
  // * Preprocessor CSS as SASS
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  // * Change default directory path
  root,
  resolve: {
    alias: {
      "@": resolve(__dirname, './src'),
    },
  },
  build: {
    // * Path dist/
    outDir,
    // * It's okay if it's empty
    emptyOutDir: true,
    // * https://www.youtube.com/watch?v=L23bAMdgOZA
    //sourcemap: true,
    // Pages
    // rollupOptions: {
    //   input: {
    //     main: resolve(root, "index.html"),
    // * Add others
    //   },
    // },
  },
});
