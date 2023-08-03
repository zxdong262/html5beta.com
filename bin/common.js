import { config as conf } from 'dotenv'
import { readFileSync, readdirSync } from 'fs'
import { resolve } from 'path'
import { exec } from 'child_process'

conf()

export const cwd = process.cwd()
export const env = process.env
export const isProd = env.NODE_ENV === 'production'
const packPath = resolve(cwd, 'package.json')
export const pack = JSON.parse(readFileSync(packPath).toString())
export const version = pack.version
export const viewPath = resolve(cwd, 'src/views')
export const staticPath = resolve(cwd, 'src/static')
export function cap (inputString) {
  if (typeof inputString !== 'string' || inputString.length === 0) {
    return inputString
  }
  const words = inputString.split('-')
  const capitalizedString = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join('')
  return capitalizedString
}

export function exe (command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
        return
      }
      resolve(stdout.trim())
    })
  })
}

export function extractDescription (pubContent) {
  const regex = /meta\(name=['"]description['"]\s+content=['"]([^'"]+)['"]\)/
  const match = pubContent.match(regex)
  return match ? match[1] : null
}

export function extractTitle (pugContent) {
  const regex = /title\s+(.*)/
  const match = pugContent.match(regex)
  return match ? match[1].trim() : null
}

export function readDir (src, path) {
  return readdirSync(src)
    .map(file => {
      const tar = resolve(src, file, 'index.pug')
      const str = readFileSync(tar, 'utf-8')
      const desc = extractDescription(str)
      const title = extractTitle(str)
      return {
        desc,
        title,
        url: '/' + path + '/' + file + '/'
      }
    })
}

export const targets = [
  {
    from: 'src/views/tools',
    to: 'public/tools'
  }
]
