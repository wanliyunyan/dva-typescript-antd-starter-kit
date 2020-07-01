/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use production
 */
const os = require("os");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/../dist/"),
    filename: "assets/js/[name].js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
    /* new CopyWebpackPlugin([
        {
          from: '',
          to: 'assets/',
        },
      ]), */
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true, // Ignored in webpack 5! Please use https://webpack.js.org/configuration/other-options/#cache.
        sourceMap: true, // Must be set to true if using source-maps in production
        parallel: os.cpus().length,
        // If you avoid building with comments, use this config:
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
