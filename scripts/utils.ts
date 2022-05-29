import { resolve } from 'node:path'

export const port = parseInt(process.env.PORT || '') || 3000

export const isDev = process.env.NODE_ENV !== 'production'

export const resolvePath = (...args: string[]) => resolve(__dirname, '..', ...args)
