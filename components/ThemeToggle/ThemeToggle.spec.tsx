import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from './ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.dataset.theme = 'dark'
    render(<ThemeToggle />)
  })

  it('displays a toggle input', () => {
    const toggle = screen.getByRole('checkbox', {
      name: 'Toggle theme',
    })
    expect(toggle).toBeInTheDocument()
  })

  it('defaults to the initial theme specified in document.documentElement.dataset.theme', () => {
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
    expect(document.documentElement.dataset.theme).toEqual('light')
    expect(localStorage.getItem('theme')).toEqual('light')

    userEvent.click(toggle)
    expect(toggle.checked).toEqual(true)
    expect(document.documentElement.dataset.theme).toEqual('dark')
    expect(localStorage.getItem('theme')).toEqual('dark')
  })
})
