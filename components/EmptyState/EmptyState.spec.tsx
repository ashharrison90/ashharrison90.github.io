import { render, screen } from '@testing-library/react'

import EmptyState from './EmptyState'

describe('EmptyState', () => {
  const mockMessage = 'mockMessage'

  beforeEach(() => {
    render(<EmptyState message={mockMessage} />)
  })

  it('renders the empty state message', () => {
    const message = screen.getByText(mockMessage)
    expect(message).toBeInTheDocument()
  })
})
