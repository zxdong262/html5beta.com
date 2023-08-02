/**
 * build common files with react module in it
 */
import fs from 'fs/promises'
import { cap, exe } from './common.js'

export const buildStatic = async (sourceDir, targetDir) => {
  const list = await fs.readdir(sourceDir)
  for (const name of list) {
    const entry = `${sourceDir}/${name}/index.jsx`
    const out = `${targetDir}/${name}`
    const lib = cap(name)
    await exe(
      `NODE_ENV=production ENTRY_NAME=${name} ENTRY=${entry} OUT=${out} LIB_NAME=${lib} node_modules/.bin/webpack --progress --config bin/webpack/webpack.config.js`
    )
  }
}
