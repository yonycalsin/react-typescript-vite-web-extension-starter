import type { Manifest } from 'webextension-polyfill'
import { resolvePath } from '../utils'

export function getManifest() {
  const pkg = require(resolvePath('package.json'))

  const manifest: Manifest.WebExtensionManifest = {
    manifest_version: 2,
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,
    browser_action: {
      default_popup: './dist/popup/index.html',
    },
    options_ui: {
      page: './dist/options/index.html',
      open_in_tab: true,
      chrome_style: false,
    },
    background: {
      page: './dist/background/index.html',
      persistent: false,
    },
    permissions: ['tabs', 'storage', 'activeTab', 'http://*/', 'https://*/'],
  }

  return manifest
}
