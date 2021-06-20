import { render, screen } from '@testing-library/react'
import Posts, { getStaticProps } from '../../pages/posts'
import { PostData } from '../../lib/postsApi'

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

describe('Posts', () => {
  let posts: PostData[]

  beforeEach(async () => {
    posts = (await getStaticProps()).props.allPosts
    render(<Posts allPosts={posts} />)
    await screen.findByRole('heading', { name: 'posts' })
  })

  it('shows the title', async () => {
    const title = await screen.findByRole('heading', { name: 'posts' })
    expect(title).toBeInTheDocument()
  })

  it('shows the header', async () => {
    const header = await screen.findByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('shows the footer', async () => {
    const footer = await screen.findByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('has a link to each post', async () => {
    for (const post of posts) {
      const postTitle = await screen.findByRole('link', { name: post.title })
      expect(postTitle).toBeInTheDocument()
    }
  })

  it('shows the excerpt from each post', async () => {
    for (const post of posts) {
      const postExcerpt = await screen.findByText(post.excerpt)
      expect(postExcerpt).toBeInTheDocument()
    }
  })
})
