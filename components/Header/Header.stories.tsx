import { ComponentStory, ComponentMeta } from '@storybook/react'

import Header from './Header'

const meta: ComponentMeta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    show: {
      defaultValue: true,
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
)

export default meta
