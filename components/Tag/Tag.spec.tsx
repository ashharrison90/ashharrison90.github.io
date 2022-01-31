import { render, screen } from '@testing-library/react'
import Tag from './Tag'
import {
  ThemeContextProvider,
  Theme,
} from '../../context/ThemeContext/ThemeContext'

jest.mock('randomcolor', () => () => '#012345')

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
    const tag = screen.getByTestId('tag')
    const label = screen.getByText(mockLabel)
    expect(label).toBeInTheDocument()
    expect(tag).toHaveStyle('background-color: #01234522')
    expect(tag).toHaveStyle('border-color: #012345')
    expect(tag).toHaveStyle('color: #012345')
  })

  it('sets the tag color correctly for the light theme', () => {
    localStorage.setItem('theme', Theme.LIGHT)
    const mockLabel = 'typescript'
    render(
      <ThemeContextProvider>
        <Tag label={mockLabel} />
      </ThemeContextProvider>
    )
    const tag = screen.getByTestId('tag')
    const label = screen.getByText(mockLabel)
    expect(label).toBeInTheDocument()
    expect(tag).toHaveStyle('background-color: #012345')
    expect(tag).toHaveStyle('border-color: #012345')
    expect(tag).toHaveStyle('color: var(--text-primary')
  })
})
