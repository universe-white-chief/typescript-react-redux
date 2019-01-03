module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: [__dirname + '/test/**/*.(ts|tsx)'],
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: '<rootDir>/test/helper/testSetup.ts',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/test/helper/']
};
