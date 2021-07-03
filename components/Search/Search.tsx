import { forwardRef, InputHTMLAttributes } from 'react'
import classnames from 'classnames'
import styles from './Search.module.scss'

const Search = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, onChange }, ref) => {
  return (
    <input
      type='search'
      className={classnames(className, styles.input)}
      onChange={onChange}
      placeholder='Search posts'
      ref={ref}
    />
  )
})

export default Search
