import SocialLink from '../SocialLink/SocialLink'
import ShareButton from '../ShareButton/ShareButton'
import styles from './PostTitle.module.scss'
import { useEffect, useState } from 'react'

export interface Props {
  date: string
  excerpt: string
  tags: Array<string>
  title: string
}

interface ShareData {
  label: string
  getShareLink: (url: string, title?: string) => string
}

const shareData: Record<string, ShareData> = {
  linkedin: {
    label: 'LinkedIn',
    getShareLink: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
  reddit: {
    label: 'Reddit',
    getShareLink: (url, title) =>
      `https://reddit.com/submit?url=${url}&title=${title}`,
  },
  twitter: {
    label: 'Twitter',
    getShareLink: (url, title) =>
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
  },
}

export default function PostTitle({ date, excerpt, tags, title }: Props) {
  const [pageUrl, setPageUrl] = useState('')
  const [isNativeShare, setIsNativeShare] = useState(false)

  useEffect(() => {
    setPageUrl(window.location.href)
    setIsNativeShare(!!navigator.share)
  }, [])

  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.infoContainer}>
          <div className={styles.leftHandSide}>
            <div className={styles.tags}>
              {tags.map((tag) => `#${tag}`).join(' ')}
            </div>
          </div>
          <div className={styles.rightHandSide}>
            <div className={styles.shareLinks}>
              {isNativeShare && <ShareButton title={title} url={pageUrl} />}
              {Object.keys(shareData).map((item) => (
                <SocialLink
                  key={item}
                  type={item}
                  ariaLabel={`Share to ${shareData[item].label}`}
                  link={shareData[item].getShareLink(
                    encodeURIComponent(pageUrl),
                    encodeURIComponent(title)
                  )}
                />
              ))}
            </div>
            <div className={styles.date}>
              {new Date(date!).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
      {excerpt}
    </>
  )
}
