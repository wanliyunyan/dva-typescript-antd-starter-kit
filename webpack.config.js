/*
* @ author wanliyunyan
*/

const webpackConfig = {
  development: require('./build/webpack.dev'),
  production: require('./build/webpack.prod'),
};

function buildConfig(env) {
  return webpackConfig[env]({ env });
}

// 获取运行环境
const env = process.argv.slice(-1)[0];
module.exports = buildConfig(env);
