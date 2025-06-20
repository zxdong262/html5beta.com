import { config as dotenvConfig } from 'dotenv'
import home from './home.js'
import resume from './resume.js'
import { pack } from '../common.js'
import tools from './tools.js'
import apps from './apps.js'
import sampleSize from 'lodash/sampleSize.js'

dotenvConfig()

export default {
  slogon: 'About or not about html5',
  siteName: 'html5beta.com',
  home,
  resume,
  list: [
    ...home,
    resume.openSourced.arr[0],
    ...sampleSize(resume.openSourced.arr.slice(1, 9), 6)
  ],
  env: 'production',
  tools,
  apps,
  cdn: process.env.CDN || 'https://html5beta.com',
  version: pack.version,
  host: process.env.HOST || 'https://html5beta.com'
}
