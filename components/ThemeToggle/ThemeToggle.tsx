import { useContext } from 'react'
import { Theme, ThemeContext } from '../../context/ThemeContext/ThemeContext'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleToggleTheme = (useDarkMode: boolean) => {
    setTheme(useDarkMode ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <div className={styles.toggleContainer}>
      <input
        id='themeToggle'
        checked={theme === Theme.DARK ? true : false}
        className={styles.input}
        onChange={(event) => handleToggleTheme(event.target.checked)}
        type='checkbox'
      />
      <label
        aria-label='Toggle theme'
        className={styles.toggle}
        htmlFor='themeToggle'
      >
        <span className={styles.lightIcon}>&#9728;&#65039;</span>
        <span className={styles.darkIcon}>&#127769;</span>
        <span className={styles.toggleButton}></span>
      </label>
    </div>
  )
}
