import { ComponentStory, ComponentMeta } from '@storybook/react'
import Word from './Word'

const meta: ComponentMeta<typeof Word> = {
  title: 'Components/WordlePoem/Word',
  component: Word,
  argTypes: {
    word: {
      defaultValue: 'scope',
    },
    answer: {
      defaultValue: 'moose',
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof Word> = (args) => (
  <Word {...args} />
)

export default meta
