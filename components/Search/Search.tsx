import { ChangeEvent } from 'react'
import classnames from 'classnames'
import styles from './Search.module.scss'
import SearchIcon from '@fortawesome/fontawesome-free/svgs/solid/search.svg'

export interface Props {
  className?: string
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function Search({ className, onChange, placeholder }: Props) {
  return (
    <div className={styles.container}>
      <input
        type='search'
        className={classnames(className, styles.input)}
        onChange={onChange}
        placeholder={placeholder}
      />
      <SearchIcon className={styles.icon} />
    </div>
  )
}
