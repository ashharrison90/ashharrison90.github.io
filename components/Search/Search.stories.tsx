import { StoryFn, Meta } from '@storybook/react'

import Search from './Search'

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  args: {
    placeholder: 'Search',
  },
}

export const Story: StoryFn<typeof Search> = (args) => <Search {...args} />

export default meta
