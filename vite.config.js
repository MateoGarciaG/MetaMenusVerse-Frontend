import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// vite.config.js
export default defineConfig({
  server: {
    // Change port
    port: 3001,
  },
  // Preprocessor CSS as SASS
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  // Change default directory path
  root,
  build: {
    // Path dist/
    outDir,
    // It's okay if it's empty
    emptyOutDir: true,
    // https://www.youtube.com/watch?v=L23bAMdgOZA
    //sourcemap: true,
    // Pages
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        // Add others
      }
    }
  },

});
