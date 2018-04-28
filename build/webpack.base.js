const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const command = process.argv.slice(2)[0];
const env = command.substring(command.indexOf('=') + 1);
const devUrlLoader = 'url-loader?limit=8192&name=[hash:8].[name].[ext]';
const prodUrlLoader = 'url-loader?limit=8192&name=[hash:8].[name].[ext]&outputPath=assets/images/&publicPath=assets/images';

// 获取自己定义的要覆盖antd默认样式的文件
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, '../src/assets/style/theme.less'), 'utf8'));

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
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
              minimize: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('postcss-import')(),
                require('autoprefixer')({
                  browsers: ['last 15 versions'],
                }),
              ],
            },
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
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('postcss-import')(),
                require('autoprefixer')({
                  browsers: ['last 15 versions'],
                }),
              ],
            },
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
        loader: env === 'dev' ? devUrlLoader : prodUrlLoader,
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      config: path.resolve(__dirname, 'src/config/'),
      shared: path.resolve(__dirname, 'src/shared/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
};
