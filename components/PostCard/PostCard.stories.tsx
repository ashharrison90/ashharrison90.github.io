import { StoryFn, Meta } from '@storybook/react'

import PostCard from './PostCard'

const meta: Meta<typeof PostCard> = {
  title: 'Components/PostCard',
  component: PostCard,
  args: {
    coverImage: '/assets/blog/building-this-site/code.webp',
    excerpt: 'Some more interesting information that expands on the title',
    slug: 'an-interesting-title',
    tags: ['typescript', 'react'],
    title: 'An interesting title',
  },
}

export const Story: StoryFn<typeof PostCard> = (args) => <PostCard {...args} />

export default meta
