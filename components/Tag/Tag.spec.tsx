import { render, screen } from '@testing-library/react'
import Tag from './Tag'
import {
  ThemeContextProvider,
  Theme,
} from '../../context/ThemeContext/ThemeContext'
import randomColor from 'randomcolor'

jest.mock('randomcolor', () => jest.fn())

describe('Tag', () => {
  it('displays the tag label', () => {
    const mockLabel = 'typescript'
    render(<Tag label={mockLabel} />)
    const label = screen.getByText(mockLabel)
    expect(label).toBeInTheDocument()
  })

  it('sets the tag color correctly for the dark theme', () => {
    localStorage.setItem('theme', Theme.DARK)
    const mockLabel = 'typescript'
    render(
      <ThemeContextProvider>
        <Tag label={mockLabel} />
      </ThemeContextProvider>
    )
    const label = screen.getByText(mockLabel)
    expect(label).toBeInTheDocument()
    expect(randomColor).toHaveBeenCalledWith(
      expect.objectContaining({
        seed: mockLabel,
        luminosity: 'light',
      })
    )
  })

  it('sets the tag color correctly for the light theme', () => {
    localStorage.setItem('theme', Theme.LIGHT)
    const mockLabel = 'typescript'
    render(
      <ThemeContextProvider>
        <Tag label={mockLabel} />
      </ThemeContextProvider>
    )
    const label = screen.getByText(mockLabel)
    expect(label).toBeInTheDocument()
    expect(randomColor).toHaveBeenCalledWith(
      expect.objectContaining({
        seed: mockLabel,
        luminosity: 'dark',
      })
    )
  })
})
