import fs from 'fs/promises'
import path from 'path'
import pug from 'pug'
import data from './data/index.js'

async function buildIndex () {
  const src = path.resolve(new URL('../src/views/index.pug', import.meta.url).pathname)
  const tar = path.resolve(new URL('../public/index.html', import.meta.url).pathname)
  const pugContent = await fs.readFile(src, 'utf8')
  const url = data.host
  const name = 'index'
  const htmlContent = pug.render(pugContent, {
    filename: src,
    ...data,
    pretty: false,
    url,
    cssUrl: url + '/' + name + '.bundle.css',
    jsUrl: url + '/' + name + '.bundle.js'
  })
  await fs.writeFile(tar, htmlContent, 'utf8')
}

async function buildPages () {
  const sourceDir = path.resolve(new URL('../src/views/page', import.meta.url).pathname)
  const targetDir = path.resolve(new URL('../public/page', import.meta.url).pathname)
  const list = await fs.readdir(sourceDir)
  await fs.mkdir(targetDir).catch(console.log)

  for (const file of list) {
    const filePath = path.join(sourceDir, file)
    const targetFilePath = path.join(
      targetDir,
      file.replace(/\.pug$/, '.html')
    )
    const pugContent = await fs.readFile(filePath, 'utf8')
    const htmlContent = pug.render(pugContent, {
      filename: filePath,
      ...data,
      pretty: false
    })
    await fs.writeFile(targetFilePath, htmlContent, 'utf8')
  }
}

async function run () {
  await buildPages()
  await buildIndex()
}

run()
