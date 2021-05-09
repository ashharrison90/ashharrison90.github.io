import { ReactNode } from 'react'
import classnames from 'classnames'
import styles from './PostGrid.module.scss'

export interface Props {
  children: ReactNode
  className?: string
}

export default function PostGrid({ children, className }: Props) {
  return (
    <div className={classnames(styles.gridContainer, className)}>
      {children}
    </div>
  )
}
