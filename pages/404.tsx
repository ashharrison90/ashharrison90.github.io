import styles from '../styles/404.module.scss'
import classnames from 'classnames'

const notFoundString = '40404040404040404040404040404040404040404'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        {[...Array(20)].map((item, index) => (
          <div
            key={index}
            className={classnames(styles.banner, {
              [styles.bannerForwards]: !!(index % 2),
              [styles.bannerReverse]: !(index % 2),
            })}
          >
            {notFoundString}
          </div>
        ))}
      </div>
      <h1 className={styles.title}>Not found</h1>
    </div>
  )
}
