import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle () {
  const [useDarkMode, setUseDarkMode] = useState(document.documentElement.dataset.theme === 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = useDarkMode ? 'dark' : 'light'
  }, [useDarkMode])

  return (
    <div className={styles.toggleContainer}>
      <input
        id='darkModeToggle'
        checked={useDarkMode}
        className={styles.input}
        onChange={event => setUseDarkMode(event.target.checked)}
        type='checkbox'
      />
      <label className={styles.toggle} htmlFor='darkModeToggle'>
        <span className={styles.toggleButton}></span>
      </label>
    </div>
  )
}
