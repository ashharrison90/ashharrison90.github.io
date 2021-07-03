import { ReactNode } from 'react'
import classnames from 'classnames'
import Email from './assets/envelope.svg'
import Facebook from './assets/facebook.svg'
import Github from './assets/github.svg'
import Instagram from './assets/instagram.svg'
import LinkedIn from './assets/linkedin.svg'
import Reddit from './assets/reddit.svg'
import Twitter from './assets/twitter.svg'
import styles from './SocialLink.module.scss'

const iconMap: Record<string, ReactNode> = {
  email: <Email />,
  facebook: <Facebook />,
  github: <Github />,
  instagram: <Instagram />,
  linkedin: <LinkedIn />,
  reddit: <Reddit />,
  twitter: <Twitter />,
}

export interface Props {
  ariaLabel: string
  className?: string
  link: string
  type: string
}

export default function SocialLink({
  className,
  ariaLabel,
  link,
  type,
}: Props) {
  return (
    <a
      aria-label={ariaLabel}
      className={classnames(styles.link, className)}
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      {iconMap[type]}
    </a>
  )
}
