import { config as dotenvConfig } from 'dotenv'
import home from './home.js'
import resume from './resume.js'
import { pack } from '../common.js'
import tools from './tools.js'
import apps from './apps.js'
import sampleSize from 'lodash/sampleSize.js'

dotenvConfig()
const links = [
  {
    url: 'https://github.com/electerm/electerm-web',
    title: 'electerm-web'
  },
  {
    url: 'https://github.com/electerm/electerm-web-docker',
    title: 'electerm-web-docker'
  },
  {
    url: 'https://github.com/electerm/electerm-locales',
    title: 'electerm-locales'
  },
  {
    url: 'https://www.microsoft.com/store/apps/9NCN7272GTFF',
    title: 'Windows Store'
  },
  {
    url: 'https://snapcraft.io/electerm',
    title: 'Snap Store'
  },
  {
    url: 'https://electerm-repos.html5beta.com/deb',
    title: 'Electerm Debian Repository'
  },
  {
    url: 'https://electerm.html5beta.com/sponsor-electerm.html',
    title: 'Sponsor Electerm'
  },
  {
    url: 'https://electerm-cloud.html5beta.com/',
    title: 'electerm cloud'
  }
]
export default {
  slogon: 'ZHAO Xudong\'s Blog',
  siteName: 'html5beta.com',
  home,
  resume,
  list: [
    ...home,
    resume.openSourced.arr[0],
    ...sampleSize(resume.openSourced.arr.slice(1, 9), 6),
    ...links
  ],
  env: 'production',
  title: 'ZHAO Xudong\'s Blog - html5beta.com',
  description: 'ZHAO Xudong\'s personal blog. A place to record my learning web development, tools, and other things.',
  keywords: 'ZHAO Xudong, html5beta.com, blog, web development, front-end, javascript, nodejs, react, vue, css3, html5, resume, portfolio',
  tools,
  apps,
  cdn: process.env.CDN || 'https://html5beta.com',
  version: pack.version,
  host: process.env.HOST || 'https://html5beta.com',
  links: [
    {
      href: 'http://github.com/zxdong262',
      target: '_blank',
      rel: 'noreferrer',
      className: 'mg3r',
      text: 'GitHub'
    },
    {
      href: '/page/timeline.html',
      target: '_blank',
      rel: 'noreferrer',
      text: 'Resume'
    }
  ]
}
