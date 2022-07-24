/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use development
 */
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  output: {
    filename: "assets/js/[name].js",
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    // contentBase: "./src/",
    compress: true,
    // host: require('ip').address(),
    port: 8005,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    proxy: {
      "/api/*": {
        target: "http://localhost:9090",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};
