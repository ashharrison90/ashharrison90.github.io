import { ComponentStory, ComponentMeta } from '@storybook/react'
import LinkButton from './LinkButton'

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  argTypes: {
    children: {
      defaultValue: 'Click me',
    },
    className: {
      defaultValue: 'myCustomClass',
    },
    href: {
      defaultValue: 'about',
    },
  },
} as ComponentMeta<typeof LinkButton>

export const RendersCorrectly: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
)
