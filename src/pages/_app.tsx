import type { AppProps } from 'next/app'

import '../styles/global.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
