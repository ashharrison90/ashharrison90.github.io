import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
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
} as ComponentMeta<typeof Button>

export const RendersCorrectly: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)
