import { render, screen } from '@testing-library/react'
import PostCard from './PostCard'

describe('PostCard', () => {
  const mockCoverImage = 'mockCoverImage'
  const mockDate = 'mockDate'
  const mockExcerpt = 'mockExcerpt'
  const mockSlug = 'mockSlug'
  const mockTitle = 'mockTitle'
  const mockTags = ['mockTag']

  beforeEach(() => {
    jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate)
    render(
      <PostCard
        coverImage={mockCoverImage}
        date={mockDate}
        excerpt={mockExcerpt}
        slug={mockSlug}
        tags={mockTags}
        title={mockTitle}
      />
    )
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays the title', () => {
    const title = screen.getByText(mockTitle)
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

  it('uses the title to name the link', () => {
    const link = screen.getByRole('link', { name: mockTitle })
    expect(link).toBeInTheDocument()
  })

  it('takes you to the post when clicked', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', `/posts/${mockSlug}`)
  })

  it('the link displays the coverImage', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute(
      'style',
      `background-image: url(${mockCoverImage});`
    )
  })
})
