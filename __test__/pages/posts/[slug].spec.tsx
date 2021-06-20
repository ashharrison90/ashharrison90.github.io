import { render, screen } from '@testing-library/react'
import Post, {
  getStaticProps,
  getStaticPaths,
} from '../../../pages/posts/[slug]'
import { PostData } from '../../../lib/postsApi'

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

describe('[slug]', () => {
  let post: PostData

  beforeEach(async () => {
    post = (
      await getStaticProps({
        params: {
          slug: 'building-this-site',
        },
      })
    ).props.post
  })

  it('shows the title', async () => {
    render(<Post post={post} />)
    const title = await screen.findByRole('heading', {
      name: 'Building this site',
    })
    expect(title).toBeInTheDocument()
  })

  it('shows the header', async () => {
    render(<Post post={post} />)
    const header = await screen.findByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('shows the footer', async () => {
    render(<Post post={post} />)
    const footer = await screen.findByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })
})

describe('getStaticPaths', () => {
  it('returns an array of path elements', async () => {
    const staticPaths = await getStaticPaths()
    staticPaths.paths.forEach((path) => {
      expect(path).toEqual({
        params: {
          slug: expect.any(String),
        },
      })
    })
  })

  it('does not set a fallback', async () => {
    const staticPaths = await getStaticPaths()
    expect(staticPaths.fallback).toEqual(false)
  })
})
