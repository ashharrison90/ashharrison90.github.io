import { render, screen } from '@testing-library/react'
import preloadAll from 'jest-next-dynamic'
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
  beforeAll(async () => {
    await preloadAll()
  })

  it('renders a header element', () => {
    render(<Header show />)
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('renders a navigation section', () => {
    render(<Header show />)
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })

  it('has a link to the home page', () => {
    render(<Header show />)
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toBeInTheDocument()
  })

  it('has a link to the about page', () => {
    render(<Header show />)
    const link = screen.getByRole('link', { name: 'About' })
    expect(link).toBeInTheDocument()
  })

  it('has a link to the posts page', () => {
    render(<Header show />)
    const link = screen.getByRole('link', { name: 'Posts' })
    expect(link).toBeInTheDocument()
  })

  it('renders an extra link when on an individual post', () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter')
    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '/posts/foo',
    }))
    render(<Header show />)
    const link = screen.getByRole('link', { name: '/foo' })
    expect(link).toBeInTheDocument()
  })

  it('contains the theme toggle', () => {
    render(<Header show />)
    const themeToggle = screen.getByRole('checkbox', {
      name: 'Toggle theme',
    })
    expect(themeToggle).toBeInTheDocument()
  })
})
