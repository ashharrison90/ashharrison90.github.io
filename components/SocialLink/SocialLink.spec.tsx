import { render, screen } from '@testing-library/react'
import SocialLink from './SocialLink'

describe('SocialLink', () => {
  const myMockClass = 'mockClass'
  const myMockLabel = 'mockLabel'
  const myMockLink = 'testLink'
  const myMockType = 'mockType'

  beforeEach(() => {
    render(
      <SocialLink
        ariaLabel={myMockLabel}
        link={myMockLink}
        className={myMockClass}
        type={myMockType}
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
})
