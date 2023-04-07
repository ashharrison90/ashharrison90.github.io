import { StoryFn, Meta } from '@storybook/react'

import Word from './Word'

const meta: Meta<typeof Word> = {
  title: 'Components/WordlePoem/Word',
  component: Word,
  args: {
    word: 'scope',
    answer: 'moose',
  },
}

export const Story: StoryFn<typeof Word> = (args) => <Word {...args} />

export default meta
