import { ReactNode, useContext, useEffect, useRef } from 'react'
import { PostMetadata } from '../../lib/postsApi'
import Layout from '../Layout/Layout'
import PostTitle from '../PostTitle/PostTitle'
import styles from './PostLayout.module.scss'

import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import scss from 'highlight.js/lib/languages/scss'
import { ThemeContext } from '../../context/ThemeContext/ThemeContext'
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('scss', scss)

export interface Props {
  children: ReactNode
  metadata: PostMetadata
}

export default function PostLayout({ children, metadata }: Props) {
  const { theme } = useContext(ThemeContext)
  const commentsContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  useEffect(() => {
    // this is a bit hacky
    // if the theme changes, we clear the innerHTML of the commentsContainer container
    // then reappend a new script with the correct theme value
    if (commentsContainer.current) {
      commentsContainer.current.innerHTML = ''
      const scriptElement = document.createElement('script')
      scriptElement.setAttribute('src', 'https://utteranc.es/client.js')
      scriptElement.setAttribute(
        'repo',
        'ashharrison90/ashharrison90.github.io'
      )
      scriptElement.setAttribute('issue-term', 'pathname')
      scriptElement.setAttribute('label', 'post-comments')
      scriptElement.setAttribute('theme', `github-${theme}`)
      scriptElement.setAttribute('crossorigin', 'anonymous')
      scriptElement.setAttribute('async', 'true')
      commentsContainer.current.appendChild(scriptElement)
    }
  }, [theme])

  const { coverImage, date, excerpt, tags, title } = metadata

  const backgroundContent = (
    <img alt='' className={styles.coverImage} src={coverImage} />
  )
  const foregroundContent = <div className={styles.padder} />

  return (
    <Layout
      backgroundContent={backgroundContent}
      backgroundHeight={50}
      foregroundContent={foregroundContent}
      metaDescription={excerpt}
      metaTitle={title}
    >
      <PostTitle date={date} excerpt={excerpt} tags={tags} title={title} />
      <div className={styles.postLayout}>{children}</div>
      <div ref={commentsContainer} />
    </Layout>
  )
}
