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
  const backgroundId = 'backgroundId'
  const foregroundId = 'foregroundId'
  const mockChild = <div data-testid={childId} />
  const mockBackground = <div data-testid={backgroundId} />
  const mockForeground = <div data-testid={foregroundId} />
  const mockMetaTitle = 'mockTitle'
  const mockMetaDescription = 'mockDescription'
  let component: RenderResult

  describe('when hideHeaderUntilScroll is false', () => {
    beforeEach(async () => {
      component = render(
        <Layout metaTitle={mockMetaTitle} metaDescription={mockMetaDescription}>
          {mockChild}
        </Layout>
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

    it('renders the foreground content passed to it', () => {
      component.rerender(
        <Layout
          foregroundContent={mockForeground}
          metaTitle={mockMetaTitle}
          metaDescription={mockMetaDescription}
        >
          {mockChild}
        </Layout>
      )
      const link = screen.getByTestId(foregroundId)
      expect(link).toBeInTheDocument()
    })

    it('renders the background content passed to it', () => {
      component.rerender(
        <Layout
          backgroundContent={mockBackground}
          metaTitle={mockMetaTitle}
          metaDescription={mockMetaDescription}
        >
          {mockChild}
        </Layout>
      )
      const link = screen.getByTestId(backgroundId)
      expect(link).toBeInTheDocument()
    })

    it('renders a header', () => {
      const header = screen.getByRole('banner')
      expect(header).toBeInTheDocument()
      expect(header).toBeVisible()
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
          </Layout>
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
        const scrollContainer = screen.getByRole('main')
        fireEvent.scroll(scrollContainer, { target: { scrollTop: 100 } })
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

  describe('when there is foregroundContent', () => {
    beforeEach(async () => {
      render(
        <Layout
          foregroundContent={mockForeground}
          backgroundContent={mockBackground}
          metaTitle={mockMetaTitle}
          metaDescription={mockMetaDescription}
        >
          {mockChild}
        </Layout>
      )

      // need to wait for the theme toggle to render
      const themeToggle = await screen.findByRole('checkbox', {
        name: 'Toggle theme',
      })
      expect(themeToggle).toBeInTheDocument()
    })

    it('dims the background once scrolled', () => {
      let backgroundOverlay = screen.getByTestId('backgroundOverlay')
      expect(backgroundOverlay).toBeInTheDocument()
      expect(backgroundOverlay).toHaveStyle({
        backgroundColor: 'rgba(var(--hero-background-rgb), 0)',
      })
      const scrollContainer = screen.getByRole('main')
      jest
        .spyOn(global.HTMLElement.prototype, 'getBoundingClientRect')
        .mockReturnValue({
          bottom: 0,
          height: 1000,
          left: 0,
          right: 0,
          toJSON: jest.fn(),
          top: 500,
          width: 0,
          x: 0,
          y: 0,
        })
      fireEvent.scroll(scrollContainer, { target: { scrollTop: 100 } })
      backgroundOverlay = screen.getByTestId('backgroundOverlay')
      expect(backgroundOverlay).toBeInTheDocument()
      expect(backgroundOverlay).toHaveStyle({
        backgroundColor: 'rgba(var(--hero-background-rgb), 0.5)',
      })
    })
  })
})
