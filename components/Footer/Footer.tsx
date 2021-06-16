import { ReactNode } from 'react'
import socialData from './assets/socialData.json'
import SocialLink from '../SocialLink/SocialLink'
import EmailSvg from './assets/envelope.svg'
import GithubSvg from './assets/github.svg'
import LinkedInSvg from './assets/linkedin.svg'
import FacebookSvg from './assets/facebook.svg'
import InstagramSvg from './assets/instagram.svg'
import TwitterSvg from './assets/twitter.svg'
import styles from './Footer.module.scss'

const Email = EmailSvg as any
const Github = GithubSvg as any
const LinkedIn = LinkedInSvg as any
const Facebook = FacebookSvg as any
const Instagram = InstagramSvg as any
const Twitter = TwitterSvg as any

const iconMap: Record<string, ReactNode> = {
  email: <Email />,
  github: <Github />,
  linkedin: <LinkedIn />,
  facebook: <Facebook />,
  instagram: <Instagram />,
  twitter: <Twitter />,
}

type SocialData = Array<keyof typeof socialData>

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        {(Object.keys(socialData) as SocialData).map((socialType) => (
          <SocialLink
            key={socialType}
            className={styles.socialLink}
            icon={iconMap[socialType]}
            link={socialData[socialType]}
          />
        ))}
      </div>
    </div>
  )
}
