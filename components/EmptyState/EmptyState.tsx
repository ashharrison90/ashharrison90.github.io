import styles from './EmptyState.module.scss'
import classNames from 'classnames'

export interface Props {
  className?: string
  message: string
}

export default function EmptyState({ className, message }: Props) {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.icon}>🧐</div>
      <div className={styles.message}>{message}</div>
    </div>
  )
}
