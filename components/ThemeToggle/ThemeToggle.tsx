import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [useDarkMode, setUseDarkMode] = useState(false)
  useEffect(() => {
    document.documentElement.dataset.theme = useDarkMode ? 'dark' : 'light'
  }, [useDarkMode])

  return (
    <button
      onClick={() => setUseDarkMode(!useDarkMode)}
    >
      Toggle theme!
    </button>
  )
}
