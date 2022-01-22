import { AppProps } from 'next/app'
import { ThemeContextProvider } from '../context/ThemeContext/ThemeContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
