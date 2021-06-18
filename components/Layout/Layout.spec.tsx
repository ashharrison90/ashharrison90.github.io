import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
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
  let component: RenderResult

  describe('when hideHeaderUntilScroll is false', () => {
    beforeEach(async () => {
      component = render(<Layout>{mockChild}</Layout>)
      await screen.findByTestId(childId)
    })

    it('renders any children passed to it', async () => {
      const link = await screen.findByTestId(childId)
      expect(link).toBeInTheDocument()
    })

    it('renders the foreground content passed to it', async () => {
      component.rerender(
        <Layout foregroundContent={mockForeground}>{mockChild}</Layout>
      )
      const link = await screen.findByTestId(foregroundId)
      expect(link).toBeInTheDocument()
    })

    it('renders the background content passed to it', async () => {
      component.rerender(
        <Layout backgroundContent={mockBackground}>{mockChild}</Layout>
      )
      const link = await screen.findByTestId(backgroundId)
      expect(link).toBeInTheDocument()
    })

    it('renders a header', async () => {
      const header = await screen.findByRole('banner')
      expect(header).toBeInTheDocument()
      expect(header).toBeVisible()
    })

    it('renders a footer', async () => {
      const footer = await screen.findByRole('contentinfo')
      expect(footer).toBeInTheDocument()
      expect(footer).toBeVisible()
    })
  })

  describe('when scrolling', () => {
    describe('when hideHeaderUntilScroll is true', () => {
      beforeEach(async () => {
        render(<Layout hideHeaderUntilScroll>{mockChild}</Layout>)
        await screen.findByTestId(childId)
      })

      it('hides the header initially', async () => {
        const header = await screen.findByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('hideHeader')
      })

      it('shows the header once scrolled', async () => {
        let header = await screen.findByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('hideHeader')
        const scrollContainer = await screen.findByRole('main')
        fireEvent.scroll(scrollContainer, { target: { scrollTop: 100 } })
        header = await screen.findByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).not.toHaveClass('hideHeader')
      })
    })

    describe('when there is foregroundContent', () => {
      beforeEach(async () => {
        render(
          <Layout
            foregroundContent={mockForeground}
            backgroundContent={mockBackground}
          >
            {mockChild}
          </Layout>
        )
        await screen.findByTestId(childId)
      })

      // TODO: fix this test. it's just here for coverage at the moment...
      it('dims the background once scrolled', async () => {
        let backgroundOverlay = await screen.findByTestId('backgroundOverlay')
        expect(backgroundOverlay).toBeInTheDocument()
        expect(backgroundOverlay).toHaveStyle({
          backgroundColor: 'rgba(var(--hero-background-rgb), 0)',
        })
        const scrollContainer = await screen.findByRole('main')
        fireEvent.scroll(scrollContainer, { target: { scrollTop: 100 } })
        backgroundOverlay = await screen.findByTestId('backgroundOverlay')
        expect(backgroundOverlay).toBeInTheDocument()
        expect(backgroundOverlay).toHaveStyle({
          backgroundColor: 'rgba(var(--hero-background-rgb), 0)',
        })
      })
    })
  })
})
