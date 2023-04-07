import React, { useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { Decorator } from '@storybook/react'

export const withTheme: Decorator = (StoryFn) => {
  const theme = useDarkMode() ? 'dark' : 'light'
  useEffect(() => {
    const element = document.documentElement

    element.setAttribute('data-theme', theme)
  }, [theme])
  return <StoryFn />
}
