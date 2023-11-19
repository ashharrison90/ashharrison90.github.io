import { render, screen } from '@testing-library/react'

import About from '../../pages/about'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('About', () => {
  beforeEach(async () => {
    render(<About />)

    // need to wait for the theme toggle to render
    const themeToggle = await screen.findByRole('checkbox', {
      name: 'Toggle theme',
    })
    expect(themeToggle).toBeInTheDocument()
  })

  it('shows the title', () => {
    const title = screen.getByRole('heading', { name: 'about' })
    expect(title).toBeInTheDocument()
  })

  it('shows the header', () => {
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('shows the footer', () => {
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('shows the company as a heading for each job', () => {
    const companies = ['Grafana', 'IBM', 'QinetiQ', 'Durham']
    for (const company of companies) {
      const companyName = screen.getByRole('heading', { name: company })
      expect(companyName).toBeInTheDocument()
    }
  })
})
