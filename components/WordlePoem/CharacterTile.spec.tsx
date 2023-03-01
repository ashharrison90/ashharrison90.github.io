import { render, screen } from '@testing-library/react'
import CharacterTile, { MatchType } from './CharacterTile'

describe('CharacterTile', () => {
  it('displays the character passed', () => {
    render(<CharacterTile character='f' matchType={MatchType.None} />)

    expect(screen.getByText('f')).toBeInTheDocument()
  })

  it('changes the class correctly based on the matchType', () => {
    const { rerender } = render(
      <CharacterTile character='f' matchType={MatchType.None} />
    )
    const characterTile = screen.getByText('f')
    expect(characterTile).toHaveClass('matchNone')

    rerender(<CharacterTile character='f' matchType={MatchType.Partial} />)
    expect(characterTile).toHaveClass('matchPartial')

    rerender(<CharacterTile character='f' matchType={MatchType.Exact} />)
    expect(characterTile).toHaveClass('matchExact')
  })
})
