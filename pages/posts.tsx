import Head from 'next/head'
import { getAllPosts, PostData } from '../lib/postsApi'
import PostGrid from '../components/PostGrid/PostGrid'
import PostCard from '../components/PostCard/PostCard'
import Search from '../components/Search/Search'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Posts.module.scss'
import { useState, useRef, useEffect } from 'react'

export interface Props {
  allPosts: PostData[]
}

const postFilter = (post: PostData, searchString: string) => {
  const searchStringLower = searchString.toLowerCase()
  return (
    post.title.toLowerCase().includes(searchStringLower) ||
    post.excerpt.toLowerCase().includes(searchStringLower)
  )
}

export default function Posts({ allPosts }: Props) {
  const [searchString, setSearchString] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    searchRef.current!.focus()
  }, [])

  const filteredPosts = allPosts.filter((post) =>
    postFilter(post, searchString)
  )
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
        Read my ramblings. I'm aiming for a post every couple of{' '}
        <del>weeks</del> <ins>months</ins>. Will it happen? No, probably not.
      </p>

      <div className={styles.searchContainer}>
        <Search
          className={styles.search}
          ref={searchRef}
          onChange={(evt) => setSearchString(evt.target.value)}
        />
      </div>
      <PostGrid className={styles.postGrid}>
        {filteredPosts.map((post) => (
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
