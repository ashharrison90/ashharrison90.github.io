import { Browser, Page } from 'playwright'

declare global {
  const page: Page
  const browser: Browser
  const browserName: string
}
declare module '*.svg' {
  const content: any
  export default content
}

declare module 'highlight.js/lib/core'
declare module 'highlight.js/lib/languages/javascript'
declare module 'highlight.js/lib/languages/typescript'
declare module 'highlight.js/lib/languages/python'
declare module 'highlight.js/lib/languages/scss'
