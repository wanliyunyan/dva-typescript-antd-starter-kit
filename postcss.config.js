module.exports = ({ file, options }) => ({
  // .css (SugarSS) => use SugarSS parser (SugarSS Parser)
  // .(less|sass) (CSS) => use css parser (PostCSS Parser)
  parser: file.extname === '.css' ? 'sugarss' : false,
  plugins: {
    'postcss-import': { root: file.dirname },
    'postcss-preset-env': options['postcss-preset-env'],
    cssnano: options.cssnano,
  },
});
