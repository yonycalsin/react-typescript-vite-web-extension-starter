import { ConfigEnv, defineConfig, PluginOption, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

import { isDev, resolvePath } from './scripts/utils'

export const getSharedConfig = (config: ConfigEnv): UserConfig => {
  const plugins: PluginOption[] = [react()]

  if (config.command === 'build') {
    plugins.push(
      createHtmlPlugin({
        minify: true,
      }),
    )
  }

  return {
    root: resolvePath('src'),
    plugins,
    resolve: {
      alias: {
        '~/': resolvePath('src'),
      },
    },
    define: {
      __DEV__: isDev,
    },
    optimizeDeps: {
      include: ['webextension-polyfill'],
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig((config): UserConfig => {
  const sharedConfig = getSharedConfig(config)

  return {
    ...sharedConfig,
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
  }
})
