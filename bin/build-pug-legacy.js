import fs from 'fs'
import path from 'path'
import pug from 'pug'
import data from './data/index.js'

// Function to read files recursively and process Pug files
const processFilesRecursively = (sourceDir, targetDir) => {
  fs.readdirSync(sourceDir).forEach((file) => {
    const filePath = path.join(sourceDir, file)
    const state = fs.statSync(filePath)
    const isDirectory = state.isDirectory()
    const tail = isDirectory ? '' : '.html'
    const targetFilePath = path.join(
      targetDir,
      file.replace(/\.pug$/, '') + tail
    )
    if (isDirectory && !file.endsWith('parts') && !file.endsWith('tools')) {
      // If it's a directory, create the corresponding directory in the target folder
      fs.mkdirSync(targetFilePath, { recursive: true })
      processFilesRecursively(filePath, targetFilePath)
    } else if (path.extname(file) === '.pug') {
      // If it's a Pug file, read the content and render it to HTML
      const pugContent = fs.readFileSync(filePath, 'utf8')
      const htmlContent = pug.render(pugContent, {
        filename: filePath,
        ...data,
        pretty: false
      })
      // Write the rendered HTML to the target file with the .html extension
      fs.writeFileSync(targetFilePath, htmlContent, 'utf8')
    }
  })
}

// Set the source and target directories
const sourceDir = path.resolve(new URL('../src/views', import.meta.url).pathname) // Replace with the path to your source folder
const targetDir = path.resolve(new URL('../public', import.meta.url).pathname) // Replace with the path to your target folder

// Call the function to process the files
processFilesRecursively(sourceDir, targetDir)
