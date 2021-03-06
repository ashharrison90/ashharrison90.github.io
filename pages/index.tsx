import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { getAllPosts, PostMetadata } from '../lib/postsApi'
import PostGrid from '../components/PostGrid/PostGrid'
import PostCard from '../components/PostCard/PostCard'
import Layout from '../components/Layout/Layout'
import Button, { ButtonType } from '../components/Button/Button'
import Typewriter from 'typewriter-effect'
import styles from '../styles/Home.module.scss'

export interface Props {
  allPosts: PostMetadata[]
}

export default function Home({ allPosts }: Props) {
  const [pageLoaded, setPageLoaded] = useState(false)
  useEffect(() => {
    function handlePageLoad() {
      setPageLoaded(true)
    }
    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      window.addEventListener('load', handlePageLoad)
      return () => window.removeEventListener('load', handlePageLoad)
    }
  }, [])
  const backgroundContent = (
    <>
      <img
        alt=''
        src='/assets/home/hero-fallback.webp'
        data-testid='heroFallback'
        className={classnames(styles.fallback, {
          [styles.hide]: pageLoaded,
        })}
      />
      <img
        alt='A nice background'
        src='/assets/home/hero-background.webp'
        data-testid='heroBackground'
        className={classnames(styles.heroBackground, {
          [styles.hide]: !pageLoaded,
        })}
      />
      <img
        alt='Me'
        src='/assets/home/hero-cutout.webp'
        data-testid='heroCutout'
        className={classnames(styles.heroCutout, {
          [styles.hide]: !pageLoaded,
        })}
      />
    </>
  )

  const foregroundContent = (
    <div className={styles.heroTitleContainer}>
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
  )

  return (
    <Layout
      hideHeaderUntilScroll
      blurBackground={!pageLoaded}
      backgroundContent={backgroundContent}
      backgroundHeight={100}
      foregroundContent={foregroundContent}
      metaDescription="Hi, I'm Ash. I'm a frontend software developer based in the UK."
      metaTitle='Ashley Harrison - Frontend developer'
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
