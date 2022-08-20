import Button, { ButtonType } from '../Button/Button'
import Tag from '../Tag/Tag'
import LinkedIn from '@fortawesome/fontawesome-free/svgs/brands/linkedin.svg'
import Reddit from '@fortawesome/fontawesome-free/svgs/brands/reddit.svg'
import Twitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import styles from './PostTitle.module.scss'
import Share from '@fortawesome/fontawesome-free/svgs/solid/share-nodes.svg'
import { ReactNode, useEffect, useState } from 'react'

export interface Props {
  date: string
  excerpt: string
  tags: Array<string>
  title: string
}

interface ShareData {
  icon: ReactNode
  label: string
  getShareLink: (url: string, title?: string) => string
}

const shareData: Record<string, ShareData> = {
  linkedin: {
    icon: <LinkedIn />,
    label: 'LinkedIn',
    getShareLink: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
  reddit: {
    icon: <Reddit />,
    label: 'Reddit',
    getShareLink: (url, title) =>
      `https://reddit.com/submit?url=${url}&title=${title}`,
  },
  twitter: {
    icon: <Twitter />,
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

  const onShareClick = async () => {
    try {
      await navigator.share({
        title,
        url: pageUrl,
      })
    } catch {}
  }

  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.infoContainer}>
          <div className={styles.leftHandSide}>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
          <div className={styles.rightHandSide}>
            <div className={styles.date}>
              {new Date(date).toLocaleDateString(undefined, {
                month: 'long',
                year: 'numeric',
              })}
            </div>
            <div className={styles.shareLinks}>
              {isNativeShare && (
                <Button
                  className={styles.shareLink}
                  ariaLabel='Share'
                  kind={ButtonType.Icon}
                  onClick={onShareClick}
                >
                  <Share />
                </Button>
              )}
              {Object.keys(shareData).map((item) => (
                <Button
                  className={styles.shareLink}
                  key={item}
                  ariaLabel={`Share to ${shareData[item].label}`}
                  href={shareData[item].getShareLink(
                    encodeURIComponent(pageUrl),
                    encodeURIComponent(title)
                  )}
                  kind={ButtonType.Icon}
                >
                  {shareData[item].icon}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className={styles.excerpt}>{excerpt}</p>
    </>
  )
}
