import { ChangeEvent } from 'react'
import classnames from 'classnames'
import styles from './Search.module.scss'

export interface Props {
  className?: string
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function Search({ className, onChange, placeholder }: Props) {
  return (
    <input
      type='search'
      className={classnames(className, styles.input)}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
