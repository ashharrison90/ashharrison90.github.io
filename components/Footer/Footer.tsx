import socialData from './assets/socialData.json'
import SocialLink from '../SocialLink/SocialLink'
import styles from './Footer.module.scss'

type SocialData = Array<keyof typeof socialData>

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {(Object.keys(socialData) as SocialData).map((socialType) => (
          <SocialLink
            key={socialType}
            ariaLabel={`Contact me on ${socialType}`}
            link={socialData[socialType]}
            type={socialType}
          />
        ))}
      </div>
    </footer>
  )
}
