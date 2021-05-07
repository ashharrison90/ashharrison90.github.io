import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getPostBySlug, getAllPosts, PostData } from '../../lib/postsApi'
import markdownToHtml from '../../lib/markdownToHtml'
import { GetStaticPropsContext } from 'next'
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/[slug].module.scss'

export interface Props {
  buildTimestamp: number,
  post: PostData,
}

export default function Post({ buildTimestamp, post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <Layout buildTimestamp={buildTimestamp}>
          <Head>
            <title>
              {post.title}
            </title>
          </Head>
          <img className={styles.coverImage} src={post.coverImage} />
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.date}>{(new Date(post.date!)).toLocaleDateString()}</div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
          />
        </Layout>
      )}
    </>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext<{slug: string}>) {
  const post = getPostBySlug(params!.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      buildTimestamp: Date.now(),
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
