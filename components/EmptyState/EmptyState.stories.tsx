import { ComponentStory, ComponentMeta } from '@storybook/react'

import EmptyState from './EmptyState'

const meta: ComponentMeta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  argTypes: {
    message: {
      defaultValue: 'Nothing found',
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
)

export default meta
