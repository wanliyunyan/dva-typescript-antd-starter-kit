module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./build/webpack.base.js",
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    // 'project': './tsconfig.json',
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    // Usage with Airbnb
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    // Usage with Prettier
    "prettier",
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "prettier/@typescript-eslint",
    // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "max-classes-per-file": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/jsx-props-no-spreading": 0,
    "no-useless-escape": 0,
    "import/prefer-default-export": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-wrap-multilines": 0,
  },
};
