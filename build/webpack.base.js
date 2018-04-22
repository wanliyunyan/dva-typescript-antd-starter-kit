const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const command = process.argv.slice(2)[0];
const env = command.substring(command.indexOf('=') + 1);
const devUrlLoader = 'url-loader?limit=8192&name=[hash:8].[name].[ext]';
const prodUrlLoader = 'url-loader?limit=8192&name=[hash:8].[name].[ext]&outputPath=assets/images/&publicPath=assets/images';

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
            /* options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }, */
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
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
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
                // require('stylelint')(),
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
