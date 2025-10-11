/**
 * build common files with react module in it
 */
import fs from 'fs/promises'
import { resolve } from 'path'
import pug from 'pug'
import data from './data/index.js'
import { cwd } from './common.js'

export const buildPug = async (sourceDir, targetDir) => {
  const list = await fs.readdir(sourceDir)
  for (const name of list) {
    const filePath = resolve(cwd, sourceDir, name, 'index.pug')
    const dirToMake = resolve(cwd, targetDir, name)
    const targetFilePath = resolve(dirToMake, 'index.html')
    await fs.mkdir(dirToMake).catch(console.log)
    const pugContent = await fs.readFile(filePath, 'utf8')
    const urlPath = targetDir.replace('public/', '')
    const url = '/' + urlPath + '/' + name + '/'
    const htmlContent = pug.render(pugContent, {
      filename: filePath,
      ...data,
      pretty: false,
      url,
      cssUrl: '/index.bundle.css',
      jsUrl: '/index.bundle.js'
    })
    await fs.writeFile(targetFilePath, htmlContent, 'utf8')
  }
}
