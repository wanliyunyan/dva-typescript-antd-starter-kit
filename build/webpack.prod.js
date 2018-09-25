/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use 开发环境webpack构建
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (env) {
  return merge(commonConfig, {
    mode: 'production',
    cache: false,
    devtool: false,
    entry: {
      bundle: './src/index.tsx',
    },
    output: {
      path: path.join(__dirname, '/../dist/'),
      filename: 'assets/js/[name].js',
      publicPath: '',
      sourceMapFilename: '[name].map',
    },
    plugins: [
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
