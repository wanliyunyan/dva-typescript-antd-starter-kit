// Use require.context to require reducers automatically
// Ref: https://webpack.github.io/docs/context.html
const context = require.context("./", false, /\.ts$/);
const keys = context.keys().filter((item): boolean => item !== "./index.ts");

const models = keys.map((key) => context(key));

export default models;
