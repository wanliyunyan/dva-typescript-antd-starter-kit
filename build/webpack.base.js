const fs = require("fs");
const os = require("os");
const path = require("path");
const lessToJs = require("less-vars-to-js");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

// Override the default theme of antd
const themeVariables = lessToJs(
  fs.readFileSync(
    path.join(__dirname, "../src/assets/style/theme.less"),
    "utf8"
  )
);

module.exports = function() {
  const env = process.argv.slice(-1)[0];
  const dev = env === "development";
  const prod = env === "production";

  const postcssOption = {
    config: {
      ctx: {
        "postcss-preset-env": {
          stage: 0, // experimental
          autoprefixer: prod
        },
        cssnano: prod
          ? {
            preset: "default"
          }
          : false
      }
    }
  };

  return merge(dev ? devConfig : prodConfig, {
    mode: env,
    entry: {
      bundle: "./src/index.tsx"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "ts-loader"
            }
          ],
          include: [path.join(__dirname, "../src")]
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: dev
              }
            },
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: dev
              }
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                modules: true,
                camelCase: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: postcssOption
            },
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true,
                modifyVars: themeVariables
              }
            }
          ]
        },
        {
          test: /\.less$/,
          exclude: /src/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2
              }
            },
            {
              loader: "postcss-loader",
              options: postcssOption
            },
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true,
                modifyVars: themeVariables
              }
            }
          ]
        },
        {
          test: /\.(pdf|png|jpe?g|gif|eot|otf|ttf|woff|woff2)$/,
          loader:
            "url-loader?limit=8192&name=[hash:8].[name].[ext]&outputPath=assets/images/&publicPath=assets/images"
        },
        {
          test: /\.svg$/,
          loader: "svg-sprite-loader"
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            priority: 10,
            enforce: true
          },
          antd: {
            name: "antd",
            test: module => {
              return /ant|rc-/.test(module.context);
            },
            chunks: "initial",
            priority: 11,
            enforce: true
          },
          util: {
            name: "util",
            test: module => {
              return /lodash|moment/.test(module.context);
            },
            chunks: "all",
            priority: 12,
            enforce: true
          },
          react: {
            name: "react",
            test: module => {
              return /react|redux/.test(module.context);
            },
            chunks: "all",
            priority: 13,
            enforce: true
          }
        }
      },
      runtimeChunk: {
        name: "manifest"
      },
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: os.cpus().length,
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].css"
      }),
      new HtmlWebpackPlugin({
        title: "wanliyunyan",
        favicon: "src/favicon.ico",
        template: "src/index.ejs",
        filename: "index.html",
        chunksSortMode: "none", // Error: Cyclic dependency
        hash: true
      })
    ],
    resolve: {
      alias: {
        src: path.resolve(__dirname, "../src/")
      },
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      modules: [path.resolve(__dirname), "node_modules"]
    }
  });
};
