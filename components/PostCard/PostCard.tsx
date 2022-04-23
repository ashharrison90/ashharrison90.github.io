import Link from 'next/link'
import Highlighter from 'react-highlight-words'
import Tag from '../Tag/Tag'
import styles from './PostCard.module.scss'

export interface Props {
  coverImage: string
  excerpt: string
  searchString?: string
  slug: string
  tags: Array<string>
  title: string
}

export default function PostCard({
  coverImage,
  excerpt,
  searchString,
  slug,
  tags,
  title,
}: Props) {
  return (
    <Link as={`/posts/${slug}`} href='/posts/[slug]'>
      <a aria-label={title} className={styles.card} data-testid='PostCard'>
        <div
          data-testid='PostCard-image'
          style={{ backgroundImage: `url(${coverImage})` }}
          className={styles.backgroundImage}
        />
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <Highlighter
              searchWords={searchString?.split(' ') ?? []}
              textToHighlight={title}
            />
          </div>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag key={tag} label={tag} searchString={searchString} />
            ))}
          </div>
          <div className={styles.excerpt}>
            <Highlighter
              searchWords={searchString?.split(' ') ?? []}
              textToHighlight={excerpt}
            />
          </div>
        </div>
      </a>
    </Link>
  )
}
