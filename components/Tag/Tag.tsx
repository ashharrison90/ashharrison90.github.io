import { useContext } from 'react'
import Highlighter from 'react-highlight-words'
import randomColor from 'randomcolor'
import { Theme, ThemeContext } from '../../context/ThemeContext/ThemeContext'
import styles from './Tag.module.scss'

export interface Props {
  label: string
  searchString?: string
}

export default function Tag({ label, searchString }: Props) {
  const { theme } = useContext(ThemeContext)
  const color = randomColor({
    luminosity: 'light',
    seed: label,
  })

  return (
    <div
      style={{
        borderColor: theme === Theme.DARK ? color : 'var(--text-secondary)',
        backgroundColor: theme === Theme.DARK ? `${color}22` : color,
        color: theme === Theme.DARK ? color : 'var(--text-primary)',
      }}
      className={styles.container}
    >
      <Highlighter
        searchWords={searchString?.split(' ') ?? []}
        textToHighlight={label}
      />
    </div>
  )
}
