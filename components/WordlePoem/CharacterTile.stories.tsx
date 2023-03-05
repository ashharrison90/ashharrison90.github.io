import { ComponentStory, ComponentMeta } from '@storybook/react'

import CharacterTile, { MatchType } from './CharacterTile'

const meta: ComponentMeta<typeof CharacterTile> = {
  title: 'Components/WordlePoem/CharacterTile',
  component: CharacterTile,
  argTypes: {
    matchType: {
      defaultValue: MatchType.None,
    },
    character: {
      defaultValue: 'a',
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof CharacterTile> = (
  args
) => <CharacterTile {...args} />

export default meta
