'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '9000';

const CONTEXT_PATH = path.resolve(`${__dirname}/../..`);
const DIST_PATH = `${CONTEXT_PATH}/dist/webpack_dev/`;
const SRC_PATH = `${CONTEXT_PATH}/src`;

module.exports = {
  context: CONTEXT_PATH,
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    `${SRC_PATH}/index.tsx`,
    `${SRC_PATH}/styles/index.scss`],
  output: {
    publicPath: '/',
    path: DIST_PATH,
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: HOST,
    port: PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_PATH}/index.html`,
      inject: true,
      minify: false
    }),
    new CleanWebpackPlugin([DIST_PATH], {allowExternal: true})
  ]
};
