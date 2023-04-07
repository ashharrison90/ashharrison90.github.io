import '../styles/globals.scss'
import './globals.scss'
import { Preview } from '@storybook/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { withTheme } from './withTheme'

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextRouter: {
      Provider: RouterContext.Provider,
    },
  },
}

export default preview
