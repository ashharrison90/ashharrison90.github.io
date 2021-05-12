import { useEffect, useRef, useState } from 'react'
import { ReactNode } from 'react'
import classnames from 'classnames'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

export interface Props {
  backgroundContent?: ReactNode
  children: ReactNode
  foregroundContent?: ReactNode
  hideHeaderUntilScroll?: boolean
}

export default function Layout({
  backgroundContent,
  children,
  foregroundContent,
  hideHeaderUntilScroll = false,
}: Props) {
  const [showHeader, setShowHeader] = useState(!hideHeaderUntilScroll)
  const [backgroundContentFade, setBackgroundContentFade] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const foregroundContentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (containerRef.current && (foregroundContent || hideHeaderUntilScroll)) {
      const handleScroll = () => {
        if (hideHeaderUntilScroll) {
          setShowHeader(containerRef.current!.scrollTop > 0)
        }
        // doing this all the time wouldn't be very good for perfomance
        // let's split it into intervals of 0.1
        // and stop once we're past 1
        if (foregroundContent) {
          const height = foregroundContentRef.current?.getBoundingClientRect()
            .height!
          const top = foregroundContentRef.current?.getBoundingClientRect().top!
          const scrollScaleFactor =
            Math.round(10 * (Math.abs(top) / height)) / 10
          setBackgroundContentFade(Math.min(scrollScaleFactor, 1))
        }
      }
      containerRef.current.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Header
        className={classnames({
          [styles.hideHeader]: !showHeader,
        })}
      />
      <div className={styles.parallaxContainer} ref={containerRef}>
        {backgroundContent}
        <div
          className={styles.foreground}
          style={{
            backgroundColor: `rgba(var(--hero-background-rgb), ${backgroundContentFade})`,
          }}
        >
          <div
            ref={foregroundContentRef}
            className={styles.foregroundContentRef}
          >
            {foregroundContent}
          </div>
          <div className={styles.contentContainer}>
            <div
              className={classnames(styles.content, {
                [styles.padContent]:
                  !foregroundContent && !hideHeaderUntilScroll,
              })}
            >
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
