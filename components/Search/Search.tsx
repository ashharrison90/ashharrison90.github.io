import SearchIcon from '@fortawesome/fontawesome-free/svgs/solid/magnifying-glass.svg'
import classnames from 'classnames'
import { ChangeEvent } from 'react'

import styles from './Search.module.scss'

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
