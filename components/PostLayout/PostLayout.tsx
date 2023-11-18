import { gsap } from 'gsap'
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import python from 'highlight.js/lib/languages/python'
import scss from 'highlight.js/lib/languages/scss'
import typescript from 'highlight.js/lib/languages/typescript'
import { ReactNode, useContext, useEffect, useRef } from 'react'

import { ThemeContext } from '../../context/ThemeContext/ThemeContext'
import { PostMetadata } from '../../lib/postsApi'
import Layout from '../Layout/Layout'
import layoutStyles from '../Layout/Layout.module.scss'
import PostTitle from '../PostTitle/PostTitle'

import styles from './PostLayout.module.scss'
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
    gsap.from(`.${layoutStyles.heroContent}`, {
      duration: 0.5,
      height: '100%',
      ease: 'back',
      delay: 0.1,
    })
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
        'ashharrison90/ashharrison90.github.io',
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

  const hero = (
    <img
      alt=''
      data-speed='1.05'
      className={styles.coverImage}
      src={coverImage}
    />
  )

  return (
    <Layout
      heroContent={hero}
      heroHeight={65}
      metaDescription={excerpt}
      metaTitle={title}
    >
      <PostTitle date={date} excerpt={excerpt} tags={tags} title={title} />
      <div className={styles.postLayout}>{children}</div>
      <div ref={commentsContainer} />
    </Layout>
  )
}
