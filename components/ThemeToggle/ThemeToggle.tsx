import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle () {
  const [useDarkMode, setUseDarkMode] = useState(document.documentElement.dataset.theme === 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = useDarkMode ? 'dark' : 'light'
  }, [useDarkMode])

  return (
    <button
      className={styles.toggle}
      onClick={() => setUseDarkMode(!useDarkMode)}
    >
      Toggle theme!
    </button>
  )
}
