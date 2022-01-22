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
    luminosity: theme === Theme.DARK ? 'light' : 'dark',
    seed: label,
  })

  return (
    <div
      style={{
        backgroundColor: `${color}33`,
        borderColor: color,
        color: color,
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
