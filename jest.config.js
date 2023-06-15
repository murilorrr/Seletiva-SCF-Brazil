module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.spec.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/*.js'],
  coverageReporters: ['text'],
};