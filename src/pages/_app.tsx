import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'

import '../styles/theme.scss'

config.autoAddCss = false

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
