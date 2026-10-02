import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Static multi-page site: one index.html per page. The prerender (scripts/prerender.mjs) runs
// after the build and leaves each React page's HTML with its content already painted.
export default defineConfig({
  plugins: [react()],
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        resume: resolve(import.meta.dirname, 'resume/index.html'),
      },
    },
  },
})
