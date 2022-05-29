import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { isDev, resolvePath } from './scripts/utils'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolvePath('src'),
  resolve: {
    alias: {
      '~/': resolvePath('src'),
    },
  },
  define: {
    __DEV__: isDev,
  },
  base: '/dist/',
  build: {
    outDir: resolvePath('extension/dist'),
    emptyOutDir: true,
    sourcemap: isDev ? 'inline' : false,
    rollupOptions: {
      input: {
        background: resolvePath('src/background/index.html'),
        options: resolvePath('src/options/index.html'),
        popup: resolvePath('src/popup/index.html'),
      },
    },
  },
  plugins: [react()],
})
