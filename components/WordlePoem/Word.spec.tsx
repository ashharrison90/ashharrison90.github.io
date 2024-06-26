import { render, screen } from '@testing-library/react'
import { MockInstance } from 'vitest'

import Word from './Word'

describe('Word', () => {
  let mockIntersectionObserver: MockInstance

  beforeEach(async () => {
    // IntersectionObserver isn't available in test environment
    mockIntersectionObserver = vi.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    vi.stubGlobal(`IntersectionObserver`, mockIntersectionObserver)
  })

  it('splits each word into individual characters and sets the correct classes', () => {
    const answer = 'moose'
    const word = 'scope'

    render(<Word word={word} answer={answer} />)

    expect(screen.getByText('s')).toBeInTheDocument()
    expect(screen.getByText('s')).toHaveClass('matchPartial')

    expect(screen.getByText('c')).toBeInTheDocument()
    expect(screen.getByText('c')).toHaveClass('matchNone')

    expect(screen.getByText('o')).toBeInTheDocument()
    expect(screen.getByText('o')).toHaveClass('matchExact')

    expect(screen.getByText('p')).toBeInTheDocument()
    expect(screen.getByText('p')).toHaveClass('matchNone')

    expect(screen.getByText('e')).toBeInTheDocument()
    expect(screen.getByText('e')).toHaveClass('matchExact')
  })
})
