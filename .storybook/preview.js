import '../styles/globals.scss'
import './globals.scss'
import { addDecorator, addParameters } from '@storybook/react'
import { withRootAttribute } from 'storybook-addon-root-attribute'
import { RouterContext } from 'next/dist/shared/lib/router-context'

// global
addDecorator(withRootAttribute)
addParameters({
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
})

export const parameters = {
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
}
