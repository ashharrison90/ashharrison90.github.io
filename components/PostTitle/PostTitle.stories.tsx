import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostTitle from './PostTitle'

export default {
  title: 'Components/PostTitle',
  component: PostTitle,
  argTypes: {
    date: {
      defaultValue: '2020-10-01T00:00:00.000Z',
      control: {
        type: 'date',
      },
    },
    excerpt: {
      defaultValue:
        'Some more interesting information that expands on the title',
    },
    tags: {
      defaultValue: ['javascript', 'typescript', 'react', 'nextjs'],
    },
    title: {
      defaultValue: 'An interesting title',
    },
  },
} as ComponentMeta<typeof PostTitle>

export const RendersCorrectly: ComponentStory<typeof PostTitle> = (args) => (
  <PostTitle {...args} />
)
