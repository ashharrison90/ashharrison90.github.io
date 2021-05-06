import Link from 'next/link'
import styles from './PostCard.module.scss'

export interface Props {
  coverImage: string,
  date: string,
  excerpt: string,
  slug: string,
  title: string
}

export default function PostCard({
  coverImage,
  date,
  excerpt,
  slug,
  title
}: Props) {
  return (
    <Link as={`/posts/${slug}`} href='/posts/[slug]'>
      <a className={styles.card} style={{ backgroundImage: `url(${coverImage})` }}>
        <div className={styles.textContainer}>
          <div className={styles.date}>{(new Date(date)).toLocaleDateString()}</div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.excerpt}>{excerpt}</div>
        </div>
      </a>
    </Link>
  )
}
