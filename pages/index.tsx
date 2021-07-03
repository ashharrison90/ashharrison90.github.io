import Head from 'next/head'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { getAllPosts, PostData } from '../lib/postsApi'
import PostGrid from '../components/PostGrid/PostGrid'
import PostCard from '../components/PostCard/PostCard'
import Layout from '../components/Layout/Layout'
import LinkButton from '../components/LinkButton/LinkButton'
import Typewriter from 'typewriter-effect'
import styles from '../styles/Home.module.scss'

export interface Props {
  allPosts: PostData[]
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
        src='/assets/home/hero-fallback.png'
        data-testid='heroFallback'
        className={classnames(styles.fallback, {
          [styles.hide]: pageLoaded,
        })}
      />
      <img
        alt='A nice background'
        src='/assets/home/hero-background.png'
        data-testid='heroBackground'
        className={classnames(styles.heroBackground, {
          [styles.hide]: !pageLoaded,
        })}
      />
      <img
        alt='Me'
        src='/assets/home/hero-cutout.png'
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
    >
      <Head>
        <title>hi, i'm ash</title>
        <meta
          name='description'
          content='The personal site of Ashley Harrison.'
        />
      </Head>

      <main>
        <div className={styles.about}>
          <div>
            <h2>about</h2>
            <p>I'm a software engineer based in the UK.</p>
            <p>
              I specialize in all things frontend, with a focus on{' '}
              <strong>clean</strong>, <strong>testable</strong> and{' '}
              <strong>maintainable</strong> code.
            </p>
            <p>
              When I'm not typing on a keyboard, you can find me{' '}
              <s>typing on a keyboard</s> gaming, playing football and hanging
              out with friends. Gym or mountain biking if I'm feeling motivated.
              Music and films if I'm not.
            </p>
          </div>
          <LinkButton className={styles.aboutButton} href='/about'>
            More about me
          </LinkButton>
        </div>

        <div className={styles.posts}>
          <h2>posts</h2>
          <PostGrid className={styles.postGrid}>
            {allPosts.map((post) => (
              <PostCard
                key={post.slug}
                coverImage={post.coverImage}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                title={post.title}
              />
            ))}
          </PostGrid>
          <LinkButton className={styles.postsButton} href='/posts'>
            View all posts
          </LinkButton>
        </div>
      </main>
    </Layout>
  )
}

export const getStaticProps = () => {
  const allPosts = getAllPosts(6)

  return {
    props: {
      allPosts,
    },
  }
}
