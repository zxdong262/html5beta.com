import webpack from 'webpack'
import { config } from 'dotenv'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import data from '../data/index.js'
import { env, isProd } from '../common.js'

config()

const host = isProd
  ? data.host
  : `http://127.0.0.1:${env.SERVER_DEV_PORT}`
const url = isProd
  ? env.URL
  : host + env.OUT.replace('public', '') + '/'
const title = isProd
  ? env.TITLE
  : 'dev title'
const desc = isProd
  ? env.DESC
  : 'dev desc'
export default [
  new MiniCssExtractPlugin({
    filename: '[name].bundle.css'
  }),
  new webpack.LoaderOptionsPlugin({
    test: /\.styl$/,
    stylus: {
      preferPathResolver: 'webpack'
    },
    'resolve url': false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      HOST: JSON.stringify(host),
      URL: JSON.stringify(url),
      TITLE: JSON.stringify(title),
      DESC: JSON.stringify(desc)
    }
  })
]
