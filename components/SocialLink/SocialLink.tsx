import { ReactNode } from 'react'
import classnames from 'classnames'
import Email from '@fortawesome/fontawesome-free/svgs/regular/envelope.svg'
import Facebook from '@fortawesome/fontawesome-free/svgs/brands/facebook.svg'
import Github from '@fortawesome/fontawesome-free/svgs/brands/github.svg'
import Instagram from '@fortawesome/fontawesome-free/svgs/brands/instagram.svg'
import LinkedIn from '@fortawesome/fontawesome-free/svgs/brands/linkedin.svg'
import Reddit from '@fortawesome/fontawesome-free/svgs/brands/reddit.svg'
import Twitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
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
