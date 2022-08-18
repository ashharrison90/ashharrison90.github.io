import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostLayout from './PostLayout'

const meta: ComponentMeta<typeof PostLayout> = {
  title: 'Layouts/PostLayout',
  component: PostLayout,
  argTypes: {
    metadata: {
      defaultValue: {
        tags: ['javascript', 'typescript', 'react'],
        title: 'An interesting title',
        date: '2020-10-01T00:00:00.000Z',
        slug: 'an-interesting-post',
        coverImage: '/assets/blog/building-this-site/code.webp',
        excerpt: 'Some more interesting information that expands on the title',
      },
    },
    children: {
      defaultValue: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ),
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof PostLayout> = (args) => (
  <PostLayout {...args} />
)

export default meta
