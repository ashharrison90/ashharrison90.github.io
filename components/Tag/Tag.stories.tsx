import { ComponentStory, ComponentMeta } from '@storybook/react'
import Tag from './Tag'

const meta: ComponentMeta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: {
      defaultValue: 'typescript',
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args} />
)

export default meta
