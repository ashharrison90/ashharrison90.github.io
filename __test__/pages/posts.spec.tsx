import { render, screen } from '@testing-library/react'
import Posts, { getStaticProps } from '../../pages/posts'
import { PostMetadata } from '../../lib/postsApi'
import userEvent from '@testing-library/user-event'
import fs from 'fs'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'

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

jest.mock('../../pages/posts/building-this-site.mdx', () => ({
  metadata: {
    coverImage: '/assets/blog/building-this-site/code.webp',
    date: '2021-05-09T15:40:07.322Z',
    excerpt:
      "I had a week's holiday and decided to finally build the site I've been telling myself I'll do for the last 6 years.",
    slug: 'building-this-site',
    tags: ['javascript', 'typescript', 'react', 'nextjs', 'design'],
    title: 'Building this site',
  },
}))

jest.mock('../../pages/posts/bye-bye-popups.mdx', () => ({
  metadata: {
    title: 'Bye bye popups',
    excerpt:
      "For about 5 hours, our custom popups completely disappeared. Here's how Google ruined my day.",
    coverImage: '/assets/blog/bye-bye-popups/popups-demo-page.webp',
    date: '2021-06-11T17:00:07.322Z',
    slug: 'bye-bye-popups',
    tags: ['javascript', 'angularjs', 'cypress', 'chrome'],
  },
}))

describe('Posts', () => {
  let posts: PostMetadata[]
  let readdirSyncSpy: jest.SpyInstance
  let user: UserEvent

  beforeEach(async () => {
    readdirSyncSpy = jest.spyOn(fs, 'readdirSync')
    readdirSyncSpy.mockReturnValue([
      'building-this-site.mdx',
      'bye-bye-popups.mdx',
    ])
    posts = (await getStaticProps()).props.allPosts
    user = userEvent.setup()
    render(<Posts allPosts={posts} />)

    // need to wait for the theme toggle to render
    const themeToggle = await screen.findByRole('checkbox', {
      name: 'Toggle theme',
    })
    expect(themeToggle).toBeInTheDocument()
  })

  afterEach(() => {
    readdirSyncSpy.mockRestore()
  })

  it('shows the title', () => {
    const title = screen.getByRole('heading', { name: 'posts' })
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

  it('has a link to each post', () => {
    for (const post of posts) {
      const postTitle = screen.getByRole('link', { name: post.title })
      expect(postTitle).toBeInTheDocument()
    }
  })

  it('shows the excerpt from each post', () => {
    for (const post of posts) {
      const postExcerpt = screen.getByText(post.excerpt)
      expect(postExcerpt).toBeInTheDocument()
    }
  })

  it('can filter posts by title', async () => {
    const postToFilter = posts[0]
    const search = screen.getByPlaceholderText('Search posts')
    expect(search).toBeInTheDocument()
    await user.type(search, postToFilter.title)
    expect(search).toHaveValue(postToFilter.title)

    const filteredPost = screen.getByRole('link', { name: postToFilter.title })
    expect(filteredPost).toBeInTheDocument()
    const postCards = screen.getAllByTestId('PostCard')
    expect(postCards.length).toBeLessThanOrEqual(posts.length)
  })

  it('can filter posts by excerpt', async () => {
    const postToFilter = posts[0]
    const search = screen.getByPlaceholderText('Search posts')
    expect(search).toBeInTheDocument()
    await user.type(search, postToFilter.excerpt)
    expect(search).toHaveValue(postToFilter.excerpt)

    const filteredPost = screen.getByRole('link', { name: postToFilter.title })
    expect(filteredPost).toBeInTheDocument()
    const postCards = screen.getAllByTestId('PostCard')
    expect(postCards.length).toBeLessThanOrEqual(posts.length)
  })

  it('shows the empty state if the search does not match', async () => {
    const search = screen.getByPlaceholderText('Search posts')
    expect(search).toBeInTheDocument()
    await user.type(search, 'YUNOEXIST')

    const emptyState = screen.getByText('Nothing found')
    expect(emptyState).toBeInTheDocument()
  })
})
