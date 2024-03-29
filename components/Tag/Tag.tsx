import randomColor from 'randomcolor'
import { useContext } from 'react'
import Highlighter from 'react-highlight-words'

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
  const colorDark = randomColor({
    luminosity: 'dark',
    seed: label,
  })

  return (
    <div
      data-testid='tag'
      style={{
        borderColor: theme === Theme.DARK ? color : colorDark,
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
