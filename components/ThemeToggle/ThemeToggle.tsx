import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [useDarkMode, setUseDarkMode] = useState(document.documentElement.dataset.theme === 'dark')
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

export default ThemeToggle
