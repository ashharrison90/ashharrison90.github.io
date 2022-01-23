import React, { useEffect, useState } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const ThemeContext = React.createContext({
  theme: Theme.LIGHT,
  setTheme: (theme: Theme) => {},
})

export interface Props {
  children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: Props) => {
  const setTheme = (theme: Theme) => {
    window.localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    setState({ ...state, theme })
  }

  useEffect(() => {
    const theme =
      window.localStorage.getItem('theme') ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? Theme.DARK
        : Theme.LIGHT)
    document.documentElement.setAttribute('data-theme', theme)
    setTheme(theme as Theme)
  }, [])

  const initialState = {
    theme: Theme.LIGHT,
    setTheme,
  }

  const [state, setState] = useState(initialState)

  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
}
