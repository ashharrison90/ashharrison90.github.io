import fs from 'fs'

import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { MockInstance } from 'vitest'

import { PostMetadata } from '../../lib/postsApi'
import Index, { getStaticProps } from '../../pages/index'

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

vi.mock('../../pages/posts/building-this-site.mdx', () => ({
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

vi.mock('../../pages/posts/bye-bye-popups.mdx', () => ({
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
  let readdirSyncSpy: MockInstance

  beforeEach(async () => {
    readdirSyncSpy = vi.spyOn(fs, 'readdirSync')
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

  it('hides the header', () => {
    render(<Index allPosts={posts} />)
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('hide')
  })

  it('shows the footer', () => {
    render(<Index allPosts={posts} />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('shows a fallback until the main image has loaded', async () => {
    render(<Index allPosts={posts} />)

    const fallback = screen.getByTestId('heroFallback')
    let background = screen.getByTestId('heroBackground')
    let cutout = screen.getByTestId('heroCutout')
    expect(fallback).not.toHaveClass('hide')
    expect(background).toHaveClass('hide')
    expect(cutout).toHaveClass('hide')

    fireEvent.load(background)

    await waitFor(() => {
      background = screen.getByTestId('heroBackground')
      cutout = screen.getByTestId('heroCutout')
      expect(screen.queryByTestId('heroFallback')).not.toBeInTheDocument()
      expect(background).not.toHaveClass('hide')
      expect(cutout).not.toHaveClass('hide')
    })
  })
})
