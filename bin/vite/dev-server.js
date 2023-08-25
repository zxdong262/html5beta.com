import logger from 'morgan'
import { viewPath, env, staticPath, cwd } from '../common.js'
import data from '../data/index.js'
import express from 'express'
import { resolve } from 'path'
import { createServer as createViteServer } from 'vite'
import conf from './conf.js'

const devPort = env.SERVER_DEV_PORT || 6068
const host = env.SERVER_HOST || '127.0.0.1'
const h = `http://${host}:${devPort}`
global.viteInst = null

async function handler (req, res) {
  const {
    folder,
    file
  } = req.params

  const view = `${folder}/${file}/index`
  // const fv = resolve(cwd, `src/views/${folder}/${file}/index.jsx`)
  const fv = `/src/views/${folder}/${file}/index.jsx`
  console.log('fv', fv)
  // const x = await global.viteInst.transformRequest(fv)
  // console.log(x, 'url', x.url)
  res.render(view, {
    ...data,
    dev: true,
    host: h,
    url: h + `/${folder}/${file}/`,
    jsUrl: fv,
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
    host: h,
    url: h,
    dev: true,
    cssUrl: h + '/' + view + '.bundle.css',
    jsUrl: '/src/views/index.jsx'
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

async function createServer () {
  const app = express()

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    ...conf,
    server: {
      middlewareMode: true
    },
    appType: 'custom'
  })
  global.viteInst = vite
  app.use(
    logger('tiny')
  )
  app.use(express.json())
  app.use(express.urlencoded({
    extended: true
  }))
  app.use(express.static(staticPath))
  app.set('views', viewPath)
  app.set('view engine', 'pug')

  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  app.use(vite.middlewares)
  app.get('/', handleIndex)
  app.post('/api/:api', handleApi)
  app.get('/page/:name.html', handlePage)
  app.get('/:folder/:file/', handler)
  app.get('/:folder/:file/:jsName', handlerJs)

  app.listen(devPort, host, () => {
    console.log(`server started at ${h}`)
  })
}

createServer()
