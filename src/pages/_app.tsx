import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyle } from '../shared/styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return <><Global styles={globalStyle} /><Component {...pageProps} /></>
}

export default MyApp
