import { StoryFn, Meta } from '@storybook/react'

import PostGrid from './PostGrid'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const meta: Meta<typeof PostGrid> = {
  title: 'Components/PostGrid',
  component: PostGrid,
  args: {
    children: colors.map((color) => (
      <div
        style={{
          backgroundColor: color,
          height: 300,
        }}
      />
    )),
    className: 'myCustomClass',
  },
}

export const Story: StoryFn<typeof PostGrid> = (args) => <PostGrid {...args} />

export default meta
