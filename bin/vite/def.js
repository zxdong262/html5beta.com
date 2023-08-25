import { config } from 'dotenv'
import data from '../data/index.js'
import { env, isProd } from '../common.js'

config()

const host = isProd
  ? data.host
  : `http://127.0.0.1:${env.SERVER_DEV_PORT}`
const url = isProd
  ? env.LINK
  : host + env.OUT.replace('public', '') + '/'
const title = isProd
  ? env.TITLE
  : 'dev title'
const desc = isProd
  ? env.DESC
  : 'dev desc'
export default {
  'process.env.HOST': JSON.stringify(host),
  'process.env.LINK': JSON.stringify(url),
  'process.env.TITLE': JSON.stringify(title),
  'process.env.DESC': JSON.stringify(desc)
}
