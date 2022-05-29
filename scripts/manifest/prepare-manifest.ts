import * as fs from 'fs-extra'
import { resolvePath } from '../utils'
import { getManifest } from './get-manifest'

async function writeManifest() {
  const manifest = getManifest()

  const manifestPath = resolvePath('extension/manifest.json')

  console.log('[prepare-manifest] Writing manifest...')

  await fs.writeJSON(manifestPath, manifest, { spaces: 2 })

  console.log('[prepare-manifest] Done.')
}

writeManifest()
