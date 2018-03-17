const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IS_DEVELOPMENT = process.env.WEBPACK_SERVE || process.env.NODE_ENV === 'development';


function styleRule(cssRegex = /\.css$/) {
  let loaders = [
    IS_DEVELOPMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader'
  ];

  return {
    test: cssRegex,
    use: loaders
  };
}

function getPlugins() {
  const plugins = [];

  !IS_DEVELOPMENT && plugins.push(new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css"
  }));

  plugins.push(new HtmlWebpackPlugin({
    template: 'public/index.html',
    inject: true // put CSS in head, put JS in body.
  }));

  return plugins;
}

function fileRule() {
  return {
    // Exclude `js` files to keep "css" loader working as it injects
    // its runtime that would otherwise be processed through "file" loader.
    // Also exclude `html` and `json` extensions so they get processed
    // by webpacks internal loaders.
    exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
    loader: require.resolve('file-loader'),
    options: {
      name: 'static/media/[name].[hash:8].[ext]',
    },
  };
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: true,
    chunkFilename: 'static/js/[name].chunk.js'
  },
  plugins: getPlugins(),
  module: {
    rules: [
      {
        oneOf: [
          styleRule(),
          fileRule()
        ]
      }
    ]
  },
  mode: IS_DEVELOPMENT ? 'development' : 'production'
};