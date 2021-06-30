import SocialLink from '../SocialLink/SocialLink'
import LinkedIn from '../../public/assets/icons/linkedin.svg'
import Reddit from '../../public/assets/icons/reddit.svg'
import Twitter from '../../public/assets/icons/twitter.svg'
import styles from './PostTitle.module.scss'
import { ReactNode, useEffect, useState } from 'react'

export interface Props {
  date: string
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

export default function PostTitle({ date, title }: Props) {
  const [pageUrl, setPageUrl] = useState('')

  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])

  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.infoContainer}>
        <div className={styles.date}>
          {new Date(date!).toLocaleDateString()}
        </div>
        <div className={styles.shareLinks}>
          {Object.keys(shareData).map((item) => (
            <SocialLink
              key={item}
              icon={shareData[item].icon}
              label={`Share to ${shareData[item].label}`}
              link={shareData[item].getShareLink(
                encodeURIComponent(pageUrl),
                encodeURIComponent(title)
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
