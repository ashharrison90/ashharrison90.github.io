import { FunctionComponent, useEffect, useRef } from 'react'
import Typewriter, { Options, TypewriterClass } from 'typewriter-effect'

import JobSummary from '../components/JobSummary/JobSummary'
import Layout from '../components/Layout/Layout'
import Durham from '../public/assets/about/durham.svg'
import Grafana from '../public/assets/about/grafana.svg'
import Ibm from '../public/assets/about/ibm.svg'
import Qinetiq from '../public/assets/about/qinetiq.svg'
import styles from '../styles/About.module.scss'

const skills = [
  'TypeScript',
  'React',
  'Redux',
  'NextJS',
  'RxJS',
  'Jest',
  'React Testing Library',
  'Cypress',
  'Playwright',
  'Emotion',
  'styled-components',
  'webpack',
  'Babel',
  'Storybook',
  'AngularJS',
  'Python',
  'Bash',
]

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
            const target = entry.target
            if (target instanceof HTMLElement) {
              target.style.opacity = '1'
              target.style.transform = 'none'
            }
          }
        })
      },
      {
        threshold: 0.5,
      },
    )
    ;[grafanaRef, ibmRef, qinetiqRef, durhamRef].forEach((ref) => {
      if (ref.current) {
        intersectionObserver.observe(ref.current)
      }
    })
    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <Layout metaDescription='More about my career so far.' metaTitle='About'>
      <h1>about</h1>

      <p>
        I specialise in all things frontend, with a focus on <b>clean</b>,{' '}
        <b>testable</b> and <b>maintainable</b> code.
        <br />I work with{' '}
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

      <JobSummary
        ref={grafanaRef}
        className={styles.jobSummary}
        company='Grafana'
        icon={<Grafana />}
        jobTitle='Software Engineer, Frontend Platform'
        startDate='2021-06-07T00:00:00.000Z'
        website='https://www.grafana.com'
      >
        <p>
          Building and improving the user experience for Grafana, the
          observability platform behind{' '}
          <a
            href='https://grafana.com/success'
            target='_blank'
            rel='noreferrer'
          >
            all your favourite companies
          </a>
          .
        </p>
        <p>
          Current focus is accessibility, the navigation experience and
          internationalisation.
        </p>
        <p>
          <a
            href='https://github.com/grafana/grafana/pulls?page=1&q=is%3Apr+author%3Aashharrison90'
            target='_blank'
            rel='noreferrer'
          >
            Stalk my open source contributions
          </a>
          .
        </p>
      </JobSummary>

      <JobSummary
        ref={ibmRef}
        className={styles.jobSummary}
        company='IBM'
        icon={<Ibm />}
        jobTitle='Frontend Developer'
        startDate='2014-10-01T00:00:00.000Z'
        endDate='2021-06-07T00:00:00.000Z'
        website='https://www.ibm.com'
      >
        <p>
          Delivering{' '}
          <a
            href='https://www.ibm.com/cloud/blog/ibm-app-connect-wins-spark-international-2017-design-award'
            target='_blank'
            rel='noreferrer'
          >
            award
          </a>
          -
          <a
            href='https://medium.com/@creative1/https-medium-com-creative1-ibm-app-connect-wins-if-design-award-45654d61a664'
            target='_blank'
            rel='noreferrer'
          >
            winning
          </a>{' '}
          user interfaces for App Connect and App Connect Enterprise.
        </p>
        <p>
          Recent projects include the development of the{' '}
          <a
            href='https://community.ibm.com/community/user/integration/viewdocument/test-your-mappings-and-transformati?CommunityKey=77544459-9fda-40da-ae0b-fc8c76f0ce18&tab=librarydocuments'
            target='_blank'
            rel='noreferrer'
          >
            sample data editor
          </a>
          , along with{' '}
          <a
            href='https://community.ibm.com/community/user/integration/viewdocument/rapidly-develop-your-flows-with-the?CommunityKey=77544459-9fda-40da-ae0b-fc8c76f0ce18&tab=librarydocuments&LibraryFolderKey=6d429545-f6c6-4418-adae-8aafaaf2c081&DefaultView=folder'
            target='_blank'
            rel='noreferrer'
          >
            node
          </a>{' '}
          and{' '}
          <a
            href='https://community.ibm.com/community/user/integration/blogs/sarah-hewitt1/2020/08/18/gain-confidence-in-your-flows-while-authoring'
            target='_blank'
            rel='noreferrer'
          >
            flow
          </a>{' '}
          testing capabilities.
        </p>
        <p>
          I also managed to submit{' '}
          <a
            href='https://patents.google.com/?q=ibm&inventor=ashley+harrison&oq=ashley+harrison+ibm'
            target='_blank'
            rel='noreferrer'
          >
            a few patents
          </a>{' '}
          along the way.
        </p>
      </JobSummary>

      <JobSummary
        ref={qinetiqRef}
        className={styles.jobSummary}
        company='QinetiQ'
        icon={<Qinetiq />}
        jobTitle='Graduate Scientist'
        startDate='2013-09-01T00:00:00.000Z'
        endDate='2014-10-01T00:00:00.000Z'
        website='https://www.qinetiq.com'
      >
        <p>
          Optimising warhead lethality through computer modelling and data
          analysis.
        </p>
        <p>
          Having to occasionally say the first half of that sentence out loud is
          part of the reason why I decided a career in weapons wasn't for me.
        </p>
        <p>
          However, my time at QinetiQ gave me the opportunity to solidify my
          programming knowledge (more Python, R and shell) and gain invaluable
          client experience.
        </p>
      </JobSummary>

      <JobSummary
        ref={durhamRef}
        className={styles.jobSummary}
        company='Durham'
        icon={<Durham />}
        jobTitle='M.Sci Natural Sciences'
        startDate='2009-09-01T00:00:00.000Z'
        endDate='2013-09-01T00:00:00.000Z'
        website='https://www.durham.ac.uk'
      >
        <p>
          Physics and mathematics specialization. Everything from particle
          theory to general relativity, utilising some Python, R and a teeny
          tiny amount of C++. Like, barely any. Please don't ask me C++
          questions.
        </p>
        <p>
          My{' '}
          <a href='/assets/about/durham-final-year-project.pdf' target='_blank'>
            final year project
          </a>{' '}
          focused on inclusive B decays. I don't know what that means anymore.
        </p>
      </JobSummary>
    </Layout>
  )
}
