import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const [useDarkMode, setUseDarkMode] = useState(
    document.documentElement.dataset.theme === 'dark'
  )

  const handleToggleTheme = (useDarkMode: boolean) => {
    window.localStorage.setItem('theme', useDarkMode ? 'dark' : 'light')
    document.documentElement.dataset.theme = useDarkMode ? 'dark' : 'light'
    setUseDarkMode(useDarkMode)
  }

  return (
    <div className={styles.toggleContainer}>
      <input
        id='themeToggle'
        aria-label='themeToggle'
        checked={useDarkMode}
        className={styles.input}
        onChange={(event) => handleToggleTheme(event.target.checked)}
        type='checkbox'
      />
      <label className={styles.toggle} htmlFor='themeToggle'>
        <span className={styles.lightIcon}>&#9728;&#65039;</span>
        <span className={styles.darkIcon}>&#127769;</span>
        <span className={styles.toggleButton}></span>
      </label>
    </div>
  )
}
