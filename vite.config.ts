import { defineConfig, PluginOption, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

import { isDev, resolvePath } from './scripts/utils'

// https://vitejs.dev/config/
export default defineConfig((config): UserConfig => {
  const plugins: PluginOption[] = [react()]

  if (config.command === 'build') {
    plugins.push(
      createHtmlPlugin({
        minify: true,
      }),
    )
  }

  return {
    plugins,
    root: resolvePath('src'),
    base: '/dist/',
    define: {
      __DEV__: isDev,
    },
    resolve: {
      alias: {
        '~/': resolvePath('src'),
      },
    },
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
  }
})
