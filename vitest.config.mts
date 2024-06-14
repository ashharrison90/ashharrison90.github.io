import react from '@vitejs/plugin-react'
import magicalSvg from 'vite-plugin-magical-svg'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), magicalSvg({ target: 'react' })],
  test: {
    setupFiles: ['/config/test-setup.ts'],
    environment: 'jsdom',
    globals: true,
    exclude: [...configDefaults.exclude, '__test__/e2e/*'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    coverage: {
      reporter: ['text', 'html'],
      include: ['**/*.ts?(x)'],
      exclude: [
        'node_modules/**',
        '.storybook/**',
        'context/*',
        'config/*',
        '**/*.d.ts',
        '**/*.config.ts',
        '**/*.spec.{ts,tsx}',
        '**/*.stories.{ts,tsx}',
        'pages/_app.tsx',
        'pages/_document.tsx',
      ],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  },
})
