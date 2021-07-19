import { render, screen } from '@testing-library/react'
import AboutLayout from './AboutLayout'

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

describe('AboutLayout', () => {
  const mockContent = 'mockContent'

  beforeEach(async () => {
    render(<AboutLayout>{mockContent}</AboutLayout>)
    await screen.findByText(mockContent)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays the content', () => {
    const date = screen.getByText(mockContent)
    expect(date).toBeInTheDocument()
  })
})
