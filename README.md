
<a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu" /></a>
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![HitCount](http://hits.dwyl.io/wanliyunyan/wanliyunyan/dva-typescript-antd-starter-kit.svg)](http://hits.dwyl.io/wanliyunyan/wanliyunyan/dva-typescript-antd-starter-kit)

# dva-typescript-antd-starter-kit

A admin dashboard application demo based on antd
Now it is not perfect, then I will continue to improve the project. 
If you don’t understand Chinese, it doesn’t matter. Clone this repo and npm intall, You can use it directly.

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | No | No | No | No |

## Demo
https://wanliyunyan.github.io/dva-typescript-antd-starter-kit/dist

## Installation

```bash
npm install
npm install -g json-server # global
```

## Running Dev Server

```bash
npm run dev
```

## Building

```bash
npm run build
```

## cnpm
如果你使用webstorm和阿里的cnpm那么，直接双击左下角npm中的cnpm即可

## Mock
click mockjs，start mock data, You can see the effect of the mock data in the "列表页-查询表格".

## Linter
eslint:fix Can automatically repair a part of the code  

styleint detect style 

prettier format code

## Babel
update to babel7

## Webpack
update to webpack5

## Contents

```bash
├── /build/                   
├── /dist/     
├── /mock/      
├── /src/              
│ ├── /assets/        
│ │ └── /images/       
│ │ └── /style/               
│ ├── /common/        
│ ├── /components/     
│ ├── /layouts/        
│ ├── /models/         
│ ├── /routes/         
│ ├── /services/       
│ ├── /utils/          
│ │ └── request.js     
│ │ └── utils.js 
│ ├── favicon.ico      
│ ├── index.html       
│ ├── index.less       
│ ├── index.tsx        
│ └── route.tsx 
├── .browserslistrc      
├── .editorconfig     
├── .eslintrc          
├── .gitignore  
├── .lintstagedrc     
├── .stylelintrc       
├── babel.config.js  
├── package.json       
├── postcss.config.js  
├── README.md  
├── tsconfig.json       
└── webpack.config.js  
```

## Package
dependencies
-   [@ant-design/icons](https://github.com/ant-design/ant-design) A UI Design Language..
-   [antd](https://github.com/ant-design/ant-design) A UI Design Language.
-   [axios](https://github.com/axios/axios) Promise based HTTP client for the browser and node.js.
-   [classnames](https://github.com/JedWatson/classnames) A simple javascript utility for conditionally joining classNames together.
-   [dayjs](https://github.com/iamkun/dayjs) Day.js 2KB immutable date-time library alternative to Moment.js with the same modern API.
-   [dva](https://github.com/dvajs/dva) Lightweight front-end framework based on redux, redux-saga and react-router.
-   [dva-loading](https://github.com/dvajs/dva/tree/master/packages/dva-loading) Auto loading plugin for dva. 👏 You don't need to write showLoading and hideLoading any more.
-   [lodash](https://github.com/lodash/lodash) A modern JavaScript utility library delivering modularity, performance, & extras.
-   [mockjs](https://github.com/nuysoft/Mock) A simulation data generator.
-   [query-string](https://github.com/sindresorhus/query-string) Parse and stringify URL query strings.
-   [react](https://github.com/facebook/react) A declarative, efficient, and flexible JavaScript library for building user interfaces.
-   [react-dom](https://github.com/facebook/react) This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.
-   [swr](https://github.com/zeit/swr) React Hooks library for remote data fetching.

devDependencies
-   [@babel/core](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript. 
-   [@babel/plugin-proposal-nullish-coalescing-operator](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript. 
-   [@babel/plugin-proposal-optional-chaining](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript. 
-   [@babel/plugin-transform-runtime](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript. 
-   [@babel/preset-env](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript. 
-   [@babel/preset-react](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript. 
-   [@babel/preset-typescript](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript. 
-   [@babel/runtime](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript. 
-   [@pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) A Webpack plugin to enable "Fast Refresh" (also previously known as Hot Reloading) for React components. 
-   [@types/classnames](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for react.
-   [@types/lodash](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for lodash.
-   [@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for classnames.
-   [@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for react-dom.
-   [@types/webpack](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for webpack.
-   [@typescript-eslint/eslint-plugin](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for typescript-eslint/eslint-plugin.
-   [@types/typescript-eslint/parser](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for typescript-eslint/parser.
-   [autoprefixer](https://github.com/postcss/autoprefixer) Parse CSS and add vendor prefixes to rules by Can I Use.
-   [babel-loader](https://github.com/babel/babel-loader) Webpack plugin for Babel.
-   [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) Modularly import plugin for babel.
-   [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) A webpack plugin to remove your build folder(s) before building.
-   [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin) Prepare compressed versions of assets to serve them with Content-Encoding.
-   [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) Copy files and directories with webpack.
-   [css-loader](https://github.com/webpack-contrib/css-loader) CSS Loader.
-   [cssnano](https://github.com/ben-eb/cssnano) A modular minifier, built on top of the PostCSS ecosystem. 
-   [cssnano-preset-advanced](https://github.com/ben-eb/cssnano) A modular minifier, built on top of the PostCSS ecosystem. 
-   [eslint](https://github.com/eslint/eslint) A fully pluggable tool for identifying and reporting on patterns in JavaScript.
-   [eslint-config-airbnb](https://github.com/airbnb/javascript) A mostly reasonable approach to JavaScript.
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) Turns off all rules that are unnecessary or might conflict with Prettier.
-   [eslint-import-resolver-webpack](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) 
-   [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) ESLint plugin with rules that help validate proper imports.
-   [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) Static AST checker for a11y rules on JSX elements.
-   [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) ESLint plugin for Prettier formatting.
-   [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) React specific linting rules for ESLint.
-   [eslint-plugin-react-hooks](https://github.com/facebook/react) This ESLint plugin enforces the Rules of Hooks.
-   [file-loader](https://github.com/webpack-contrib/file-loader) File Loader.
-   [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) Simplifies creation of HTML files to serve your webpack bundles.
-   [husky](https://github.com/typicode/husky) Git hooks made easy.
-   [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) Image loader module for webpack.
-   [ip](https://github.com/indutny/node-ip) IP address tools for node.js.
-   [json-server](https://github.com/typicode/json-server) Get a full fake REST API with zero coding in less than 30 seconds (seriously).
-   [less](https://github.com/less/less.js) Less. The dynamic stylesheet language.
-   [less-loader](https://github.com/webpack-contrib/less-loader) Compiles Less to CSS.
-   [less-vars-to-js](https://github.com/michaeltaranto/less-vars-to-js) Read LESS variables from the contents of a file and returning them as a javascript object.
-   [lint-staged](https://github.com/okonet/lint-staged) Run linters on git staged files.
-   [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) Lightweight CSS extraction plugin.
-   [postcss](https://github.com/postcss/postcss) Transforming styles with JS plugins.
-   [postcss-import](https://github.com/postcss/postcss-import) PostCSS plugin to inline @import rules content.
-   [postcss-loader](https://github.com/postcss/postcss-loader) PostCSS loader for webpack.
-   [postcss-preset-env](https://github.com/csstools/postcss-preset-env) Convert modern CSS into something browsers understand.
-   [prettier](https://github.com/prettier/prettier) Prettier is an opinionated code formatter.
-   [react-refresh](https://github.com/facebook/react)
-   [sass-loader](https://github.com/webpack-contrib/sass-loader) Compiles Sass to CSS.
-   [source-map-loader](https://github.com/webpack-contrib/source-map-loader) extract sourceMappingURL comments from modules and offer it to webpack.
-   [stylelint](https://github.com/stylelint/stylelint) A mighty, modern CSS linter.
-   [stylelint-config-prettier](https://github.com/shannonmoeller/stylelint-config-prettier) Turns off all rules that are unnecessary or might conflict with prettier.
-   [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order) Stylelint config that sorts related property declarations by grouping together in the rational order 🚦.
-   [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) The standard shareable config for stylelint.
-   [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties) Disallow property values that are ignored due to another property value in the same rule.
-   [stylelint-order](https://github.com/hudochenkov/stylelint-order) A plugin pack of order related linting rules for stylelint.
-   [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) Webpack loader for creating SVG sprites.
-   [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) Terser Plugin.
-   [typescript](https://github.com/Microsoft/TypeScript) TypeScript is a superset of JavaScript that compiles to clean JavaScript output. 
-   [url-loader](https://github.com/webpack-contrib/url-loader) URL Loader.
-   [webpack](https://github.com/webpack/webpack) A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows to load parts for the application on demand. Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.
-   [webpack-cli](https://github.com/webpack/webpack-cli) Webpack's Command Line Interface.
-   [webpack-dev-server](https://github.com/webpack/webpack-dev-server) Serves a webpack app. Updates the browser on changes.
-   [webpack-merge](https://github.com/survivejs/webpack-merge) SMerge designed for Webpack (MIT).
