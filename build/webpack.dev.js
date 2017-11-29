
/*
 * @ author sessionboy
 * @ github  https://github.com/sessionboy
 * @ website http://sinn.boyagirl.com
 * @ use 开发环境webpack构建
 */
const commonConfig = require('./webpack.base.js');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
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
      port: 8000,
/*      proxy: {
        '/api': {
       //  target: 'http://www.boyagirl.com:8080',
          target: 'http://localhost:8080',
          secure: false,
        },
      },*/
    },
    plugins: [
      // new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      // new OpenBrowserPlugin({ url: 'http://localhost:8000' }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['lib', 'vendor', 'manifest'],
        minChunks: 2,
      }),
      new ExtractTextPlugin({
        filename: 'style.css',
        disable: false,
        allChunks: true,
      }),
      /*new webpack.WatchIgnorePlugin([
        /css\.d\.ts$/,
      ]),*/
    ],
  });
};
