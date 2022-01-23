import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PostTitle from './PostTitle'

describe('PostTitle', () => {
  const mockDate = 'mockDate'
  const mockExcerpt = 'mockExcerpt'
  const mockTags = ['mockTag']
  const mockTitle = 'mockTitle'

  beforeEach(() => {
    jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays the title', () => {
    render(
      <PostTitle
        date={mockDate}
        excerpt={mockExcerpt}
        tags={mockTags}
        title={mockTitle}
      />
    )
    const title = screen.getByText(mockTitle)
    expect(title).toBeInTheDocument()
  })

  it('displays the date in a local format', () => {
    render(
      <PostTitle
        date={mockDate}
        excerpt={mockExcerpt}
        tags={mockTags}
        title={mockTitle}
      />
    )
    const date = screen.getByText(mockDate)
    expect(date).toBeInTheDocument()
  })

  it('displays the excerpt', () => {
    render(
      <PostTitle
        date={mockDate}
        excerpt={mockExcerpt}
        tags={mockTags}
        title={mockTitle}
      />
    )
    const excerpt = screen.getByText(mockExcerpt)
    expect(excerpt).toBeInTheDocument()
  })

  it('displays the tags', () => {
    render(
      <PostTitle
        date={mockDate}
        excerpt={mockExcerpt}
        tags={mockTags}
        title={mockTitle}
      />
    )
    mockTags.forEach((mockTag) => {
      const tag = screen.getByText(mockTag)
      expect(tag).toBeInTheDocument()
    })
  })

  it('has a "Share to LinkedIn" link', () => {
    render(
      <PostTitle
        date={mockDate}
        excerpt={mockExcerpt}
        tags={mockTags}
        title={mockTitle}
      />
    )
    const link = screen.getByRole('link', { name: 'Share to LinkedIn' })
    expect(link).toBeInTheDocument()
  })

  it('has a "Share to Reddit" link', () => {
    render(
      <PostTitle
        date={mockDate}
        excerpt={mockExcerpt}
        tags={mockTags}
        title={mockTitle}
      />
    )
    const link = screen.getByRole('link', { name: 'Share to Reddit' })
    expect(link).toBeInTheDocument()
  })

  it('has a "Share to Twitter" link', () => {
    render(
      <PostTitle
        date={mockDate}
        excerpt={mockExcerpt}
        tags={mockTags}
        title={mockTitle}
      />
    )
    const link = screen.getByRole('link', { name: 'Share to Twitter' })
    expect(link).toBeInTheDocument()
  })

  it('has a native "Share" button if it supports it', () => {
    navigator.share = jest.fn()
    render(
      <PostTitle
        date={mockDate}
        excerpt={mockExcerpt}
        tags={mockTags}
        title={mockTitle}
      />
    )
    const button = screen.getByRole('button', { name: 'Share' })
    expect(button).toBeInTheDocument()
    userEvent.click(button)
    expect(navigator.share).toHaveBeenCalledWith({
      title: mockTitle,
      url: 'http://localhost/',
    })
  })
})
