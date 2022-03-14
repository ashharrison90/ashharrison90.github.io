import nextJest from 'next/jest'
const createJestConfig = nextJest()
const customJestConfig = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts?(x)'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/pages/_app.tsx',
    '/pages/_document.tsx',
    '/context/',
    '.spec.tsx?$',
    '.stories.tsx?$',
    '.d.ts$',
    '.config.ts$',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/__test__/e2e/'],
}

export default createJestConfig(customJestConfig)
