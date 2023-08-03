import { buildPug } from './build-bug.js'
import { buildStatic } from './build-static.js'
import {
  mkdir
} from 'fs/promises'
import { resolve } from 'path'
import { cwd, targets } from './common.js'

async function build (conf) {
  await mkdir(resolve(cwd, conf.to)).catch(console.log)
  await buildPug(conf.from, conf.to)
  await buildStatic(conf.from, conf.to)
}

async function main () {
  for (const conf of targets) {
    await build(conf)
  }
}

main()
