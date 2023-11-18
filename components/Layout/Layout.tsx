import classnames from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'
import { ReactNode, useEffect, useRef, useState } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import styles from './Layout.module.scss'

export interface Props {
  children: ReactNode
  heroContent?: ReactNode
  heroHeight?: number
  hideHeaderUntilScroll?: boolean
  metaDescription: string
  metaTitle: string
}

let prevScrollTop = 0

export default function Layout({
  children,
  heroContent,
  heroHeight = 0,
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
      <div
        style={{
          height: `${heroHeight}%`,
        }}
        className={styles.heroContent}
      >
        {heroContent}
      </div>
      <div className={styles.contentContainer} role='main'>
        <div
          className={classnames(styles.content, {
            [styles.padContent]: !heroContent && !hideHeaderUntilScroll,
          })}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
