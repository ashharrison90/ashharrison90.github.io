import { render, screen } from '@testing-library/react'
import { PostMetadata } from '../../lib/postsApi'
import Index, { getStaticProps } from '../../pages/index'
import fs from 'fs'

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

describe('Homepage', () => {
  let posts: PostMetadata[]
  let readdirSyncSpy: jest.SpyInstance

  beforeEach(async () => {
    readdirSyncSpy = jest.spyOn(fs, 'readdirSync')
    readdirSyncSpy.mockReturnValue([
      'building-this-site.mdx',
      'bye-bye-popups.mdx',
    ])
    posts = (await getStaticProps()).props.allPosts
  })

  afterEach(() => {
    readdirSyncSpy.mockRestore()
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
