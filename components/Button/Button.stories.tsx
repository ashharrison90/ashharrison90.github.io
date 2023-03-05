import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Click me',
    },
    className: {
      defaultValue: 'myCustomClass',
    },
    href: {
      defaultValue: 'https://www.google.com',
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export default meta
