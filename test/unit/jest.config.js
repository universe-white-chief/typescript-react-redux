module.exports = {
  rootDir: '../..',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {tsconfig: 'tsconfig.json'}],
  },
  testMatch: ['<rootDir>/test/unit/**/*.test.(ts|tsx)'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/test/unit/helper/testSetup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  clearMocks: true
};
