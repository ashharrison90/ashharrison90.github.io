import { useEffect, useState } from 'react'

export default function ThemeToggle () {
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
