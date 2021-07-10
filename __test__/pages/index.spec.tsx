import { render, screen } from '@testing-library/react'
import { PostData } from '../../lib/postsApi'
import Index, { getStaticProps } from '../../pages/index'

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

describe('Homepage', () => {
  let posts: PostData[]

  beforeEach(async () => {
    posts = (await getStaticProps()).props.allPosts
  })

  it('shows the title', async () => {
    render(<Index allPosts={posts} />)
    const title = await screen.findByRole('heading', { name: 'hi' })
    expect(title).toBeInTheDocument()
  })

  it('hides the header', async () => {
    render(<Index allPosts={posts} />)
    const header = await screen.findByRole('banner')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('hide')
  })

  it('shows the footer', async () => {
    render(<Index allPosts={posts} />)
    const footer = await screen.findByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('shows a fallback until the images have loaded', async () => {
    Object.defineProperty(document, 'readyState', {
      get() {
        return 'loading'
      },
    })
    render(<Index allPosts={posts} />)
    const fallback = await screen.findByTestId('heroFallback')
    const background = await screen.findByTestId('heroBackground')
    const cutout = await screen.findByTestId('heroCutout')
    expect(fallback).not.toHaveClass('hide')
    expect(background).toHaveClass('hide')
    expect(cutout).toHaveClass('hide')
  })
})
