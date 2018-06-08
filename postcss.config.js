module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    'postcss-import': { root: file.dirname },
    autoprefixer: env === 'production' ? options.autoprefixer : false,
    cssnano: env === 'production' ? options.cssnano : false,
  },
});
