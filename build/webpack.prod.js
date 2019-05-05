/*
 * @ author wanliyunyan
 * @ github  https://github.com/wanliyunyan
 * @ use production
 */
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, "/../dist/"),
    filename: "assets/js/[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    /* new CopyWebpackPlugin([
        {
          from: '',
          to: 'assets/',
        },
      ]), */
  ]
};
