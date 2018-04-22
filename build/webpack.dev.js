/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use 开发环境webpack构建
 */
const commonConfig = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function getIPAddress() {
  const interfaces = require('os').networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

module.exports = function (env) {
  return Object.assign({}, commonConfig, {
    cache: true,
    devtool: 'source-map',
    entry: {
      bundle: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './src/index.tsx',
      ],
      vendor: ['react', 'react-dom'],
      lib: ['antd'],
    },
    output: {
      path: path.join(__dirname, '/../dist/assets'),
      filename: '[name].js',
      publicPath: '/assets/',
      sourceMapFilename: '[name].map',
    },
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      hot: true,
      open: true,
      stats: 'minimal',
      contentBase: './src/',
      publicPath: '/assets/',
      compress: true,
      // host: getIPAddress(),
      port: 8000,
      /* proxy: {
        '/api/v1/last-stories': {
          target: 'https://zhihu-daily.leanapp.cn',
          secure: false,
          changeOrigin: true,
        },
      }, */
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest',
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin({
        filename: 'style.css',
        disable: false,
        allChunks: true,
      }),
    ],
  });
};
