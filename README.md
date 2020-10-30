# npm-webpack-jekyll

> A template using Jekyll 4 to generate static HTML pages + Webpack 5 for asset-management, tree-shaking, ES6 polyfilling and transpiling, and bundling.

-----

Our previous templates used Gulpjs to coordinate the site build with Jekyll, SASS compilation, CSS prefixing & minification,  image & static asset processing, and also run Webpack to transpile our ES6 into JavaScript that would work in IE11 and up.

This project aims to remove Gulpjs from the equation and utilize Webpack's features and benefits more fully.

## Installation
1. Clone the project's repo: `git clone git@github.com:KankakeeCommunityCollege/npm-webpack-jekyll.git`
2. `cd npm-webpack-jekyll`
3. Install dependencies via `bundle i && npm i`
   
## Development Build
Use the `dev` script from the `package.json` file:
```bash
npm run dev
```

## Production Build
Use the `production` script from the `package.json` file:
```bash
npm run production
```
