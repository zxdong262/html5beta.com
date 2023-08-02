import logger from 'morgan'
import { viewPath, env } from '../common.js'
import data from '../data/index.js'

const devPort = env.SERVER_DEV_PORT || 6068
const host = env.SERVER_HOST || '127.0.0.1'

function handler (req, res) {
  const {
    folder,
    file
  } = req.params
  const view = `${folder}/${file}/index`
  const h = `http://${host}:${devPort}`
  res.render(view, {
    ...data,
    url: h + `/${folder}/${file}/`,
    jsUrl: h + `/${folder}/${file}/${file}.bundle.js`,
    cssUrl: h + `/${folder}/${file}/${file}.bundle.css`
  })
}

function handlerJs (req, res) {
  const {
    jsName
  } = req.params
  console.log('jsName', jsName)
  res.redirect(data.host + '/' + jsName + '.js')
}

export default {
  allowedHosts: 'all',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  },
  historyApiFallback: true,
  hot: true,
  host,
  port: devPort,
  client: {
    logging: 'log'
  },
  onBeforeSetupMiddleware: function (devServer) {
    const {
      app
    } = devServer
    app.use(
      logger('tiny')
    )
    app.set('views', viewPath)
    app.set('view engine', 'pug')
    app.get('/:folder/:file/', handler)
  },
  proxy: {
    '/': {
      target: `http://${env.SERVER_HOST}:${env.SERVER_PORT}`,
      bypass: function (req, res, proxyOptions) {
        if (req.path.includes('.bundle.')) {
          return req.path
        }
      }
    }
  }
}
