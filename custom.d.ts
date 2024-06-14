declare global {
  import { Browser, Page } from 'playwright'
  const page: Page
  const browser: Browser
  const browserName: string
}
