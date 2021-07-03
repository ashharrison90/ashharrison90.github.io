import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from './Search'

describe('ShareButton', () => {
  const mockClassName = 'mockClassName'
  const mockOnChange = jest.fn()

  beforeEach(() => {
    render(<Search className={mockClassName} onChange={mockOnChange} />)
  })

  it('renders a search input', () => {
    const search = screen.getByPlaceholderText('Search posts')
    expect(search).toBeInTheDocument()
  })

  it('can type into the search input', () => {
    const search = screen.getByPlaceholderText('Search posts')
    expect(search).toBeInTheDocument()
    userEvent.type(search, 'hello world')
    expect(search).toHaveValue('hello world')
  })
})
