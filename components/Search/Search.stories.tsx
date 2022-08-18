import { ComponentStory, ComponentMeta } from '@storybook/react'
import Search from './Search'

const meta: ComponentMeta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    placeholder: {
      defaultValue: 'Search',
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
)

export default meta
