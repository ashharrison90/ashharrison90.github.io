import { createContext, ReactNode, useState } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {
    /* noop */
  },
})

export interface Props {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: Props) => {
  const setTheme = (theme: Theme) => {
    window.localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    setState({ ...state, theme })
  }

  const initialTheme =
    (window.localStorage.getItem('theme') as Theme) ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Theme.DARK
      : Theme.LIGHT)
  window.localStorage.setItem('theme', initialTheme)
  document.documentElement.setAttribute('data-theme', initialTheme)

  const initialState = {
    theme: initialTheme,
    setTheme,
  }

  const [state, setState] = useState(initialState)

  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider
