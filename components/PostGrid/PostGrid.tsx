import { ReactNode } from 'react'
import styles from './PostGrid.module.scss'

export interface Props {
  children: ReactNode
}

export default function PostGrid({ children }: Props) {
  return (
    <div className={styles.gridContainer}>
      {children}
    </div>
  )
}