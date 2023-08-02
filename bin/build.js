import { buildPug } from './build-bug.js'
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
  const from = resolve(cwd, conf.from)
  const to = resolve(cwd, conf.to)
  await mkdir(to).catch(console.log)
  await buildPug(from, to)
}

async function main () {
  for (const conf of targets) {
    await build(conf)
  }
}

main()
