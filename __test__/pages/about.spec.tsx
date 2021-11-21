import { render, screen } from '@testing-library/react'
import About from '../../pages/about'

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
  let mockIntersectionObserver: jest.Mock<any, any>

  beforeEach(async () => {
    // IntersectionObserver isn't available in test environment
    mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
    render(<About />)
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
    const companies = ['Grafana', 'IBM', 'QinetiQ', 'Durham']
    for (const company of companies) {
      const companyName = await screen.findByRole('heading', { name: company })
      expect(companyName).toBeInTheDocument()
    }
  })

  it("hides the job summaries until they're scrolled into view", async () => {
    const jobSummaries = await screen.findAllByTestId('job-summary')
    jobSummaries.forEach((jobSummary) => {
      expect(jobSummary).not.toHaveStyle('opacity: 1')
      expect(jobSummary).not.toHaveStyle('transform: none')
    })

    // Make the first job summary intersect
    mockIntersectionObserver.mock.calls[0][0]([
      {
        target: jobSummaries[0],
        isIntersecting: true,
      },
    ])

    expect(jobSummaries[0]).toHaveStyle('opacity: 1')
    expect(jobSummaries[0]).toHaveStyle('transform: none')
  })

  it("leaves the job summaries visible once if they're then scrolled out of view", async () => {
    const jobSummaries = await screen.findAllByTestId('job-summary')
    jobSummaries.forEach((jobSummary) => {
      expect(jobSummary).not.toHaveStyle('opacity: 1')
      expect(jobSummary).not.toHaveStyle('transform: none')
    })

    // Make the first job summary intersect
    mockIntersectionObserver.mock.calls[0][0]([
      {
        target: jobSummaries[0],
        isIntersecting: true,
      },
    ])

    expect(jobSummaries[0]).toHaveStyle('opacity: 1')
    expect(jobSummaries[0]).toHaveStyle('transform: none')

    // Make the first job summary not intersect anymore
    mockIntersectionObserver.mock.calls[0][0]([
      {
        target: jobSummaries[0],
        isIntersecting: false,
      },
    ])

    expect(jobSummaries[0]).toHaveStyle('opacity: 1')
    expect(jobSummaries[0]).toHaveStyle('transform: none')
  })
})
