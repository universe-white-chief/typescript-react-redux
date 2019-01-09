module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
    executablePath: process.env.CHROME_BIN || undefined,
    args: ['--no-sandbox', '--headless', '--disable-gpu']
  },
  server: {
    command: 'node test/e2e/helpers/devServer.js',
    port: 3333,
    launchTimeout: 20000,
    debug: true
  }
};
