module.exports = {
  rootDir: '../..',
  preset: 'jest-puppeteer',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: ['<rootDir>/test/e2e/**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  globalSetup: "jest-environment-puppeteer/setup",
  globalTeardown: "jest-environment-puppeteer/teardown",
  testEnvironment: "jest-environment-puppeteer",
};
