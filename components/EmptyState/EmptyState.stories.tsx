import { ComponentStory, ComponentMeta } from '@storybook/react'
import EmptyState from './EmptyState'

export default {
  title: 'Components/EmptyState',
  component: EmptyState,
  argTypes: {
    message: {
      defaultValue: 'Nothing found',
    },
  },
} as ComponentMeta<typeof EmptyState>

export const RendersCorrectly: ComponentStory<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
)
