import Link from 'next/link'
import Image from 'next/image'
import styles from './PostCard.module.scss'

export interface Props {
  coverImage: string,
  date: string,
  excerpt: string,
  slug: string,
  title: string
}

export default function PostGrid({
  coverImage,
  date,
  excerpt,
  slug,
  title
}: Props) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            layout='fill'
            objectFit='cover'
            src={coverImage}
          />
        </div>
        <p>{title}</p>
        <p>{(new Date(date)).toLocaleDateString()}</p>
        <p>{excerpt}</p>
      </a>
    </Link>
  )
}
