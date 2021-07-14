import Head from 'next/head'
import { ReactNode, useEffect } from 'react'
import { PostMetadata } from '../../lib/postsApi'
import Layout from '../Layout/Layout'
import PostTitle from '../PostTitle/PostTitle'
import styles from './PostLayout.module.scss'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import scss from 'highlight.js/lib/languages/scss'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('scss', scss)
import 'highlight.js/styles/monokai-sublime.css'

export interface Props {
  children: ReactNode
  metadata: PostMetadata
}

export default function PostLayout({ children, metadata }: Props) {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  const { coverImage, date, excerpt, tags, title } = metadata

  const backgroundContent = (
    <img alt='' className={styles.coverImage} src={coverImage} />
  )
  const foregroundContent = <div className={styles.padder} />

  return (
    <Layout
      foregroundContent={foregroundContent}
      backgroundContent={backgroundContent}
      backgroundHeight={50}
    >
      <Head>
        <title>{title}</title>
        <meta name='description' content={excerpt} />
      </Head>
      <PostTitle date={date} excerpt={excerpt} tags={tags} title={title} />
      <div className={styles.postLayout}>{children}</div>
    </Layout>
  )
}
