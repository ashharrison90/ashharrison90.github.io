import { ReactNode } from 'react'
import socialData from './assets/socialData.json'
import SocialLink from '../SocialLink/SocialLink'
import Email from './assets/envelope.svg'
import Github from './assets/github.svg'
import LinkedIn from './assets/linkedin.svg'
import Facebook from './assets/facebook.svg'
import Instagram from './assets/instagram.svg'
import Twitter from './assets/twitter.svg'
import styles from './Footer.module.scss'

const iconMap: Record<string, ReactNode> = {
  email: <Email />,
  github: <Github />,
  linkedin: <LinkedIn />,
  facebook: <Facebook />,
  instagram: <Instagram />,
  twitter: <Twitter />
}

type SocialData = Array<keyof typeof socialData>

export default function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        {
          (Object.keys(socialData) as SocialData).map((socialType) => (
            <SocialLink
              key={socialType}
              className={styles.socialLink}
              icon={iconMap[socialType]}
              link={socialData[socialType]}
            />
          ))
        }
      </div>
    </div>
  )
}
