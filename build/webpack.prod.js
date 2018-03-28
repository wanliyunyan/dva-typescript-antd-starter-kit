/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use 开发环境webpack构建
 */

const commonConfig = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
  return Object.assign({}, commonConfig, {
    cache: false,
    devtool: false,
    entry: {
      bundle: './src/index.tsx',
      vendor: ['react', 'react-dom'],
      lib: ['antd'],
    },
    output: {
      path: path.join(__dirname, '/../dist/assets/'),
      filename: '[name].js',
      publicPath: '/assets',
      sourceMapFilename: '[name].map',
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest',
      },
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new ExtractTextPlugin({
        filename: 'style.css',
        disable: false,
        allChunks: true,
      }),
    ],
  });
};
