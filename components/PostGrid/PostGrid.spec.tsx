import { render, screen } from '@testing-library/react'

import PostGrid from './PostGrid'

describe('PostGrid', () => {
  const childId = 'mockId'
  const mockChild = <div data-testid={childId} />

  beforeEach(() => {
    render(<PostGrid>{mockChild}</PostGrid>)
  })

  it('renders the children in a grid', () => {
    const icon = screen.getByTestId(childId)
    expect(icon).toBeInTheDocument()
  })
})
