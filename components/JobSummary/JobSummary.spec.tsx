import { render, screen } from '@testing-library/react'

import JobSummary from './JobSummary'

describe('JobSummary', () => {
  const mockCompany = 'mockCompany'
  const mockJobTitle = 'mockJobTitle'
  const iconTestId = 'mockIcon'
  const mockIcon = <div data-testid={iconTestId} />
  const mockStartDate = '2020-01-01T00:00:00.000Z'
  const mockEndDate = '2021-05-01T00:00:00.000Z'
  const mockWebsite = 'mockWebsite'
  const mockSummary = 'mockSummary'

  beforeEach(() => {
    render(
      <JobSummary
        company={mockCompany}
        icon={mockIcon}
        jobTitle={mockJobTitle}
        startDate={mockStartDate}
        endDate={mockEndDate}
        website={mockWebsite}
      >
        {mockSummary}
      </JobSummary>,
    )
  })

  it('displays the company name as an external link to the website', () => {
    const companyName = screen.getByRole('link')
    expect(companyName).toBeInTheDocument()
    expect(companyName.textContent).toEqual(mockCompany)
    expect(companyName).toHaveAttribute('href', mockWebsite)
    expect(companyName).toHaveAttribute('target', '_blank')
  })

  it('displays the job title', () => {
    const jobTitle = screen.getByText(mockJobTitle)
    expect(jobTitle).toBeInTheDocument()
  })

  it('displays the icon', () => {
    const icon = screen.getByTestId(iconTestId)
    expect(icon).toBeInTheDocument()
  })

  it('displays the start and end date', () => {
    const dateRange = screen.getByText('January 2020 - May 2021')
    expect(dateRange).toBeInTheDocument()
  })

  it('displays the summary', () => {
    const summary = screen.getByText(mockSummary)
    expect(summary).toBeInTheDocument()
  })

  it("displays 'Present' when there is no end date", () => {
    render(
      <JobSummary
        company={mockCompany}
        icon={mockIcon}
        jobTitle={mockJobTitle}
        startDate={mockStartDate}
        website={mockWebsite}
      >
        {mockSummary}
      </JobSummary>,
    )
    const dateRange = screen.getByText('January 2020 - Present')
    expect(dateRange).toBeInTheDocument()
  })
})
