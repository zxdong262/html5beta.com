import { config as conf } from 'dotenv'
import { readFileSync } from 'fs'
import { resolve } from 'path'

conf()

export const cwd = process.cwd()
export const env = process.env
const packPath = resolve(cwd, 'package.json')
export const pack = JSON.parse(readFileSync(packPath).toString())
export const version = pack.version
export const viewPath = resolve(cwd, 'src/views')