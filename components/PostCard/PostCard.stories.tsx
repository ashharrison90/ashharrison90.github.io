import { ComponentStory, ComponentMeta } from '@storybook/react'

import PostCard from './PostCard'

const meta: ComponentMeta<typeof PostCard> = {
  title: 'Components/PostCard',
  component: PostCard,
  argTypes: {
    coverImage: {
      defaultValue: '/assets/blog/building-this-site/code.webp',
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
}

export const RendersCorrectly: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
)

export default meta
