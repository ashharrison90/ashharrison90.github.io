import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    show: {
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Header>

export const RendersCorrectly: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
)
