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
import scss from 'highlight.js/lib/languages/scss'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('scss', scss)
import 'highlight.js/styles/monokai-sublime.css'
import PostTitle from '../../components/PostTitle/PostTitle'

export interface Props {
  post: PostData
}

export default function Post({ post }: Props) {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  const backgroundContent = (
    <img alt='' className={styles.coverImage} src={post.coverImage} />
  )
  const foregroundContent = <div className={styles.padder} />

  return (
    <Layout
      foregroundContent={foregroundContent}
      backgroundContent={backgroundContent}
      backgroundHeight={50}
    >
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostTitle date={post.date} title={post.title} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  )
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const post = getPostBySlug(params!.slug)
  const content = await markdownToHtml(post.content)

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
