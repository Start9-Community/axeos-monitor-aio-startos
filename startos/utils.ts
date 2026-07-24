import * as fs from 'node:fs/promises'
import { SubContainerEager, T } from '@start9labs/start-sdk'

export const uiPort = 3000

/*
 * Checks if a file exists at the given path in the subcontainer.
 * If it does not exist, it copies the file from the source path to the destination path.
 */
export async function ensureFileExists<
  Manifest extends T.SDKManifest,
  Effects extends T.Effects,
>(
  subcontainer: SubContainerEager<Manifest, Effects>,
  src: string,
  dest: string,
) {
  const destPath = `${subcontainer.rootfs}${dest}`
  try {
    await fs.access(destPath, fs.constants.F_OK)
  } catch {
    await subcontainer.exec([
      'sh',
      '-c',
      `mkdir -p $(dirname ${dest}) && cp ${src} ${dest}`,
    ])
  }
}
