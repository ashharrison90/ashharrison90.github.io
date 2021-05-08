import { useEffect, useRef, useState } from 'react'
import { ReactNode } from 'react'
import classnames from 'classnames'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

export interface Props {
  children: ReactNode,
  showHero?: boolean
}

export default function Layout({ children, showHero = false }: Props) {
  const [showHeader, setShowHeader] = useState(!showHero)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (showHero && containerRef.current) {
      const handleScroll = () => {
        setShowHeader(containerRef.current!.scrollTop > 0)
      }
      containerRef.current.addEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header
        className={classnames({
          [styles.hideHeader]: !showHeader
        })}
      />
      <div
        id='parallaxContainer'
        className={styles.parallaxContainer}
        ref={containerRef}
      >
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
                <div>
                  <h1 className={styles.line1}>hi</h1>
                  <h1 className={styles.line2}>i'm ash</h1>
                </div>
              </div>
          }
          <div className={styles.contentContainer} ref={contentRef}>
            <div className={styles.content}>{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}