import Head from 'next/head'
import { getAllPosts } from '../lib/postsApi'
import PostGrid from '../components/PostGrid/PostGrid'
import PostCard from '../components/PostCard/PostCard'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Posts.module.scss'

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

export default function Posts({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>posts</title>
        <meta
          name='description'
          content='A dumping ground for thoughts from my brain.'
        />
      </Head>

      <h1>posts</h1>

      <p>
        Read my ramblings. I'm aiming for a post every couple of weeks. Will it
        happen?{' '}
        <sub>
          No,{' '}
          <sub>
            probably <sub>not.</sub>
          </sub>
        </sub>
      </p>

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
    </Layout>
  )
}

export const getStaticProps = () => {
  const allPosts = getAllPosts()

  return {
    props: {
      allPosts,
    },
  }
}
