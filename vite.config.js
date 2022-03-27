import { defineConfig } from 'vite'

// vite.config.js
export default defineConfig({
  server: {
    port: 3001
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  }
})
