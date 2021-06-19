export default {
  preset: 'jest-playwright-preset',
  testMatch: ['**/test-e2e/**/*.spec.ts'],
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium', 'firefox', 'webkit'],
    },
  },
}
