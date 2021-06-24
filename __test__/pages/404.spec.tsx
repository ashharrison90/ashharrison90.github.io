import { render, screen } from '@testing-library/react'
import NotFound from '../../pages/404'

describe('404 page', () => {
  beforeEach(async () => {
    render(<NotFound />)
  })

  it('shows the title', async () => {
    const title = await screen.getByRole('heading', { name: 'Not found' })
    expect(title).toBeInTheDocument()
  })
})
