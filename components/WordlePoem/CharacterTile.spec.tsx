import { render, screen } from '@testing-library/react'
import CharacterTile, { MatchType } from './CharacterTile'

describe('CharacterTile', () => {
  let mockIntersectionObserver: jest.Mock<any, any>

  beforeEach(async () => {
    // IntersectionObserver isn't available in test environment
    mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('hides content initially', () => {
    render(<CharacterTile character='f' matchType={MatchType.None} />)

    const characterTile = screen.getByText('f')
    expect(characterTile).not.toHaveStyle('color: #fff')
  })

  it('makes content visible when the tile is visible', () => {
    render(<CharacterTile character='f' matchType={MatchType.None} />)

    const characterTile = screen.getByText('f')
    // Make the first job summary intersect
    mockIntersectionObserver.mock.calls[0][0]([
      {
        target: characterTile,
        isIntersecting: true,
      },
    ])

    expect(characterTile).toHaveStyle('color: #fff')
  })
})
