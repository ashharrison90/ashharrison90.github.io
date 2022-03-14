import { ReactNode } from 'react'
import socialData from './assets/socialData.json'
import Button, { ButtonType } from '../Button/Button'
import Facebook from '@fortawesome/fontawesome-free/svgs/brands/facebook.svg'
import Github from '@fortawesome/fontawesome-free/svgs/brands/github.svg'
import Instagram from '@fortawesome/fontawesome-free/svgs/brands/instagram.svg'
import LinkedIn from '@fortawesome/fontawesome-free/svgs/brands/linkedin.svg'
import Twitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import styles from './Footer.module.scss'

const iconMap: Record<string, ReactNode> = {
  facebook: <Facebook />,
  github: <Github />,
  instagram: <Instagram />,
  linkedin: <LinkedIn />,
  twitter: <Twitter />,
}

type SocialData = Array<keyof typeof socialData>

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {(Object.keys(socialData) as SocialData).map((socialType) => (
          <Button
            key={socialType}
            className={styles.socialLink}
            ariaLabel={`Contact me on ${socialType}`}
            href={socialData[socialType]}
            kind={ButtonType.Icon}
            target='_blank'
          >
            {iconMap[socialType]}
          </Button>
        ))}
      </div>
    </footer>
  )
}
