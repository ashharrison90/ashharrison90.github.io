import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders a footer', () => {
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('has a github link', () => {
    const link = screen.getByRole('link', { name: /github/ })
    expect(link).toBeInTheDocument()
  })

  it('has a linkedin link', () => {
    const link = screen.getByRole('link', { name: /linkedin/ })
    expect(link).toBeInTheDocument()
  })

  it('has a facebook link', () => {
    const link = screen.getByRole('link', { name: /facebook/ })
    expect(link).toBeInTheDocument()
  })

  it('has an instagram link', () => {
    const link = screen.getByRole('link', { name: /instagram/ })
    expect(link).toBeInTheDocument()
  })

  it('has a twitter link', () => {
    const link = screen.getByRole('link', { name: /twitter/ })
    expect(link).toBeInTheDocument()
  })
})
