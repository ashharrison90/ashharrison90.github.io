import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostCard from './PostCard'

export default {
  title: 'Components/PostCard',
  component: PostCard,
  argTypes: {
    coverImage: {
      defaultValue: '/assets/blog/building-this-site/code.png',
    },
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
    slug: {
      defaultValue: 'an-interesting-title',
    },
    tags: {
      defaultValue: ['typescript', 'react'],
    },
    title: {
      defaultValue: 'An interesting title',
    },
  },
} as ComponentMeta<typeof PostCard>

export const RendersCorrectly: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
)
