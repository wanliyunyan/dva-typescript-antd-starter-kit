/*
* @ author wanliyunyan
*/

const webpackConfig = {
  development: require("./build/webpack.dev"),
  production: require("./build/webpack.prod")
};

function buildConfig(env) {
  return webpackConfig[env](env);
}

// Get the runtime environment parameters
const env = process.argv.slice(-1)[0];
module.exports = buildConfig(env);
