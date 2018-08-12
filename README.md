# dva-typescript-antd-starter-kit

A admin dashboard application demo based on antd
Now it is not perfect, then I will continue to improve the project. 
If you don’t understand Chinese, it doesn’t matter. Clone this repo and npm intall, You can use it directly.

## About
项目的主要结构模仿的[ant-design-pro](https://github.com/ant-design/ant-design-pro)，但是没有使用dva的默认配置，使用了webpack4。项目的中的package都使用最新版本，支持最新的chrome浏览器。如果想使用最基础的dva+ts，请点击[dva-typescript-starter-kit](https://github.com/wanliyunyan/dva-typescript-starter-kit)

## Installation

```bash
npm install
```

## Running Dev Server

```bash
npm run dev
```

## Building

```bash
npm run build
```

## Mock
点击mockjs，启动mock数据，可以在“列表页-查询表格”中看到mock数据的效果。

## Linter
tslint:fix 可以自动修复一部分代码   

styleint 可以检测过不合格的style  

prettier 可以格化式代码

## 项目目录

```bash
├── /build/            # webpack配置
├── /mock/             # 模拟数据
├── /dist/             # 项目输出目录
├── /src/              # 项目源码目录
│ ├── /assets/         # 公共文件，编译时copy至dist目录
│ │ └── /images/       # 图片
│ │ └── /style/        # 样式
│ │ └── /svg/          # svg文件
│ ├── /common/         # 公共文件
│ ├── /components/     # UI组件及UI相关方法
│ ├── /layouts/        # 布局
│ ├── /models/         # 数据模型
│ ├── /routes/         # 路由
│ ├── /services/       # 数据接口
│ ├── /utils/          # 工具函数
│ │ └── request.js     # 异步请求函数
│ ├── favicon.ico      # 图标
│ ├── index.html       # 入口html
│ ├── index.less       # 全局样式
│ ├── index.less.d.ts  # 声明文件
│ ├── index.tsx        # 入口文件
│ └── route.tsx        # 路由配置
├── .babelrc           # babel配置
├── .editorconfig      # idea配置
├── .eslintrc          # esint配置
├── .gitignore         # 忽略配置
├── .stylelintrc       # stylelint配置
├── package.json       # 项目信息
├── postcss.config.js  # postcss配置
├── tsconfig.json      # TypeScript配置
├── tslint.json        # TSlint配置
└── webpack.config.js  # webpack配置
```

## Package
dependencies
-   [antd](https://github.com/ant-design/ant-design) A UI Design Language.
-   [axios](https://github.com/axios/axios) Promise based HTTP client for the browser and node.js.
-   [classnames](https://github.com/JedWatson/classnames) A simple javascript utility for conditionally joining classNames together.
-   [dva](https://github.com/dvajs/dva) Lightweight front-end framework based on redux, redux-saga and react-router.
-   [dva-loading](https://github.com/dvajs/dva/tree/master/packages/dva-loading) Auto loading plugin for dva. 👏 You don't need to write showLoading and hideLoading any more.
-   [lodash](https://github.com/lodash/lodash) A modern JavaScript utility library delivering modularity, performance, & extras.
-   [mockjs](https://github.com/nuysoft/Mock) A simulation data generator.
-   [moment](https://github.com/moment/moment) A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
-   [query-string](https://github.com/sindresorhus/query-string) Parse and stringify URL query strings.
-   [react](https://github.com/facebook/react) A declarative, efficient, and flexible JavaScript library for building user interfaces.
-   [react-container-query](https://github.com/d6u/react-container-query) Parse CSS and add vendor prefixes to rules by Can I Use.
-   [react-dom](https://github.com/facebook/react) This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.
-   [react-router](https://github.com/ReactTraining/react-router) Declarative routing for React.
-   [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) DOM bindings for React Router.

devDependencies
-   [@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for react.
-   [@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for react-dom.
-   [@types/react-router](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for react-router.
-   [@types/react-router-dom](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for react-router-dom.
-   [@types/webpack](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for React.
-   [@types/webpack-env](https://github.com/DefinitelyTyped/DefinitelyTyped) This package contains type definitions for React.
-   [autoprefixer](https://github.com/postcss/autoprefixer) Parse CSS and add vendor prefixes to rules by Can I Use.
-   [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) All transformations will use your local configuration files (.babelrc or in package.json).
-   [babel-eslint](https://github.com/babel/babel-eslint) A wrapper for Babel's parser used for ESLint.
-   [babel-loader](https://github.com/babel/babel-loader) Webpack plugin for Babel.
-   [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) Modularly import plugin for babel.
-   [babel-plugin-transform-runtime](https://github.com/jakwuh/babel-plugin-transform-runtime) Externalise references to helpers and built-ins, automatically polyfilling your code without polluting globals.
-   [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015) Babel preset for all es2015 plugins.
-   [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) Babel preset for all React plugins.
-   [babel-preset-stage-2](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2) Babel preset for stage 2 plugins.
-   [babel-runtime](https://github.com/babel/babel/tree/master/packages/babel-runtime) 
-   [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) A webpack plugin to remove your build folder(s) before building.
-   [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) Copy files and directories with webpack.
-   [css-loader](https://github.com/webpack-contrib/css-loader) CSS Loader.
-   [cssnano](https://github.com/ben-eb/cssnano) A modular minifier, built on top of the PostCSS ecosystem. 
-   [eslint](https://github.com/eslint/eslint) A fully pluggable tool for identifying and reporting on patterns in JavaScript.
-   [eslint-config-airbnb](https://github.com/airbnb/javascript) A mostly reasonable approach to JavaScript.
-   [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) ESLint plugin with rules that help validate proper imports.
-   [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) Static AST checker for a11y rules on JSX elements.
-   [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) React specific linting rules for ESLint.
-   [expect](https://github.com/facebook/jest) 
-   [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) Simplifies creation of HTML files to serve your webpack bundles.
-   [husky](https://github.com/typicode/husky) Git hooks made easy.
-   [json-server](https://github.com/typicode/json-server) Get a full fake REST API with zero coding in less than 30 seconds (seriously).
-   [less](https://github.com/less/less.js) Less. The dynamic stylesheet language.
-   [less-loader](https://github.com/webpack-contrib/less-loader) Compiles Less to CSS.
-   [less-vars-to-js](https://github.com/michaeltaranto/less-vars-to-js) Read LESS variables from the contents of a file and returning them as a javascript object.
-   [lint-staged](https://github.com/okonet/lint-staged) Run linters on git staged files.
-   [postcss-import](https://github.com/postcss/postcss-import) PostCSS plugin to inline @import rules content.
-   [postcss-loader](https://github.com/postcss/postcss-loader) PostCSS loader for webpack.
-   [prettier](https://github.com/prettier/prettier) Prettier is an opinionated code formatter.
-   [react-hot-loader](https://github.com/gaearon/react-hot-loader) Tweak React components in real time.
-   [sass-loader](https://github.com/webpack-contrib/sass-loader) Compiles Sass to CSS.
-   [source-map-loader](https://github.com/webpack-contrib/source-map-loader) extract sourceMappingURL comments from modules and offer it to webpack.
-   [style-loader](https://github.com/webpack-contrib/style-loader) Style Loader.
-   [stylelint](https://github.com/stylelint/stylelint) A mighty, modern CSS linter.
-   [stylelint-config-prettier](https://github.com/shannonmoeller/stylelint-config-prettier) Turns off all rules that are unnecessary or might conflict with prettier.
-   [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) The standard shareable config for stylelint.
-   [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) Webpack loader for creating SVG sprites.
-   [ts-loader](https://github.com/TypeStrong/ts-loader) TypeScript loader for webpack.
-   [tslint](https://github.com/palantir/tslint) An extensible linter for the TypeScript language.
-   [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier) Use tslint with prettier without any conflict.
-   [tslint-react](https://github.com/palantir/tslint-react) Lint rules related to React & JSX for TSLint.
-   [typescript](https://github.com/Microsoft/TypeScript) TypeScript is a superset of JavaScript that compiles to clean JavaScript output. 
-   [url-loader](https://github.com/webpack-contrib/url-loader) URL Loader.
-   [webpack](https://github.com/webpack/webpack) A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows to load parts for the application on demand. Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.
-   [webpack-cli](https://github.com/webpack/webpack-cli) Webpack's Command Line Interface.
-   [webpack-dev-server](https://github.com/webpack/webpack-dev-server) Serves a webpack app. Updates the browser on changes.
-   [webpack-merge](https://github.com/survivejs/webpack-merge) SMerge designed for Webpack (MIT).
