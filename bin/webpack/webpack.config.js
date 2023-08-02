import { env, cwd } from '../common.js'
import { resolve } from 'path'
import plugins from './plugins.js'
import devServer from './dev-server.js'
import rules from './rules.js'
import prod from './production.js'

const isProd = env.NODE_ENV === 'production'
let config = {
  mode: 'development',
  entry: {
    [env.ENTRY_NAME]: resolve(cwd, env.ENTRY)
  },
  output: {
    path: resolve(cwd, env.OUT),
    filename: '[name].bundle.js',
    publicPath: '/',
    chunkFilename: '[name].[contenthash].bundle.js',
    libraryTarget: 'var',
    library: env.LIB_NAME
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.json']
  },
  module: {
    rules
  },
  devtool: 'source-map',
  plugins,
  devServer
}

if (isProd) {
  config = prod(config)
}

export default config
