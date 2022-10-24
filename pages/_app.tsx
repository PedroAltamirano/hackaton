import type { AppProps } from 'next/app'

import '../styles/theme.scss'
import '../styles/home.scss'
import '../styles/resume.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
