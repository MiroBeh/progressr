import '../styles/main.css'
import type { AppProps } from 'next/app'
import { Grommet } from 'grommet'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Grommet plain>
      <Component {...pageProps} />
    </Grommet>
  )
}
