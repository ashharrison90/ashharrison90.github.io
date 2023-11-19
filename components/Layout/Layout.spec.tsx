import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Layout from './Layout'

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

describe('Layout', () => {
  const childId = 'childId'
  const heroId = 'heroId'
  const mockChild = <div data-testid={childId} />
  const mockHeroContent = <div data-testid={heroId} />
  const mockMetaTitle = 'mockTitle'
  const mockMetaDescription = 'mockDescription'
  let component: RenderResult

  describe('when hideHeaderUntilScroll is false', () => {
    beforeEach(async () => {
      component = render(
        <Layout metaTitle={mockMetaTitle} metaDescription={mockMetaDescription}>
          {mockChild}
        </Layout>,
      )

      // need to wait for the theme toggle to render
      const themeToggle = await screen.findByRole('checkbox', {
        name: 'Toggle theme',
      })
      expect(themeToggle).toBeInTheDocument()
    })

    it('renders any children passed to it', () => {
      const link = screen.getByTestId(childId)
      expect(link).toBeInTheDocument()
    })

    it('renders the hero content passed to it', () => {
      component.rerender(
        <Layout
          heroContent={mockHeroContent}
          metaTitle={mockMetaTitle}
          metaDescription={mockMetaDescription}
        >
          {mockChild}
        </Layout>,
      )
      const link = screen.getByTestId(heroId)
      expect(link).toBeInTheDocument()
    })

    it('renders a header', () => {
      const header = screen.getByRole('banner')
      expect(header).toBeInTheDocument()
      expect(header).toBeVisible()
    })

    it('hides the header once scrolled', () => {
      let header = screen.getByRole('banner')
      expect(header).toBeInTheDocument()
      expect(header).not.toHaveClass('hide')

      window.scrollY = 100
      fireEvent.scroll(document, {})

      header = screen.getByRole('banner')
      expect(header).toBeInTheDocument()
      expect(header).toHaveClass('hide')
    })

    it('renders a footer', () => {
      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
      expect(footer).toBeVisible()
    })
  })

  describe('when hideHeaderUntilScroll is true', () => {
    describe('when scrolling', () => {
      let user: ReturnType<typeof userEvent.setup>

      beforeEach(async () => {
        user = userEvent.setup()
        render(
          <Layout
            hideHeaderUntilScroll
            metaTitle={mockMetaTitle}
            metaDescription={mockMetaDescription}
          >
            {mockChild}
          </Layout>,
        )

        // need to wait for the theme toggle to render
        const themeToggle = await screen.findByRole('checkbox', {
          name: 'Toggle theme',
        })
        expect(themeToggle).toBeInTheDocument()
      })

      it('hides the header initially', () => {
        const header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('hide')
      })

      it('shows the header once scrolled', () => {
        let header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('hide')
        window.scrollY = 100
        fireEvent.scroll(document, {})
        header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).not.toHaveClass('hide')
      })

      it('shows the header if any element in the header receives focus', async () => {
        let header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('hide')
        await user.tab()
        header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).not.toHaveClass('hide')
      })
    })
  })
})
