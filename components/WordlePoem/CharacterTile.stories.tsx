import { StoryFn, Meta } from '@storybook/react'

import CharacterTile, { MatchType } from './CharacterTile'

const meta: Meta<typeof CharacterTile> = {
  title: 'Components/WordlePoem/CharacterTile',
  component: CharacterTile,
  args: {
    matchType: MatchType.None,
    character: 'a',
  },
}

export const Story: StoryFn<typeof CharacterTile> = (args) => (
  <CharacterTile {...args} />
)

export default meta
