import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  const myMockClass = 'mockClass'
  const myMockLink = 'mockLink'
  const myMockLabel = 'mockLabel'

  describe('LinkButton', () => {
    beforeEach(() => {
      render(
        <Button href={myMockLink} className={myMockClass}>
          {myMockLabel}
        </Button>
      )
    })

    it('shows the correct label', () => {
      const button = screen.getByRole('link', { name: myMockLabel })
      expect(button).toBeInTheDocument()
    })

    it('sets the link correctly', () => {
      const button = screen.getByRole('link', { name: myMockLabel })
      expect(button).toHaveAttribute('href', `${myMockLink}`)
    })

    it('attaches any class passed to the button', () => {
      const button = screen.getByRole('link', { name: myMockLabel })
      expect(button.className).toContain(myMockClass)
    })
  })
})
