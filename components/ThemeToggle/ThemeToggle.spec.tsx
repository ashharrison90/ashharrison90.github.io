import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from './ThemeToggle'
import {
  ThemeContextProvider,
  Theme,
} from '../../context/ThemeContext/ThemeContext'

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.setItem('theme', Theme.DARK)
    render(
      <ThemeContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    )
  })

  it('displays a toggle input', () => {
    const toggle = screen.getByRole('checkbox', {
      name: 'Toggle theme',
    })
    expect(toggle).toBeInTheDocument()
  })

  it('defaults to the initial theme specified by the ThemeContext', () => {
    const toggle = screen.getByRole('checkbox', {
      name: 'Toggle theme',
    }) as HTMLInputElement
    expect(toggle.checked).toEqual(true)
  })

  it('toggles the theme when clicked', () => {
    const toggle = screen.getByRole('checkbox', {
      name: 'Toggle theme',
    }) as HTMLInputElement
    expect(toggle.checked).toEqual(true)

    userEvent.click(toggle)
    expect(toggle.checked).toEqual(false)
    expect(document.documentElement.getAttribute('data-theme')).toEqual(
      Theme.LIGHT
    )
    expect(localStorage.getItem('theme')).toEqual(Theme.LIGHT)

    userEvent.click(toggle)
    expect(toggle.checked).toEqual(true)
    expect(document.documentElement.getAttribute('data-theme')).toEqual(
      Theme.DARK
    )
    expect(localStorage.getItem('theme')).toEqual(Theme.DARK)
  })
})
