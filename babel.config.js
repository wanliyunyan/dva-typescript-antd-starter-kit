module.exports = function (api) {
  api.cache(true);
  const mode = process.argv.slice(-1)[0];
  const presets = [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        development: mode === "development",
      },
    ],
    "@babel/preset-typescript",
  ];
  const plugins = [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    [
      "import",
      { libraryName: "antd", libraryDirectory: "lib", style: true },
      "ant",
    ],
    [
      "import",
      {
        libraryName: "ant-design-pro",
        libraryDirectory: "lib",
        style: true,
        camel2DashComponentName: false,
      },
      "ant-design-pro",
    ],
  ];

  // development environment need react-hot-loader/babel
  if (mode === "development") {
    plugins.unshift("react-hot-loader/babel");
  }

  return {
    presets,
    plugins,
  };
};
