/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use 开发环境webpack构建
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (env) {
  return merge(commonConfig, {
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
    plugins: [
      new HtmlWebpackPlugin({
        favicon: 'src/favicon.ico',
        template: 'src/assets/index.html',
        filename: 'index.html',
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new CleanWebpackPlugin(['dist']),
      /* new CopyWebpackPlugin([
        {
          from: '',
          to: 'assets/',
        },
      ]), */
    ],
  });
};
