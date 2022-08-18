import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from './ThemeToggle'
import {
  ThemeContextProvider,
  Theme,
} from '../../context/ThemeContext/ThemeContext'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'

describe('ThemeToggle', () => {
  let user: UserEvent
  beforeEach(() => {
    localStorage.setItem('theme', Theme.DARK)
    user = userEvent.setup()
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
    const toggle: HTMLInputElement = screen.getByRole('checkbox', {
      name: 'Toggle theme',
    })
    expect(toggle).toBeInstanceOf(HTMLElement)
    expect(toggle.checked).toEqual(true)
  })

  it('toggles the theme when clicked', async () => {
    const toggle: HTMLInputElement = screen.getByRole('checkbox', {
      name: 'Toggle theme',
    })
    expect(toggle.checked).toEqual(true)

    await user.click(toggle)
    expect(toggle.checked).toEqual(false)
    expect(document.documentElement.getAttribute('data-theme')).toEqual(
      Theme.LIGHT
    )
    expect(localStorage.getItem('theme')).toEqual(Theme.LIGHT)

    await user.click(toggle)
    expect(toggle.checked).toEqual(true)
    expect(document.documentElement.getAttribute('data-theme')).toEqual(
      Theme.DARK
    )
    expect(localStorage.getItem('theme')).toEqual(Theme.DARK)
  })
})
