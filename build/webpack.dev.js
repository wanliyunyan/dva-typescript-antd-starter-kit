/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use development
 */
const webpack = require("webpack");

module.exports = {
  output: {
    filename: "assets/js/[name].js",
    sourceMapFilename: "[name].map"
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    hot: true,
    open: true,
    stats: "normal",
    contentBase: "./src/",
    compress: true,
    // host: require('ip').address(),
    port: 8001,
    disableHostCheck: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:9090',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
