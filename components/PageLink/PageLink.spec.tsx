import { render, RenderResult, screen } from '@testing-library/react'
import PageLink from './PageLink'
import styles from './PageLink.module.scss'

describe('PageLink', () => {
  const myMockClass = 'mockClass'
  const myMockLink = 'mockLink'
  const myMockLabel = 'mockLabel'
  let component: RenderResult

  beforeEach(() => {
    component = render(
      <PageLink href={myMockLink} label={myMockLabel} className={myMockClass} />
    )
  })

  it('shows the correct label', () => {
    const link = screen.getByRole('link', { name: myMockLabel })
    expect(link).toBeInTheDocument()
  })

  it('sets the link correctly', () => {
    const link = screen.getByRole('link', { name: myMockLabel })
    expect(link).toHaveAttribute('href', `/${myMockLink}`)
  })

  it('attaches any class passed to the link', () => {
    const link = screen.getByRole('link', { name: myMockLabel })
    expect(link.className).toContain(myMockClass)
  })

  it('applies a class when active', () => {
    let link = screen.getByRole('link', { name: myMockLabel })
    expect(link.className).not.toContain(styles.activePage)
    component.rerender(
      <PageLink
        href={myMockLink}
        isActive
        label={myMockLabel}
        className={myMockClass}
      />
    )
    link = screen.getByRole('link', { name: myMockLabel })
    expect(link.className).toContain(styles.activePage)
  })
})
