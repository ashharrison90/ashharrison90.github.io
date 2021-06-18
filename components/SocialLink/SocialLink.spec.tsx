import { render, screen } from '@testing-library/react'
import SocialLink from './SocialLink'

describe('SocialLink', () => {
  const myMockClass = 'mockClass'
  const myMockLabel = 'mockLabel'
  const myMockLink = 'testLink'
  const myMockElement = <div data-testid='mockIcon' />

  beforeEach(() => {
    render(
      <SocialLink
        label={myMockLabel}
        link={myMockLink}
        icon={myMockElement}
        className={myMockClass}
      />
    )
  })

  it('sets the link correctly', () => {
    const link = screen.getByRole('link', { name: myMockLabel })
    expect(link).toHaveAttribute('href', myMockLink)
  })

  it('opens the link in a new tab', () => {
    const link = screen.getByRole('link', { name: myMockLabel })
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('attaches any class passed to the link', () => {
    const link = screen.getByRole('link', { name: myMockLabel })
    expect(link.className).toContain(myMockClass)
  })

  it('renders the icon', () => {
    const icon = screen.getByTestId('mockIcon')
    expect(icon).toBeInTheDocument()
  })
})
