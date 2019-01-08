module.exports = {
  rootDir: '../..',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: ['<rootDir>/test/unit/**/*.test.(ts|tsx)'],
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: '<rootDir>/test/unit/helper/testSetup.ts',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  clearMocks: true
};
