import { render, screen } from '@testing-library/react'

import NotFound from '../../pages/404'

describe('404 page', () => {
  beforeEach(() => {
    render(<NotFound />)
  })

  it('shows the title', () => {
    const title = screen.getByRole('heading', { name: 'Not found' })
    expect(title).toBeInTheDocument()
  })
})
