/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  testPathIgnorePatterns: ['dist/*.*'],
  setupFiles: ["./jest-setup-file.ts"],
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    }
  }
};
