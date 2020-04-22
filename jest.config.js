module.exports = {
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
    '**/src/**/*.{ts,tsx}',
    '**/scripts/**/*.js',
    '**/scripts/**/*.ts',
    '!**/node_modules/**',
    '!**/.yarn/**',
    '!**/.pnp.js/**',
    '!**/*.test.js',
    '!**/*.test.ts',
  ],
  reporters: ['default'],
  coverageReporters: ['json'],
};
