import { render, screen } from '@testing-library/react'
import Posts, { getStaticProps } from '../../pages/posts'
import { PostData } from '../../lib/postsApi'
import userEvent from '@testing-library/user-event'

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

  it('filters the posts correctly when using the searchbox', async () => {
    const postToFilter = posts[0]
    const search = await screen.findByPlaceholderText('Search posts')
    expect(search).toBeInTheDocument()
    userEvent.type(search, postToFilter.title)
    expect(search).toHaveValue(postToFilter.title)
    posts.forEach((post) => {
      if (post === postToFilter) {
        const postTitle = screen.getByRole('link', { name: post.title })
        expect(postTitle).toBeInTheDocument()
      } else {
        const postTitle = screen.queryByRole('link', { name: post.title })
        expect(postTitle).toBe(null)
      }
    })
  })
})
