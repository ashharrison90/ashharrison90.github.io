import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostGrid from './PostGrid'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

export default {
  title: 'Components/PostGrid',
  component: PostGrid,
  argTypes: {
    children: {
      defaultValue: colors.map((color) => (
        <div
          style={{
            backgroundColor: color,
            height: 300,
          }}
        />
      )),
    },
    className: {
      defaultValue: 'myCustomClass',
    },
  },
} as ComponentMeta<typeof PostGrid>

export const RendersCorrectly: ComponentStory<typeof PostGrid> = (args) => (
  <PostGrid {...args} />
)
