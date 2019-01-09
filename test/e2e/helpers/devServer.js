const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '3333';

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  hot: false,
  inline: true,
  historyApiFallback: true
});

compiler.hooks.done.tap("StartDevServer", () => {
  console.log('Compiled successfully.');
  console.log(`Project is running at http://${HOST}:${PORT}/`);
  server.listen(PORT, HOST);
});
