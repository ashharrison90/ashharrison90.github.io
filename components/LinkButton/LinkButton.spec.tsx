import { render, screen } from '@testing-library/react'
import LinkButton from './LinkButton'

describe('LinkButton', () => {
  const myMockClass = 'mockClass'
  const myMockLink = 'mockLink'
  const myMockLabel = 'mockLabel'

  beforeEach(() => {
    render(
      <LinkButton href={myMockLink} className={myMockClass}>
        {myMockLabel}
      </LinkButton>
    )
  })

  it('shows the correct label', () => {
    const button = screen.getByRole('button', { name: myMockLabel })
    expect(button).toBeInTheDocument()
  })

  it('sets the link correctly', () => {
    const button = screen.getByRole('button', { name: myMockLabel })
    expect(button).toHaveAttribute('href', `/${myMockLink}`)
  })

  it('attaches any class passed to the button', () => {
    const button = screen.getByRole('button', { name: myMockLabel })
    expect(button.className).toContain(myMockClass)
  })
})
