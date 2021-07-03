import Link from 'next/link'
import Highlighter from 'react-highlight-words'
import styles from './PostCard.module.scss'

export interface Props {
  coverImage: string
  date: string
  excerpt: string
  searchString?: string
  slug: string
  title: string
}

export default function PostCard({
  coverImage,
  date,
  excerpt,
  searchString,
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
          <div className={styles.title}>
            <Highlighter
              autoEscape={true}
              searchWords={searchString?.split(' ') ?? []}
              textToHighlight={title}
            />
          </div>
          <div className={styles.excerpt}>
            <Highlighter
              autoEscape={true}
              searchWords={searchString?.split(' ') ?? []}
              textToHighlight={excerpt}
            />
          </div>
        </div>
      </a>
    </Link>
  )
}
