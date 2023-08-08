// resume data
import extras from './open-source-extra.js'

export default {

  // open sourced
  openSourced: {
    arr: [
      ...extras,
      {
        name: 'simple-modules',
        description: 'simple dom/ajax/event handler etc',
        keywords: [
          'simple-modules'
        ],
        homepage: 'https://github.com/zxdong262/simple-modules',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/simple-modules'
        }
      },
      {
        name: 'svg-reader',
        description: 'sync read svg icons and parse to icons object',
        keywords: [
          'svg-reader',
          'svg'
        ],
        homepage: 'https://github.com/zxdong262/svg-reader',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/svg-reader'
        }
      },
      {
        name: 'zproxy',
        description: 'a app proxy http post/get from server to local server',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/zproxy.git'
        },
        keywords: [
          'proxy',
          'server',
          'local',
          'websocket'
        ],
        homepage: 'https://github.com/zxdong262/zproxy'
      },
      {
        name: 'react-lib-starter-kit',
        version: '0.0.1',
        description: 'react pagenav component',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/react-lib-starter-kit'
        },
        keywords: [
          'react',
          'starter-kit'
        ],
        homepage: 'https://github.com/zxdong262/react-lib-starter-kit'
      },
      {
        name: 'react-server-render-starter-kit',
        version: '0.0.2',
        description: 'a react server render app starter kit with redux/react-router/async/await/webpack support',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/react-server-render-starter-kit.git'
        },
        keywords: [
          'react',
          'server render',
          'starter'
        ],
        license: 'MIT',
        homepage: 'https://github.com/zxdong262/react-server-render-starter-kit'
      },
      {
        name: 'redux-factories',
        version: '0.2.0',
        description: 'a factory lib to produce redux constants and reducers of certain format',
        repository: {
          type: 'git',
          url: 'git+https://github.com/zxdong262/redux-factories.git'
        },
        keywords: [
          'redux',
          'reducers',
          'constant',
          'factory',
          'redux-factories'
        ],
        license: 'MIT',
        homepage: 'https://github.com/zxdong262/redux-factories#readme'
      },
      {
        name: 'pm2-mon',
        description: "monit pm2 process by 'pgrep node', if no node process, run specified restart command/script",
        keywords: [
          'version',
          'package.json'
        ],
        homepage: 'https://github.com/zxdong262/pm2-mon',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/pm2-mon'
        }
      },
      {
        name: 'version-fixer',
        description: 'read current installed module version and update package.json',
        keywords: [
          'version',
          'package.json'
        ],
        homepage: 'https://github.com/zxdong262/version-fixer',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/version-fixer'
        }
      },
      {
        name: 's-validater',
        description: 'a validate lib for nodejs.',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/s-validater'
        },
        keywords: [
          'validate'
        ],
        homepage: 'https://github.com/zxdong262/s-validater'
      },
      {
        name: 'zpager',
        description: 'a nodejs module to render pagenav html',
        keywords: [
          'pagenav',
          'js'
        ],
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/pager'
        },
        homepage: 'https://github.com/zxdong262/pager'
      },
      {
        name: 'canvas-captcha',
        description: 'a nodejs captcha module based on node-canvas',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/canvas-captcha'
        },
        keywords: [
          'captcha',
          'canvas',
          'cairo'
        ],
        homepage: 'https://github.com/zxdong262/canvas-captcha'
      },
      {
        name: 'promise-mongo',
        description: 'a mongodb wrapper, make everything return promise.',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/promise-mongo'
        },
        keywords: [
          'mongodb',
          'promise'
        ],
        homepage: 'https://github.com/zxdong262/promise-mongo'
      },
      {
        name: 'canvas-qr',
        description: 'qrcode creator based on node-canvas and qr.js',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/canvas-qr'
        },
        keywords: [
          'canvas',
          'qrcode',
          'qr'
        ],
        homepage: 'https://github.com/zxdong262/canvas-qr'
      },
      {
        name: 'jade-precompiler',
        description: 'comile a folder of jade template to javascript code text so you can insert them to jade template later.',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/jade-precompiler'
        },
        keywords: [
          'validate'
        ],
        homepage: 'https://github.com/zxdong262/jade-precompiler'
      },
      {
        name: 'light-validater',
        description: 'a validate lib for nodejs.',
        repository: {
          type: 'git',
          url: 'https://github.com/zxdong262/light-validater'
        },
        keywords: [
          'validate'
        ],
        homepage: 'https://github.com/zxdong262/light-validater'
      }
    ]
  },
  // end open sourced

  articles: {
    arr: [
      {
        url: 'https://html5beta.com/page/tutorial-reading-captcha-with-tensorflow.html',
        title: 'A tutorial of reading captcha with tensorflow',
        desc: 'This tutorial, will give another example, a little more complicated and realistic one: reading captcha images with TensorFlow Keras API...'
      },
      {
        url: 'https://medium.com/ringcentral-developers/build-chrome-extension-for-crms-with-ringcentral-embeddable-widgets-728896b03c11',
        title: 'Build Chrome extension for CRMs with RingCentral Embeddable widgets',
        desc: 'About RingCentral Embeddable widgets RingCentral Embeddable widgets is a powerful tool for CRMs, its core power is add click-to-call function...'
      },
      {
        url: 'https://medium.com/ringcentral-developers/introduction-of-ringcentral-for-hubspot-browser-extension-6f2e288cb086',
        title: 'Introducing the HubSpot Browser Extension for RingCentral',
        desc: 'We recently released version 1.00 for the RingCentral for HubSpot browser extension(community). If you are using RingCentral and HubSpot, then...'
      },
      {
        url: 'https://medium.com/ringcentral-developers/create-ringcentral-glip-chatbot-with-chatbot-factory-cli-tool-b18be87a5ed',
        title: 'Create RingCentral Glip Chatbot with Chatbot Factory (CLI Tool)',
        desc: 'We have released the chatbot framework for javascript created by Tyler. Tyler also published a blog post about it RingCentral chatbot framework...'
      },
      {
        url: 'https://medium.com/ringcentral-developers/learn-how-to-create-your-own-sdk-source-for-ringcentral-engage-digital-7178f2bde695',
        title: 'Learn How to Create Your Own SDK Source for RingCentral Engage Digital',
        desc: 'With RingCentral Engage Digital, your company can connect all their different customer service channels, including email, twitter, facebook...'
      }
    ]
  },

  // end articles

  timeline: {
    arr: [

    ]
  }

}
