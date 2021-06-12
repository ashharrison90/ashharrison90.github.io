import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('has the correct number of social links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.length).toEqual(6)
  })
})
