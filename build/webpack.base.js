const fs = require("fs");
const path = require("path");
const lessToJs = require("less-vars-to-js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, mode) {
  // Override the default theme of antd
  const themeVariables = lessToJs(
    fs.readFileSync(
      path.join(__dirname, "../src/assets/style/theme.less"),
      "utf8"
    )
  );

  const urlLoaderOption = {
    limit: 8192,
    name: "[hash:8].[name].[ext]",
    outputPath: "assets/images",
    publicPath: "assets/images",
  };

  const dev = mode.mode === "development";
  return merge(dev ? require("./webpack.dev") : require("./webpack.prod"), {
    mode: mode.mode,
    entry: ["./src"],
    target: dev ? "web" : "browserslist",
    stats: "normal",
    module: {
      rules: [
        {
          test: /\.([tj]s)x?$/,
          include: [path.join(__dirname, "../src")],
          use: [
            {
              loader: "babel-loader",
              options: {
                plugins: [dev && require.resolve("react-refresh/babel")].filter(
                  Boolean
                ),
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: dev
                    ? "[path][name]__[local]"
                    : "[hash:base64:5]",
                  exportLocalsConvention: "camelCase",
                },
              },
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  // https://github.com/ant-design/ant-motion/issues/44
                  javascriptEnabled: true,
                  modifyVars: themeVariables,
                },
              },
            },
          ],
        },
        {
          test: /\.less$/,
          exclude: /src/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
              },
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  // https://github.com/ant-design/ant-motion/issues/44
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(ico|pdf|eot|otf|ttf|woff|woff2)$/,
          use: [
            {
              loader: "url-loader",
              options: urlLoaderOption,
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp)$/,
          use: [
            {
              loader: "url-loader",
              options: urlLoaderOption,
            },
            /* {
              loader: "image-webpack-loader",
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: true,
                },
                webp: {
                  quality: 75,
                },
              },
            }, */
          ],
        },
        {
          test: /\.svg$/,
          loader: "svg-sprite-loader",
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            priority: 10,
            enforce: true,
          },
          antd: {
            name: "antd",
            test: (module) => {
              return /ant|rc-/.test(module.context);
            },
            chunks: "all",
            priority: 11,
            enforce: true,
          },
          util: {
            name: "util",
            test: (module) => {
              return /lodash|dayjs/.test(module.context);
            },
            chunks: "all",
            priority: 12,
            enforce: true,
          },
          react: {
            name: "react",
            test: (module) => {
              return /react|redux/.test(module.context);
            },
            chunks: "all",
            priority: 13,
            enforce: true,
          },
        },
      },
      runtimeChunk: {
        name: "manifest",
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new HtmlWebpackPlugin({
        title: "wanliyunyan",
        favicon: "src/favicon.ico",
        hash: true,
        minify: true,
      }),
    ],
    resolve: {
      alias: {
        src: path.resolve(__dirname, "../src/"),
      },
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      modules: [path.resolve(__dirname), "node_modules"],
    },
  });
};
