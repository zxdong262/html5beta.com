import { readDir, cwd } from '../common.js'
import { resolve } from 'path'
import resume from './resume.js'

export default [
  resume.openSourced.arr[0],
  {
    name: 'China VS rest of the world',
    description: 'a comparison between China and the rest of the world in terms of GDP per capita, life expectancy, and education.',
    homepage: 'https://china-vs-rest-of-the-world.html5beta.com'
  },
  {
    name: 'China VS India',
    description: 'a comparison between China and India in terms of GDP per capita, etc.',
    homepage: 'https://china-vs-india.html5beta.com'
  },
  ...readDir(
    resolve(cwd, 'src/views/apps'),
    'apps'
  )
]
