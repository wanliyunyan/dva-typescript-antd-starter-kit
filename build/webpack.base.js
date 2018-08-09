const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.argv.slice(-1)[0];

const devUrlLoader = 'url-loader?limit=8192&name=[hash:8].[name].[ext]';
const prodUrlLoader = 'url-loader?limit=8192&name=[hash:8].[name].[ext]&outputPath=assets/images/&publicPath=assets/images';

// 获取自己定义的要覆盖antd默认样式的文件
const themeVariables = lessToJs(
  fs.readFileSync(
    path.join(__dirname, '../src/assets/style/theme.less'),
    'utf8',
  ),
);

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
        include: [path.join(__dirname, '../src')],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        // use: ExtractTextPlugin.extract({
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              namedExport: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: themeVariables,
            },
          },
          /* {
            loader: 'style-loader',
          }, */
        ],
        // fallback: 'style-loader',
        // }),
      },
      {
        test: /\.less$/,
        exclude: /src/,
        // use: ExtractTextPlugin.extract({
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: themeVariables,
            },
          },
          /* {
            loader: 'style-loader',
          }, */
        ],
        // fallback: 'style-loader',
        // }),
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          test: /\.(less|css|sass|scss)$/,
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: 'style.css',
    }),
    /* new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true,
    }), */
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
    },
  },
};
