module.exports = function (api) {
  api.cache(true);
  // We've assembled some for common environments:
  const presets = [
    // https://babeljs.io/docs/en/babel-preset-env
    "@babel/preset-env",
    // https://www.babeljs.cn/docs/babel-preset-react
    "@babel/preset-react",
    // https://babeljs.io/docs/en/babel-preset-typescript
    "@babel/preset-typescript",
  ];
  const plugins = [
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    "@babel/plugin-transform-runtime",
    // https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
    "@babel/plugin-proposal-optional-chaining",
    // https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
    "@babel/plugin-proposal-nullish-coalescing-operator",
    [
      "import",
      { libraryName: "antd", libraryDirectory: "lib", style: true },
      "ant",
    ],
  ];

  return {
    presets,
    plugins,
  };
};
