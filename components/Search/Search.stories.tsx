import { ComponentStory, ComponentMeta } from '@storybook/react'
import Search from './Search'

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    placeholder: {
      defaultValue: 'Search',
    },
  },
} as ComponentMeta<typeof Search>

export const RendersCorrectly: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
)
