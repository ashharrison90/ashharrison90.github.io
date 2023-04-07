import { StoryFn, Meta } from '@storybook/react'

import PostTitle from './PostTitle'

const meta: Meta<typeof PostTitle> = {
  title: 'Components/PostTitle',
  component: PostTitle,
  argTypes: {
    date: {
      control: {
        type: 'date',
      },
    },
  },
  args: {
    date: '2020-10-01T00:00:00.000Z',
    excerpt: 'Some more interesting information that expands on the title',
    tags: ['javascript', 'typescript', 'react', 'nextjs'],
    title: 'An interesting title',
  },
}

export const Story: StoryFn<typeof PostTitle> = (args) => (
  <PostTitle {...args} />
)

export default meta
