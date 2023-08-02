// dynamicImport.js
import fs from 'fs'
export function req (filePath) {
  return fs.readFileSync(filePath)
}
