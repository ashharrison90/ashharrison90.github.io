import { ReactNode } from 'react'
import socialData from './assets/socialData.json'
import SocialLink from '../SocialLink/SocialLink'
import Email from '../../public/assets/icons/envelope.svg'
import Github from '../../public/assets/icons/github.svg'
import LinkedIn from '../../public/assets/icons/linkedin.svg'
import Facebook from '../../public/assets/icons/facebook.svg'
import Instagram from '../../public/assets/icons/instagram.svg'
import Twitter from '../../public/assets/icons/twitter.svg'
import styles from './Footer.module.scss'

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
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {(Object.keys(socialData) as SocialData).map((socialType) => (
          <SocialLink
            key={socialType}
            className={styles.socialLink}
            icon={iconMap[socialType]}
            label={socialType}
            link={socialData[socialType]}
          />
        ))}
      </div>
    </footer>
  )
}
