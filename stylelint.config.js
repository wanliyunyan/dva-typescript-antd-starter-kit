module.exports = {
  root: true,
  customSyntax: "postcss-less",
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
};
