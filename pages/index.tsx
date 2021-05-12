import Head from 'next/head'
import { getAllPosts } from '../lib/postsApi'
import PostGrid from '../components/PostGrid/PostGrid'
import PostCard from '../components/PostCard/PostCard'
import Layout from '../components/Layout/Layout'
import LinkButton from '../components/LinkButton/LinkButton'
import styles from '../styles/Home.module.scss'

export interface Props {
  allPosts: {
    title: string
    date: string
    author: {
      name: string
      image: string
    }
    slug: string
    coverImage: string
    excerpt: string
  }[]
}

export default function Home({ allPosts }: Props) {
  const backgroundContent = (
    <>
      <div className={styles.heroBackground} />
      <div className={styles.heroCutout} />
    </>
  )

  const foregroundContent = (
    <div className={styles.heroTitleContainer}>
      <div>
        <h1 className={styles.line1}>hi</h1>
        <h1 className={styles.line2}>i'm ash</h1>
      </div>
    </div>
  )

  return (
    <Layout
      hideHeaderUntilScroll
      backgroundContent={backgroundContent}
      foregroundContent={foregroundContent}
    >
      <Head>
        <title>hi, i'm ash</title>
        <meta
          name='description'
          content='I am a software engineer based in the UK. I specialize in all things frontend, with a focus on clean, testable and maintainable code.'
        />
      </Head>

      <main>
        <div className={styles.about}>
          <div>
            <h2>about</h2>
            <p>I'm a software engineer based in the UK.</p>
            <p>
              I specialize in all things frontend, with a focus on clean,
              testable and maintainable code.
            </p>
            <p>
              When I'm not typing on a keyboard, you can find me{' '}
              <s>typing on a keyboard</s> gaming, playing football and hanging
              out with friends. Gym or mountain biking when the motivation
              strikes. Music and films when it doesn't.
            </p>
          </div>
          <LinkButton className={styles.aboutButton} href='/about'>
            Learn more
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
