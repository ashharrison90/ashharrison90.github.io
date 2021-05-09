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
      </Head>

      <h1 className={styles.title}>posts</h1>

      <PostGrid>
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
