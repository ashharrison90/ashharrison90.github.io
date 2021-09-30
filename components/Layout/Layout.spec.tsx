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
      await screen.findByTestId(childId)
    })

    it('renders any children passed to it', async () => {
      const link = await screen.findByTestId(childId)
      expect(link).toBeInTheDocument()
    })

    it('renders the foreground content passed to it', async () => {
      component.rerender(
        <Layout
          foregroundContent={mockForeground}
          metaTitle={mockMetaTitle}
          metaDescription={mockMetaDescription}
        >
          {mockChild}
        </Layout>
      )
      const link = await screen.findByTestId(foregroundId)
      expect(link).toBeInTheDocument()
    })

    it('renders the background content passed to it', async () => {
      component.rerender(
        <Layout
          backgroundContent={mockBackground}
          metaTitle={mockMetaTitle}
          metaDescription={mockMetaDescription}
        >
          {mockChild}
        </Layout>
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

  describe('when hideHeaderUntilScroll is true', () => {
    describe('when scrolling', () => {
      beforeEach(async () => {
        render(
          <Layout
            hideHeaderUntilScroll
            metaTitle={mockMetaTitle}
            metaDescription={mockMetaDescription}
          >
            {mockChild}
          </Layout>
        )
        await screen.findByTestId(childId)
      })

      it('hides the header initially', async () => {
        const header = await screen.findByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('hide')
      })

      it('shows the header once scrolled', async () => {
        let header = await screen.findByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('hide')
        const scrollContainer = await screen.findByRole('main')
        fireEvent.scroll(scrollContainer, { target: { scrollTop: 100 } })
        header = await screen.findByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).not.toHaveClass('hide')
      })

      it('shows the header if any element in the header receives focus', async () => {
        let header = await screen.findByRole('banner')
        expect(header).toBeInTheDocument()
        expect(header).toHaveClass('hide')
        userEvent.tab()
        header = await screen.findByRole('banner')
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
      await screen.findByTestId(childId)
    })

    it('dims the background once scrolled', async () => {
      let backgroundOverlay = await screen.findByTestId('backgroundOverlay')
      expect(backgroundOverlay).toBeInTheDocument()
      expect(backgroundOverlay).toHaveStyle({
        backgroundColor: 'rgba(var(--hero-background-rgb), 0)',
      })
      const scrollContainer = await screen.findByRole('main')
      jest
        .spyOn(global.HTMLElement.prototype, 'getBoundingClientRect')
        .mockReturnValue({
          bottom: 0,
          height: 1000,
          left: 0,
          right: 0,
          toJSON: () => {},
          top: 500,
          width: 0,
          x: 0,
          y: 0,
        })
      fireEvent.scroll(scrollContainer, { target: { scrollTop: 100 } })
      backgroundOverlay = await screen.findByTestId('backgroundOverlay')
      expect(backgroundOverlay).toBeInTheDocument()
      expect(backgroundOverlay).toHaveStyle({
        backgroundColor: 'rgba(var(--hero-background-rgb), 0.5)',
      })
    })
  })
})
