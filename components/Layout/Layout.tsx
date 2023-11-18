import classnames from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'
import { ReactNode, useEffect, useRef, useState } from 'react'

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
  children,
  foregroundContent,
  hideHeaderUntilScroll = false,
  metaDescription,
  metaTitle,
}: Props) {
  const [showHeader, setShowHeader] = useState(!hideHeaderUntilScroll)
  const headerRef = useRef<HTMLElement>(null)
  useEffect(() => {
    gsap.to('[data-speed]', {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'none',
      scrollTrigger: {
        start: 0,
        end: 'max',
        scrub: true,
      },
    })

    const handleScroll = () => {
      if (hideHeaderUntilScroll) {
        setShowHeader(window.scrollY > 0)
      } else {
        setShowHeader(window.scrollY < prevScrollTop)
        prevScrollTop = window.scrollY
      }
    }

    headerRef.current?.addEventListener('focusin', () => setShowHeader(true))
    document.addEventListener('scroll', handleScroll)
  }, [hideHeaderUntilScroll])
  return (
    <div className={styles.container}>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
      </Head>
      <Header show={showHeader} ref={headerRef} />
      {backgroundContent}
      <div
        style={{
          height: `${backgroundHeight}%`,
        }}
        className={styles.foregroundContentRef}
      >
        {foregroundContent}
      </div>
      <div className={styles.contentContainer} role='main'>
        <div
          className={classnames(styles.content, {
            [styles.padContent]: !foregroundContent && !hideHeaderUntilScroll,
          })}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
