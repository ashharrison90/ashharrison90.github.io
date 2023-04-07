import { StoryFn, Meta } from '@storybook/react'

import Tag from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  args: {
    label: 'typescript',
  },
}

export const Story: StoryFn<typeof Tag> = (args) => <Tag {...args} />

export default meta
