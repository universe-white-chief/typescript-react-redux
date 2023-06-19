module.exports = {
  rootDir: '../..',
  preset: 'jest-puppeteer',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {tsconfig: 'tsconfig.json'}],
  },
  testMatch: ['<rootDir>/test/e2e/**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  globalSetup: "jest-environment-puppeteer/setup",
  globalTeardown: "jest-environment-puppeteer/teardown",
  testEnvironment: "jest-environment-puppeteer",
};
