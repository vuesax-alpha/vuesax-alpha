import { existsSync } from 'fs'
import { mkdir, writeFile } from 'fs/promises'
import { copy } from 'fs-extra'

export const writeJson = (path: string, data: any, spaces = 0) =>
  writeFile(path, JSON.stringify(data, undefined, spaces), 'utf-8')

export const ensureDir = async (path: string) => {
  if (!existsSync(path)) await mkdir(path, { recursive: true })
}

export const cpdirRecursive = async (fromPath: string, toPath: string) => {
  await copy(fromPath, toPath, { overwrite: true, recursive: true })
}
