import { readDir, cwd } from '../common.js'
import { resolve } from 'path'
import resume from './resume.js'

export default [
  resume.openSourced.arr[0],
  ...readDir(
    resolve(cwd, 'src/views/apps'),
    'apps'
  )
]
