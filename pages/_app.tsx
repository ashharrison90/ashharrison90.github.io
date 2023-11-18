import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/globals.scss'
import { useEffect } from 'react'

// Turn off SSR for the theme context so we can access window immediately
const ThemeContextProvider = dynamic(
  () => import('../context/ThemeContext/ThemeContext'),
  {
    ssr: false,
  },
)

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
