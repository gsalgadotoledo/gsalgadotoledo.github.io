import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Sitio estático multi-page: un index.html por página. El prerender (scripts/prerender.mjs)
// corre después del build y deja el HTML de cada página con su contenido ya pintado.
export default defineConfig({
  plugins: [react()],
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        portfolio: resolve(import.meta.dirname, 'portfolio/index.html'),
        y2018: resolve(import.meta.dirname, 'portfolio/2018/index.html'),
        y2019: resolve(import.meta.dirname, 'portfolio/2019/index.html'),
        y2020: resolve(import.meta.dirname, 'portfolio/2020/index.html'),
        y2021: resolve(import.meta.dirname, 'portfolio/2021/index.html'),
        y2022: resolve(import.meta.dirname, 'portfolio/2022/index.html'),
        y2023: resolve(import.meta.dirname, 'portfolio/2023/index.html'),
        y2024: resolve(import.meta.dirname, 'portfolio/2024/index.html'),
        y2025: resolve(import.meta.dirname, 'portfolio/2025/index.html'),
        y2026: resolve(import.meta.dirname, 'portfolio/2026/index.html'),
      },
    },
  },
})
