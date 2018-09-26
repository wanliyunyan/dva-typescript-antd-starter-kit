/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use 开发环境webpack构建
 */
// const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');

function getIPAddress() {
  const interfaces = require('os').networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i += 1) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

module.exports = function (env) {
  return merge(commonConfig, {
    mode: env,
    cache: true,
    devtool: 'cheap-module-eval-source-map',
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
      // host: getIPAddress(),
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
