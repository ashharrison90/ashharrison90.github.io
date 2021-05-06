import Head from 'next/head'
import { getAllJobs, JobData } from '../lib/jobsApi'
import Layout from '../components/Layout/Layout'
import styles from '../styles/About.module.scss'
import JobSummary from '../components/JobSummary/JobSummary'
import markdownToHtml from '../lib/markdownToHtml'
import Ibm from '../public/assets/about/ibm.svg'
import Qinetiq from '../public/assets/about/qinetiq.svg'
import Durham from '../public/assets/about/durham.svg'
import { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  ibm: <Ibm />,
  qinetiq: <Qinetiq />,
  durham: <Durham />
}

export interface Props {
  buildTimestamp: number,
  jobs: JobData[]
}

export default function About({ buildTimestamp, jobs }: Props) {
  return (
    <Layout buildTimestamp={buildTimestamp}>
      <Head>
        <title>About</title>
      </Head>

      <h1 className={styles.title}>
        about
      </h1>

      {
        jobs.map(job => (
          <JobSummary
            key={job.company}
            className={styles.jobSummary}
            company={job.company}
            jobTitle={job.jobTitle}
            icon={iconMap[job.icon]}
            startDate={job.startDate}
            endDate={job.endDate}
          >
            <div
              dangerouslySetInnerHTML={{ __html: job.content }}
            />
          </JobSummary>
        ))
      }
    </Layout>
  )
}

export async function getStaticProps () {
  const jobs = getAllJobs()
  const newJobs = await Promise.all(jobs.map(async job => ({
    ...job,
    content: await markdownToHtml(job.content)
  })))

  return {
    props: {
      buildTimestamp: Date.now(),
      jobs: newJobs
    }
  }
}

