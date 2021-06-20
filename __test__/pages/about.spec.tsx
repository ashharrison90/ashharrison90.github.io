import { render, screen } from '@testing-library/react'
import About, { getStaticProps } from '../../pages/about'
import { JobData } from '../../lib/jobsApi'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('About', () => {
  let jobs: JobData[]

  beforeEach(async () => {
    jobs = (await getStaticProps()).props.jobs
    render(<About jobs={jobs} />)
    await screen.findByRole('heading', { name: 'about' })
  })

  it('shows the title', async () => {
    const title = await screen.findByRole('heading', { name: 'about' })
    expect(title).toBeInTheDocument()
  })

  it('shows the header', async () => {
    const header = await screen.findByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('shows the footer', async () => {
    const footer = await screen.findByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('shows the company as a heading for each job', async () => {
    for (const job of jobs) {
      const company = await screen.findByRole('heading', { name: job.company })
      expect(company).toBeInTheDocument()
    }
  })

  it('shows the job title for each job', async () => {
    for (const job of jobs) {
      const jobTitle = await screen.findByText(job.jobTitle)
      expect(jobTitle).toBeInTheDocument()
    }
  })
})
