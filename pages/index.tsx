import classnames from 'classnames'
import { useLayoutEffect, useRef, useState } from 'react'
import Typewriter from 'typewriter-effect'

import Button, { ButtonType } from '../components/Button/Button'
import Layout from '../components/Layout/Layout'
import PostCard from '../components/PostCard/PostCard'
import PostGrid from '../components/PostGrid/PostGrid'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { getAllPosts, PostMetadata } from '../lib/postsApi'
import styles from '../styles/Home.module.scss'

export interface Props {
  allPosts: PostMetadata[]
}

export default function Home({ allPosts }: Props) {
  const [pageLoaded, setPageLoaded] = useState(false)
  const layoutRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('[data-speed]', {
        y: (i, el) =>
          -(
            parseFloat(el.getAttribute('data-speed')) *
            ScrollTrigger.maxScroll(window)
          ),
        ease: 'none',
        scrollTrigger: {
          start: '0',
          end: 'max',
          scrub: true,
        },
      })
    }, layoutRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const hero = (
    <>
      {!pageLoaded && (
        <img
          data-speed='0.05'
          alt=''
          src='/assets/home/hero-fallback.webp'
          data-testid='heroFallback'
          className={classnames(styles.fallback)}
        />
      )}
      <img
        data-speed='0.05'
        onLoad={() => setPageLoaded(true)}
        alt='A nice background'
        src='/assets/home/hero-background.webp'
        data-testid='heroBackground'
        className={classnames(styles.heroBackground, {
          [styles.hide]: !pageLoaded,
        })}
      />
      <img
        data-speed='0.15'
        alt='Me'
        src='/assets/home/hero-cutout.webp'
        data-testid='heroCutout'
        className={classnames(styles.heroCutout, {
          [styles.hide]: !pageLoaded,
        })}
      />
      <div data-speed='1' className={styles.heroTitleContainer}>
        <h1>
          <Typewriter
            options={{
              cursor: '',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('hi')
                .pauseFor(1000)
                .typeString("<br />i'm ash")
                .start()
            }}
          />
        </h1>
      </div>
    </>
  )

  return (
    <Layout
      hideHeaderUntilScroll
      heroContent={hero}
      heroHeight={100}
      metaDescription="Hi, I'm Ash. I'm a frontend software developer based in the UK."
      metaTitle='Ashley Harrison - Frontend developer'
      ref={layoutRef}
    >
      <main>
        <div className={styles.about}>
          <div>
            <h2>about</h2>
            <p>I'm a frontend software developer based in the UK.</p>
            <p>
              When I'm not typing on a keyboard, you can find me{' '}
              <s>typing on a keyboard</s> gaming, playing football and hanging
              out with friends. Gym or mountain biking if I'm feeling motivated.
              Music and films if I'm not.
            </p>
          </div>
          <Button
            className={styles.aboutButton}
            href='/about'
            kind={ButtonType.Primary}
          >
            More about me
          </Button>
        </div>

        <div className={styles.posts}>
          <h2>latest posts</h2>
          <PostGrid className={styles.postGrid}>
            {allPosts.map((post) => (
              <PostCard
                key={post.slug}
                coverImage={post.coverImage}
                excerpt={post.excerpt}
                slug={post.slug}
                tags={post.tags}
                title={post.title}
              />
            ))}
          </PostGrid>
          <Button
            className={styles.postsButton}
            href='/posts'
            kind={ButtonType.Primary}
          >
            View all posts
          </Button>
        </div>
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts(3)

  return {
    props: {
      allPosts,
    },
  }
}
