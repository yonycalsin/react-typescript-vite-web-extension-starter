import { defineConfig } from 'vite'
import packageJson from './package.json'

import { isDev, resolvePath } from './scripts/utils'
import { getSharedConfig } from './vite.config'

export default defineConfig(config => {
  const sharedConfig = getSharedConfig(config)

  return {
    ...sharedConfig,
    build: {
      watch: isDev
        ? {
            include: [resolvePath('src/content-scripts/**/*')],
          }
        : undefined,
      outDir: resolvePath('extension/dist/content-scripts'),
      emptyOutDir: false,
      sourcemap: isDev ? 'inline' : false,
      lib: {
        entry: resolvePath('src/content-scripts/main.tsx'),
        name: packageJson.name,
        formats: ['iife'],
      },
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          extend: true,
        },
      },
    },
  }
})
