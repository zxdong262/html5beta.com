require('dotenv').config()
const home = require('./home')
const resume = require('./resume')
const pack = require('../../package.json')

module.exports = {
  slogon: 'About or not about html5',
  siteName: 'html5beta.com',
  home,
  resume,
  list: [
    ...home,
    ...resume.openSourced.arr.slice(0, 10)
  ],
  env: 'production',
  cdn: process.env.CDN,
  version: pack.version,
  host: process.env.HOST
}
