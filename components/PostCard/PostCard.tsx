import Link from 'next/link'
import styles from './PostCard.module.scss'

export interface Props {
  coverImage: string
  date: string
  excerpt: string
  slug: string
  title: string
}

export default function PostCard({
  coverImage,
  date,
  excerpt,
  slug,
  title,
}: Props) {
  return (
    <Link as={`/posts/${slug}`} href='/posts/[slug]'>
      <a
        aria-label={title}
        className={styles.card}
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className={styles.dateContainer}>
          <div className={styles.date}>
            {new Date(date).toLocaleDateString()}
          </div>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.excerpt}>{excerpt}</div>
        </div>
      </a>
    </Link>
  )
}
