import { ComponentStory, ComponentMeta } from '@storybook/react'
import Tag from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: {
      defaultValue: 'typescript',
    },
  },
} as ComponentMeta<typeof Tag>

export const RendersCorrectly: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args} />
)
