module.exports = {
  setupFilesAfterEnv: ['<rootDir>enzyme.config.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true,
  // notify: true, FIXME: https://github.com/mikaelbr/node-notifier/issues/301
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/.yarn/',
    '<rootDir>/.pnp.js',
  ],
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}',
    '**/scripts/**/*.js',
    '!**/node_modules/**',
    '!**/.yarn/**',
    '!**/.pnp.js/**',
    '!**/*.test.js',
  ],
  reporters: ['default', 'jest-junit'],
  coverageReporters: ['json'],
};
