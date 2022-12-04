import type { AppProps } from 'next/app'

import { Grommet } from 'grommet'
import { RecoilRoot } from "recoil";

import '../styles/main.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Grommet plain>
        <Component {...pageProps} />
      </Grommet>
    </RecoilRoot>
  )
}
