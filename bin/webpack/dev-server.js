import logger from 'morgan'
import { viewPath, env, staticPath, cwd } from '../common.js'
import data from '../data/index.js'
import express from 'express'
import { resolve } from 'path'

const devPort = env.SERVER_DEV_PORT || 6068
const host = env.SERVER_HOST || '127.0.0.1'
const h = `http://${host}:${devPort}`

function handler (req, res) {
  const {
    folder,
    file
  } = req.params
  const view = `${folder}/${file}/index`
  res.render(view, {
    ...data,
    host: h,
    url: h + `/${folder}/${file}/`,
    jsUrl: h + `/${folder}/${file}/${file}.bundle.js`,
    cssUrl: h + `/${folder}/${file}/${file}.bundle.css`
  })
}

async function handleApi (req, res, next) {
  const {
    api
  } = req.params
  console.log('req api')
  const f = resolve(cwd, 'api', api + '.js')
  const func = await import(f)
    .then(d => d.default)
    .catch(console.log)
  await func(req, res)
}

function handlerJs (req, res) {
  const {
    jsName
  } = req.params

  res.redirect(h + '/' + jsName)
}

function handleIndex (req, res) {
  const view = 'index'
  res.render(view, {
    ...data,
    host: h
  })
}

function handlePage (req, res) {
  const {
    name
  } = req.params
  const view = `page/${name}`
  res.render(view, {
    ...data,
    host: h
  })
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
    app.use(express.json())
    app.use(express.urlencoded())
    app.use(express.static(staticPath))
    app.set('views', viewPath)
    app.set('view engine', 'pug')
    app.get('/', handleIndex)
    app.post('/api/:api', handleApi)
    app.get('/page/:name.html', handlePage)
    app.get('/:folder/:file/', handler)
    app.get('/:folder/:file/:jsName', handlerJs)
  }
}
