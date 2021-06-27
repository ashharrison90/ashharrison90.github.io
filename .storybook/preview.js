import '../styles/globals.scss'
import { addDecorator, addParameters } from '@storybook/react'
import { withRootAttribute } from 'storybook-addon-root-attribute'
import { withNextRouter } from 'storybook-addon-next-router'

// global
addDecorator(withRootAttribute)
addDecorator(withNextRouter)
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
}
