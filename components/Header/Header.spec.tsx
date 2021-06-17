import { render, screen } from '@testing-library/react'
import Header from './Header'

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

describe('Header', () => {
  it('has a link to the home page', async () => {
    render(<Header />)
    const link = await screen.findByRole('link', { name: 'Home' })
    expect(link).toBeInTheDocument()
  })

  it('has a link to the about page', async () => {
    render(<Header />)
    const link = await screen.findByRole('link', { name: 'About' })
    expect(link).toBeInTheDocument()
  })

  it('has a link to the posts page', async () => {
    render(<Header />)
    const link = await screen.findByRole('link', { name: 'Posts' })
    expect(link).toBeInTheDocument()
  })

  it('contains the theme toggle', async () => {
    render(<Header />)
    const themeToggle = await screen.findByRole('checkbox', {
      name: 'themeToggle',
    })
    expect(themeToggle).toBeInTheDocument()
  })
})
