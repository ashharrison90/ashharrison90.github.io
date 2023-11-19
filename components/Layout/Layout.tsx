import classnames from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'
import {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

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

const Layout = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      heroContent,
      heroHeight = 0,
      hideHeaderUntilScroll = false,
      metaDescription,
      metaTitle,
    },
    ref,
  ) => {
    const [showHeader, setShowHeader] = useState(!hideHeaderUntilScroll)
    const headerRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => containerRef.current!)

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
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
      }, containerRef)

      const handleFocus = () => setShowHeader(true)
      const handleScroll = () => {
        if (hideHeaderUntilScroll) {
          setShowHeader(window.scrollY > 0)
        } else {
          setShowHeader(window.scrollY <= prevScrollTop)
          prevScrollTop = window.scrollY
        }
      }

      const header = headerRef.current
      header?.addEventListener('focusin', handleFocus)
      document.addEventListener('scroll', handleScroll)

      return () => {
        ctx.revert()
        header?.removeEventListener('focusin', handleFocus)
        document.removeEventListener('scroll', handleScroll)
      }
    }, [hideHeaderUntilScroll])

    return (
      <div ref={containerRef} className={styles.container}>
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
  },
)
Layout.displayName = 'Layout'

export default Layout
