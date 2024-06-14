import { render, screen } from '@testing-library/react'

import Header from './Header'

vi.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

const setup = async () => {
  render(<Header show />)

  // need to wait for the theme toggle to render
  const themeToggle = await screen.findByRole('checkbox', {
    name: 'Toggle theme',
  })
  expect(themeToggle).toBeInTheDocument()
}

describe('Header', () => {
  it('renders a header element', async () => {
    await setup()
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('renders a navigation section', async () => {
    await setup()
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })

  it('has a link to the home page', async () => {
    await setup()
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toBeInTheDocument()
  })

  it('has a link to the about page', async () => {
    await setup()
    const link = screen.getByRole('link', { name: 'About' })
    expect(link).toBeInTheDocument()
  })

  it('has a link to the posts page', async () => {
    await setup()
    const link = screen.getByRole('link', { name: 'Posts' })
    expect(link).toBeInTheDocument()
  })

  it('renders an extra link when on an individual post', async () => {
    vi.mock('next/router', () => ({
      useRouter() {
        return {
          route: '/',
          pathname: '/',
          query: '',
          asPath: '/posts/foo',
        }
      },
    }))
    await setup()
    const link = screen.getByRole('link', { name: '/foo' })
    expect(link).toBeInTheDocument()
  })

  it('contains the theme toggle', async () => {
    await setup()
    const themeToggle = screen.getByRole('checkbox', {
      name: 'Toggle theme',
    })
    expect(themeToggle).toBeInTheDocument()
  })
})
