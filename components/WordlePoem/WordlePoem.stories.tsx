import { StoryFn, Meta } from '@storybook/react'

import WordlePoem from './WordlePoem'

const meta: Meta<typeof WordlePoem> = {
  title: 'Components/WordlePoem',
  component: WordlePoem,
  args: {
    lines: ['tread', 'feign blues', 'scope whose moose ?'],
    answer: 'moose',
  },
}

export const Story: StoryFn<typeof WordlePoem> = (args) => (
  <WordlePoem {...args} />
)

export default meta
