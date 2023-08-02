import webpack from 'webpack'
import { config } from 'dotenv'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

config()

export const extractTextPlugin1 = new MiniCssExtractPlugin({
  filename: '[name].bundle.css'
})
export const stylusSettingPlugin = new webpack.LoaderOptionsPlugin({
  test: /\.styl$/,
  stylus: {
    preferPathResolver: 'webpack'
  },
  'resolve url': false
})
