/**
 * build common files with react module in it
 */
import fs from 'fs/promises'

export const buildStatic = async (sourceDir, targetDir) => {
  const list = await fs.readdir(sourceDir)
  for (const name of list) {
    const out = `${targetDir}/${name}`
    await fs.mkdir(out, { recursive: true })
  }
}
