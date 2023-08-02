import { buildPug } from './build-bug.js'
import { buildStatic } from './build-static.js'
import {
  mkdir
} from 'fs/promises'
import { resolve } from 'path'
import { cwd } from './common.js'

const targets = [
  {
    from: 'src/views/tools',
    to: 'public/tools'
  }
]

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
