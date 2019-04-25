/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use production
 */
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonConfig = require('./webpack.base.js');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (env) {
  return merge(commonConfig, {
    mode: env,
    entry: {
      bundle: './src/index.tsx',
    },
    output: {
      path: path.join(__dirname, '/../dist/'),
      filename: 'assets/js/[name].js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      /* new CopyWebpackPlugin([
        {
          from: '',
          to: 'assets/',
        },
      ]), */
    ],
  });
};
