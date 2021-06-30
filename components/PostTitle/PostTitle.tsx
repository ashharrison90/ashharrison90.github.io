import styles from './PostTitle.module.scss'

export interface Props {
  date: string
  title: string
}

export default function PostTitle({ date, title }: Props) {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.date}>{new Date(date!).toLocaleDateString()}</div>
    </div>
  )
}
