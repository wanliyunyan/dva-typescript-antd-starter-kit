/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use 开发环境webpack构建
 */
const commonConfig = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      path: path.join(__dirname, '/../dist/'),
      filename: 'assets/js/[name].js',
      publicPath: '',
      sourceMapFilename: '[name].map',
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest',
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: 'src/favicon.ico',
        template: 'src/assets/index.html',
        filename: 'index.html',
      }),
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
      /* new CopyWebpackPlugin([
        {
          from: '',
          to: 'assets/',
        },
      ]), */
    ],
  });
};
