import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShareButton from './ShareButton'

describe('ShareButton', () => {
  const mockTitle = 'mockTitle'
  const mockUrl = 'mockUrl'

  beforeEach(() => {
    render(<ShareButton title={mockTitle} url={mockUrl} />)
  })

  it('renders a share button', () => {
    const button = screen.getByRole('button', { name: 'Share' })
    expect(button).toBeInTheDocument()
  })

  it('calls the share api when clicked', () => {
    navigator.share = jest.fn()
    const button = screen.getByRole('button', { name: 'Share' })
    userEvent.click(button)
    expect(navigator.share).toHaveBeenCalledWith({
      title: mockTitle,
      url: mockUrl,
    })
  })
})
