/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  testPathIgnorePatterns: ['build/*.*'],
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    }
  }
};
