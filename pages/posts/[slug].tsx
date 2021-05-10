import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useEffect } from 'react'
import { getPostBySlug, getAllPosts, PostData } from '../../lib/postsApi'
import markdownToHtml from '../../lib/markdownToHtml'
import { GetStaticPropsContext } from 'next'
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/[slug].module.scss'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
import 'highlight.js/styles/monokai-sublime.css'

export interface Props {
  post: PostData
}

export default function Post({ post }: Props) {
  useEffect(() => {
    hljs.highlightAll()
  }, [])
  const router = useRouter()
  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <Layout>
          <Head>
            <title>{post.title}</title>
            <meta name='description' content={post.excerpt} />
          </Head>
          <img className={styles.coverImage} src={post.coverImage} />
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.date}>
              {new Date(post.date!).toLocaleDateString()}
            </div>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
          />
        </Layout>
      )}
    </>
  )
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const post = getPostBySlug(params!.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
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
