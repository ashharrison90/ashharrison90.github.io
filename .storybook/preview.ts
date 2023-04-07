import '../styles/globals.scss'
import './globals.scss'
import { Preview } from '@storybook/react'
import { withRootAttribute } from 'storybook-addon-root-attribute'
import { RouterContext } from 'next/dist/shared/lib/router-context'

const preview: Preview = {
  decorators: [withRootAttribute],
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
    rootAttribute: {
      attribute: 'data-theme',
      defaultState: {
        name: 'Light',
        value: 'light',
      },
      states: [
        {
          name: 'Dark',
          value: 'dark',
        },
      ],
    },
  },
}

export default preview
