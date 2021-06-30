import { render, screen } from '@testing-library/react'
import PostTitle from './PostTitle'

describe('PostTitle', () => {
  const mockDate = 'mockDate'
  const mockTitle = 'mockTitle'

  beforeEach(() => {
    jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate)
    render(<PostTitle date={mockDate} title={mockTitle} />)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays the title', () => {
    const title = screen.getByText(mockTitle)
    expect(title).toBeInTheDocument()
  })

  it('displays the date in a local format', () => {
    const date = screen.getByText(mockDate)
    expect(date).toBeInTheDocument()
  })

  it('has a "Share to LinkedIn" link', () => {
    const link = screen.getByRole('link', { name: 'Share to LinkedIn' })
    expect(link).toBeInTheDocument()
  })

  it('has a "Share to Reddit" link', () => {
    const link = screen.getByRole('link', { name: 'Share to Reddit' })
    expect(link).toBeInTheDocument()
  })

  it('has a "Share to Twitter" link', () => {
    const link = screen.getByRole('link', { name: 'Share to Twitter' })
    expect(link).toBeInTheDocument()
  })
})
