import { render, screen } from '@testing-library/react'
import SocialLink from './SocialLink'

describe('SocialLink', () => {
  const myMockClass = 'mockClass'
  const myMockLink = 'testLink'
  const myMockElement = <div data-testid='mockIcon' />

  it('sets the link correctly', () => {
    render(
      <SocialLink
        link={myMockLink}
        icon={myMockElement}
        className={myMockClass}
      />
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', myMockLink)
  })

  it('opens the link in a new tab', () => {
    render(
      <SocialLink
        link={myMockLink}
        icon={myMockElement}
        className={myMockClass}
      />
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('attaches any class passed to the link', () => {
    render(
      <SocialLink
        link={myMockLink}
        icon={myMockElement}
        className={myMockClass}
      />
    )
    const link = screen.getByRole('link')
    expect(link.className).toContain(myMockClass)
  })

  it('renders the icon', () => {
    render(
      <SocialLink
        link={myMockLink}
        icon={myMockElement}
        className={myMockClass}
      />
    )
    const icon = screen.getByTestId('mockIcon')
    expect(icon).toBeInTheDocument()
  })
})
