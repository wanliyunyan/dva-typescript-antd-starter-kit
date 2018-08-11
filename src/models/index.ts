// Use require.context to require reducers automatically
// Ref: https://webpack.github.io/docs/context.html
const context = require.context("./", false, /\.ts$/);
const keys = context.keys().filter(item => item !== "./index.ts");

const models = [];

for (const key of keys) {
  models.push(context(key));
}
export default models;
