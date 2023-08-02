import webpack from 'webpack'
import { config } from 'dotenv'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import data from '../data/index.js'

config()

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
      HOST: JSON.stringify(data.host)
    }
  })
]
