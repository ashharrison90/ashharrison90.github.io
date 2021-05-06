import { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

export interface Props {
  buildTimestamp: number,
  children: ReactNode,
  showHero?: boolean
}

const test = () => {
  document.querySelector(`.${styles.content}`)?.scrollIntoView({
    behavior: 'smooth'
  });
}

export default function Layout({ buildTimestamp, children, showHero = false }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.parallaxContainer}>
        {
          showHero &&
            <>
              <div className={styles.heroBackground} />
              <div className={styles.heroCutout} />
            </>
        }
        <div className={styles.foreground}>
          {
            showHero &&
              <div className={styles.heroTitleContainer}>
                <h1 className={styles.heroTitle}>
                  hi<br/>
                  i'm ash
                </h1>
                <button className={styles.goToContent} onClick={test}>Scroll</button>
              </div>
          }
          <div className={styles.contentContainer}>
            <div className={styles.content}>{children}</div>
          </div>
          <Footer
            footnote={`Last updated: ${new Date(buildTimestamp).toLocaleDateString()}`}
          />
        </div>
      </div>
    </div>
  )
}