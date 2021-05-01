import styles from './Footer.module.scss'

export default function Footer ({ footnote }: { footnote?: string }) {
  return (
    <div className={styles.footer}>
      <div className={styles.footnote}>
        {footnote}
      </div>
    </div>
  )
}
