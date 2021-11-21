import { FunctionComponent, useEffect, useRef } from 'react'
import Typewriter, { Options, TypewriterClass } from 'typewriter-effect'
import Layout from '../components/Layout/Layout'
import styles from '../styles/About.module.scss'
import skills from '../__content__/about/skills.json'
import Durham from '../__content__/about/jobs/durham.mdx'
import Grafana from '../__content__/about/jobs/grafana.mdx'
import Ibm from '../__content__/about/jobs/ibm.mdx'
import Qinetiq from '../__content__/about/jobs/qinetiq.mdx'

// Need to extend Typewriter's types until https://github.com/tameemsafi/typewriterjs/pull/106 is merged
const TypewriterWithComponent = Typewriter as FunctionComponent<{
  component?: string
  onInit?: (typewriter: TypewriterClass) => void
  options?: Partial<Options>
}>

export default function About() {
  const grafanaRef = useRef<HTMLDivElement>(null)
  const ibmRef = useRef<HTMLDivElement>(null)
  const qinetiqRef = useRef<HTMLDivElement>(null)
  const durhamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement
            target.style.opacity = '1'
            target.style.transform = 'none'
          }
        })
      },
      {
        threshold: 0.5,
      }
    )
    ;[grafanaRef, ibmRef, qinetiqRef, durhamRef].forEach((ref) => {
      intersectionObserver.observe(ref.current!)
    })
    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <Layout metaDescription='More about my career so far.' metaTitle='About'>
      <h1>about</h1>

      <p>
        I specialise in all things frontend, with a focus on <b>clean</b>,{' '}
        <b>testable</b> and <b>maintainable</b> code.
        <br />
        I work with{' '}
        <TypewriterWithComponent
          component='span'
          options={{
            cursor: '',
            loop: true,
            wrapperClassName: styles.typewriter,
          }}
          onInit={(typewriter) => {
            skills.forEach((skill) => {
              typewriter.typeString(`${skill}`)
              typewriter.pauseFor(500)
              typewriter.deleteAll()
            })
            typewriter.start()
          }}
        />
      </p>

      <blockquote>
        Find a job you enjoy doing, and you will never have to work a day in
        your life.
      </blockquote>

      <cite>Mark Twain</cite>

      <p>But did Mark Twain ever develop software? No. Stupid.</p>

      <Grafana innerRef={grafanaRef} className={styles.jobSummary} />
      <Ibm innerRef={ibmRef} className={styles.jobSummary} />
      <Qinetiq innerRef={qinetiqRef} className={styles.jobSummary} />
      <Durham innerRef={durhamRef} className={styles.jobSummary} />
    </Layout>
  )
}
