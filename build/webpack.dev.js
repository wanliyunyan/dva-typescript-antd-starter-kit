/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use 开发环境webpack构建
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const lessToJs = require('less-vars-to-js');
const fs = require('fs');

// happypack 加速打包
const HappyPack = require('happypack');
const os = require('os');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const commonConfig = require('./webpack.base.js');

// 获取自己定义的要覆盖antd默认样式的文件
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, '../src/assets/style/theme.less'), 'utf8'));

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
    cache: true,
    devtool: 'cheap-module-eval-source-map',
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
      proxy: {
        '/api/*': {
          target: 'http://localhost:9090',
          secure: false,
          changeOrigin: true,
        },
      },
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
      new HappyPack({
        id: 'ts',
        threadPool: happyThreadPool,
        loaders: [
          {
            path: 'ts-loader',
            query: { happyPackMode: true, transpileOnly: true },
          },
        ],
      }),
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
      new HappyPack({
        id: 'js',
        loaders: ['babel-loader'],
        threadPool: happyThreadPool,
      }),
      new HappyPack({
        id: 'less_src',
        loaders: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            namedExport: true,
            camelCase: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        }, {
          loader: 'postcss-loader',
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: themeVariables,
          },
        }],
        threadPool: happyThreadPool,
      }),
      new HappyPack({
        id: 'less_node_modules',
        loaders: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        }, {
          loader: 'postcss-loader',
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: themeVariables,
          },
        }],
        threadPool: happyThreadPool,
      }),
    ],
  });
};
