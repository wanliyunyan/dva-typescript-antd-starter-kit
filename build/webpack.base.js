const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// happypack 加速打包
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const env = process.argv.slice(-1)[0];

const devUrlLoader = 'url-loader?limit=8192&name=[hash:8].[name].[ext]';
const prodUrlLoader = 'url-loader?limit=8192&name=[hash:8].[name].[ext]&outputPath=assets/images/&publicPath=assets/images';

// 获取自己定义的要覆盖antd默认样式的文件
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, '../src/assets/style/theme.less'), 'utf8'));

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            // loader: 'happypack/loader?id=js',
            loader: 'babel-loader',
          },
          {
            //loader: 'happypack/loader?id=ts',  // 用这个打包速度慢了很多
            loader: 'ts-loader',
          },
        ],
        include: [
          path.join(__dirname, '../src'),
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            //loader: 'happypack/loader?id=js',
             loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
          }],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader?outputStyle=expanded&indentedSyntax'],
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader?outputStyle=expanded'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [{
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
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.less$/,
        exclude: /src/,
        use: ExtractTextPlugin.extract({
          use: [{
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
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot)$/,
        loader: env === 'development' ? devUrlLoader : prodUrlLoader,
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: 'ts',
      // threads: 4,
      threadPool: happyThreadPool,
      loaders: [
        {
          path: 'ts-loader',
          query: { happyPackMode: true },
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
      id: 'style',
      loaders: ['style-loader', 'css-loader'],
      threadPool: happyThreadPool,
    })
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules',
    ],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
    },
  },
};
