'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const CONTEXT_PATH = path.resolve(`${__dirname}/../..`);
const DIST_PATH = `${CONTEXT_PATH}/dist/webpack/`;
const SRC_PATH = `${CONTEXT_PATH}/src`;

module.exports = {
  context: CONTEXT_PATH,
  entry: [
    `${SRC_PATH}/index.tsx`,
    `${SRC_PATH}/styles/index.scss`],
  output: {
    publicPath: '/',
    path: DIST_PATH,
    filename: 'assets/js/bundle.[hash].min.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {test: /\.tsx?$/, use: 'ts-loader'},
      {enforce: 'pre', test: /\.js$/, use: 'source-map-loader'},
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_PATH}/index.html`,
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: {
          ascii_only: true
        }
      }
    }),
    new CleanWebpackPlugin([DIST_PATH], {allowExternal: true}),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/bundle.[hash].min.css'
    }),
    new OptimizeCssAssetsPlugin()
  ]
};
