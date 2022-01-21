import { render, screen } from '@testing-library/react'
import Tag from './Tag'

describe('Tag', () => {
  it('displays the tag label', () => {
    const mockLabel = 'typescript'
    render(<Tag label={mockLabel} />)
    const label = screen.getByText(`#${mockLabel}`)
    expect(label).toBeInTheDocument()
  })
})
