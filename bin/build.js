import { buildPug } from './build-bug.js'
import { buildStatic } from './build-static.js'
// import {
//   mkdir
// } from 'fs/promises'
// import { resolve } from 'path'
import { targets, exe } from './common.js'

async function build (conf) {
  // await mkdir(resolve(cwd, conf.to)).catch(console.log)
  await buildStatic(conf.from, conf.to)
  await buildPug(conf.from, conf.to)
}

async function main () {
  await exe(
    'NODE_ENV=production DESC="html5beta.com" TITLE="html5beta.com" LINK="https://html5beta.com" ENTRY_NAME=index ENTRY=src/views/index.jsx OUT=public LIB_NAME=Index node_modules/.bin/vite build --config bin/vite/conf.js'
  )
  for (const conf of targets) {
    await build(conf)
  }
}

main()
