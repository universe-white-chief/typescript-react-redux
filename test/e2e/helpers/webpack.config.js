'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const CONTEXT_PATH = path.resolve(`${__dirname}/../../..`);
const SRC_PATH = `${CONTEXT_PATH}/src`;

module.exports = {
  mode: 'development',
  cache: false,
  context: CONTEXT_PATH,
  entry: [
    `${SRC_PATH}/index.tsx`,
    `${SRC_PATH}/styles/index.scss`],
  output: {
    publicPath: '/',
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_PATH}/index.html`,
      inject: true,
      minify: false
    })
  ],
};
