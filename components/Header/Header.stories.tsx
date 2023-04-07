import { StoryFn, Meta } from '@storybook/react'

import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: {
    show: true,
  },
}

export const Story: StoryFn<typeof Header> = (args) => <Header {...args} />

export default meta
