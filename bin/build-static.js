/**
 * build common files with react module in it
 */
import fs from 'fs/promises'
import { cap, exe, extractTitle, extractDescription } from './common.js'
// import data from './data/index.js'

export const buildStatic = async (sourceDir, targetDir) => {
  const list = await fs.readdir(sourceDir)
  for (const name of list) {
    const entry = `${sourceDir}/${name}/index.jsx`
    const out = `${targetDir}/${name}`
    const lib = cap(name)
    const urlPath = targetDir.replace('public/', '')
    const url = '/' + urlPath + '/' + name + '/'
    const entryPug = `${sourceDir}/${name}/index.pug`
    const str = await fs.readFile(entryPug, 'utf-8')
    const title = extractTitle(str)
    const desc = extractDescription(str)
    await exe(
      `NODE_ENV=production DESC="${desc}" TITLE="${title}" LINK="${url}" ENTRY_NAME=${name} ENTRY=${entry} OUT=${out} LIB_NAME=${lib} node_modules/.bin/vite build --config bin/vite/conf.js`
    )
  }
}
