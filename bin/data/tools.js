import { readDir, cwd } from '../common.js'
import { resolve } from 'path'

export default readDir(
  resolve(cwd, 'src/views/tools'),
  'tools'
)
