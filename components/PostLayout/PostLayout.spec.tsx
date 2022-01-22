import { render, screen } from '@testing-library/react'
import PostLayout from './PostLayout'

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

describe('PostLayout', () => {
  const mockCoverImage = 'mockCoverImage'
  const mockDate = 'mockDate'
  const mockExcerpt = 'mockExcerpt'
  const mockSlug = 'mockSlug'
  const mockTitle = 'mockTitle'
  const mockTags = ['mockTag']
  const mockContent = 'mockContent'
  const mockMetadata = {
    coverImage: mockCoverImage,
    date: mockDate,
    excerpt: mockExcerpt,
    slug: mockSlug,
    tags: mockTags,
    title: mockTitle,
  }

  beforeEach(async () => {
    jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate)
    render(<PostLayout metadata={mockMetadata}>{mockContent}</PostLayout>)
    await screen.findByText(mockContent)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays the title', () => {
    const title = screen.getByRole('heading', { name: mockTitle })
    expect(title).toBeInTheDocument()
  })

  it('displays the excerpt', () => {
    const excerpt = screen.getByText(mockExcerpt)
    expect(excerpt).toBeInTheDocument()
  })

  it('displays the date in a local format', () => {
    const date = screen.getByText(mockDate)
    expect(date).toBeInTheDocument()
  })

  it('displays the tags', () => {
    mockTags.forEach((mockTag) => {
      const tag = screen.getByText(mockTag)
      expect(tag).toBeInTheDocument()
    })
  })

  it('displays the content', () => {
    const date = screen.getByText(mockContent)
    expect(date).toBeInTheDocument()
  })
})
