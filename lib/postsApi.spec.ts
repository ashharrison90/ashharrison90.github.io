import fs from 'fs'

import { getAllPosts, getPostMetadata } from './postsApi'

jest.mock('../pages/posts/building-this-site.mdx', () => ({
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

jest.mock('../pages/posts/bye-bye-popups.mdx', () => ({
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

describe('postsApi', () => {
  describe('getPostMetadata', () => {
    it('returns the correct metadata for a post', async () => {
      const result = await getPostMetadata('building-this-site.mdx')
      expect(result).toEqual({
        coverImage: '/assets/blog/building-this-site/code.webp',
        date: '2021-05-09T15:40:07.322Z',
        excerpt:
          "I had a week's holiday and decided to finally build the site I've been telling myself I'll do for the last 6 years.",
        slug: 'building-this-site',
        tags: ['javascript', 'typescript', 'react', 'nextjs', 'design'],
        title: 'Building this site',
      })
    })
  })

  describe('getAllPosts', () => {
    let readdirSyncSpy: jest.SpyInstance

    beforeEach(() => {
      readdirSyncSpy = jest.spyOn(fs, 'readdirSync')
    })

    afterEach(() => {
      readdirSyncSpy.mockRestore()
    })

    it('will order the posts such that the post with the latest date is first', async () => {
      readdirSyncSpy.mockReturnValueOnce([
        'building-this-site.mdx',
        'bye-bye-popups.mdx',
      ])
      const allPosts = await getAllPosts()

      for (let i = 0; i < allPosts.length; i++) {
        if (i === allPosts.length - 1) {
          break
        }
        expect(allPosts[i].date > allPosts[i + 1].date)
      }
    })

    it('will limit the number of returned posts to the limit passed in', async () => {
      readdirSyncSpy.mockReturnValueOnce([
        'bye-bye-popups.mdx',
        'building-this-site.mdx',
      ])
      const allPosts = await getAllPosts(1)
      expect(allPosts.length).toEqual(1)
    })
  })
})
