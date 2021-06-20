export default {
  preset: 'jest-playwright-preset',
  testMatch: ['**/__test__/e2e/**/*.spec.ts'],
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium', 'firefox', 'webkit'],
    },
  },
}
