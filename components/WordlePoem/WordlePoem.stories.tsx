import { ComponentStory, ComponentMeta } from '@storybook/react'
import WordlePoem from './WordlePoem'

const meta: ComponentMeta<typeof WordlePoem> = {
  title: 'Components/WordlePoem',
  component: WordlePoem,
  argTypes: {
    lines: {
      defaultValue: ['tread', 'feign blues', 'scope whose moose ?'],
    },
    answer: {
      defaultValue: 'moose',
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof WordlePoem> = (args) => (
  <WordlePoem {...args} />
)

export default meta
