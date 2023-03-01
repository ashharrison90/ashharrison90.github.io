import { render, screen } from '@testing-library/react'
import WordlePoem from './WordlePoem'

// Need a custom matcher since the text is split into individual characters
const customMatcher =
  (textToMatch: string) => (content: string, node: Element | null) => {
    const hasText = (node: Element | null) =>
      Boolean(node?.textContent?.includes(textToMatch))
    const nodeHasText = hasText(node)
    const childrenDontHaveText =
      !node?.children ||
      Array.from(node.children).every((child) => !hasText(child))
    return nodeHasText && childrenDontHaveText
  }

describe('WordlePoem', () => {
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

  it('splits each line into separate words', () => {
    const answer = 'moose'
    render(
      <WordlePoem
        lines={['tread', 'feign blues', 'scope whose moose']}
        answer={answer}
      />
    )
    expect(screen.getByText(customMatcher('tread'))).toBeInTheDocument()
    expect(screen.getByText(customMatcher('feign'))).toBeInTheDocument()
    expect(screen.getByText(customMatcher('blues'))).toBeInTheDocument()
    expect(screen.getByText(customMatcher('scope'))).toBeInTheDocument()
    expect(screen.getByText(customMatcher('whose'))).toBeInTheDocument()
    expect(screen.getByText(customMatcher('moose'))).toBeInTheDocument()
  })
})
