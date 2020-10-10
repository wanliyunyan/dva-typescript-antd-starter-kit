module.exports = ({ file, options, env }) => {
  const array = [
    "postcss-import", // PostCSS plugin to transform @import rules by inlining content.
    [
      "postcss-preset-env", // PostCSS Preset Env lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.
      {
        // The stage option determines which CSS features to polyfill, based upon their stability in the process of becoming implemented web standards.
        stage: 0, // experimental
        // PostCSS plugin to parse CSS and add vendor prefixes to CSS rules
        autoprefixer: env === "production",
      },
    ],
  ];
  if (env === "production") {
    array.push([
      "cssnano",
      {
        preset: "default", // // Plug in cssnano into your build step for modern CSS compression
      },
    ]);
  }
  return {
    plugins: array,
  };
};
