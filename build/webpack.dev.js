/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use development
 */
const webpack = require("webpack");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  output: {
    filename: "assets/js/[name].js"
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    stats: "normal",
    contentBase: "./src/",
    compress: true,
    // host: require('ip').address(),
    port: 8001,
    disableHostCheck: true,
    overlay: {
      errors: true,
      warnings: false
    },
    proxy: {
      "/api/*": {
        target: "http://localhost:9090",
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HardSourceWebpackPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ]
};
