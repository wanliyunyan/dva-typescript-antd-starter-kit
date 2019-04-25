/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use development
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');

module.exports = function (env) {
  return merge(commonConfig, {
    mode: env,
    entry: {
      bundle: './src/index.tsx',
    },
    output: {
      filename: 'assets/js/[name].js',
      sourceMapFilename: '[name].map',
    },
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      hot: true,
      open: true,
      stats: 'normal',
      contentBase: './src/',
      compress: true,
      // host: require('ip').address(),
      port: 8000,
      proxy: {
        '/api/*': {
          target: 'http://localhost:9090',
          secure: false,
          changeOrigin: true,
        },
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
};
