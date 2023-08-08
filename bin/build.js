import { buildPug } from './build-bug.js'
import { buildStatic } from './build-static.js'
import {
  mkdir
} from 'fs/promises'
import { resolve } from 'path'
import { cwd, targets, exe } from './common.js'

async function build (conf) {
  await mkdir(resolve(cwd, conf.to)).catch(console.log)
  await buildPug(conf.from, conf.to)
  await buildStatic(conf.from, conf.to)
}

async function main () {
  for (const conf of targets) {
    await build(conf)
  }
  await exe(
    'NODE_ENV=production DESC="html5beta.com" TITLE="html5beta.com" URL="https://html5beta.com" ENTRY_NAME=index ENTRY=src/views/index.js OUT=public LIB_NAME=Index node_modules/.bin/webpack --progress --config bin/webpack/webpack.config.js'
  )
}

main()
