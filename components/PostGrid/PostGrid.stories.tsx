import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostGrid from './PostGrid'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const meta: ComponentMeta<typeof PostGrid> = {
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
}

export const RendersCorrectly: ComponentStory<typeof PostGrid> = (args) => (
  <PostGrid {...args} />
)

export default meta
