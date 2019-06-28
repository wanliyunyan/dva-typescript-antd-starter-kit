module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  // If you want to use rules which require type information, you will need to specify a path to your tsconfig.json file in the "project" property of "parserOptions"
  parserOptions: {
    project: "./tsconfig.json"
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './build/webpack.base.js',
      },
    },
  },
  extends: [
    // Usage with Airbnb
    "airbnb",
    "plugin:@typescript-eslint/recommended",

    // Usage with Prettier
    "prettier",
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "prettier/@typescript-eslint",
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    // 此行必须在最后
    "plugin:prettier/recommended"
  ],
  rules: {
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx",".ts", ".tsx"] }],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      }
    ],
  }
};
