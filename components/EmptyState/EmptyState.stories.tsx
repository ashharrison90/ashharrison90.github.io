import { StoryFn, Meta } from '@storybook/react'

import EmptyState from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  args: {
    message: 'Nothing found',
  },
}

export const Story: StoryFn<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
)

export default meta
