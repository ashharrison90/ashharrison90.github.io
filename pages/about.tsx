import Head from 'next/head'
import Typewriter, { Options, TypewriterClass } from 'typewriter-effect'
import { getAllJobs, JobData } from '../lib/jobsApi'
import Layout from '../components/Layout/Layout'
import styles from '../styles/About.module.scss'
import JobSummary from '../components/JobSummary/JobSummary'
import markdownToHtml from '../lib/markdownToHtml'
import skills from '../public/assets/about/skills.json'
import Ibm from '../public/assets/about/ibm.svg'
import Qinetiq from '../public/assets/about/qinetiq.svg'
import Durham from '../public/assets/about/durham.svg'
import Grafana from '../public/assets/about/grafana.svg'
import { ReactNode } from 'react'

// Need to extend Typewriter's types until https://github.com/tameemsafi/typewriterjs/pull/106 is merged
const TypewriterWithComponent = Typewriter as React.FunctionComponent<{
  component?: string
  onInit?: (typewriter: TypewriterClass) => void
  options?: Partial<Options>
}>

const iconMap: Record<string, ReactNode> = {
  durham: <Durham />,
  grafana: <Grafana />,
  ibm: <Ibm />,
  qinetiq: <Qinetiq />,
}

export interface Props {
  jobs: JobData[]
}

export default function About({ jobs }: Props) {
  return (
    <Layout>
      <Head>
        <title>about</title>
        <meta name='description' content='All about me!' />
      </Head>

      <h1 className={styles.title}>about</h1>

      <p>
        I specialise in all things frontend, with a focus on{' '}
        <strong>clean</strong>, <strong>testable</strong> and{' '}
        <strong>maintainable</strong> code.
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
      <q>
        Find a job you enjoy doing, and you will never have to work a day in
        your life.
      </q>
      <cite> - Mark Twain</cite>
      <p>But did Mark Twain ever develop software? No. Stupid.</p>
      {jobs.map((job) => (
        <JobSummary
          key={job.company}
          className={styles.jobSummary}
          company={job.company}
          jobTitle={job.jobTitle}
          icon={iconMap[job.icon]}
          startDate={job.startDate}
          endDate={job.endDate}
          website={job.website}
        >
          <div dangerouslySetInnerHTML={{ __html: job.content }} />
        </JobSummary>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const jobs = getAllJobs()
  const newJobs = await Promise.all(
    jobs.map(async (job) => ({
      ...job,
      content: await markdownToHtml(job.content),
    }))
  )

  return {
    props: {
      jobs: newJobs,
    },
  }
}
