import { useEffect, useMemo, useRef, useState } from 'react'
import { ReactNode } from 'react'
import Head from 'next/head'
import classnames from 'classnames'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

export interface Props {
  backgroundContent?: ReactNode
  backgroundHeight?: number
  blurBackground?: boolean
  children: ReactNode
  foregroundContent?: ReactNode
  hideHeaderUntilScroll?: boolean
  metaDescription: string
  metaTitle: string
}

let prevScrollTop = 0

export default function Layout({
  backgroundContent,
  backgroundHeight = 0,
  blurBackground,
  children,
  foregroundContent,
  hideHeaderUntilScroll = false,
  metaDescription,
  metaTitle,
}: Props) {
  const [showHeader, setShowHeader] = useState(!hideHeaderUntilScroll)
  const [backgroundContentFade, setBackgroundContentFade] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const foregroundContentRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const handleScroll = () => {
    if (hideHeaderUntilScroll) {
      setShowHeader(containerRef.current!.scrollTop > 0)
    } else {
      setShowHeader(containerRef.current!.scrollTop < prevScrollTop)
      prevScrollTop = containerRef.current!.scrollTop
    }
    // doing this all the time wouldn't be very good for perfomance
    // let's split it into intervals of 0.1
    // and stop once we're past 1
    if (foregroundContent) {
      const height =
        foregroundContentRef.current!.getBoundingClientRect().height!
      const top = foregroundContentRef.current!.getBoundingClientRect().top!
      const scrollScaleFactor = Math.round(10 * (Math.abs(top) / height)) / 10
      setBackgroundContentFade(Math.min(scrollScaleFactor, 1))
    }
  }
  useEffect(() => {
    headerRef.current!.addEventListener('focusin', () => setShowHeader(true))
    containerRef.current!.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
      </Head>
      <Header show={showHeader} ref={headerRef} />
      <div className={styles.parallaxContainer} ref={containerRef} role='main'>
        {backgroundContent}
        <div
          data-testid='backgroundOverlay'
          className={classnames(styles.foreground, {
            [styles.blur]: blurBackground,
          })}
          style={{
            backgroundColor: `rgba(var(--hero-background-rgb), ${backgroundContentFade})`,
          }}
        >
          <div
            ref={foregroundContentRef}
            style={{
              height: `${backgroundHeight}%`,
              minHeight: `${backgroundHeight}%`,
            }}
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
