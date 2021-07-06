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
  it('renders a header element', async () => {
    render(<Header />)
    const header = await screen.findByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('renders a navigation section', async () => {
    render(<Header />)
    const navigation = await screen.findByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })

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

  it('renders an extra link when on an individual post', async () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter')
    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '/posts/foo',
    }))
    render(<Header />)
    const link = await screen.findByRole('link', { name: '/foo' })
    expect(link).toBeInTheDocument()
  })

  it('contains the theme toggle', async () => {
    render(<Header />)
    const themeToggle = await screen.findByRole('checkbox', {
      name: 'Toggle theme',
    })
    expect(themeToggle).toBeInTheDocument()
  })
})
