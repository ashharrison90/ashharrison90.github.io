import { getAllPosts, getPostBySlug } from './postsApi'
import fs from 'fs'

describe('postsApi', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getPostBySlug', () => {
    const mockContent = 'mockContent'
    const mockCoverImage = 'mockCoverImage'
    const mockDate = 'mockDate'
    const mockExcerpt = 'mockExcerpt'
    const mockTitle = 'mockTitle'
    const mockSlug = 'mockSlug'
    let readFileSpy: jest.SpyInstance

    beforeEach(() => {
      readFileSpy = jest.spyOn(fs, 'readFileSync')
    })

    afterEach(() => {
      readFileSpy.mockRestore()
    })

    it('looks in the _jobs folder for the specified post', () => {
      readFileSpy.mockImplementation(
        () =>
          `---
title: ${mockTitle}
excerpt: ${mockExcerpt}
coverImage: ${mockCoverImage}
date: ${mockDate}
---
${mockContent}`
      )

      const result = getPostBySlug(`${mockSlug}.md`)
      expect(readFileSpy).toHaveBeenCalledWith(
        expect.stringMatching(`_posts/${mockSlug}`),
        'utf8'
      )
      expect(result).toEqual({
        content: mockContent,
        coverImage: mockCoverImage,
        date: mockDate,
        excerpt: mockExcerpt,
        slug: mockSlug,
        title: mockTitle,
      })
    })
  })

  describe('getAllPosts', () => {
    let readdirSyncSpy: jest.SpyInstance
    let readFileSpy: jest.SpyInstance

    beforeEach(() => {
      readdirSyncSpy = jest
        .spyOn(fs, 'readdirSync')
        .mockReturnValue(new Array(2).fill(''))
      readFileSpy = jest.spyOn(fs, 'readFileSync')
    })

    afterEach(() => {
      readdirSyncSpy.mockRestore()
      readFileSpy.mockRestore()
    })

    it('will order the posts such that the post with the latest date is first', () => {
      const post1 = `---
date: '2018-09-01T00:00:00.000Z'
---
`
      const post2 = `---
date: '2016-09-01T00:00:00.000Z'
---
`
      const expectedResult = [
        {
          content: '',
          date: '2018-09-01T00:00:00.000Z',
          slug: '',
        },
        {
          content: '',
          date: '2016-09-01T00:00:00.000Z',
          slug: '',
        },
      ]

      readFileSpy.mockReturnValueOnce(post1).mockReturnValueOnce(post2)
      expect(getAllPosts()).toEqual(expectedResult)

      // Check the other order
      readFileSpy.mockReturnValueOnce(post2).mockReturnValueOnce(post1)
      expect(getAllPosts()).toEqual(expectedResult)
    })

    it('will limit the number of returned posts to the limit passed in', () => {
      const post1 = `---
date: '2018-09-01T00:00:00.000Z'
---
`
      const post2 = `---
date: '2016-09-01T00:00:00.000Z'
---
`
      const expectedResult = [
        {
          content: '',
          date: '2018-09-01T00:00:00.000Z',
          slug: '',
        },
      ]

      readFileSpy.mockReturnValueOnce(post1).mockReturnValueOnce(post2)
      expect(getAllPosts(1)).toEqual(expectedResult)

      // Check the other order
      readFileSpy.mockReturnValueOnce(post2).mockReturnValueOnce(post1)
      expect(getAllPosts(1)).toEqual(expectedResult)
    })
  })
})
